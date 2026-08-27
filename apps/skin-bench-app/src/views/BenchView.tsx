import { useState } from 'react'
import { BENCHES } from '@/data/bench'
import { matchesQuery, slotsOf, price, money, SCREEN_LABEL } from '@/lib/bench'
import { StatusPill, RolePills, PriceCell, QuarterCell, ViewHead, SectionRule, NoteCard, Panel, Empty } from '@/components/bits'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'

const ROLE_FILTERS: [string, string][] = [
  ['all', 'All roles'],
  ['L', 'Slot leaders'],
  ['C', 'Owned now'],
  ['B', 'Bench'],
]
const SCREEN_FILTERS: [string, string][] = [
  ['all', 'All screens'],
  ['g', 'Clear'],
  ['y', 'Parent flag'],
  ['w', 'Closed'],
  ['r', 'Excluded'],
]

function Chip({ on, onClick, children }: { on: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'shrink-0 whitespace-nowrap rounded-full border px-3 py-1.5 text-[12.5px] font-semibold transition-colors',
        on
          ? 'border-signal/50 bg-signal-wash text-signal-ink'
          : 'border-hairline bg-panel text-dim hover:border-hairline2 hover:text-ink'
      )}
    >
      {children}
    </button>
  )
}

function CoverageBar({ rows }: { rows: string[][] }) {
  const counts: Record<string, number> = {}
  rows.forEach((r) => (counts[r[3]] = (counts[r[3]] ?? 0) + 1))
  const total = rows.length || 1
  const segs: [string, string][] = [
    ['g', 'bg-clear'],
    ['y', 'bg-flag'],
    ['w', 'bg-closed'],
    ['o', 'bg-contro'],
    ['r', 'bg-excluded'],
    ['m', 'bg-closed'],
  ]
  const live = segs.filter(([k]) => counts[k])
  return (
    <Panel className="mb-4 px-4 py-3">
      <div className="flex items-baseline justify-between">
        <span className="font-display text-[10.5px] font-bold uppercase tracking-[0.14em] text-faint">
          Litigation screen coverage
        </span>
        <span className="font-mono text-[11px] text-faint">{rows.length} items</span>
      </div>
      <div className="my-2.5 flex h-2 overflow-hidden rounded-sm bg-raised">
        {live.map(([k, c]) => (
          <span key={k} className={c} style={{ width: `${(counts[k] / total) * 100}%` }} />
        ))}
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11.5px] text-dim">
        {live.map(([k, c]) => (
          <span key={k} className="inline-flex items-center gap-1.5">
            <span className={cn('h-2 w-2 rounded-sm', c)} />
            {SCREEN_LABEL[k]} <b className="font-semibold tabular-nums text-ink">{counts[k]}</b>
          </span>
        ))}
      </div>
    </Panel>
  )
}

function ProductCard({ row }: { row: string[] }) {
  const [open, setOpen] = useState(false)
  const p = price(row[0])
  return (
    <button
      onClick={() => setOpen((o) => !o)}
      className={cn(
        'w-full border bg-panel px-4 py-3 text-left transition-colors',
        open ? 'border-signal/45' : 'border-hairline'
      )}
    >
      <div className="flex items-start gap-2.5">
        <span className="flex-1 text-[14px] font-semibold leading-snug">{row[0]}</span>
        <StatusPill code={row[3]} />
      </div>
      <div className="mt-2 flex flex-wrap items-center gap-2">
        <RolePills roles={row[2]} />
        <span className="text-[11px] font-semibold text-faint">{row[4]}</span>
      </div>
      {p && p[0] && (
        <div className="mt-2.5 flex flex-wrap items-baseline gap-x-4 gap-y-1 border-t border-dashed border-hairline pt-2.5">
          <span>
            <span className="mr-1.5 text-[10px] font-bold uppercase tracking-wider text-faint">Now</span>
            <span className="font-display text-[15px] font-bold tabular-nums">{money(p[0])}</span>
            <span className="ml-1 text-[10.5px] text-faint">{p[2]}</span>
          </span>
          {!!p[4] && (
            <span>
              <span className="mr-1.5 text-[10px] font-bold uppercase tracking-wider text-faint">Quarter</span>
              <span className="font-display text-[15px] font-bold tabular-nums text-signal-ink">{money(p[5])}</span>
              <span
                className={cn(
                  'ml-1.5 rounded-sm px-1.5 py-px text-[9.5px] font-extrabold uppercase tracking-wider',
                  p[4] <= 1 ? 'bg-clear-wash text-clear' : 'bg-flag-wash text-flag'
                )}
              >
                {p[4] <= 1 ? '1 buy' : `${p[4]}×`}
              </span>
            </span>
          )}
          <ChevronDown
            className={cn('ml-auto h-4 w-4 shrink-0 text-faint transition-transform', open && 'rotate-180')}
          />
        </div>
      )}
      <div className={cn('grid transition-all duration-300', open ? 'mt-2.5 grid-rows-[1fr]' : 'grid-rows-[0fr]')}>
        <div className="overflow-hidden">
          <p className="text-[12.5px] leading-relaxed text-dim">{row[5]}</p>
          {p && p[6] && (
            <p className="mt-2 text-[12.5px] leading-relaxed text-dim">
              <b className="font-semibold text-signal-ink">Quarter buy: </b>
              {p[6]}
            </p>
          )}
        </div>
      </div>
    </button>
  )
}

export default function BenchView({ benchKey, query, phone }: { benchKey: string; query: string; phone: boolean }) {
  const [role, setRole] = useState('all')
  const [screen, setScreen] = useState('all')
  const B = BENCHES[benchKey]
  const q = query.toLowerCase()

  const rows = B.rows.filter(
    (r) => (role === 'all' || r[2].includes(role)) && (screen === 'all' || r[3] === screen) && matchesQuery(r, q)
  )

  return (
    <div className="view-in">
      <ViewHead eyebrow="Sephora & Ulta Variety Bench" title={`${B.icon} ${B.label}`} sub={B.tag} />
      <CoverageBar rows={B.rows} />

      <div className={cn('mb-1 flex gap-2 py-1', phone ? '-mx-4 overflow-x-auto px-4 no-scrollbar' : 'flex-wrap')}>
        {ROLE_FILTERS.map(([k, l]) => (
          <Chip key={k} on={role === k} onClick={() => setRole(k)}>
            {l}
          </Chip>
        ))}
        <span className="w-px shrink-0 self-stretch bg-hairline" />
        {SCREEN_FILTERS.map(([k, l]) => (
          <Chip key={k} on={screen === k} onClick={() => setScreen(k)}>
            {l}
          </Chip>
        ))}
      </div>

      {rows.length === 0 && <Empty>Nothing matches — clear a filter or the search.</Empty>}

      {slotsOf(B.rows).map((slot) => {
        const sr = rows.filter((r) => r[1] === slot)
        if (!sr.length) return null
        return (
          <section key={slot}>
            <SectionRule label={slot} count={sr.length} />
            {phone ? (
              <div className="flex flex-col gap-2">
                {sr.map((r) => (
                  <ProductCard key={r[0]} row={r} />
                ))}
              </div>
            ) : (
              <Panel className="overflow-hidden">
                <div className="overflow-x-auto thin-scroll">
                  <table className="w-full min-w-[900px] border-collapse text-[13.5px]">
                    <thead>
                      <tr className="bg-raised/60">
                        {['Product', 'Role', 'Screen', 'Price now', 'Per quarter', 'Why it fits'].map((h) => (
                          <th
                            key={h}
                            className="whitespace-nowrap border-b border-hairline px-3.5 py-2.5 text-left font-display text-[10.5px] font-bold uppercase tracking-[0.12em] text-faint"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {sr.map((r) => (
                        <tr key={r[0]} className="border-b border-hairline last:border-0 hover:bg-raised/40">
                          <td className="max-w-[290px] px-3.5 py-3 align-top font-semibold">
                            {r[0]}
                            <span className="mt-0.5 block text-[10.5px] font-normal text-faint">{r[4]}</span>
                          </td>
                          <td className="whitespace-nowrap px-3.5 py-3 align-top">
                            <RolePills roles={r[2]} />
                          </td>
                          <td className="px-3.5 py-3 align-top">
                            <StatusPill code={r[3]} />
                          </td>
                          <td className="px-3.5 py-3 align-top">
                            <PriceCell name={r[0]} />
                          </td>
                          <td className="px-3.5 py-3 align-top">
                            <QuarterCell name={r[0]} />
                          </td>
                          <td className="min-w-[220px] max-w-[380px] px-3.5 py-3 align-top text-[12.5px] text-dim">
                            {r[5]}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Panel>
            )}
          </section>
        )
      })}

      {B.note && (
        <div className="mt-6">
          <NoteCard>
            <b className="font-semibold text-ink">Bench notes. </b>
            {B.note}
          </NoteCard>
        </div>
      )}
    </div>
  )
}

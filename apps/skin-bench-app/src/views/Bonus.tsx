import { useState } from 'react'
import { BONUS } from '@/data/bench'
import { ViewHead, SectionRule, NoteCard, Panel, Empty } from '@/components/bits'
import { cn } from '@/lib/utils'

const LIGHT = {
  g: { label: 'Green', tone: 'text-clear bg-clear-wash', cond: 'Fine print', box: 'bg-clear-wash/60 text-clear' },
  y: { label: 'Amber', tone: 'text-flag bg-flag-wash', cond: 'The condition', box: 'bg-flag-wash/60 text-flag' },
  r: { label: 'Red', tone: 'text-excluded bg-excluded-wash', cond: 'Why not', box: 'bg-excluded-wash/60 text-excluded' },
} as const

const FILTERS: [string, string][] = [
  ['all', 'All lights'],
  ['g', 'Green — yes freely'],
  ['y', 'Amber — one condition'],
  ['r', 'Red — no, even as a gift'],
]

export default function Bonus({ query, phone }: { query: string; phone: boolean }) {
  const [light, setLight] = useState('all')
  const q = query.toLowerCase()

  const rows = BONUS.filter(
    (r) => (light === 'all' || r[2] === light) && (!q || (r[0] + r[1] + r[7] + r[8]).toLowerCase().includes(q))
  )
  const cats = [...new Set(rows.map((r) => r[1]))]
  const counts = { g: 0, y: 0, r: 0 } as Record<string, number>
  BONUS.forEach((r) => (counts[r[2]] += 1))

  return (
    <div className="view-in">
      <ViewHead
        eyebrow='The "sure, why not" list'
        title="The Bonus Shelf"
        sub="Cosmetic-tier: changes how skin looks today, not what it is in six months. The effect is real — just borrowed, not built. The Core Five compounds; this resets daily."
      />

      <div className={cn('mb-4 grid gap-2.5', phone ? 'grid-cols-2' : 'grid-cols-4')}>
        {(['g', 'y', 'r'] as const).map((k) => (
          <Panel key={k} className="px-4 py-3.5">
            <span
              className={cn(
                'inline-flex items-center gap-1.5 rounded-full px-2 py-[3px] text-[11px] font-semibold',
                LIGHT[k].tone
              )}
            >
              <span className="h-[5px] w-[5px] rounded-full bg-current" />
              {LIGHT[k].label}
            </span>
            <div className="mt-1.5 font-display text-[23px] font-bold tabular-nums leading-none">{counts[k]}</div>
          </Panel>
        ))}
        <Panel className="px-4 py-3.5">
          <div className="text-[11px] font-semibold text-dim">Budget cap</div>
          <div className="mt-0.5 font-display text-[23px] font-bold tabular-nums leading-none">
            $25<span className="text-[13px] font-medium text-faint"> /qtr</span>
          </div>
          <div className="mt-1.5 text-[11px] text-faint">~8% of the working stack</div>
        </Panel>
      </div>

      <NoteCard tone="flag">
        <b className="font-semibold text-ink">The guardrail. </b>
        The shelf gets attention only when the Core Five ran clean for the last 7 days. Skipped SPF at stops this week?
        The shelf is closed — not as punishment, as accurate accounting of where the return actually is. The cap exists
        so the Bonus Shelf never eats the sunscreen budget: PDRN cream versus a third tube of Anua, the Anua wins every
        time.
      </NoteCard>

      <div className={cn('mt-4 flex gap-2 py-1', phone ? '-mx-4 overflow-x-auto px-4 no-scrollbar' : 'flex-wrap')}>
        {FILTERS.map(([k, l]) => (
          <button
            key={k}
            onClick={() => setLight(k)}
            className={cn(
              'shrink-0 whitespace-nowrap rounded-full border px-3 py-1.5 text-[12.5px] font-semibold transition-colors',
              light === k
                ? 'border-signal/50 bg-signal-wash text-signal-ink'
                : 'border-hairline bg-panel text-dim hover:border-hairline2 hover:text-ink'
            )}
          >
            {l}
          </button>
        ))}
      </div>

      {rows.length === 0 && <Empty>Nothing matches.</Empty>}

      {cats.map((cat) => {
        const cr = rows.filter((r) => r[1] === cat)
        return (
          <section key={cat}>
            <SectionRule label={cat} count={cr.length} />
            <div className={cn('grid gap-2.5', phone ? 'grid-cols-1' : 'grid-cols-[repeat(auto-fill,minmax(340px,1fr))]')}>
              {cr.map((r) => {
                const L = LIGHT[r[2] as keyof typeof LIGHT]
                return (
                  <Panel key={r[0]} className="flex flex-col gap-2.5 p-4">
                    <div className="flex items-start gap-2.5">
                      <b className="flex-1 text-[14px] font-semibold leading-snug">{r[0]}</b>
                      <span
                        className={cn(
                          'inline-flex shrink-0 items-center gap-1.5 rounded-full px-2 py-[3px] text-[11px] font-semibold',
                          L.tone
                        )}
                      >
                        <span className="h-[5px] w-[5px] rounded-full bg-current" />
                        {L.label}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="rounded-full border border-hairline2 px-2 py-[2px] text-[10.5px] font-semibold text-dim">
                        Lasts: {r[3]}
                      </span>
                      <span className="rounded-full border border-hairline2 px-2 py-[2px] text-[10.5px] font-semibold text-dim">
                        {r[4]}
                      </span>
                    </div>
                    <p className="text-[12.5px] leading-relaxed text-dim">{r[7]}</p>
                    <div className={cn('px-3 py-2.5 text-[12.5px] leading-relaxed', L.box)}>
                      <b className="mb-0.5 block text-[10.5px] font-bold uppercase tracking-wider">{L.cond}</b>
                      {r[8]}
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-1 text-[11px] text-faint">
                      <span>{r[6]}</span>
                      <span className="font-mono font-semibold text-dim">{r[5]}</span>
                    </div>
                  </Panel>
                )
              })}
            </div>
          </section>
        )
      })}

      <div className="mt-6">
        <NoteCard>
          <b className="font-semibold text-ink">The rules. </b>
          Nothing here ever displaces a Core Five slot · cosmetic-only items enter freely, tonight · anything with an
          active follows the 4-week rule · nothing new within 2 weeks either side of a procedure · above the jaw,
          fragrance-free still wins · red stays red even as a gift — graciously received, quietly never used.
        </NoteCard>
      </div>
    </div>
  )
}

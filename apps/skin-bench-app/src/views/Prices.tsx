import { PRICE_META, PRICE_LOG, BENCHES } from '@/data/bench'
import { benchTotals, money, cleanName } from '@/lib/bench'
import { PriceCell, ViewHead, SectionRule, NoteCard, Panel } from '@/components/bits'
import { cn } from '@/lib/utils'

function Stat({ k, v, n }: { k: string; v: string | number; n: string }) {
  return (
    <Panel className="px-4 py-3.5">
      <div className="text-[11px] font-semibold text-dim">{k}</div>
      <div className="mt-0.5 font-display text-[23px] font-bold tabular-nums leading-none">{v}</div>
      <div className="mt-1.5 text-[11px] text-faint">{n}</div>
    </Panel>
  )
}

export default function Prices({ query, phone }: { query: string; phone: boolean }) {
  const q = query.toLowerCase()
  const { items, owned, ownedTotal, leaderTotal, verified, onSale, bulk } = benchTotals()
  const unpriced = Object.values(BENCHES)
    .flatMap((b) => b.rows)
    .filter((r) => !r[0].startsWith('Skip:') && !items.some((i) => i.name === r[0])).length

  const shown = q ? items.filter((i) => (i.name + i.bench + i.slot).toLowerCase().includes(q)) : items
  const sorted = [...shown].sort((a, b) => b.p[5] - a.p[5])

  return (
    <div className="view-in">
      <ViewHead
        eyebrow="Live pricing"
        title="Price Watch"
        sub="What every bottle costs today, and what it costs to hold that slot for a full 90 days. A quarter buy is one purchase that lasts the quarter — not three months' worth bought at once."
      />

      <Panel className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1.5 px-4 py-3">
        <span className="live-dot h-[7px] w-[7px] shrink-0 rounded-full bg-clear" />
        <b className="font-display text-[13px] font-semibold">Prices verified {PRICE_META.checked}</b>
        <span className="text-[12px] text-dim">
          · {verified} of {items.length} confirmed at the retailer this run
          {unpriced > 0 && ` · ${unpriced} row${unpriced === 1 ? '' : 's'} still queued`}
        </span>
        <span className={cn('font-mono text-[11px] tracking-wide text-faint', phone ? 'w-full' : 'ml-auto')}>
          AUTO-REFRESH · WEEKLY
        </span>
      </Panel>

      <div className={cn('mb-5 grid gap-2.5', phone ? 'grid-cols-2' : 'grid-cols-4')}>
        <Stat k="Your current stack" v={money(ownedTotal)} n={`per quarter · ${owned.length} products you own`} />
        <Stat k="All slot leaders" v={money(leaderTotal)} n="per quarter if you upgraded every slot" />
        <Stat k="On sale right now" v={onSale.length} n="below list at the retailer" />
        <Stat k="Bulk wins" v={bulk.length} n="a bigger SKU beats repeat buys" />
      </div>

      <div className="border border-clear/30 bg-clear-wash/40 px-4 py-4">
        <h3 className="font-display text-[14.5px] font-semibold">Buy these in the bigger size</h3>
        <p className="mt-1 text-[12.5px] text-dim">
          Each of these has a larger SKU that covers the whole quarter in one purchase — fewer reorders from the road,
          and usually cheaper per unit.
        </p>
        <div className="mt-3 flex flex-col gap-1.5">
          {bulk.slice(0, 10).map((i) => (
            <div
              key={i.name}
              className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5 bg-panel/70 px-3 py-2 text-[12.5px] text-dim"
            >
              <b className="font-semibold text-ink">{cleanName(i.name)}</b>
              <span className="flex-1">{i.p[6]}</span>
              <span className="font-display font-bold text-clear">{money(i.p[5])}/qtr</span>
            </div>
          ))}
        </div>
      </div>

      <SectionRule label="Your current stack — the quarterly restock" count={money(ownedTotal)} />
      <Panel>
        {[...owned]
          .sort((a, b) => b.p[5] - a.p[5])
          .map((i) => (
            <div key={i.name} className="flex items-center gap-3 border-b border-hairline px-3.5 py-2.5 last:border-0">
              <div className="min-w-0 flex-1">
                <div className="truncate text-[13.5px] font-medium">{cleanName(i.name)}</div>
                <div className="mt-px truncate text-[11px] text-faint">
                  {i.slot} · {i.p[2]} · {i.p[3]}
                </div>
              </div>
              <div className="whitespace-nowrap font-mono text-[12px] text-dim">
                {i.p[4] === 0.5 ? '½ box' : `${i.p[4]}×`}
              </div>
              <div className="whitespace-nowrap font-display text-[14px] font-bold tabular-nums">{money(i.p[5])}</div>
            </div>
          ))}
        <div className="flex items-center gap-3 bg-signal-wash/60 px-3.5 py-2.5">
          <div className="flex-1 text-[13.5px] font-bold">Quarterly total, current stack</div>
          <div className="font-display text-[15px] font-bold tabular-nums text-signal-ink">{money(ownedTotal)}</div>
        </div>
      </Panel>

      <SectionRule label="Price changes since last check" />
      {PRICE_LOG.length ? (
        <Panel>
          {PRICE_LOG.map((l, n) => (
            <div key={n} className="flex items-center gap-3 border-b border-hairline px-3.5 py-2.5 last:border-0">
              <div className="min-w-0 flex-1">
                <div className="truncate text-[13.5px] font-medium">{l.name}</div>
                <div className="text-[11px] text-faint">{l.date}</div>
              </div>
              <div
                className={cn(
                  'whitespace-nowrap font-display text-[13.5px] font-bold tabular-nums',
                  l.to > l.from ? 'text-excluded' : 'text-clear'
                )}
              >
                {l.to > l.from ? '▲' : '▼'} {money(l.from)} → {money(l.to)}
              </div>
            </div>
          ))}
        </Panel>
      ) : (
        <NoteCard>
          This is the first price snapshot, so there is nothing to compare against yet. The weekly refresh re-checks
          every retailer page and records each move here with a ▲ or ▼ against the previous figure — so a sunscreen
          creeping up, or a sale landing on the Skinfix cream, surfaces without you going looking.
        </NoteCard>
      )}

      <SectionRule label="Every priced item, dearest quarter first" count={sorted.length} />
      <Panel className="overflow-hidden">
        <div className="overflow-x-auto thin-scroll">
          <table className="w-full min-w-[860px] border-collapse text-[13.5px]">
            <thead>
              <tr className="bg-raised/60">
                {['Product', 'Bench', 'Price now', 'Per quarter', 'The quarter buy'].map((h) => (
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
              {sorted.map((i) => (
                <tr key={i.name} className="border-b border-hairline last:border-0 hover:bg-raised/40">
                  <td className="max-w-[280px] px-3.5 py-3 align-top font-semibold">{i.name}</td>
                  <td className="whitespace-nowrap px-3.5 py-3 align-top text-[12.5px] text-dim">{i.bench}</td>
                  <td className="px-3.5 py-3 align-top">
                    <PriceCell name={i.name} />
                  </td>
                  <td className="whitespace-nowrap px-3.5 py-3 align-top">
                    <span className="font-display text-[14px] font-bold tabular-nums text-signal-ink">
                      {money(i.p[5])}
                    </span>
                    <span className="mt-0.5 block text-[10.5px] text-faint">
                      {i.p[4] === 0.5 ? '½ box' : `${i.p[4]} × ${i.p[2]}`}
                    </span>
                  </td>
                  <td className="min-w-[220px] max-w-[360px] px-3.5 py-3 align-top text-[12.5px] text-dim">{i.p[6]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>

      <div className="mt-5">
        <NoteCard>
          <b className="font-semibold text-ink">How to read a quarter price. </b>
          It is the real cost of keeping that slot filled for 90 days at your usage — SPF reapplied at every
          three-hour stop, actives PM-only, hair on the Nizoral rotation. A <b className="text-clear">1 buy</b> badge
          means one bottle does the whole quarter. A <b className="text-flag">3×</b> badge means you reorder
          mid-quarter, so take the bigger SKU when the note says one exists. Dotted prices are list prices carried from
          the brand's own page rather than re-checked at the retailer; the weekly refresh promotes them as it confirms
          them.
        </NoteCard>
      </div>
    </div>
  )
}

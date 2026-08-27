import { BENCHES, BONUS, LIT, PRICE_META, SCENT } from '@/data/bench'
import { benchTotals, money } from '@/lib/bench'
import { SectionRule, NoteCard, Panel } from '@/components/bits'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'

/* A horizontal gauge reads like an instrument, not a dashboard donut. */
function Gauge({ pct, label, value, tone }: { pct: number; label: string; value: string; tone: string }) {
  return (
    <div className="flex-1">
      <div className="flex items-baseline justify-between gap-2">
        <span className="text-[11.5px] font-semibold text-dim">{label}</span>
        <span className="font-display text-[15px] font-bold tabular-nums">{value}</span>
      </div>
      <div className="mt-1.5 h-1.5 overflow-hidden rounded-sm bg-raised">
        <span className={cn('block h-full transition-[width] duration-700', tone)} style={{ width: `${pct * 100}%` }} />
      </div>
    </div>
  )
}

function Stat({ k, v, n }: { k: string; v: string; n?: string }) {
  return (
    <Panel className="px-4 py-3">
      <div className="text-[11px] font-semibold text-dim">{k}</div>
      <div className="mt-0.5 font-display text-[21px] font-bold tabular-nums leading-none">
        {v}
        {n && <span className="ml-1 text-[12px] font-medium text-faint">{n}</span>}
      </div>
    </Panel>
  )
}

const RULES: [string, string][] = [
  ['One swap at a time, 4+ weeks apart.', 'Same rule as procedures, same reason: a reaction has to be traceable.'],
  ['8 weeks to earn a seat.', 'A product goes permanent only after 8 weeks with no new pigment, no irritation, no flaking.'],
  ['Fragrance-free above the jaw.', 'Non-negotiable. On this tone, irritation is how pigment starts.'],
  [
    'Every day, whichever bottle:',
    'cleanse without stripping → antioxidant AM → moisturizer → SPF plus a stick at every three-hour stop → actives PM only, buffered, never stacked with acids.',
  ],
]

const SOS: [string, string][] = [
  [
    'Priority when you have nothing',
    'Protect · don’t strip · seal · skip every active. Two days without actives costs nothing; improvised actives can cost 6–12 months of pigment.',
  ],
  [
    'Stop A — Ulta or Sephora on the route',
    'Round Lab Dokdo mini or Skinfix Foaming Oil mini · Birch Cream or Atobarrier mini · BOJ Relief Sun · Round Lab Sun Stick. Plus Black Girl Sunscreen, Aquaphor Lip Repair, EltaMD Lip SPF, Kitsch bonnet, Megababe stick.',
  ],
  [
    'Stop B — Target, Walmart or CVS',
    'Cetaphil cleanser · Vanicream or Eucerin · BOJ or Isntree sun (Target carries both) · Black Girl Sunscreen face and body · Aquaphor for lips · any satin bonnet · As I Am CoWash and Knot Today.',
  ],
  [
    'Stop C — truck stop only',
    'Water-only rinse AM and PM · the least-fragranced lotion on the shelf · any SPF 30+ beats no sunscreen for one day · hat and long sleeve on the left arm · petroleum jelly for lips.',
  ],
  [
    'The permanent fix',
    'A second sealed mini kit in the truck’s insulated pouch — never on the dash. All clear or closed-suit brands, about $90 total, heat-tolerant for a week.',
  ],
]

export default function Home({ onGo, phone }: { onGo: (v: string, b?: string) => void; phone: boolean }) {
  const all = Object.values(BENCHES).flatMap((b) => b.rows)
  const { ownedTotal, verified, items, bulk } = benchTotals()
  const clearPct = all.filter((r) => r[3] === 'g').length / all.length
  const leaders = all.filter((r) => r[2].includes('L')).length
  const currents = all.filter((r) => r[2].includes('C')).length
  const bonusGreen = BONUS.filter((r) => r[2] === 'g').length
  const total = all.length + BONUS.length + SCENT.lanes.reduce((a: number, l: any) => a + l.rows.length, 0)

  const cards: [string, string, string, string, string, string?][] = [
    ...Object.entries(BENCHES).map(
      ([k, b]) => [b.icon, b.label, b.tag, `${b.rows.length} items`, 'bench', k] as [string, string, string, string, string, string]
    ),
    ['🌫️', 'Scent Bench', 'Two lanes, zero mixing.', '2 lanes', 'scent'],
    ['💰', 'Price Watch', "Today's price on every bottle, plus what one quarter costs.", `verified ${PRICE_META.checked}`, 'prices'],
    ['🫧', 'Bonus Shelf', 'The "sure, why not" list — honest about what it does.', `${BONUS.length} items`, 'bonus'],
    ['🔁', 'Procedure Swaps', 'Same job or better, three gates, zero exceptions.', '3 slots', 'proc'],
    ['⚖️', 'Brands & Audit', "Litigation screen and your current shelf's verdict.", `${LIT.length} brands`, 'brands'],
  ]

  return (
    <div className="view-in">
      <header className="mb-6 max-w-[64ch]">
        <div className="font-mono text-[11px] tracking-[0.08em] text-faint">
          AESTHETIC PROTOCOL HQ · COMPILED AUG 26, 2026
        </div>
        <h1 className="mt-2 font-display text-[27px] font-extrabold leading-[1.14] tracking-[-0.02em] text-balance">
          Everything on your bench is pre-screened. Just pick.
        </h1>
        <p className="mt-2 text-[14px] leading-relaxed text-dim">
          {total} products across seven benches and the Bonus Shelf, already filtered for Fitzpatrick V–VI,
          fragrance-free above the jaw, evidence tier A/B, Sephora or Ulta stock, and the litigation screen. No thinking
          required at the shelf.
        </p>
      </header>

      <Panel className="mb-4 flex flex-col gap-4 px-4 py-4 sm:flex-row sm:gap-8">
        <Gauge pct={clearPct} label="Brands fully clear" value={`${Math.round(clearPct * 100)}%`} tone="bg-clear" />
        <Gauge pct={leaders / all.length} label="Slot leaders picked" value={String(leaders)} tone="bg-signal" />
        <Gauge pct={bonusGreen / BONUS.length} label="Bonus greens" value={`${bonusGreen}/${BONUS.length}`} tone="bg-flag" />
      </Panel>

      <div className={cn('grid gap-2.5', phone ? 'grid-cols-2' : 'grid-cols-4')}>
        <Stat k="Bench items" v={String(all.length)} />
        <Stat k="Currently owned" v={String(currents)} />
        <Stat k="To replace" v={String(all.filter((r) => r[3] === 'r').length + 1)} n="Sun Bum lip" />
        <Stat k="Quarterly restock" v={money(ownedTotal)} n="current stack" />
      </div>

      <SectionRule label="Jump in" />
      <p className="-mt-1 mb-3 text-[12.5px] text-dim">Every bench is grouped by slot — shop a shelf at a time.</p>
      <div className={cn('grid gap-2.5', phone ? 'grid-cols-2' : 'grid-cols-4')}>
        {cards.map(([icon, title, sub, meta, view, key]) => (
          <button
            key={title}
            onClick={() => onGo(view, key)}
            className="group flex flex-col gap-1.5 border border-hairline bg-panel p-4 text-left transition-colors hover:border-signal/45"
          >
            <span className="text-[19px]">{icon}</span>
            <b className="font-display text-[14px] font-semibold">{title}</b>
            <span className="text-[11.5px] leading-snug text-dim">{sub}</span>
            <span className="mt-auto inline-flex items-center gap-1 pt-1.5 font-mono text-[11px] text-signal-ink">
              {meta}
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
            </span>
          </button>
        ))}
      </div>

      <SectionRule label="The operating rules" />
      <p className="-mt-1 mb-3 text-[12.5px] text-dim">
        Same rules everywhere — they are why the bench can be trusted blind.
      </p>
      <div className={cn('grid gap-2.5', phone ? 'grid-cols-1' : 'grid-cols-2')}>
        {RULES.map(([h, b]) => (
          <NoteCard key={h}>
            <b className="font-semibold text-ink">{h} </b>
            {b}
          </NoteCard>
        ))}
      </div>

      <div className="mt-7 border border-excluded/30 bg-excluded-wash/35 px-4 py-4">
        <h3 className="font-display text-[15px] font-semibold">
          The “No Bag” plan — pouch forgotten or cooked on the dash
        </h3>
        <ol className="mt-3 flex flex-col gap-2.5">
          {SOS.map(([h, b], i) => (
            <li key={h} className="flex gap-3 text-[13px] leading-relaxed text-dim">
              <span className="mt-px shrink-0 font-mono text-[11px] font-bold text-excluded">{String(i + 1).padStart(2, '0')}</span>
              <span>
                <b className="font-semibold text-ink">{h}: </b>
                {b}
              </span>
            </li>
          ))}
        </ol>
        <p className="mt-3.5 bg-excluded-wash/70 px-3 py-2.5 text-[12.5px] leading-relaxed text-excluded">
          <b className="font-semibold">Never improvised:</b> bar soap on the face · fragranced wipes as cleanser ·
          scrubs or washcloth scrubbing · toothpaste or lemon on a spot · wrong-shade tinted SPF · 2-in-1 shampoo on 4b
          hair. Never “catch up” by stacking when the bag is back.
        </p>
      </div>

      <footer className="mt-8 border-t border-hairline pt-4 text-[11.5px] leading-relaxed text-faint">
        Compiled from <b className="font-semibold text-dim">Aesthetic Protocol HQ</b> — Sephora &amp; Ulta Variety Bench
        · Procedure Swap Bench · The Bonus Shelf. Prices verified {PRICE_META.checked} ({verified} of {items.length} at
        the retailer), {bulk.length} bulk wins flagged. Litigation screen re-runs quarterly. Formulas drift: confirm
        “fragrance-free” on the label in your hand. The bench serves the protocols — the cut still outranks all of it.
      </footer>
    </div>
  )
}

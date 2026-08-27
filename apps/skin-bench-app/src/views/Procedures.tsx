import { PROC } from '@/data/bench'
import { ViewHead, SectionRule, NoteCard, Panel } from '@/components/bits'
import { cn } from '@/lib/utils'

const VERDICT: Record<string, string> = {
  g: 'text-clear bg-clear-wash',
  y: 'text-flag bg-flag-wash',
  r: 'text-excluded bg-excluded-wash',
  w: 'text-closed bg-closed-wash',
}

export default function Procedures({ query, phone }: { query: string; phone: boolean }) {
  const q = query.toLowerCase()
  return (
    <div className="view-in">
      <ViewHead
        eyebrow="The Variety Bench, but for procedures"
        title="Procedure Swap Bench"
        sub="Every swap that fills one of the three booked slots — Sylfirm X, Profhilo, Rejuran — and does the same job as well or better on Fitzpatrick V–VI skin. The slot is fixed; the brand is not."
      />

      <div className={cn('mb-5 grid gap-2.5', phone ? 'grid-cols-1' : 'grid-cols-3')}>
        {PROC.gates.map((g: string[]) => (
          <Panel key={g[0]} className="px-4 py-3.5">
            <div className="font-mono text-[10px] tracking-[0.14em] text-signal-ink">{g[0]}</div>
            <b className="mt-1 block font-display text-[13.5px] font-semibold">{g[1]}</b>
            <p className="mt-1 text-[12px] leading-relaxed text-dim">{g[2]}</p>
          </Panel>
        ))}
      </div>

      <div className="border border-flag/35 bg-flag-wash/40 px-4 py-4">
        <h3 className="font-display text-[14.5px] font-semibold">Regulatory reality — read before booking</h3>
        <ul className="mt-2.5 flex list-disc flex-col gap-2 pl-5 text-[13px] leading-relaxed text-dim marker:text-flag">
          {PROC.reg.map((r: string, i: number) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: r }} className="[&_b]:font-semibold [&_b]:text-ink" />
          ))}
        </ul>
      </div>

      <SectionRule label="Flags pulled from your health records" />
      <div className={cn('grid gap-2.5', phone ? 'grid-cols-1' : 'grid-cols-2')}>
        {PROC.flags.map((f: string[]) => (
          <Panel key={f[0]} className="px-4 py-3.5">
            <b className="block font-display text-[13px] font-semibold">{f[0]}</b>
            <p className="mt-1 text-[12.5px] leading-relaxed text-dim">{f[1]}</p>
          </Panel>
        ))}
      </div>

      {PROC.slots.map((s: any) => {
        const swaps = s.swaps.filter((w: string[]) => !q || (w[0] + w[1] + w[4]).toLowerCase().includes(q))
        if (!swaps.length) return null
        return (
          <section key={s.name} className="mt-8">
            <h2 className="font-display text-[17px] font-bold">{s.name}</h2>
            <p className="mb-3 mt-1 max-w-[70ch] text-[13px] text-dim">{s.job}</p>
            <div className="flex flex-col gap-2">
              {swaps.map((w: string[]) => (
                <Panel key={w[0]} className="px-4 py-3">
                  <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1.5">
                    <span className="text-[13.5px] font-semibold">{w[0]}</span>
                    <span className="flex shrink-0 items-center gap-2.5">
                      <span
                        className={cn(
                          'rounded-full px-2 py-[3px] text-[11px] font-semibold whitespace-nowrap',
                          VERDICT[w[3]] ?? VERDICT.w
                        )}
                      >
                        {w[4]}
                      </span>
                      <span className="whitespace-nowrap font-mono text-[11.5px] text-faint">{w[2]}</span>
                    </span>
                  </div>
                  <p className="mt-1.5 max-w-[75ch] text-[12.5px] leading-relaxed text-dim">{w[1]}</p>
                </Panel>
              ))}
            </div>
            {s.closed && (
              <div className="mt-2.5 bg-closed-wash px-4 py-3 text-[12.5px] leading-relaxed text-dim">{s.closed}</div>
            )}
          </section>
        )
      })}

      <SectionRule label="Swap stacks — whole-year builds" />
      <p className="mb-3 max-w-[70ch] text-[13px] text-dim">
        The skeleton never moves: Jan–Feb energy · Apr–May injectable · Jun–Aug nothing · Oct–Nov injectable. Blackout
        and 4-week spacing are load-bearing — swap the players, never the calendar.
      </p>
      <div className="flex flex-col gap-2">
        {PROC.stacks.map((st: any) => (
          <Panel key={st[0]} className="px-4 py-3">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <span className="text-[13.5px] font-semibold">{st[0]}</span>
              <span className="font-mono text-[11.5px] text-faint">≈ {st[1]}/yr</span>
            </div>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {st[2].map((x: string) => {
                const [a, b] = x.split('|')
                return (
                  <span key={a} className="bg-raised px-2.5 py-1 text-[11.5px] text-dim">
                    <b className="font-semibold text-ink">{a}</b> · {b}
                  </span>
                )
              })}
            </div>
          </Panel>
        ))}
      </div>

      <div className="mt-4">
        <NoteCard tone="flag">
          <b className="font-semibold text-ink">Passport fine print. </b>
          Treat at the start of a Thailand block, not the end — burn the 48h no-sweat window before Muay Thai, zero
          fresh injection sites under headgear. Thailand UV is equatorial: the tinted mineral SPF rules apply doubly.
        </NoteCard>
      </div>

      <SectionRule label="What would change this bench" />
      <div className={cn('grid gap-2.5', phone ? 'grid-cols-1' : 'grid-cols-2')}>
        {PROC.watch.map((w: string, i: number) => (
          <Panel key={i} className="px-4 py-3 text-[12.5px] leading-relaxed text-dim">
            {w}
          </Panel>
        ))}
      </div>
    </div>
  )
}

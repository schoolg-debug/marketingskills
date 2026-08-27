import { SCENT } from '@/data/bench'
import { ViewHead, NoteCard, Panel } from '@/components/bits'

export default function Scent({ query }: { query: string }) {
  const q = query.toLowerCase()
  return (
    <div className="view-in">
      <ViewHead eyebrow="Sephora & Ulta Variety Bench" title="Scent Bench" sub={SCENT.tag} />

      <div className="flex flex-col gap-3">
        {SCENT.lanes.map((lane: any) => {
          const rows = lane.rows.filter((r: string[]) => !q || r.join(' ').toLowerCase().includes(q))
          if (!rows.length) return null
          return (
            <Panel key={lane.name} className="px-4 py-4">
              <h3 className="font-display text-[14.5px] font-semibold">{lane.name}</h3>
              <div className="mt-1">
                {rows.map((r: string[]) => (
                  <div key={r[0]} className="border-t border-hairline py-3 first:border-0">
                    <div className="font-display text-[11.5px] font-bold uppercase tracking-[0.08em] text-signal-ink">
                      {r[0]}
                    </div>
                    <p className="mt-1 text-[12.5px] leading-relaxed text-dim">
                      <b className="font-semibold text-ink">Current: </b>
                      {r[1]}
                    </p>
                    <p className="mt-1 text-[12.5px] leading-relaxed text-dim">
                      <b className="font-semibold text-ink">Bench: </b>
                      {r[2]}
                    </p>
                  </div>
                ))}
              </div>
            </Panel>
          )
        })}
      </div>

      <div className="mt-4">
        <NoteCard>
          <b className="font-semibold text-ink">Lane discipline. </b>
          One lane per day, never mixed. Deodorant and hair products stay fragrance-free or lane-matched. Zero scent on
          a no-bag day — a scent-free day beats a mismatched lane.
        </NoteCard>
      </div>
    </div>
  )
}

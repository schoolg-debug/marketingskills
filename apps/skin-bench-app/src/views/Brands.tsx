import { LIT, AUDIT, EXCLUDED } from '@/data/bench'
import { StatusPill, ViewHead, SectionRule, NoteCard, Panel } from '@/components/bits'

function Rows({ data, headA, headB, phone }: { data: string[][]; headA: string; headB: string; phone: boolean }) {
  if (phone) {
    return (
      <div className="flex flex-col gap-2">
        {data.map((r) => (
          <Panel key={r[0]} className="px-4 py-3">
            <div className="flex items-start gap-2.5">
              <span className="flex-1 text-[13.5px] font-semibold leading-snug">{r[0]}</span>
              <StatusPill code={r[1]} />
            </div>
            <p className="mt-2 text-[12.5px] leading-relaxed text-dim">{r[2]}</p>
          </Panel>
        ))}
      </div>
    )
  }
  return (
    <Panel className="overflow-hidden">
      <div className="overflow-x-auto thin-scroll">
        <table className="w-full min-w-[720px] border-collapse text-[13.5px]">
          <thead>
            <tr className="bg-raised/60">
              {[headA, 'Status', headB].map((h) => (
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
            {data.map((r) => (
              <tr key={r[0]} className="border-b border-hairline last:border-0 hover:bg-raised/40">
                <td className="max-w-[340px] px-3.5 py-3 align-top font-semibold">{r[0]}</td>
                <td className="px-3.5 py-3 align-top">
                  <StatusPill code={r[1]} />
                </td>
                <td className="px-3.5 py-3 align-top text-[12.5px] text-dim">{r[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Panel>
  )
}

export default function Brands({ query, phone }: { query: string; phone: boolean }) {
  const q = query.toLowerCase()
  const f = (d: string[][]) => d.filter((r) => !q || r.join(' ').toLowerCase().includes(q))
  const lit = f(LIT)
  const aud = f(AUDIT)
  const exc = EXCLUDED.filter((r) => !q || r.join(' ').toLowerCase().includes(q))

  return (
    <div className="view-in">
      <ViewHead
        eyebrow="Litigation screen · Aug 2026 · re-run quarterly"
        title="Brands & Audit"
        sub="Every brand behind every bench, screened for active product litigation — plus the verdict on what is on your shelf right now."
      />

      <SectionRule label="Current stack audit" count={aud.length} />
      <Rows data={aud} headA="On your shelf now" headB="Verdict" phone={phone} />

      <SectionRule label="Litigation screen — brand status" count={lit.length} />
      <Rows data={lit} headA="Brand (parent)" headB="What it is" phone={phone} />

      <SectionRule label="Not on this list, on purpose" count={exc.length} />
      <div className="flex flex-col gap-2">
        {exc.map((r) => (
          <Panel key={r[0]} className="px-4 py-3">
            <div className="text-[13.5px] font-semibold leading-snug">{r[0]}</div>
            <p className="mt-1 text-[12.5px] leading-relaxed text-dim">{r[1]}</p>
          </Panel>
        ))}
      </div>

      <div className="mt-6">
        <NoteCard>
          <b className="font-semibold text-ink">Cadence. </b>
          Re-run the litigation screen quarterly with the Marek draw — class actions in this industry move monthly. A
          product earns a permanent bench seat only after 8 weeks with no new pigment, no irritation, no flaking.
        </NoteCard>
      </div>
    </div>
  )
}

# Bookdrop

A drop-zone web app + Claude pipeline for studying books that are far too long for a single
chat context. Live artifact: https://claude.ai/code/artifact/aa585aa1-8ccf-4540-9ba7-0dc2c68f3248

- Notion destination: **📕 Book Synthesis Lab** (page `3ca86d86-e27b-81e2-a17a-fb618a8be4a7`, under Life HQ)
- Pickup: a self-rearming "Bookdrop fast poll" (send_later one-shot, every ~3 min, bound to the
  building session) starts synthesis immediately when a queued book appears. An hourly
  "Bookdrop watchdog" Routine revives the poll chain if it ever breaks. The owner can also
  message Claude directly.

## How it works

1. `index.html` is a self-saving Claude artifact (capability `artifact`). Dropped files are
   parsed **in the browser** — pdf.js for PDF (worker loaded as a plain script so the fake-worker
   main-thread path works under the artifact CSP), JSZip + OPF spine parsing for EPUB, plain read
   for TXT/MD. Extracted text is embedded in `<script id="state" type="application/json">` and the
   page republishes itself via `artifact.publish(buildDocument(state))`.
2. A Claude check-in reads the artifact, finds `status: "queued"` books, and synthesizes them
   into Notion **in chunks** — the whole book is never loaded into context at once.
3. Claude republishes the page with `status: "done"`, the Notion URL, a one-line `note`, and the
   `text` field deleted (keeps the page small; `chars`/`pages` metadata stays).

## Synthesis protocol (for the Claude check-in)

State shape: `{v, books: [{id, title, file, pages, chars, added, status, text?, notion?, note?}]}`,
`status ∈ queued | processing | done | error`.

Per queued book (start IMMEDIATELY — never wait for a schedule):

1. Republish with `status: "processing"`, `startedAt` (ISO), `estMin`, and
   `progress: {detail, pct}` (leave `text` intact). Open views live-reload on every publish,
   so `progress` IS the user's live status feed — update it at each milestone (structure
   mapped ~10%, sections read ~40-60%, guide assembled ~75%, writing to Notion ~90%).
   Batch milestones; don't publish more than ~once a minute (rate limits).
2. Save the book text to a local file. Small books (<150k chars): read directly in ~25k-char
   chunks, two passes (structure map, then per-chapter synthesis). Large books: fan out
   parallel subagents over ~2,000-line slices, each returning structure, Feynman teaching
   notes, key numbers, recall candidates, and pitfalls; assemble from their reports.
   Never quote-dump.
3. Create a subpage of Book Synthesis Lab using this template (teaching, not summarizing):
   - **The core model** — one screen; the mental model the book hangs on.
   - **Chapter-by-chapter** — Feynman-style plain-language teaching, *why it matters for the
     reader's track*, one worked example or application each.
   - **Recall drills** — 5-minute question sets, answers hidden in toggles (retrieve before peeking).
   - **Anki candidates** — only genuinely slippery items ("cards only from misses" rule).
   - **Drive-time brief** — a spoken-style narrative recap for passive listening windows.
   - **Teach-back + apply** — one writing prompt, one application tied to something the reader builds.
   - **Review schedule** — +1 / +3 / +7 / +21 days.
4. Reader profile for personalization: OTR truck driver self-teaching IT/cybersecurity
   (CS50, Network+, Security+, TryHackMe/HackTheBox, Proxmox homelab, OPSEC, side hustles);
   two-window attention model (passive driving audio vs. short/hands-on windows); Anki + active
   recall + Feynman are the house methods. Tie examples to that life only where honest.
5. Republish the artifact: `status: "done"`, `notion` URL, one-line `note` digest, delete `text`.
   On `conflict`, re-read the live version, merge, retry. A scanned/unreadable book gets
   `status: "error"` with an explanatory `note`.

## Maintenance notes

- `buildDocument()` inside the app script duplicates the `<head>` shell. If you edit the head
  of `index.html`, make the same edit in `buildDocument()` or the next in-page save reverts it.
- Inside the app script, every closing script tag in string literals must stay written as
  `<\/script>` or the browser terminates the script block early.
- Page budget: hard 16 MB per rendered artifact version; the app refuses saves past ~14.5 MB.

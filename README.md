# personal-website-drafts

Working draft of my personal site. Two views of the same content, for two moods:

- **`index.html` — plain view.** Default. Type-led, warm paper, skimmable in
  about 20 seconds. This is what someone opening the link cold will see.
- **`terminal.html` — terminal view.** A real shell you can type into, for anyone
  who would rather poke at things.

Both read from the **same `content.js`**, so copy is only ever written once.

## Structure

```
index.html              plain view (default)
terminal.html           terminal view (interactive)
content.js              ← the only file you edit for copy
drafts/
  quiet.html            original standalone draft
  terminal.html         original standalone draft
```

## Switching views

`index.html` shows a small `view — plain / terminal` switch in the masthead.
`terminal.html` has a `plain view` button in its window bar, plus `quiet` / `exit`
commands.

The choice is remembered in `localStorage` under `mth-path`. If you last picked
`terminal`, visiting `/` sends you straight to the terminal. To wipe the
preference, run `localStorage.removeItem('mth-path')` in devtools — or delete the
`location.replace` block near the top of `index.html` to stop redirecting.

## Editing content

Everything lives in `content.js`:

| Key | What it is |
|---|---|
| `about` | array of paragraphs |
| `now` | one-line status shown at the top |
| `work` | roles with `points[]` |
| `projects` | `slug`, `name`, `href`, `stack`, `blurb` |
| `skills` | grouped lists |
| `email` / `github` / `linkedin` / `resume` | contact links |

Add a project → it appears in both views, and `open <slug>` starts working in the
terminal automatically.

## Content status

Copy is pulled from `resume.pdf`, repo READMEs, and GitHub descriptions. Still to do:

- [ ] Re-check every line word-for-word against the resume
- [ ] Add earlier roles / experience from LinkedIn
- [ ] Confirm the CPRT rover entry (it's a fork of `CPRT/rover`)
- [ ] Real project links where they're deployed (Raven Scheduling, Iron Ledger)
- [ ] Replace the serif/sans stack with something intentional

## Running it

No build, no dependencies, no network requests. Open `index.html` directly.

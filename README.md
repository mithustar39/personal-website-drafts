# personal-website-drafts

Working draft of my personal site. Two views of the same content:

- **`index.html`, plain view.** Default. Type led, warm paper, skimmable in
  about 20 seconds. This is what someone opening the link cold will see.
- **`terminal.html`, terminal view.** A real shell you can type into, for anyone
  who would rather poke at things.

Both read from the **same `content.js`**, so copy is only ever written once.

## Structure

```
index.html      plain view (default)
terminal.html   terminal view (interactive)
content.js      the only file you edit for copy
```

## Switching views

`index.html` shows a small `view: plain / terminal` switch in the masthead.
`terminal.html` has a `plain view` button in its window bar, plus `quiet` and
`exit` commands.

The choice is remembered in `localStorage` under `mth-path`. If you last picked
`terminal`, visiting `/` sends you straight to the terminal. To wipe the
preference, run `localStorage.removeItem('mth-path')` in devtools, or delete the
`location.replace` block near the top of `index.html` to stop redirecting.

## Editing content

Everything lives in `content.js`:

| Key | What it is |
|---|---|
| `about` | array of paragraphs |
| `now` | one line status shown at the top |
| `education` | array of schools, each with `notes[]` |
| `work` | roles with `points[]` |
| `projects` | `slug`, `name`, `href`, `stack`, `blurb` |
| `skills` | grouped lists |
| `email`, `github`, `linkedin`, `resume` | contact links |

Add a project and it shows up in both views, and `open <slug>` starts working in
the terminal automatically. Add a school and it appears under Education.

## House style

No em dashes, no en dashes, no double hyphens in copy. Dates read
"Jun to Aug 2026" rather than using a dash.

## Content status

Copy is pulled from `resume.pdf` and repo READMEs.

- [ ] Re-check every line word for word against the resume
- [ ] Add earlier roles or experience from LinkedIn
- [ ] Real project links where they are deployed (Raven Scheduling, Iron Ledger)
- [ ] Confirm the exact title of "Star Stellar Swordsmaster"
- [ ] Replace the serif and sans stack with something intentional

## Running it

No build, no dependencies, no network requests. Open `index.html` directly.

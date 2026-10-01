# Python Learning Platform

A TypeScript + React educational web app for teaching Python.
Students write and run real Python in the browser via Pyodide.

## Local development

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

## Deploy to GitHub Pages

GitHub Pages serves static files only. It does not run Vite.
You must build the app first, then upload the built files.

### Steps

1. On your computer:

```bash
npm install
npm run build
```

This creates a `dist/` folder with plain HTML/JS/CSS.

2. Put the contents of `dist/` on GitHub Pages:

**Easiest method – use the docs folder:**

```bash
# After npm run build
rm -rf docs
mkdir docs
cp -r dist/* docs/
git add docs
git commit -m "Deploy to GitHub Pages"
git push
```

3. In your GitHub repo:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: main (or master)
   - Folder: /docs
   - Save

4. Wait 1–2 minutes, then open:
   https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/

### Alternative: gh-pages branch

```bash
npm install
npm run build
npx gh-pages -d dist
```

Then set Pages source to the `gh-pages` branch.

### Important

- Do NOT point GitHub Pages at the raw source (src/, main.tsx, etc.).
- Only the files inside `dist/` (or `docs/` after you copy them) should be served.
- Pyodide loads from a CDN, so Python works on GitHub Pages with no extra setup.

## Lessons

18 progressive lessons covering variables, math, lists, conditionals,
dictionaries, loops, functions, strings, FizzBuzz, temperature conversion,
list comprehensions, statistics, and nested data. Three practice lessons add
Easy, Moderate, and Hard challenges, including coordinate quadrants, four-bit
patterns, ATM and date rules, and number algorithms.

Each task has Show Hint and How to (example solution + Use in editor).
The standalone Playground tab provides an independent Python editor and output panel.

## License

MIT

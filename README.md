# Shri Sabhari Career Navigator

A dependency-free, interactive 5-page Career Level Navigator designed for use with Claude Code or Claude Design.

## Best use
- Use **Claude Design / Artifacts** to explore visual directions and quickly iterate on the experience.
- Use **Claude Code** to maintain the actual project, test interactions, preserve brand rules, and create the final production version.

## Run locally

### Option 1 — Python
```bash
cd shri-sabhari-career-navigator-claude
python -m http.server 8080
```
Then open `http://localhost:8080`.

### Option 2 — VS Code Live Server
Open the folder in VS Code and run **Live Server** on `index.html`.

## Use with Claude Code
```bash
cd shri-sabhari-career-navigator-claude
claude
```
Then paste the contents of `PROMPT_FOR_CLAUDE_CODE.md`.

## Export as PDF
Open the navigator in Chrome, click **Export PDF**, and choose:
- Destination: Save as PDF
- Layout: Landscape
- Margins: None
- Background graphics: On

## Keyboard controls
- Right arrow / Page Down / Space: next page
- Left arrow / Page Up: previous page
- Home: first page
- End: last page

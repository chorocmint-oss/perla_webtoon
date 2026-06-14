# Perla webtoon current working-state backup

Backup created before HTML/CSS cleanup.

## Repository state

- Current working main state after cache-key update: `a3e0ade91f3d73f932f9a433cb802741802d4580`
- Current `index.html` blob SHA: `44304d917765119b2248c807cc53d1195dc10936`
- Current `styles.css` blob SHA: `73e1583a785d095116192f4d5fb34e6db9471250`
- Current `transition-fix.css` commit: `a396acd074cb8000940fdc1997d17cffc928c702`

## Important current mapping

- 1컷: `.intro-panel`
- 1 → 1-2 transition: `.intro-to-lake-transition`
- 1-2컷: `.opening-lake-panel` / `assets/02_white_lily_closeup.png`
- 1-2 → 2 transition: `.lake-to-carriage-transition`
- 2컷: `.carriage-panel` / `assets/03_black_carriage_palace.png`
- 2 → 2-2 transition: `.carriage-to-door-transition`
- 2-2컷: `.door-panel` / `assets/04_carriage_wheel_door.png`

## Current known issue before cleanup

The gold/common caption line above `막아선 아이는 짓밟혔고,` on `.door-panel` is caused by the shared `.caption::before` rule from `styles.css`. The intended result is:

- Keep the thin gold line only above `.carriage-panel .caption-kicker` (`그해,`).
- Remove the shared `.caption::before` line from `.door-panel .caption`.

## Rollback note

If cleanup goes wrong, revert to commit `a3e0ade91f3d73f932f9a433cb802741802d4580` or restore files by the blob SHAs above.

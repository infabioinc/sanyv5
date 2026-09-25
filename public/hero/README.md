# Hero media

The hero (`src/components/Hero.jsx`) plays a looping background video with a
poster fallback and, under that, rotating stills:

    public/hero/hero.mp4          ← 1080p, muted, ~13s loop (cut from the SANY brand film)
    public/hero/hero-poster.jpg   ← first-frame poster
    public/hero/hero-1…5.jpg      ← rotating stills shown if the video can't play

All of these are cut from the real SANY brand film (the blue SANY electric
truck on the highway, plant and logo). The truck cards (`public/trucks/*.jpg`)
and the argument / economics bands (`public/scenes/*.jpg`) are stills from the
same film.

## Re-cutting from a new source

```bash
SRC=source.mp4

# hero loop — 1080p, muted, web-optimised
ffmpeg -ss 15 -i "$SRC" -t 13 -an \
  -vf "scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,fps=30" \
  -c:v libx264 -profile:v high -pix_fmt yuv420p -crf 23 -movflags +faststart \
  hero.mp4

# poster + a still
ffmpeg -ss 20 -i "$SRC" -vframes 1 -vf scale=1920:-1 -q:v 3 hero-poster.jpg
```

Swap in a different segment by changing the `-ss` (start) and `-t` (length).

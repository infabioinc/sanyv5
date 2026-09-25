# Hero media

The hero (`src/components/Hero.jsx`) plays a looping background video from:

    public/hero/hero.mp4        ← drop the real SANY clip here (h.264 mp4)
    public/hero/hero-poster.jpg ← optional first-frame poster

Until `hero.mp4` is present, the hero gracefully falls back to the rotating
`frame-1…5.svg` scenes in this folder.

## Source clips (client Google Drive → "Sany" assets, from the motion chat)

Recommended hero loops (real SANY footage):

| Clip | Size | Note |
|------|------|------|
| SANY_truck_driving_toward_camera_20260918141551.mp4 | 1.3 MB | classic hero shot |
| SANY_truck_moving_forward_20260918134059.mp4 | 1.8 MB | side/forward tracking |
| SANY_truck_driving_forward_20260918134952.mp4 | 2.0 MB | forward tracking |
| Electric_truck_commercial_produce…_20260919152014_gwr_video_mvp.mp4 | 6.6 MB | most cinematic |

### Prep for web (keep it light)

```bash
# transcode + trim to a clean, muted, ~8s loop, 1080p, web-optimised
ffmpeg -i source.mp4 -t 8 -an -vf "scale=1920:-2" \
  -c:v libx264 -profile:v high -crf 24 -movflags +faststart hero.mp4

# grab a poster from the first frame
ffmpeg -i hero.mp4 -vframes 1 -q:v 3 hero-poster.jpg
```

Then set `poster="/hero/hero-poster.jpg"` on the `<video>` in `Hero.jsx` if you
add a poster.

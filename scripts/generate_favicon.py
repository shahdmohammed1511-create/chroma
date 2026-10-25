import os
import base64
from PIL import Image, ImageDraw
import numpy as np

src_path = 'e:/MANARR/public/chroma-logo.png'
out_dir = 'e:/MANARR/public'

# Load original
orig = Image.open(src_path).convert('RGBA')

# Crop the emblem (dragonflies)
emblem = orig.crop((18, 8, 84, 73))

# High-quality transparency defringing
data = np.array(emblem, dtype=np.float32)
r, g, b, a = data[:, :, 0], data[:, :, 1], data[:, :, 2], data[:, :, 3]

# Pure white detection
is_white = (r > 248) & (g > 248) & (b > 248)
alpha = np.clip((255.0 - np.minimum(g, b)) / 215.0 * 255.0, 0, 255)
alpha[is_white] = 0

alpha_norm = np.maximum(alpha / 255.0, 1e-5)[:, :, np.newaxis]
rgb = data[:, :, :3]
rgb_clean = (rgb - 255.0 * (1.0 - alpha_norm)) / alpha_norm
rgb_clean = np.clip(rgb_clean, 0, 255)

clean_data = np.dstack([rgb_clean, alpha]).astype(np.uint8)
clean_emblem = Image.fromarray(clean_data, 'RGBA')

# Save master transparent emblem
emblem_path = os.path.join(out_dir, 'chroma-emblem.png')
clean_emblem.save(emblem_path)

# Helper: Create supersampled luxury circular badge
def create_supersampled_badge(size, padding_ratio=0.14):
    scale = 4
    hires_size = size * scale
    img = Image.new('RGBA', (hires_size, hires_size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Soft warm paper background matching site theme #fbf5f1
    # with delicate rose border
    draw.ellipse(
        (scale, scale, hires_size - 1 - scale, hires_size - 1 - scale),
        fill=(251, 245, 241, 255),
        outline=(210, 138, 155, 200),
        width=int(1.5 * scale)
    )
    
    # Emblem size inside badge
    pad = int(hires_size * padding_ratio)
    target_dim = hires_size - 2 * pad
    resized_emblem = clean_emblem.resize((target_dim, target_dim), Image.Resampling.LANCZOS)
    img.paste(resized_emblem, (pad, pad), resized_emblem)
    
    # Downsample with Lanczos for perfect anti-aliased edge
    return img.resize((size, size), Image.Resampling.LANCZOS)

# Generate favicons
badge_16 = create_supersampled_badge(16, 0.12)
badge_32 = create_supersampled_badge(32, 0.13)
badge_48 = create_supersampled_badge(48, 0.14)
badge_64 = create_supersampled_badge(64, 0.14)

badge_16.save(os.path.join(out_dir, 'favicon-16x16.png'))
badge_32.save(os.path.join(out_dir, 'favicon-32x32.png'))
badge_48.save(os.path.join(out_dir, 'favicon-48x48.png'))

# Multi-resolution favicon.ico containing 16, 32, 48
badge_32.save(
    os.path.join(out_dir, 'favicon.ico'),
    format='ICO',
    sizes=[(16, 16), (32, 32), (48, 48)]
)

# Apple Touch Icon (180x180) - squircle / solid luxury icon
apple_touch = Image.new('RGBA', (180, 180), (251, 245, 241, 255))
apple_emblem = clean_emblem.resize((132, 132), Image.Resampling.LANCZOS)
apple_touch.paste(apple_emblem, (24, 24), apple_emblem)
apple_touch.save(os.path.join(out_dir, 'apple-touch-icon.png'))

# Android Chrome PWA icons
pwa_192 = Image.new('RGBA', (192, 192), (251, 245, 241, 255))
pwa_192.paste(clean_emblem.resize((140, 140), Image.Resampling.LANCZOS), (26, 26), clean_emblem.resize((140, 140), Image.Resampling.LANCZOS))
pwa_192.save(os.path.join(out_dir, 'android-chrome-192x192.png'))

pwa_512 = Image.new('RGBA', (512, 512), (251, 245, 241, 255))
pwa_512.paste(clean_emblem.resize((380, 380), Image.Resampling.LANCZOS), (66, 66), clean_emblem.resize((380, 380), Image.Resampling.LANCZOS))
pwa_512.save(os.path.join(out_dir, 'android-chrome-512x512.png'))

# SVG Favicon with high precision
with open(os.path.join(out_dir, 'favicon-32x32.png'), 'rb') as f:
    b64 = base64.b64encode(f.read()).decode('utf-8')

svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <circle cx="32" cy="32" r="30" fill="#fbf5f1" stroke="rgba(210, 138, 155, 0.7)" stroke-width="2"/>
  <image href="data:image/png;base64,{b64}" x="6" y="6" width="52" height="52" />
</svg>
'''

with open(os.path.join(out_dir, 'favicon.svg'), 'w', encoding='utf-8') as f:
    f.write(svg_content)

print('SUCCESS: Ultra-smooth favicon suite created!')

from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter, ImageFont


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / 'public' / 'chroma-experience-story.png'
WIDTH, HEIGHT = 1080, 1920
FONT_DIR = Path('C:/Windows/Fonts')
SITE_URL = 'https://chroma-puce-two.vercel.app/'

INK = (57, 36, 45)
ROSE = (185, 72, 104)
ROSE_DARK = (143, 58, 80)
PAPER = (251, 246, 241)
MUTED = (137, 107, 108)


def font(name, size):
    return ImageFont.truetype(str(FONT_DIR / name), size)


def centered(draw, y, text, typeface, color, spacing=0):
    draw.text((WIDTH / 2, y), text, font=typeface, fill=color, anchor='mt', spacing=spacing)


def sparkle(draw, center, radius, color, width=3):
    x, y = center
    points = [
        (x, y - radius), (x + radius * 0.16, y - radius * 0.16),
        (x + radius, y), (x + radius * 0.16, y + radius * 0.16),
        (x, y + radius), (x - radius * 0.16, y + radius * 0.16),
        (x - radius, y), (x - radius * 0.16, y - radius * 0.16),
    ]
    draw.polygon(points, fill=color)
    draw.ellipse((x - width, y - width, x + width, y + width), fill=PAPER)


def gem(draw, center, radius, rotation=0):
    x, y = center
    top = (x, y - radius)
    upper_right = (x + radius * 0.72, y - radius * 0.55)
    right = (x + radius, y - radius * 0.05)
    bottom = (x, y + radius)
    left = (x - radius, y - radius * 0.05)
    upper_left = (x - radius * 0.72, y - radius * 0.55)
    draw.polygon([top, upper_right, right, bottom, left, upper_left], fill=(242, 223, 239, 235))
    draw.polygon([top, upper_left, (x, y - radius * 0.05)], fill=(255, 255, 255, 230))
    draw.polygon([top, upper_right, (x, y - radius * 0.05)], fill=(214, 199, 236, 235))
    draw.polygon([upper_left, (x, y - radius * 0.05), left], fill=(209, 226, 235, 220))
    draw.polygon([upper_right, (x, y - radius * 0.05), right], fill=(255, 255, 255, 220))
    draw.polygon([(x, y - radius * 0.05), right, bottom, left], fill=(235, 218, 240, 225))
    draw.line([top, upper_right, right, bottom, left, upper_left, top], fill=(255, 255, 255, 240), width=2)
    draw.line([upper_left, (x, y - radius * 0.05), upper_right], fill=(255, 255, 255, 220), width=2)
    draw.line([(x, y - radius * 0.05), bottom], fill=(255, 255, 255, 200), width=2)


def draw_gloss():
    product = Image.new('RGBA', (430, 760), (0, 0, 0, 0))
    draw = ImageDraw.Draw(product)

    draw.rounded_rectangle((82, 215, 349, 711), radius=56, fill=(153, 69, 95, 47))
    draw.rounded_rectangle((150, 52, 281, 258), radius=25, fill=(213, 158, 161, 255), outline=(255, 255, 255, 230), width=3)
    draw.rounded_rectangle((165, 61, 192, 236), radius=13, fill=(255, 247, 235, 160))
    draw.line((171, 77, 171, 219), fill=(255, 255, 255, 190), width=4)
    draw.line((157, 79, 273, 79), fill=(255, 255, 255, 180), width=2)
    draw.rectangle((190, 231, 240, 314), fill=(208, 135, 153, 220))

    draw.rounded_rectangle((93, 292, 337, 681), radius=49, fill=(243, 207, 198, 208), outline=(255, 255, 255, 245), width=4)
    draw.rounded_rectangle((105, 304, 324, 667), radius=41, fill=(255, 247, 237, 120))
    draw.rounded_rectangle((121, 323, 142, 640), radius=10, fill=(255, 255, 255, 192))
    draw.rounded_rectangle((299, 325, 313, 638), radius=8, fill=(188, 86, 117, 58))
    draw.rounded_rectangle((99, 566, 331, 678), radius=0, fill=(190, 78, 113, 107))
    draw.rectangle((102, 566, 328, 590), fill=(222, 131, 153, 100))
    draw.line((111, 598, 319, 598), fill=(255, 255, 255, 115), width=3)

    label = font('georgiab.ttf', 35)
    sublabel = font('segoeui.ttf', 14)
    draw.text((215, 425), 'CHROMA', font=label, fill=(131, 56, 78, 255), anchor='mm')
    draw.text((215, 462), 'GLOSS BAR', font=sublabel, fill=(145, 86, 94, 255), anchor='mm', stroke_width=0)
    draw.rounded_rectangle((88, 673, 342, 700), radius=10, fill=(226, 187, 183, 250), outline=(255, 255, 255, 235), width=2)

    return product.rotate(8, resample=Image.Resampling.BICUBIC, expand=True)


def build_story():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    image = Image.new('RGB', (WIDTH, HEIGHT), PAPER)
    pixels = image.load()
    top = (251, 247, 242)
    bottom = (239, 210, 210)
    for y in range(HEIGHT):
        amount = y / (HEIGHT - 1)
        color = tuple(round(top[i] * (1 - amount) + bottom[i] * amount) for i in range(3))
        ImageDraw.Draw(image).line((0, y, WIDTH, y), fill=color)

    glow = Image.new('RGBA', image.size, (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow)
    glow_draw.ellipse((155, 560, 970, 1380), fill=(255, 250, 246, 118))
    glow_draw.ellipse((680, 650, 1150, 1180), fill=(223, 152, 173, 56))
    glow = glow.filter(ImageFilter.GaussianBlur(95))
    image = Image.alpha_composite(image.convert('RGBA'), glow)
    draw = ImageDraw.Draw(image)

    draw.rounded_rectangle((54, 53, 1026, 1867), radius=34, outline=(255, 255, 255, 174), width=2)
    draw.line((91, 230, 989, 230), fill=(116, 77, 83, 58), width=2)

    tiny = font('segoeuib.ttf', 17)
    wordmark = font('georgiab.ttf', 69)
    script = font('segoesc.ttf', 101)
    headline = font('georgiab.ttf', 73)
    body = font('segoeui.ttf', 25)
    body_bold = font('segoeuib.ttf', 19)
    small = font('segoeuib.ttf', 15)
    event = font('georgiab.ttf', 32)
    cta_font = font('segoeuib.ttf', 21)

    draw.text((103, 89), 'CHROMA EXPERIENCES', font=tiny, fill=ROSE_DARK, spacing=3)
    draw.text((99, 116), 'chroma', font=wordmark, fill=INK)
    draw.ellipse((318, 174, 330, 186), fill=ROSE)
    draw.text((103, 193), 'BEAUTY, WITH A TWIST', font=small, fill=MUTED, spacing=2)

    draw.rounded_rectangle((752, 107, 977, 190), radius=40, fill=(255, 249, 244, 165), outline=(255, 255, 255, 215), width=2)
    draw.text((864, 131), 'A DIGITAL GIFT', font=small, fill=ROSE_DARK, anchor='mm')
    draw.text((864, 158), 'from Dearly', font=font('segoesc.ttf', 27), fill=INK, anchor='mm')

    centered(draw, 282, 'ONE GOOD IDEA', headline, INK)
    centered(draw, 357, 'Every time.', script, ROSE)
    centered(draw, 486, 'A new experience, a new reason to get together.', body, INK)
    centered(draw, 524, 'The Chroma site is live, and Edition 01 is here.', body, MUTED)

    draw.rounded_rectangle((375, 584, 705, 630), radius=22, fill=(255, 250, 245, 190), outline=(255, 255, 255, 220), width=2)
    draw.text((540, 607), 'NOW BOOKING  ·  EDITION 01', font=small, fill=ROSE_DARK, anchor='mm')

    # Keep the illustration within the story-safe center, leaving room for native Instagram UI.
    art = Image.new('RGBA', image.size, (0, 0, 0, 0))
    art_draw = ImageDraw.Draw(art)
    art_draw.ellipse((243, 679, 843, 1300), fill=(190, 97, 122, 28))
    art_draw.ellipse((275, 689, 805, 1250), fill=(255, 253, 247, 105), outline=(255, 255, 255, 145), width=3)
    art_draw.ellipse((311, 723, 769, 1217), outline=(255, 255, 255, 115), width=2)

    bottle = draw_gloss()
    bottle = bottle.resize((round(bottle.width * 0.78), round(bottle.height * 0.78)), Image.Resampling.LANCZOS)
    art.alpha_composite(bottle, (333, 675))

    gem(art_draw, (316, 847), 32)
    gem(art_draw, (781, 941), 40)
    gem(art_draw, (731, 1173), 27)
    gem(art_draw, (354, 1160), 20)
    gem(art_draw, (773, 741), 22)
    sparkle(art_draw, (274, 1001), 23, (255, 255, 255, 255), 4)
    sparkle(art_draw, (798, 1083), 29, (255, 255, 255, 255), 4)
    sparkle(art_draw, (409, 734), 16, (255, 255, 255, 245), 3)
    sparkle(art_draw, (681, 1240), 18, (255, 255, 255, 245), 3)
    image = Image.alpha_composite(image, art)
    draw = ImageDraw.Draw(image)

    draw.text((139, 1007), 'GLOSS', font=font('segoesc.ttf', 70), fill=ROSE_DARK, anchor='mm', stroke_width=1, stroke_fill=(255, 251, 247, 190))
    draw.text((850, 812), 'MAKE', font=font('georgiab.ttf', 25), fill=ROSE_DARK, anchor='mm')
    draw.text((850, 846), 'it', font=font('segoesc.ttf', 38), fill=ROSE, anchor='mm')
    draw.text((850, 877), 'SHINE', font=font('georgiab.ttf', 20), fill=ROSE_DARK, anchor='mm')

    draw.line((120, 1328, 960, 1328), fill=(116, 77, 83, 67), width=2)
    centered(draw, 1360, 'LIPGLOSS MAKING  ×  BEDAZZLING', event, INK)
    centered(draw, 1414, 'Thursday, 1 October  ·  Nineteen Cafe', body, MUTED)
    centered(draw, 1453, 'A hands-on afternoon of gloss, gems & good company.', body, MUTED)

    draw.rounded_rectangle((145, 1518, 935, 1685), radius=24, fill=INK)
    draw.text((540, 1547), 'DISCOVER THE NEW CHROMA SITE', font=small, fill=(241, 203, 207), anchor='mm')
    draw.text((540, 1588), 'TAP THE LINK TO EXPLORE', font=cta_font, fill=(255, 249, 244), anchor='mm')
    draw.line((838, 1588, 878, 1588), fill=(255, 249, 244), width=3)
    draw.line((864, 1574, 878, 1588, 864, 1602), fill=(255, 249, 244), width=3, joint='curve')
    draw.text((540, 1636), SITE_URL.removeprefix('https://').rstrip('/'), font=font('segoeuib.ttf', 19), fill=(249, 222, 218), anchor='mm')

    centered(draw, 1712, '@chroma_egy    ×    @dearly_digitalstudio', body_bold, INK)
    centered(draw, 1752, 'BOOK YOUR SPOT THROUGH THE STORY LINK', small, MUTED)
    centered(draw, 1812, 'DIGITAL EXPERIENCE BY DEARLY', tiny, ROSE_DARK)

    image.convert('RGB').save(OUTPUT, format='PNG', optimize=True)
    print(f'Created {OUTPUT} ({WIDTH}x{HEIGHT})')


if __name__ == '__main__':
    build_story()
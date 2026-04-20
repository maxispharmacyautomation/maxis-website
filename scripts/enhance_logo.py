import fitz
from PIL import Image
import io

def generate_logos():
    # 1. Extract at high DPI for clarity
    doc = fitz.open("brand-assets/Maxis Logo Design.pdf")
    page = doc[0]
    # DPI 600 for extreme sharpness
    pix = page.get_pixmap(dpi=600)
    
    # Read into PIL
    img_data = pix.tobytes("png")
    img = Image.open(io.BytesIO(img_data)).convert("RGBA")
    
    datas = img.getdata()
    header_data = []
    footer_data = []

    # 2. Process pixels
    for item in datas:
        # Transparent background threshold
        if item[0] > 230 and item[1] > 230 and item[2] > 230:
            header_data.append((255, 255, 255, 0))
            footer_data.append((255, 255, 255, 0))
        else:
            header_data.append(item)
            
            # For the footer, if the pixel is dark (black text), invert it to white/light
            # We target the dark gray/black text. Note: Icon colors (teal/orange etc) should remain.
            # Assuming dark is R<60, G<60, B<70
            if item[0] < 80 and item[1] < 80 and item[2] < 80 and item[3] > 0:
                # Convert black to white
                footer_data.append((255, 255, 255, item[3]))
            else:
                footer_data.append(item)

    # 3. Create Header Logo
    img_header = Image.new("RGBA", img.size)
    img_header.putdata(header_data)
    bbox1 = img_header.getbbox()
    if bbox1:
        img_header = img_header.crop(bbox1)
    img_header.save("public/brand/maxis-logo-header.png", "PNG")

    # 4. Create Footer Logo
    img_footer = Image.new("RGBA", img.size)
    img_footer.putdata(footer_data)
    bbox2 = img_footer.getbbox()
    if bbox2:
        img_footer = img_footer.crop(bbox2)
    img_footer.save("public/brand/maxis-logo-footer.png", "PNG")

if __name__ == "__main__":
    generate_logos()

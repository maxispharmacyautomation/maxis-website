from PIL import Image

def remove_white_bg(img_path, out_path):
    img = Image.open(img_path)
    img = img.convert("RGBA")
    datas = img.getdata()
    
    newData = []
    for item in datas:
        # Check if the pixel is white-ish (threshold 230 to account for anti-aliasing artifacts on pure white background)
        if item[0] > 230 and item[1] > 230 and item[2] > 230:
            # Setting to transparent
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)
            
    img.putdata(newData)
    img.save(out_path, "PNG")

remove_white_bg("public/brand/maxis-logo-v2.png", "public/brand/maxis-logo-transparent.png")

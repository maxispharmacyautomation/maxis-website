from PIL import Image

def remove_bg_and_crop(img_path, out_path):
    img = Image.open(img_path)
    img = img.convert("RGBA")
    datas = img.getdata()
    
    newData = []
    for item in datas:
        # Check if the pixel is white-ish
        if item[0] > 230 and item[1] > 230 and item[2] > 230:
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)
            
    img.putdata(newData)
    
    # Crop to bounding box
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        
    img.save(out_path, "PNG")

remove_bg_and_crop("public/brand/maxis-logo-v2.png", "public/brand/maxis-logo-cropped.png")

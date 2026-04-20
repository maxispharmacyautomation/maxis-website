import os
from PIL import Image
from rembg import remove

def process():
    in_dir = "product images"
    out_dir = "public/products"
    os.makedirs(out_dir, exist_ok=True)

    mappings = {
        "smart pack.jpg": "smart-pack.png",
        "SmartPack Auto.jpg": "smart-pack-auto.png",
        "Tabletop Adherence Pack.jpg": "tabletop-adherencepackrx.png",
        "AdherencePackRx 108.jpg": "adherencepackrx-108.png",
        "MTC-30 Vial Packaging.png": "cretem-mtc-30.png",
        "CAP52Fs.png": "cap52fs.png"
    }

    for in_file, out_file in mappings.items():
        in_path = os.path.join(in_dir, in_file)
        if not os.path.exists(in_path):
            print(f"Skipping {in_file}, not found")
            continue
            
        print(f"Processing {in_file} -> {out_file}")
        out_path = os.path.join(out_dir, out_file)
        
        with open(in_path, 'rb') as i:
            with open(out_path, 'wb') as o:
                input_bytes = i.read()
                try:
                    output_bytes = remove(input_bytes)
                    o.write(output_bytes)
                    print(f"✓ Saved {out_file}")
                except Exception as e:
                    print(f"! Failed {in_file}: {e}")

if __name__ == "__main__":
    process()

const { PDFParse } = require('pdf-parse');
const fs = require('fs');

async function run() {
  try {
    const buf1 = fs.readFileSync('OUR PRODUCTS/CRETEM_MTC-30_Product Information.pdf');
    const buf2 = fs.readFileSync('OUR PRODUCTS/New CAP Profile (3 Vibration FSP, Extendable).pdf');
    
    const parser = new PDFParse();
    const d1 = await parser.parse(buf1);
    const parser2 = new PDFParse();
    const d2 = await parser2.parse(buf2);
    
    fs.writeFileSync('scripts/mtc30_content.txt', d1.text);
    fs.writeFileSync('scripts/cap52fs_content.txt', d2.text);
    
    console.log('MTC30 pages:', d1.numpages);
    console.log('CAP52Fs pages:', d2.numpages);
    console.log('\n--- MTC30 CONTENT ---\n');
    console.log(d1.text.slice(0, 5000));
    console.log('\n--- CAP52Fs CONTENT ---\n');
    console.log(d2.text.slice(0, 5000));
  } catch(e) {
    console.error(e);
  }
}

run();

async function run() {
  try {
    const buf1 = fs.readFileSync('OUR PRODUCTS/CRETEM_MTC-30_Product Information.pdf');
    const buf2 = fs.readFileSync('OUR PRODUCTS/New CAP Profile (3 Vibration FSP, Extendable).pdf');
    
    const d1 = await pdf(buf1);
    const d2 = await pdf(buf2);
    
    fs.writeFileSync('scripts/mtc30_content.txt', d1.text);
    fs.writeFileSync('scripts/cap52fs_content.txt', d2.text);
    
    console.log('MTC30 pages:', d1.numpages);
    console.log('CAP52Fs pages:', d2.numpages);
    console.log('\n--- MTC30 CONTENT ---\n');
    console.log(d1.text.slice(0, 4000));
    console.log('\n--- CAP52Fs CONTENT ---\n');
    console.log(d2.text.slice(0, 4000));
  } catch(e) {
    console.error(e);
  }
}

run();

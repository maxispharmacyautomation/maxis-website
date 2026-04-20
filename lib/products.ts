export type ProductSpec = { label: string; value: string };

export type ProductHighlight = {
  title: string;
  description: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type PouchSpec = {
  pouchSizes: string[];
  barcodeSummary: string;
  softwareSummary: string;
};

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  heroImage: string;
  description: string;
  howItWorks?: string;
  pouchSpec?: PouchSpec;
  specs: ProductSpec[];
  highlights: ProductHighlight[];
  features: string[];
  useCases: string[];
  faqs?: FAQItem[];
};

export const products: Product[] = [
  {
    slug: "smart-pack",
    name: "Smart Pack®",
    tagline: "Tabletop Unit-Dose Packaging System",
    heroImage: "/products/smart-pack.png",
    description:
      "SmartPack® is a reliable and efficient Unit Dose Packaging System designed for oral solid medications. This high-performance solution streamlines the packaging process, eliminating the need for manual packaging and sorting while ensuring accuracy and compliance. With its user-friendly operation and low-maintenance design, SmartPack® provides a cost-effective solution for pharmacies looking to enhance their unit-dose packaging processes.",
    howItWorks:
      "The SmartPack® Unit Dose Packaging System efficiently packages and barcodes tablets up to 55 packs per minute, ensuring accuracy and compliance. Pharmacy staff can securely access the SmartPack® software using various sign-in methods, including biometric authentication, and retrieve drug information from the pre-loaded drug product database. The barcode scanner verifies previously selected drug information, retrieving key details like manufacturing date, expiry date, and lot number. Afterward, the bottle is opened and medications are placed into designated slots in the machine. A pill detection sensor identifies each pill, transferring it to the calibration-free dispensing system, where it is individually labelled and packaged with precision. Finally, a built-in scanner verifies each packet, ensuring the printed information is accurate and scannable for seamless tracking.",
    pouchSpec: {
      pouchSizes: [
        'Supports multiple pouch sizes: 2.0" x 1.10", 1.32", 1.65", and 2.2"',
        "Smart material-saving function that automatically selects the appropriate pouch size based on the medication's dimensions",
      ],
      barcodeSummary:
        "Supports high-resolution 1D and 2D barcodes (Data Matrix, Aztec, QR, GS1). Allows custom barcodes with multiple data fields, text, and dates.",
      softwareSummary:
        "Unit-Dose Packaging System comes with Built-In Smart Print software pre-installed for smooth operation.",
    },
    specs: [
      { label: "Speed", value: "Up to 55 pouches/min" },
      { label: "Pouch Sizes", value: "4 sizes (2.0\" × 1.10\", 1.32\", 1.65\", 2.2\")" },
      { label: "Barcode", value: "GS1, Data Matrix, Aztec, QR" },
      { label: "Calibration", value: "Calibration-free dispensing" },
    ],
    highlights: [
      { title: "55 Packages Per Minute", description: "Efficiently produces up to 55 packages per minute, optimizing productivity in medication packaging workflows." },
      { title: "Calibration-Free Dispensing", description: "Calibration-free dispensing ensures accurate dosage without manual adjustments." },
      { title: "GS1 Barcode Scanner", description: "Extracts manufacturing date, expiration, and lot number from GS1 barcodes, ensuring accurate tracking and traceability." },
      { title: "Packages In Four Sizes", description: 'Offers four package size options (2.0" x 1.10", 1.32", 1.65", 2.2") for versatile medication packaging.' },
      { title: "Built-In Barcode Scanner", description: "Verifies each package's scannability and accuracy, ensuring correct information is encoded." },
      { title: "Customizable Printing", description: "Print instructions on medicine packages in any language with easy-to-use software." },
      { title: "Pill Orientation Technology", description: "Patented pill orientation technology prevents tablet crushing by centering pills within the pouch, away from sealing areas." },
      { title: "Dedicated Customer Support", description: "We provide on-site repairs and assistance to quickly resolve any technical issues." },
    ],
    features: [
      "Automated fill, seal, label, and verify",
      "Pill orientation technology — prevents tablet crushing",
      "Biometric authentication for secure staff access",
      "Calibration-free dispensing system",
      "GS1 barcode verification at every step",
      "Built-in Smart Print software pre-installed",
      "Compact tabletop footprint",
      "Regulatory compliance ready (tamper-evident pouches)",
    ],
    useCases: ["Hospital pharmacies", "Long-Term Care", "Retail pharmacies"],
    faqs: [
      {
        question: "What is a unit dose tabletop pouch packaging machine?",
        answer:
          "A unit dose tabletop pouch packaging machine is a compact, automated system used in pharmacies to package individual doses of medication into single-use pouches. These machines not only fill and seal the pouches but also print labels and barcodes for tracking and identification purposes, ensuring medication accuracy and patient safety.",
      },
      {
        question: "How does the unit dose tabletop pouch packaging machine work?",
        answer:
          "The machine works by filling the pouch with a precise dose of medication (solid oral medication), sealing the pouch using heat to ensure the dose is securely enclosed, and printing labels directly onto the pouches including medication name, dosage instructions, expiration date, and barcodes for easy scanning and tracking.",
      },
      {
        question: "Why is barcode printing important in pharmacy packaging?",
        answer:
          "Barcode printing allows pharmacies to ensure accurate identification of medications, maintain traceability for inventory and patient safety, comply with regulatory standards, and prevent errors in medication administration while enhancing workflow efficiency.",
      },
      {
        question: "Is the Unit Dose Packaging System easy to use?",
        answer:
          "Yes, the SmartPack® is user-friendly with a touchscreen interface, clear instructions, and minimal manual handling required. It is designed to be compact, making it suitable for pharmacies with limited space. Basic training may be required to ensure efficient use.",
      },
      {
        question: "Can the machine handle different pouch sizes?",
        answer:
          "Yes, our unit dose tabletop pouch packaging machines are adjustable and can handle various pouch sizes, accommodating different medication forms (e.g., larger pouches for tablets or smaller pouches for capsules).",
      },
      {
        question: "What is the average speed of the machine?",
        answer:
          "On average, our machines can produce up to 55 pouches per minute, which can vary depending on the medication type.",
      },
      {
        question: "Can the machine be integrated with pharmacy management systems?",
        answer:
          "Yes, our unit dose packaging machines integrate with pharmacy management systems (PMS) to automate the recording of patient-specific information, medications, and barcodes for easy scanning during dispensing.",
      },
      {
        question: "What are the costs?",
        answer:
          "Please contact our sales team for pricing information tailored to your pharmacy's needs.",
      },
    ],
  },
  {
    slug: "smart-pack-auto",
    name: "Smart Pack Auto®",
    tagline: "Automatic Unit Dose Packaging Machine",
    heroImage: "/products/smart-pack-auto.png",
    description:
      "The Smart Pack Auto® is an advanced pharmacy automation system that simplifies medication packaging and labeling. Just load a large box of medication and the automatic Unit Dose Packaging Machine handles packaging, labeling and barcode printing—no manual dose placement needed, unlike the semi-automatic packager.",
    howItWorks:
      "The SmartPack® Automatic Unit Dose Packaging System efficiently packages and barcodes tablets up to 55 packs per minute, ensuring accuracy and compliance. Pharmacy staff securely access the software via biometric authentication and retrieve drug information from the pre-loaded database. The barcode scanner verifies drug information, retrieving manufacturing date, expiry date, and lot number from the medication bottle. Medications are loaded into the machine with no manual dose placement needed. The pill detection sensor identifies each pill and transfers it to the calibration-free dispensing system, where it is individually labelled and packaged with precision. A built-in scanner then verifies each packet for accuracy and scannability.",
    pouchSpec: {
      pouchSizes: [
        'Supports multiple pouch sizes: 2.0" x 1.10", 1.32", 1.65", and 2.2"',
        "Smart material-saving function that automatically selects the appropriate pouch size based on the medication's dimensions",
      ],
      barcodeSummary:
        "Supports high-resolution 1D and 2D barcodes (Data Matrix, Aztec, QR, GS1). Allows custom barcodes with multiple data fields, text, and dates.",
      softwareSummary:
        "Automatic Unit-Dose Packaging Machine comes with Built-In Smart Print software pre-installed for smooth operation.",
    },
    specs: [
      { label: "Speed", value: "Up to 55 pouches/min" },
      { label: "Loading", value: "Bulk tablet loading (no manual placement)" },
      { label: "Barcode", value: "GS1, Data Matrix, Aztec, QR" },
      { label: "Automation", value: "Fully automated robotic dispensing" },
    ],
    highlights: [
      { title: "55 Packages Per Minute", description: "Efficiently produces up to 55 packages per minute, optimizing productivity in medication packaging workflows." },
      { title: "Calibration-Free Dispensing", description: "Calibration-free dispensing ensures accurate dosage without manual adjustments." },
      { title: "GS1 Barcode Scanner", description: "Extracts manufacturing date, expiration, and lot number from GS1 barcodes, ensuring accurate tracking and traceability." },
      { title: "Packages In Four Sizes", description: 'Offers four package size options (2.0" x 1.10", 1.32", 1.65", 2.2") for versatile medication packaging.' },
      { title: "Built-In Barcode Scanner", description: "Verifies each package's scannability and accuracy, ensuring correct information is encoded." },
      { title: "Customizable Printing", description: "Print instructions on medicine packages in any language with easy-to-use software." },
      { title: "Pill Orientation Technology", description: "Patented pill orientation technology prevents tablet crushing by centering pills within the pouch, away from sealing areas." },
      { title: "Dedicated Customer Support", description: "We provide on-site repairs and assistance to quickly resolve any technical issues." },
    ],
    features: [
      "Fully automated bulk loading — no manual dose placement",
      "Pill detection sensor for individual verification",
      "Regulatory Compliance — CDSA guidelines with tamper-evident pouches",
      "Patient & Staff Safety — minimizes contamination risk",
      "Operational Efficiency — automates bulk packaging and reduces waste",
      "Biometric authentication for secure staff access",
      "Calibration-free dispensing system",
      "GS1 barcode verification at every step",
    ],
    useCases: ["Hospital pharmacies", "High-volume centralized fulfillment"],
    faqs: [
      {
        question: "What is an automatic unit dose tabletop pouch packaging machine?",
        answer:
          "A automatic unit dose tabletop pouch packaging machine is a compact, automated system used in pharmacies to package individual doses of medication into single-use pouches automatically—no manual dose placement needed.",
      },
      {
        question: "How does the automatic unit dose tabletop pouch packaging machine work?",
        answer:
          "The machine automatically fills the pouch with a precise dose of medication (solid oral medication), seals the pouch using heat, and prints labels including medication name, dosage instructions, expiration date, and barcodes for easy scanning and tracking.",
      },
      {
        question: "Why is barcode printing important in pharmacy packaging?",
        answer:
          "Barcode printing allows pharmacies to ensure accurate identification of medications, maintain traceability, comply with regulatory standards, and prevent medication errors while enhancing workflow efficiency.",
      },
      {
        question: "Is the Automatic Unit Dose Packaging System easy to use?",
        answer:
          "Yes, it comes with a touchscreen interface and minimal manual handling requirements. Basic training is recommended to ensure efficient and optimal use.",
      },
      {
        question: "What is the average speed?",
        answer:
          "On average, our machines can produce up to 55 pouches per minute.",
      },
      {
        question: "Can it be integrated with pharmacy management systems?",
        answer:
          "Yes, our automatic unit dose packaging machines integrate with pharmacy management systems (PMS) to automate recording of patient-specific information and barcodes for easy scanning during dispensing.",
      },
      {
        question: "What are the costs?",
        answer:
          "Please contact our sales team for pricing information tailored to your pharmacy's needs.",
      },
    ],
  },
  {
    slug: "tabletop-adherencepackrx",
    name: "Tabletop AdherencePackRx",
    tagline: "Semi-Automatic Multi-Dose Packaging Machine",
    heroImage: "/products/tabletop-adherencepackrx.png",
    description:
      "Streamline medication management with our Tabletop AdherencePackRx Packager. Designed for precision and convenience, this innovative solution packs multiple medications taken at the same time into a single pouch, eliminating the hassle of managing individual doses. Its compact, user-friendly design ensures seamless integration into any pharmacy, enhancing efficiency and accuracy. Ideal for patients with complex regimens, it simplifies adherence and promotes better health outcomes.",
    howItWorks:
      "The Tabletop Semi-Automatic Multi-Dose Packager packages up to 30 pouches per minute, with each multi-dose pouch clearly labeled with the medication name, day of the week, date, and time of administration. Pharmacy staff load the medications manually while the machine handles sealing, labeling, and barcode printing automatically.",
    pouchSpec: {
      pouchSizes: [
        '2.2" H × 3" W',
        '3.3" H × 3" W',
      ],
      barcodeSummary:
        "Supports high-resolution 1D and 2D barcodes (Data Matrix, Aztec, QR, GS1). Allows custom barcodes with multiple data fields, medication details, pouch packaging date, pharmacy name & address, and patient name.",
      softwareSummary:
        "Packager comes with Built-In Smartprint software pre-installed for smooth installation and operation.",
    },
    specs: [
      { label: "Speed", value: "Up to 30 pouches/min" },
      { label: "Pouch Sizes", value: '2 sizes — 2.2"H×3"W and 3.3"H×3"W' },
      { label: "Software", value: "Built-In Smartprint" },
      { label: "Power", value: "115VAC / 230VAC, 50-60Hz" },
      { label: "Dimensions", value: '32"H × 32"L × 76"D, ~600 lbs' },
      { label: "PMS Integration", value: "QS1, ComputerRx, PioneerRx" },
    ],
    highlights: [
      { title: "30 Packages Per Minute", description: "Efficiently produces up to 30 packages per minute, optimizing productivity in medication packaging workflows." },
      { title: "Calibration-Free Dispensing", description: "Calibration-free dispensing ensures accurate dosage without manual adjustments." },
      { title: "GS1 Barcode Scanner", description: "Extracts manufacturing date, expiration, and lot number from GS1 barcodes, ensuring accurate tracking and traceability." },
      { title: "Packages In Two Sizes", description: 'Offers two package size options (3.3"H × 3"W, 2.2"H × 3"W) for versatile medication packaging.' },
      { title: "Built-In Barcode Scanner", description: "Verifies each package's scannability and accuracy, ensuring correct information is encoded." },
      { title: "Customizable Printing", description: "Print instructions on medicine packages in any language with easy-to-use software." },
      { title: "Pill Orientation Technology", description: "Patented pill orientation technology prevents tablet crushing by centering pills within the pouch, away from sealing areas." },
      { title: "24/7 Customer Support", description: "Maxis provides 24/7 customer support and two onsite service visits per year to ensure optimal performance." },
    ],
    features: [
      "Semi-automated multi-dose compliance packaging",
      "Clearly labeled pouches with day, date, time, and medication",
      "Compact countertop footprint — fits any pharmacy",
      "Compatible with QS1, ComputerRx, and PioneerRx",
      "GS1 barcode tracking for full traceability",
      "Biometric fingerprint scanner for secure access",
      "Built-In Smartprint software pre-installed",
      "24/7 customer support + two annual onsite visits",
    ],
    useCases: ["Retail pharmacies", "Long-Term Care", "Small to medium-sized pharmacies"],
    faqs: [
      {
        question: "What is the packaging speed of the AdherencePackRx Multi-Dose Packaging Machine?",
        answer:
          "The machine packages up to 30 multi-dose pouches per minute, each clearly labeled with the medication name, day of the week, date, and time of administration.",
      },
      {
        question: "What pouch sizes are available?",
        answer:
          "The AdherencePackRx accommodates two standard pouch sizes: 3.3 inches high by 3 inches wide and 2.2 inches high by 3 inches wide.",
      },
      {
        question: "How does the machine ensure accurate medication dispensing?",
        answer:
          "It features a built-in barcode scanner for safety, GS1 barcode detection, and a biometric fingerprint scanner to ensure secure and accurate dispensing.",
      },
      {
        question: "Is it compatible with existing pharmacy software systems?",
        answer:
          "Yes, it interfaces with various pharmacy software systems, including QS1, ComputerRx, and PioneerRx, facilitating seamless integration into existing workflows.",
      },
      {
        question: "What are the dimensions and weight?",
        answer:
          "The machine has dimensions of 32 inches in height, 32 inches in length, and 76 inches in depth, and it weighs approximately 600 pounds.",
      },
      {
        question: "What are the power requirements?",
        answer:
          "The machine operates on 115VAC, 60Hz, 320VA, and 230VAC, 50Hz, 320VA power sources.",
      },
      {
        question: "What support services are available?",
        answer:
          "Maxis Pharmacy Automation provides 24/7 customer support and offers two onsite service visits per year to ensure optimal performance.",
      },
    ],
  },
  {
    slug: "adherencepackrx-108",
    name: "AdherencePackRx 108",
    tagline: "Multi-Dose Compliance Packaging Machine",
    heroImage: "/products/adherencepackrx-108.png",
    description:
      "Experience advanced pharmacy automation with our AdherencePackRx 108 Multi-Dose Compliance Packager. Designed to streamline operations, this cutting-edge solution automates the packaging of multiple medications into a single pouch with unparalleled precision. Unlike manual systems, this advanced packager features dedicated canisters, each assigned to a specific medication. Once programmed via the intuitive software, the system automatically selects and dispenses the correct medicines from the canisters into the pouch, based on prescribed combinations.",
    howItWorks:
      "The AdherencePackRx 108 Multi-Dose Compliance Packer packages 40 pouches per minute, with each pouch clearly labeled with the medication name, day of the week, date, and time of administration. Once programmed, the system automatically selects and dispenses the correct medicines from dedicated canisters into the pouch, based on prescribed combinations — no manual sorting required.",
    pouchSpec: {
      pouchSizes: [
        '3.3" H × 3" W (standard)',
        '2.2" H × 3" W',
      ],
      barcodeSummary:
        "Supports high-resolution 1D and 2D barcodes (Data Matrix, Aztec, QR, GS1). Allows custom barcodes with multiple data fields, medication details, pouch packaging date, pharmacy name & address, and patient name.",
      softwareSummary:
        "Packager comes with Built-In Smartprint software pre-installed for smooth installation and operation.",
    },
    specs: [
      { label: "Speed", value: "40 pouches/min" },
      { label: "Canisters", value: "108 dedicated smart canisters" },
      { label: "Pouch Sizes", value: '2 sizes — 2.2"H×3"W and 3.3"H×3"W' },
      { label: "Barcode", value: "GS1, Data Matrix, Aztec, QR" },
      { label: "PMS Integration", value: "QS1, ComputerRx, PioneerRx" },
      { label: "Power", value: "115VAC / 230VAC, 50-60Hz" },
    ],
    highlights: [
      { title: "40 Packages Per Minute", description: "Efficiently produces up to 40 packages per minute, optimizing productivity in medication packaging workflows." },
      { title: "108 Dedicated Canisters", description: "Each canister is assigned to a specific medication, ensuring automated, error-free dispensing at scale." },
      { title: "GS1 Barcode Scanner", description: "Extracts manufacturing date, expiration, and lot number from GS1 barcodes, ensuring accurate tracking and traceability." },
      { title: "Packages In Two Sizes", description: 'Offers two package size options (3.3"H × 3"W, 2.2"H × 3"W) for versatile medication packaging.' },
      { title: "Calibration-Free Canister", description: "Calibration-free canister ensures accurate dosage without manual adjustments." },
      { title: "Customizable Printing", description: "Print instructions on medicine packages in any language with easy-to-use software." },
      { title: "Pill Orientation Technology", description: "Patented pill orientation technology prevents tablet crushing by centering pills within the pouch, away from sealing areas." },
      { title: "Dedicated Customer Support", description: "We provide on-site repairs and assistance to quickly resolve any technical issues." },
    ],
    features: [
      "108 dedicated intelligent canisters for automated dispensing",
      "40 pouches per minute — high-capacity throughput",
      "Fully automated selection based on prescribed combinations",
      "Compatible with QS1, ComputerRx, and PioneerRx",
      "GS1 barcode verification for full traceability",
      "Built-In Smartprint software pre-installed",
      "Customizable pouch labeling (day, date, time, medication)",
      "On-site repairs and dedicated technical support",
    ],
    useCases: ["Long-Term Care", "High-volume retail pharmacies", "Complex multi-drug regimen management"],
    faqs: [
      {
        question: "What pouch sizes are available?",
        answer:
          "The AdherencePackRx 108 offers two standard pouch sizes: 3.3 inches high by 3 inches wide and 2.2 inches high by 3 inches wide.",
      },
      {
        question: "How does the machine ensure accurate medication dispensing?",
        answer:
          "The machine features a GS1 barcode scanner that extracts manufacturing date, expiration, and lot number from GS1 barcodes, ensuring accurate tracking and traceability. Each canister is dedicated to a specific medication.",
      },
      {
        question: "Is it compatible with existing pharmacy software systems?",
        answer:
          "Yes, it integrates seamlessly with various pharmacy software systems, including QS1, ComputerRx, and PioneerRx.",
      },
      {
        question: "What are the dimensions and weight?",
        answer:
          "The machine has dimensions of 14 inches in height, 26 inches in length, and 15 inches in depth, and it weighs approximately 60 pounds, making it suitable for countertop placement.",
      },
      {
        question: "What are the power requirements?",
        answer:
          "The AdherencePackRx 108 operates on both 115VAC, 60Hz, 320VA, and 230VAC, 50Hz, 320VA power sources.",
      },
      {
        question: "How does the machine handle labeling and barcode printing?",
        answer:
          "It supports high-resolution 1D and 2D barcodes (Data Matrix, Aztec, QR, GS1) and allows custom barcodes with multiple data fields including medication details, pouch packaging date, pharmacy name and address, and patient name.",
      },
      {
        question: "What support services are available?",
        answer:
          "Maxis Pharmacy Automation provides dedicated customer support, including on-site repairs and assistance to quickly resolve any technical issues.",
      },
    ],
  },
  {
    slug: "cretem-mtc-30",
    name: "MTC30 Vial Packaging",
    tagline: "Compact Multi-Counter for Bottle Packing",
    heroImage: "/products/cretem-mtc-30.png",
    description:
      "The CRETEM MTC-30 is a high-speed, semi-automated multi-counter packager (multi tablet counter) engineered for precision vial/bottle dispensing. It controls 30 cassettes and can extend to a maximum of 90 cassettes, enabling fast-dispensing within 30 seconds for multiple prescriptions simultaneously.",
    howItWorks:
      "Prescription orders are received from OCS, HIS, or PMS. The operator places a cup into position and sends the order to the MTC. The MTC starts multiple orders at the same time — 'Dispensing' is shown on the touch panel. Labels print out in the order they are processed. When all orders are complete, 'Wait Bottle Out' appears on the touch panel. The operator removes each cup and fills each bottle with the dispensed tablets. Order status changes to 'Checked By' — the user confirms and attaches the label to each bottle. Finally, the barcode on the completed bottle label is scanned for verification.",
    specs: [
      { label: "Product Name", value: "CRETEM MTC-30 (Multi Tablet Counter)" },
      { label: "Cassette Qty", value: "30 Cassettes (extendable to max 90)" },
      { label: "Speed", value: "Max 290 pills / minute" },
      { label: "Dispensing Time", value: "Fast dispensing within 30 seconds" },
      { label: "Detection", value: "Infrared Photo-detection" },
      { label: "Storage", value: "Cabinet type with cassettes" },
      { label: "Packing Method", value: "Direct drop into cup or user's bottle" },
      { label: "Dimensions", value: "808mm × 180mm × 1,220mm (31.8\" × 7.1\" × 48\") per unit" },
      { label: "Weight", value: "60 kg (132 lb)" },
      { label: "Power Consumption", value: "100W (Max 500W)" },
      { label: "Power Supply", value: "220V/60Hz (Korea) | 120V/60Hz (USA) | 230-240V/50Hz (Europe)" },
      { label: "Controller", value: "Microsoft Surface Go or Touch Panel (Windows 10) — Optional" },
      { label: "Communication", value: "RS422" },
    ],
    highlights: [
      { title: "290 Pills Per Minute", description: "High-speed dispensing at up to 290 pills per minute across multiple prescriptions simultaneously." },
      { title: "Multi-Counter Packing", description: "Simultaneously packs multiple orders at the same time, dramatically boosting pharmacy throughput." },
      { title: "Fast 30-Second Dispensing", description: "Complete order dispensing within 30 seconds per prescription, maximizing efficiency." },
      { title: "Modular Expansion", description: "Expandable from 30 to max 90 cassettes with 2 additional extender units — no software changes needed." },
      { title: "Infrared Photo-Detection", description: "High-accuracy infrared detection ensures every tablet is counted correctly before dispensing." },
      { title: "PMS / HIS / OCS Integration", description: "Seamlessly receives prescriptions from Order Communication, Hospital Information, or Pharmacy Management Systems." },
      { title: "Compact Table-Top", description: "Space-efficient cabinet-style design fits on a standard pharmacy countertop without a large footprint." },
      { title: "Barcode Verification", description: "Barcode scanning at the final step confirms order accuracy and allows label attachment with full traceability." },
    ],
    features: [
      "Simultaneous multi-counter bottle packing for multiple orders",
      "30 cassettes standard — extendable to max 90 cassettes",
      "Fast dispensing within 30 seconds per prescription",
      "Infrared photo-detection for high-accuracy tablet counting",
      "Direct drop into cup or user bottle — flexible packing method",
      "Barcode label printing and scan verification per order",
      "Integrates with OCS, HIS, and PMS systems via RS422",
      "Optional Microsoft Surface Go touch panel control",
    ],
    useCases: ["Retail pharmacies", "Outpatient pharmacies", "Hospital pharmacies"],
    faqs: [
      {
        question: "How many cassettes does the MTC-30 support?",
        answer: "The MTC-30 comes standard with 30 cassettes and can be extended to a maximum of 90 cassettes using 2 additional extender units — all controlled by a single software instance.",
      },
      {
        question: "How fast does the MTC-30 dispense?",
        answer: "The MTC-30 achieves a maximum dispensing speed of 290 pills per minute, with each full order completed within 30 seconds.",
      },
      {
        question: "What pharmacy systems does the MTC-30 integrate with?",
        answer: "The MTC-30 integrates with OCS (Order Communication System), HIS (Hospital Information System), and PMS (Pharmacy Management System) via RS422 communication.",
      },
      {
        question: "What control interface does it use?",
        answer: "The MTC-30 is operated via an optional Microsoft Surface Go 2 LTE (or higher) touch panel running Windows 10 Professional, connected via USB to RS232C.",
      },
      {
        question: "What is the recommended barcode scanner?",
        answer: "The recommended barcode scanner is the ZEBRA SYMBOL-DS2208, supporting 1D/2D and PDF417 scan types, compatible with PS/2, USB, and RS232C interfaces.",
      },
      {
        question: "What label printer is recommended?",
        answer: "The recommended label printer is the ZEBRA GK420E with 203 dpi resolution, supporting USB, RS-232C, and Ethernet connectivity, with a max print speed of 152mm/sec.",
      },
      {
        question: "What are the power requirements?",
        answer: "The MTC-30 operates at 100W (max 500W) and supports 220V/60Hz (Korea), 120V/60Hz (USA), and 230-240V/50Hz (Europe) power supplies.",
      },
    ],
  },
  {
    slug: "cap52fs",
    name: "CAP52Fs",
    tagline: "Extendable Smart Cassette System",
    heroImage: "/products/cap52fs.png",
    description:
      "The CAP52Fs is a modular, floor-standing smart cassette dispensing system featuring advanced 3-Vibration FSP technology for ultra-precision medication dispensing. Designed for scalable pharmacy automation, it supports structural extension from a 52-cassette base unit (CAP-52) all the way up to 92 cassettes (CAP-92), using modular A, B, and C block configurations — all managed under one unified platform.",
    howItWorks:
      "The CAP52Fs uses Smart Cassette technology with 3-Vibration FSP mechanics to precisely dispense individual medications. The base A Block houses the core engineering components, while additional A Blocks extend cassette capacity. The C Block is the management unit with the control interface, and the B Block serves as the base/floor support. The system is modular by design — adding extender blocks scales the unit seamlessly from 52 to 72 to 92 cassettes without replacing the fundamental architecture.",
    specs: [
      { label: "Base Model", value: "CAP(EX)-52 — 670 × 490 × 1,677 mm (A+C+B)" },
      { label: "Extended Model 1", value: "CAP(EX)-72 — 670 × 490 × 1,854 mm (A+A+C+B)" },
      { label: "Extended Model 2", value: "CAP(EX)-92 — 670 × 490 × 2,030 mm (A+A+A+C+B)" },
      { label: "Mechanism", value: "3-Vibration FSP (Flexible Smart Plate)" },
      { label: "Cassette Type", value: "Smart Cassette (modular, individually addressable)" },
      { label: "Block System", value: "A Block (core) + B Block (base) + C Block (control)" },
      { label: "Scalability", value: "Extendable from 52 to 72 to 92 cassettes" },
    ],
    highlights: [
      { title: "3-Vibration FSP Technology", description: "Advanced 3-Vibration Flexible Smart Plate mechanics provide ultra-precise, reliable medication dispensing at every cassette slot." },
      { title: "Three Scalable Configurations", description: "Choose from CAP-52, CAP-72, or CAP-92 configurations — physically extend the unit as your volume grows." },
      { title: "Smart Cassette System", description: "Individually addressable Smart Cassettes allow per-slot medication tracking and management across all configuration sizes." },
      { title: "Modular A/B/C Block Design", description: "The unit is composed of interchangeable A (core), B (base), and C (control) blocks — making expansion as simple as adding a block." },
      { title: "Single Platform Control", description: "One unified control interface manages all cassette slots across all extension configurations without additional software licenses." },
      { title: "Compact Width for Floor Standing", description: "At just 670mm wide, the CAP52Fs fits into floor-standing pharmacy environments without occupying excessive floor space." },
      { title: "High-Density Dispensing", description: "Supports high-density dispensing workflows serving retail, outpatient, and hospital pharmacies at scale." },
      { title: "Future-Proof Investment", description: "Invest once in the base unit and scale as your pharmacy grows — no need to replace the entire system to increase capacity." },
    ],
    features: [
      "3-Vibration FSP for ultra-precision dispensing",
      "Base: 52 cassettes — scalable to 72 or 92 cassettes",
      "Modular A/B/C block physical expansion system",
      "Individually addressable Smart Cassette slots",
      "Single unified software manages all configurations",
      "Floor-standing, compact 670mm width design",
      "High-density cassette layout for large medication libraries",
      "Future-proof — add capacity without replacing the base unit",
    ],
    useCases: ["Hospital pharmacies", "High-volume retail pharmacies", "Outpatient dispensing centers"],
    faqs: [
      {
        question: "What is the CAP52Fs and how does it differ from CAP72 and CAP92?",
        answer: "The CAP52Fs is the base configuration with 52 cassettes (A+C+B blocks, 1,677mm tall). The CAP72 adds one more A Block (A+A+C+B, 1,854mm) for 72 cassettes. The CAP92 adds two additional A Blocks (A+A+A+C+B, 2,030mm) for 92 cassettes. All three are physically the same width (670mm × 490mm).",
      },
      {
        question: "What is 3-Vibration FSP technology?",
        answer: "3-Vibration FSP (Flexible Smart Plate) is an advanced mechanical actuation technology that uses precisely controlled vibration patterns to accurately and reliably dispense individual tablets from each Smart Cassette slot without jamming or double-dispensing.",
      },
      {
        question: "Can I expand from a CAP52Fs to a CAP72 or CAP92 later?",
        answer: "Yes. The modular A/B/C block system is specifically designed to allow physical expansion. You can add A Block extender units to scale from 52 to 72 or 92 cassettes without replacing the base hardware or software.",
      },
      {
        question: "How many medications can the CAP92 configuration hold?",
        answer: "The CAP92 configuration holds up to 92 individually addressable Smart Cassette positions, each assigned to a specific medication.",
      },
      {
        question: "What type of medications does the CAP52Fs support?",
        answer: "The CAP52Fs Smart Cassette system is designed for solid oral medications (tablets and capsules) with precise per-slot medication assignment.",
      },
      {
        question: "Is one software platform used for all configurations?",
        answer: "Yes. A single unified control platform manages all cassette slots across all configuration sizes (CAP-52, CAP-72, CAP-92) with no additional license required for expansion.",
      },
    ],
  },
];

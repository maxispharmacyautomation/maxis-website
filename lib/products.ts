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

export type ProductModelTable = {
  models: string[];
  rows: { label: string; values: string[] }[];
};

export type ProductAnatomyItem = {
  name: string;
  description: string;
};

export type ProductCta = {
  title: string;
  description: string;
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
  modelTable?: ProductModelTable;
  anatomy?: ProductAnatomyItem[];
  cta?: ProductCta;
  relatedSlugs?: string[];
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
  {
    slug: "tablet-counter",
    name: "Tablet Counter",
    tagline: "Compact Infrared Tablet Counting Station",
    heroImage: "/products/tablet-counter.jpeg",
    description:
      "The Tablet Counter is a compact benchtop station for fast, accurate counting of oral solid medications. Infrared photodetection verifies every tablet as it is counted, so pharmacy staff can move from bottle to vial without the fatigue and error risk of manual counting. At up to 280 tablets per minute, it fits on a standard counter and draws just 4.5 watts.",
    howItWorks:
      "Pharmacy staff place tablets into the unit and enter the target quantity on the numeric keypad, or select a full-count cycle. Infrared photodetection tracks each tablet as it passes through the counting path. Counted tablets drop into the removable transparent collection bin at the front of the station. The display confirms the running count so the next batch can start immediately. Start, Stop, List, and ALL controls keep routine counting, batch lists, and full-bottle counts within a few button presses.",
    specs: [
      { label: "Speed", value: "Max 280 tablets/min" },
      { label: "Detection", value: "Infrared photodetection" },
      { label: "Dimensions", value: '130 × 175 × 230 mm (5.1" × 6.9" × 9.1")' },
      { label: "Weight", value: "10 kg (22 lb)" },
      { label: "Power Consumption", value: "4.5W" },
      { label: "Power Supply", value: "AC 110–220V, 50/60Hz" },
    ],
    highlights: [
      { title: "280 Tablets Per Minute", description: "Count up to 280 tablets per minute — fast enough for retail fill lines and hospital batch work without a large automation footprint." },
      { title: "Infrared Photodetection", description: "Each tablet is verified optically as it is counted, reducing missed tablets and double-counts common in manual tray counting." },
      { title: "Countertop Compact", description: "At 130 × 175 × 230 mm and 10 kg, the station sits on a standard pharmacy counter without a dedicated room or floor pad." },
      { title: "4.5W Operation", description: "Very low power draw means the unit can run all day on a standard outlet with negligible energy cost." },
      { title: "Set Count or Full Count", description: "Enter a target quantity on the keypad, run a full-bottle ALL count, or work from a saved list — without changing hardware." },
      { title: "Removable Collection Bin", description: "A transparent front bin with handle lets staff see the count, then lift the batch straight into a vial or cup." },
      { title: "Global Power Range", description: "Accepts AC 110–220V at 50/60Hz, so the same station can be installed in Canadian, US, and international pharmacies." },
      { title: "Simple Keypad Controls", description: "Numeric keypad plus List, ALL, Start, and Stop keep training short for technicians who already know vial filling." },
    ],
    features: [
      "Infrared photodetection for tablet-by-tablet verification",
      "Maximum counting speed of 280 tablets per minute",
      "Numeric keypad with List, ALL, Start, and Stop controls",
      "Removable transparent collection bin with front handle",
      "Compact 10 kg benchtop body — no floor space required",
      "4.5W power consumption on AC 110–220V, 50/60Hz",
      "Dual numeric display for running count at a glance",
      "Ideal companion to vial filling and cassette replenishment workflows",
    ],
    useCases: ["Retail pharmacies", "Hospital outpatient filling", "Cassette and vial replenishment"],
    faqs: [
      {
        question: "How fast does the Tablet Counter count?",
        answer: "The station counts at a maximum of 280 tablets per minute, depending on tablet size and flow. That is typically several times faster than a manual tray count for the same bottle.",
      },
      {
        question: "How does it verify each tablet?",
        answer: "Infrared photodetection watches the counting path and registers each tablet as it passes. This optical check is what allows high speed without relying on a technician to watch every tablet land.",
      },
      {
        question: "Can I count a specific quantity as well as a full bottle?",
        answer: "Yes. Enter the target quantity on the keypad and press Start for a set count, or use ALL to count an entire bottle. List is available when you need to work through multiple quantities in sequence.",
      },
      {
        question: "How much counter space does it need?",
        answer: 'The main body is 130 mm wide, 175 mm deep, and 230 mm high (about 5.1" × 6.9" × 9.1") and weighs 10 kg. It is designed to sit on a standard pharmacy counter beside a vial-filling station.',
      },
      {
        question: "What are the power requirements?",
        answer: "The Tablet Counter draws 4.5W and accepts AC 110–220V at 50/60Hz, so it can be plugged into typical North American and international pharmacy outlets.",
      },
      {
        question: "Is this a replacement for a multi-cassette vial packager?",
        answer: "No. The Tablet Counter is a compact counting station for one medication at a time. For simultaneous multi-prescription vial filling, see the MTC30 Vial Packaging system. Many pharmacies use both — the counter for ad-hoc fills and cassette restocking, the MTC30 for high-volume vial lines.",
      },
      {
        question: "How do I get pricing or a demo?",
        answer: "Contact our sales team for pricing tailored to your pharmacy. We can also schedule a live demonstration of the counting workflow on your typical tablet sizes.",
      },
    ],
    cta: {
      title: "Count faster without giving up counter space",
      description: "See the Tablet Counter run a set-quantity and full-bottle count on your typical oral solids. We'll walk through speed, accuracy, and how it sits beside your current vial-filling bench.",
    },
    relatedSlugs: ["cretem-mtc-30", "60mdu-prefill-station", "smart-pack"],
  },
  {
    slug: "ap-md-model",
    name: "AP MD Model",
    tagline: "High-Capacity Multi-Dose Packaging System",
    heroImage: "/products/ap-md-model.jpeg",
    description:
      "The AP MD Model is a floor-standing intelligent tablet packing system for pharmacies that need a large on-board medication library and multi-dose pouch output. Choose 300, 360, or 480 cassettes, each with small, medium, and large cassette mixes. A 17-inch Windows 10 touch panel runs the line, while infrared photodetection verifies every tablet. B-series configurations add Free Shape Packing and a 60-cell Manual Divide Unit for half-tablets, irregular shapes, and medications that are not assigned to a cassette.",
    howItWorks:
      "Pharmacy staff load medications into locked single-drawer drug cassettes sized small, medium, or large. Prescriptions arrive through an order communication system (OCS) link or are entered on the 17-inch industrial PC touch screen. Infrared photodetection verifies each tablet as it is dispensed into the packing path. The printing and packing system applies thermal-transfer text with no character or font-size limit onto 75 mm × 70 mm pouches. Finished pouches exit through the pouch outlet, with optional FSP and 60-cell MDU handling non-cassette and irregular medications.",
    pouchSpec: {
      pouchSizes: [
        "Standard wrapping paper: 75 mm × 70 mm",
        "Thermal-transfer printing with no character or font-size limit",
      ],
      barcodeSummary:
        "Pouches are produced by the integrated printing and packing system. Orders can be received from an OCS linkage or entered internally on the Windows 10 control panel.",
      softwareSummary:
        "Windows 10 industrial PC with a 17-inch touch screen, audio status messages, and an emergency stop on the front panel.",
    },
    specs: [
      { label: "Cassette Range", value: "300, 360, or 480 cassettes" },
      { label: "Speed", value: "Max 60 unit-dose pouches/min; avg 55 multi-dose" },
      { label: "Control", value: 'Windows 10, 17" touch screen' },
      { label: "Detection", value: "Infrared photodetection" },
      { label: "Pouch Size", value: "75 mm × 70 mm" },
      { label: "Printing", value: "Thermal transfer — no character/font limit" },
      { label: "Input", value: "OCS linkage or internal input" },
      { label: "B-Series Options", value: "1 FSP + 60-cell MDU" },
      { label: "Power Consumption", value: "500W (max 1000W)" },
      { label: "Power Supply", value: "220V (KR) / 120V (US) / 230–240V (EU)" },
    ],
    highlights: [
      { title: "Up to 480 Cassettes", description: "Three cabinet sizes — 300, 360, or 480 cassettes — keep a large active formulary inside the packager instead of on open shelves." },
      { title: "60 Unit-Dose Pouches / Min", description: "Maximum packing speed of 60 unit-dose pouches per minute, with an average of 55 pouches per minute on multi-dose runs." },
      { title: "17-Inch Touch Control", description: "A 17-inch Windows 10 industrial PC on a swivel arm gives technicians a full-size interface for order review, cassette status, and packing control." },
      { title: "A or B Configuration", description: "A-series units are cassette-only. B-series units add one Free Shape Packing module and a 60-cell Manual Divide Unit for non-cassette medications." },
      { title: "Infrared Photodetection", description: "Every tablet is optically verified as it leaves its cassette, supporting accurate unit-dose and multi-dose pouch fills." },
      { title: "Individual Drawer Locks", description: "Each cassette drawer locks independently so high-alert and controlled medications stay secured inside the cabinet." },
      { title: "Unlimited Pouch Print", description: "Thermal-transfer printing on 75 mm × 70 mm pouches has no character or font-size limit, so labels can carry full drug, patient, and administration detail." },
      { title: "OCS or Internal Input", description: "Orders flow from an order communication system or can be entered directly on the machine when a host link is not in use." },
    ],
    features: [
      "300, 360, or 480 dedicated cassettes in small, medium, and large sizes",
      "Cabinet-type storage with cassettes in single drawers and individual locks",
      "Windows 10 control with a 17-inch industrial touch screen",
      "Infrared photodetection on every dispensed tablet",
      "Thermal-transfer pouch printing with no character or font-size limit",
      "Optional Free Shape Packing for irregular and half tablets (B-series)",
      "Optional 60-cell Manual Divide Unit for prefilled non-cassette medications (B-series)",
      "Emergency stop, audio status messages, medicine collection box, and pouch outlet",
    ],
    useCases: ["Hospital pharmacies", "Long-term care central fill", "High-volume multi-dose programs"],
    modelTable: {
      models: ["AP-300MD-A", "AP-300MD-B", "AP-360MD-A", "AP-360MD-B", "AP-480MD-A", "AP-480MD-B"],
      rows: [
        { label: "Cassettes", values: ["300", "300", "360", "360", "480", "480"] },
        { label: "Cassette mix (S / M / L)", values: ["132 / 120 / 48", "132 / 120 / 48", "156 / 144 / 60", "156 / 144 / 60", "208 / 192 / 80", "208 / 192 / 80"] },
        { label: "FSP", values: ["No", "1 FSP", "No", "1 FSP", "No", "1 FSP"] },
        { label: "MDU", values: ["No", "60 MDU", "No", "60 MDU", "No", "60 MDU"] },
        { label: "Dimensions (W × D × H, mm)", values: ["896 × 1070 × 2021", "896 × 1070 × 1907", "896 × 1070 × 2021", "896 × 1070 × 1907", "1174 × 1070 × 2141", "1174 × 1070 × 2027"] },
        { label: "Weight", values: ["650 kg", "670 kg", "650 kg", "670 kg", "800 kg", "820 kg"] },
      ],
    },
    anatomy: [
      { name: "Drug cassettes", description: "Upper cabinet holds small, medium, and large cassettes in single drawers, with individual drawer locks for secured access." },
      { name: "17\" control panel", description: "Industrial PC with a 17-inch touch screen on a swivel arm for order entry, cassette status, and packing control." },
      { name: "FSP (optional)", description: "Free Shape Packing handles half-tablets, irregular shapes, and medications that do not have a dedicated cassette. Fitted on B-series units." },
      { name: "MDU (optional)", description: "60-cell Manual Divide Unit accepts prefilled non-cassette medications. Pair with the 60MDU Prefill Station for high-volume tray prep." },
      { name: "Printing & packing", description: "Lower cabinet houses thermal-transfer printing and pouch sealing for 75 mm × 70 mm wrapping paper." },
      { name: "Pouch outlet & E-stop", description: "Finished pouches exit at the base of the cabinet. A front-panel emergency stop and audio messages support safe, attended operation." },
    ],
    faqs: [
      {
        question: "What is the difference between A-series and B-series AP MD units?",
        answer: "A-series units are cassette-only. B-series units add one Free Shape Packing (FSP) module and a 60-cell Manual Divide Unit (MDU) so the same cabinet can pack cassette medications plus half-tablets, irregular shapes, and drugs that are not assigned to a cassette.",
      },
      {
        question: "How many cassettes can I specify?",
        answer: "Three capacities are available: AP-300MD (300 cassettes: 132 small, 120 medium, 48 large), AP-360MD (360: 156 / 144 / 60), and AP-480MD (480: 208 / 192 / 80). Each capacity is offered in both A and B configurations.",
      },
      {
        question: "How fast does the AP MD pack?",
        answer: "Maximum packing speed is 60 unit-dose pouches per minute. Multi-dose runs average 55 pouches per minute.",
      },
      {
        question: "What pouch size and printing does it use?",
        answer: "Wrapping paper is 75 mm × 70 mm. Printing is thermal transfer with no limit on the number of characters or font size, so pouch text can include full medication, patient, and administration detail.",
      },
      {
        question: "How do orders reach the machine?",
        answer: "The AP MD accepts orders through an OCS (order communication system) linkage or by internal input on the 17-inch Windows 10 touch panel.",
      },
      {
        question: "What are the power requirements?",
        answer: "Typical consumption is 500W (maximum 1000W). Power supply options are 220V/60Hz (Korea), 120V/60Hz (US), and 230V/240V/50Hz (Europe).",
      },
      {
        question: "Does the 60-cell MDU work with a separate prefill station?",
        answer: "Yes. B-series AP MD units include a 60-cell MDU. The 60MDU Prefill Station is designed to load those 60 cells in advance so the packager is not waiting on manual cell filling during a run.",
      },
    ],
    cta: {
      title: "Size the AP MD to your formulary",
      description: "We'll map your active medications to 300, 360, or 480 cassettes and show whether A-series or B-series (FSP + 60 MDU) matches how you handle half-tablets and non-cassette drugs.",
    },
    relatedSlugs: ["ap-model", "wap-model", "60mdu-prefill-station"],
  },
  {
    slug: "ap-model",
    name: "AP Model",
    tagline: "Intelligent Tablet Packing System",
    heroImage: "/products/ap-model.jpeg",
    description:
      "The AP Model is a floor-standing intelligent tablet packing system with a T-slide cassette design for fast replenishment. Five configurations — from 207 to 500 cassettes — share the same packing engine: infrared photodetection, thermal-transfer pouch printing, and up to 60 unit-dose pouches per minute. Every unit can be specified with one or two Free Shape Packing modules and a 30- or 60-cell Manual Divide Unit, so irregular shapes and non-cassette medications stay on the same line.",
    howItWorks:
      "Technicians replenish small, medium, and large drug cassettes through the T-slide system without pulling the entire drawer stack. Prescriptions arrive from an OCS linkage or internal input on the 10.1-inch Windows 10 touch panel. Infrared photodetection verifies each tablet as it is dispensed. The printing and packing system seals 75 mm × 70 mm pouches, or 55 mm × 50 mm pouches when ordered, with thermal-transfer text that has no character or font-size limit. FSP modules pack free-shape and half tablets; the MDU covers manual-divide medications; finished pouches exit at the pouch outlet.",
    pouchSpec: {
      pouchSizes: [
        "Standard wrapping paper: 75 mm × 70 mm",
        "Optional wrapping paper: 55 mm × 50 mm (by order)",
      ],
      barcodeSummary:
        "Thermal-transfer printing supports unlimited characters and font sizes on each pouch. Orders can be received from an OCS linkage or entered internally.",
      softwareSummary:
        "Windows 10 control with a 10.1-inch touch screen, audio status messages, and a front-panel emergency stop.",
    },
    specs: [
      { label: "Cassette Range", value: "207, 267, 336, 405, or 500 cassettes" },
      { label: "Speed", value: "Max 60 unit-dose pouches/min; avg 55 multi-dose" },
      { label: "Control", value: 'Windows 10, 10.1" touch screen' },
      { label: "Detection", value: "Infrared photodetection" },
      { label: "Pouch Size", value: "75 × 70 mm or 55 × 50 mm by order" },
      { label: "FSP", value: "1 or 2 Free Shape Packing modules" },
      { label: "MDU", value: "30-cell or 60-cell" },
      { label: "Input", value: "OCS linkage or internal input" },
      { label: "Power Consumption", value: "500W (max 1000W)" },
      { label: "Power Supply", value: "220V/60Hz (KR) | 120V/60Hz (US) | 230–240V/50Hz (EU)" },
    ],
    highlights: [
      { title: "T-Slide Cassette System", description: "The T-slide design is built for easy replenishment — staff can restock cassettes without disrupting the packing cycle or pulling an entire cabinet face." },
      { title: "Five Capacity Steps", description: "AP-207FS, AP-267FS, AP-336FS, AP-405FS, and AP-500FS cover 207 to 500 cassettes so you can match formulary size without over-buying floor space." },
      { title: "60 Pouches Per Minute", description: "Maximum packing speed of 60 unit-dose pouches per minute, averaging 55 pouches per minute on multi-dose runs." },
      { title: "FSP + MDU on Every Model", description: "Specify 1 or 2 Free Shape Packing modules and a 30- or 60-cell Manual Divide Unit on any AP configuration — not only on a premium SKU." },
      { title: "Two Pouch Sizes", description: "Standard 75 mm × 70 mm wrapping paper, with 55 mm × 50 mm available by order for smaller unit-dose presentations." },
      { title: "Infrared Photodetection", description: "Optical verification of each tablet supports accurate unit-dose and multi-dose pouch fills across the full cassette mix." },
      { title: "Unlimited Thermal Print", description: "Thermal-transfer printing has no character or font-size limit, so pouch text can carry full drug, patient, and time-of-administration detail." },
      { title: "FND + Standard Cassettes", description: "The upper cabinet combines standard drug cassettes with FND cassettes so high-frequency medications stay in the densest part of the grid." },
    ],
    features: [
      "T-slide cassette system designed for easy replenishment",
      "207 to 500 cassettes in small, medium, and large sizes",
      "Cabinet-type storage with cassettes in each single drawer",
      "Windows 10 control with a 10.1-inch touch screen",
      "Infrared photodetection on every dispensed tablet",
      "1 or 2 Free Shape Packing modules with dedicated FSP printer",
      "30-cell or 60-cell Manual Divide Unit",
      "Emergency stop, audio messages, and integrated printing & packing cabinet",
    ],
    useCases: ["Hospital pharmacies", "Central fill", "Retail multi-dose programs"],
    modelTable: {
      models: ["AP-207FS", "AP-267FS", "AP-336FS", "AP-405FS", "AP-500FS"],
      rows: [
        { label: "Cassettes", values: ["207", "267", "336", "405", "500"] },
        { label: "Cassette mix (S / M / L)", values: ["69 / 69 / 69", "129 / 69 / 69", "198 / 69 / 69", "267 / 69 / 69", "316 / 92 / 92"] },
        { label: "Dimensions (W × D × H, mm)", values: ["840 × 1030 × 1700", "840 × 1030 × 1700", "840 × 1030 × 1846", "840 × 1030 × 2100", "1100 × 1030 × 2100"] },
        { label: "Weight", values: ["520 kg", "540 kg", "580 kg", "620 kg", "800 kg"] },
      ],
    },
    anatomy: [
      { name: "Drug & FND cassettes", description: "Upper grid stores small, medium, and large cassettes, including FND positions for high-frequency medications." },
      { name: "T-slide system", description: "Advanced T-slide mechanics let staff replenish cassettes quickly from the cabinet face without a full drawer teardown." },
      { name: "Control panel", description: "Windows 10 industrial PC with a 10.1-inch touch screen for order input, cassette status, and packing control." },
      { name: "FSP printer & FSP", description: "One or two Free Shape Packing modules, with a dedicated FSP printer, pack half-tablets and irregular shapes that do not fit a standard cassette." },
      { name: "MDU", description: "30-cell or 60-cell Manual Divide Unit for medications added by tray. Pair the 60-cell option with the 60MDU Prefill Station." },
      { name: "Printing, packing & pouch outlet", description: "Lower cabinet seals and prints pouches; finished packs exit at the pouch outlet. A front-panel E-stop and audio messages support attended operation." },
    ],
    faqs: [
      {
        question: "Which AP Model capacity should I choose?",
        answer: "Choose by active formulary size: AP-207FS (207 cassettes), AP-267FS (267), AP-336FS (336), AP-405FS (405), or AP-500FS (500). The first four share an 840 mm × 1,030 mm footprint and grow in height; the AP-500FS widens to 1,100 mm to hold the larger cassette mix.",
      },
      {
        question: "What is the T-slide system?",
        answer: "T-slide is the cassette transport and replenishment design in the AP cabinet. It is built so technicians can restock medications quickly from the front of the machine instead of removing entire drawer stacks mid-run.",
      },
      {
        question: "Can every AP Model include FSP and MDU?",
        answer: "Yes. All five AP configurations can be specified with 1 or 2 Free Shape Packing modules and either a 30-cell or 60-cell Manual Divide Unit.",
      },
      {
        question: "What pouch sizes are available?",
        answer: "Standard wrapping paper is 75 mm × 70 mm. A 55 mm × 50 mm size is available by order when you need a smaller unit-dose pouch.",
      },
      {
        question: "How fast does the AP Model pack?",
        answer: "Maximum packing speed is 60 unit-dose pouches per minute. Multi-dose runs average 55 pouches per minute across all five models.",
      },
      {
        question: "How does the AP Model differ from the AP MD Model?",
        answer: "The AP Model uses a 10.1-inch touch screen, a T-slide cassette layout, and FSP/MDU options on every size from 207 to 500 cassettes. The AP MD Model is the higher-capacity multi-dose cabinet with a 17-inch screen, individual drawer locks, and A/B configurations up to 480 cassettes where FSP and 60-cell MDU are B-series options.",
      },
      {
        question: "What are the power requirements?",
        answer: "Typical consumption is 500W (maximum 1000W). Supported supplies are 220V/60Hz (Korea), 120V/60Hz (US), and 230V/240V/50Hz (Europe).",
      },
    ],
    cta: {
      title: "Match an AP Model to your cassette count",
      description: "We'll walk through 207 to 500 cassette layouts, T-slide replenishment, and whether one or two FSP modules plus a 30- or 60-cell MDU fits your non-cassette medications.",
    },
    relatedSlugs: ["ap-md-model", "wap-model", "cap52fs"],
  },
  {
    slug: "wap-model",
    name: "WAP Model",
    tagline: "Slim-Profile Intelligent Tablet Packing System",
    heroImage: "/products/wap-model.jpeg",
    description:
      "The WAP Model is a slim-profile intelligent tablet packing system for pharmacies that need cassette automation without a deep floor footprint. At only 460 mm deep, it stands against a wall like a cabinet while still packing up to 60 unit-dose pouches per minute. Three sizes — 144, 184, and 224 cassettes — share infrared photodetection, a 10.1-inch Windows 10 touch screen, three or four Free Shape Packing modules, and a 30- or 60-cell Manual Divide Unit.",
    howItWorks:
      "Staff replenish front-facing drug and FND cassettes through the T-slide system. Prescriptions arrive from an OCS linkage or internal input on the 10.1-inch touch panel. Infrared photodetection verifies each tablet. Three or four FSP modules, with a dedicated FSP printer, pack irregular and half tablets that are not assigned to a cassette. The MDU covers 30- or 60-cell manual-divide medications. The lower printing and packing system seals 75 mm × 70 mm pouches, or 55 mm × 50 mm by order, and finished pouches exit at the pouch outlet.",
    pouchSpec: {
      pouchSizes: [
        "Standard wrapping paper: 75 mm × 70 mm",
        "Optional wrapping paper: 55 mm × 50 mm (by order)",
      ],
      barcodeSummary:
        "Thermal-transfer printing supports unlimited characters and font sizes on each pouch. Orders can be received from an OCS linkage or entered internally.",
      softwareSummary:
        "Windows 10 control with a 10.1-inch touch screen, audio status messages, and a front-panel emergency stop.",
    },
    specs: [
      { label: "Cassette Range", value: "144, 184, or 224 cassettes" },
      { label: "Footprint Depth", value: '460 mm (18.1") slim cabinet' },
      { label: "Speed", value: "Max 60 unit-dose pouches/min; avg 55 multi-dose" },
      { label: "Control", value: 'Windows 10, 10.1" touch screen' },
      { label: "Detection", value: "Infrared photodetection" },
      { label: "FSP", value: "3 or 4 Free Shape Packing modules" },
      { label: "MDU", value: "30-cell or 60-cell" },
      { label: "Pouch Size", value: "75 × 70 mm or 55 × 50 mm by order" },
      { label: "Power Consumption", value: "300W (max 700W)" },
      { label: "Power Supply", value: "220V/60Hz (KR) | 120V/60Hz (US) | 230–240V/50Hz (EU)" },
    ],
    highlights: [
      { title: "460 mm Slim Depth", description: "At 1,252 mm wide and only 460 mm deep, the WAP stands against a wall like a cabinet — useful when a full-depth AP cabinet will not fit." },
      { title: "144 to 224 Cassettes", description: "WAP-144FS, WAP-184FS, and WAP-224FS grow in height, not depth, so you can add cassette capacity without taking more floor from the aisle." },
      { title: "3 or 4 FSP Modules", description: "More Free Shape Packing capacity than the AP Model, so half-tablets and irregular shapes can run in parallel with cassette medications." },
      { title: "60 Pouches Per Minute", description: "The same packing engine as the larger cabinets: max 60 unit-dose pouches per minute, averaging 55 on multi-dose runs." },
      { title: "Lower Power Draw", description: "Typical consumption is 300W (maximum 700W) — less than the AP and AP MD cabinets — while still running Windows 10 control and thermal-transfer printing." },
      { title: "T-Slide Replenishment", description: "Front-facing cassettes and the T-slide system keep restocking on the cabinet face, which matters in a slim, wall-line install." },
      { title: "30- or 60-Cell MDU", description: "Specify a 30-cell or 60-cell Manual Divide Unit. The 60-cell option pairs with the 60MDU Prefill Station for tray-based prep." },
      { title: "Lighter Cabinet", description: "250 kg, 300 kg, or 350 kg depending on height — roughly half the weight of a comparable AP cabinet — which can simplify install in existing pharmacies." },
    ],
    features: [
      "Slim 460 mm cabinet depth for wall-line installation",
      "144, 184, or 224 cassettes in small, medium, and large sizes",
      "T-slide cassette system with easy front replenishment",
      "Windows 10 control with a 10.1-inch touch screen",
      "Infrared photodetection on every dispensed tablet",
      "3 or 4 Free Shape Packing modules with dedicated FSP printer",
      "30-cell or 60-cell Manual Divide Unit",
      "300W typical power consumption (max 700W)",
    ],
    useCases: ["Retail pharmacies with limited floor space", "Hospital satellite pharmacies", "Wall-line packaging rooms"],
    modelTable: {
      models: ["WAP-144FS", "WAP-184FS", "WAP-224FS"],
      rows: [
        { label: "Cassettes", values: ["144", "184", "224"] },
        { label: "Cassette mix (S / M / L)", values: ["64 / 40 / 40", "104 / 40 / 40", "144 / 40 / 40"] },
        { label: "Dimensions (W × D × H, mm)", values: ["1252 × 460 × 1740", "1252 × 460 × 1900", "1252 × 460 × 2060"] },
        { label: "Weight", values: ["250 kg", "300 kg", "350 kg"] },
      ],
    },
    anatomy: [
      { name: "Drug & FND cassettes", description: "Upper grid stores small, medium, and large cassettes on the front face, including FND positions for high-frequency medications." },
      { name: "T-slide system", description: "Slim-cabinet T-slide mechanics keep replenishment on the front of the unit so the 460 mm depth can sit against a wall." },
      { name: "Control panel", description: "Windows 10 industrial PC with a 10.1-inch touch screen for order input and packing control." },
      { name: "FSP × 3 or 4", description: "Three or four Free Shape Packing modules, with a dedicated FSP printer, handle irregular shapes and half-tablets in parallel." },
      { name: "MDU", description: "30-cell or 60-cell Manual Divide Unit for tray-loaded medications that are not assigned to a cassette." },
      { name: "Printing, packing & pouch outlet", description: "Lower cabinet prints and seals pouches; finished packs exit at the pouch outlet. A front-panel E-stop and audio messages support attended operation." },
    ],
    faqs: [
      {
        question: "Why choose the WAP Model instead of the AP Model?",
        answer: "Choose WAP when floor depth is the constraint. The WAP is only 460 mm deep and 1,252 mm wide, with 144–224 cassettes and 3 or 4 FSP modules. The AP Model is a deeper 1,030 mm cabinet with 207–500 cassettes and 1 or 2 FSP modules. Packing speed and pouch options are the same.",
      },
      {
        question: "How many cassettes does each WAP size hold?",
        answer: "WAP-144FS holds 144 cassettes (64 small, 40 medium, 40 large). WAP-184FS holds 184 (104 / 40 / 40). WAP-224FS holds 224 (144 / 40 / 40). Width and depth stay 1,252 × 460 mm; height grows from 1,740 mm to 2,060 mm.",
      },
      {
        question: "How fast does the WAP pack?",
        answer: "Maximum packing speed is 60 unit-dose pouches per minute. Multi-dose runs average 55 pouches per minute on all three sizes.",
      },
      {
        question: "How many FSP modules can I specify?",
        answer: "Every WAP configuration can be specified with 3 or 4 Free Shape Packing modules. That is more FSP capacity than the AP Model, which specifies 1 or 2.",
      },
      {
        question: "What are the power requirements?",
        answer: "Typical consumption is 300W (maximum 700W). Supported supplies are 220V/60Hz (Korea), 120V/60Hz (US), and 230V/240V/50Hz (Europe).",
      },
      {
        question: "Can it use the 60MDU Prefill Station?",
        answer: "Yes, when the WAP is specified with the 60-cell Manual Divide Unit. The 60MDU Prefill Station loads those cells in advance so the slim packager is not waiting on manual tray filling.",
      },
      {
        question: "What pouch sizes are available?",
        answer: "Standard wrapping paper is 75 mm × 70 mm. A 55 mm × 50 mm size is available by order.",
      },
    ],
    cta: {
      title: "Fit cassette packing into a 460 mm-deep wall line",
      description: "See how the WAP Model stands against a wall, restocks from the front, and still packs 60 pouches per minute. We'll size 144, 184, or 224 cassettes to your floor plan.",
    },
    relatedSlugs: ["ap-model", "ap-md-model", "60mdu-prefill-station"],
  },
  {
    slug: "60mdu-prefill-station",
    name: "60MDU Prefill Station",
    tagline: "60-Cell Manual Divide Prefill Station",
    heroImage: "/products/60mdu-prefill-station.jpeg",
    description:
      "The 60MDU Prefill Station is a compact 60-cell tray station for preparing non-cassette medications before they reach a packing line. Pharmacy staff load half-tablets, irregular shapes, and low-frequency drugs into a 6 × 10 cell grid, then release the tray into the packager's Manual Divide Unit with the Drop control. Infrared photodetection supports accurate cell loading. Used with AP, AP MD, and WAP systems specified with a 60-cell MDU, it cuts idle time on high-volume hospital and pharmacy packing runs.",
    howItWorks:
      "Staff assign each of the 60 cells to a medication that is not sitting in a cassette — typically half-tablets, irregular shapes, or low-frequency drugs. Infrared photodetection supports accurate loading of the 6 × 10 grid. When the tray is ready, the Drop control releases the prepared cells into the packing sequence. The connected packager processes cells in order so the main cassette run does not pause for manual divide work. Status LEDs show station state during load, drop, and idle. The next tray can be prefilled while the packager is still running the previous one.",
    specs: [
      { label: "Capacity", value: "60 cells (6 × 10 grid)" },
      { label: "Detection", value: "Infrared photodetection" },
      { label: "Dimensions", value: '660 × 345 × 144 mm (26.0" × 13.6" × 5.7")' },
      { label: "Weight", value: "22 kg (48.5 lb)" },
      { label: "Power Consumption", value: "25W (max 50W)" },
      { label: "Power Supply", value: "AC 110–220V, 50/60Hz" },
      { label: "Controls", value: "Drop button with status LEDs" },
      { label: "Pairs With", value: "AP, AP MD B-series, and WAP 60-cell MDU" },
    ],
    highlights: [
      { title: "60-Cell Prefill Grid", description: "A 6 × 10 cell layout lets technicians stage an entire manual-divide batch before the packager needs it — not one cell at a time on the machine." },
      { title: "Shorter Packing Idle Time", description: "High-volume hospital and pharmacy lines lose minutes waiting on MDU filling. Prefill on this station so the packager keeps running cassette medications while the next tray is prepared." },
      { title: "Infrared Photodetection", description: "Optical detection supports accurate cell loading so half-tablets and irregular shapes enter the MDU in the intended sequence." },
      { title: "Drop Control", description: "A dedicated Drop button releases the prepared tray into the packing workflow, with status LEDs for load, ready, and idle states." },
      { title: "Benchtop Footprint", description: "At 660 × 345 × 144 mm and 22 kg, the station sits on a counter beside the packager instead of adding another floor cabinet." },
      { title: "25W Typical Draw", description: "25W typical and 50W maximum on AC 110–220V, 50/60Hz — low enough to share a bench circuit with a PC or scanner." },
      { title: "Built for 60-Cell MDU", description: "Designed around the 60-cell Manual Divide Unit used on AP, AP MD B-series, and WAP packing systems." },
      { title: "Non-Cassette Medications", description: "Keep half-tablets, odd shapes, and low-frequency drugs off the cassette grid without sending them to a separate semi-automatic packager." },
    ],
    features: [
      "60-cell (6 × 10) prefill grid for Manual Divide Unit workflows",
      "Infrared photodetection for accurate cell loading",
      "Drop button with three status indicator lights",
      "Compact 22 kg benchtop body — 660 × 345 × 144 mm",
      "25W typical power consumption (max 50W)",
      "AC 110–220V, 50/60Hz universal supply",
      "Pairs with AP, AP MD B-series, and WAP systems specified with 60-cell MDU",
      "Lets one technician prefill while the packager continues cassette runs",
    ],
    useCases: ["High-volume hospital pharmacies", "Central fill with many non-cassette SKUs", "AP / WAP packing lines with 60-cell MDU"],
    anatomy: [
      { name: "60-cell grid", description: "Recessed 6 × 10 cell tray holds one medication portion per cell for sequenced release into the packager MDU." },
      { name: "Drop control", description: "Front-panel Drop button releases the prepared tray into the packing sequence when the grid is ready." },
      { name: "Status LEDs", description: "Three indicator lights show station state during loading, ready-to-drop, and idle." },
      { name: "Infrared detection", description: "Photodetection supports accurate filling of each cell before the tray is released." },
    ],
    faqs: [
      {
        question: "What is a 60MDU Prefill Station used for?",
        answer: "It prepares medications that are not assigned to a cassette — half-tablets, irregular shapes, and low-frequency drugs — in a 60-cell tray before they are needed on the packing line. That keeps the packager from waiting on manual cell filling during a run.",
      },
      {
        question: "Which packing systems does it work with?",
        answer: "It is designed for systems specified with a 60-cell Manual Divide Unit: AP Model (60-cell MDU option), AP MD B-series (60 MDU), and WAP Model (60-cell MDU option).",
      },
      {
        question: "How many cells does the grid have?",
        answer: "60 cells in a 6-row by 10-column layout, matching a 60-cell MDU so one prefilled tray corresponds to one MDU cycle.",
      },
      {
        question: "How does the Drop function work?",
        answer: "After cells are loaded, the Drop button releases the prepared tray into the packing workflow. Status LEDs indicate when the station is loading, ready, or idle.",
      },
      {
        question: "How much space and power does it need?",
        answer: 'The main body is 660 mm wide, 345 mm deep, and 144 mm high (about 26.0" × 13.6" × 5.7") and weighs 22 kg. It draws 25W typically (50W maximum) from AC 110–220V, 50/60Hz.',
      },
      {
        question: "Does it replace Free Shape Packing (FSP)?",
        answer: "No. FSP automatically packs irregular and half tablets inside the packager. The 60MDU Prefill Station is for tray-based manual-divide medications that you want to stage in advance. Many high-volume sites use both.",
      },
      {
        question: "Who benefits most from a prefill station?",
        answer: "Large hospital and high-volume pharmacy packing rooms, where many prescriptions include at least one non-cassette item. Prefill lets one technician stay ahead of the packager instead of stopping the line for every manual-divide dose.",
      },
    ],
    cta: {
      title: "Stop the packing line from waiting on MDU fills",
      description: "See how a 60-cell prefill tray sits beside your AP, AP MD, or WAP packager and keeps cassette runs moving while non-cassette medications are prepared off-line.",
    },
    relatedSlugs: ["ap-md-model", "ap-model", "wap-model"],
  },
];

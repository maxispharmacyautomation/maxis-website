import { cretemProducts } from "./cretem-products";

export type Manufacturer = "UNIDOSE" | "CRETEM";

export type ProductSpec = { label: string; value: string };

export type ProductImage = {
  src: string;
  alt: string;
  caption?: string;
  /** "cover" (default) for photographs; "contain" for diagrams and cut-outs that must not be cropped. */
  fit?: "cover" | "contain";
};

export type ProductStat = { value: string; label: string; note?: string };

export type ProductStep = { title: string; description: string };

export type ProductValueProp = { title: string; description: string };

export type ProductModule = {
  name: string;
  abbreviation?: string;
  availability?: string;
  description: string;
  image?: ProductImage;
  /** Visually emphasises this module in the Options section (e.g. CAP(EX) FSP). */
  featured?: boolean;
};

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

  // ── Extended fields used by the CRETEM product template ──
  manufacturer?: Manufacturer;
  category?: string;
  seriesName?: string;
  heroImageAngled?: string;
  /**
   * "contain" (default) for cut-out renders with transparent backgrounds, shown with a drop shadow.
   * "cover" for photographed/brochure sources that have been whitened and edge-feathered — these are
   * shown on a plain white plate (no drop shadow) so the photo dissolves into the container.
   */
  heroImageFit?: "contain" | "cover";
  heroCaption?: string;
  /** Labelled diagram for the Components section when `heroImage` is a studio photograph. */
  anatomyImage?: string;
  heroStats?: ProductStat[];
  valueProps?: ProductValueProp[];
  workflow?: ProductStep[];
  gallery?: ProductImage[];
  galleryNote?: string;
  modules?: ProductModule[];
  integration?: string[];
  /** When true, the CRETEM page shows a “Demo video available” callout linking to /demo. */
  demoAvailable?: boolean;
};

export const unidoseProducts: Product[] = [
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
];

export const products: Product[] = [...unidoseProducts, ...cretemProducts];


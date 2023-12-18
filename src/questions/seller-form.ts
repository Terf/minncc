export const section1 = [
  {
    label: "Farm Address (location)",
    type: "text",
    name: "address",
  },
  {
    label: "Business Name & Contact Person",
    type: "text",
    name: "business",
  },
  {
    label: "Phone Number",
    type: "tel",
    name: "phone",
  },
  {
    label: "Email",
    type: "email",
    name: "email",
  },
  {
    label: "Farm Size (acres)",
    type: "number",
    name: "size",
  },
  {
    label: "Please describe your current, if any, Land Management procedures",
    type: "textarea",
    name: "land-management",
  },
  {
    label: "What types of crops do you grow?",
    type: "checkbox",
    name: "crops",
    options: [
      "Corn",
      "Soybeans",
      "Wheat",
      "Barley",
      "Oats",
      "Rye",
      "Canola",
      "Sunflower",
      "Flax",
      "Sorghum",
      "Alfalfa",
      "Hay",
      "Other",
    ],
  },
  {
    label:
      "For each crop checked above, please state how many acres you dedicate per planting season.",
    type: "textarea",
    name: "acres",
  },
  {
    label: "What types of livestock do you rear?",
    type: "checkbox",
    name: "livestock",
    options: [
      "Cattle",
      "Dairy Cattle",
      "Hogs",
      "Sheep",
      "Goats",
      "Poultry",
      "Other",
    ],
  },
  {
    label: "Do you use any of the following soil management techniques?",
    type: "checkbox",
    name: "soil-management",
    options: ["No-till", "Strip-till", "Cover Crops", "Crop Rotation", "Other"],
  },
  {
    label: "Are you open to using any of these soil management techniques?",
    type: "textarea",
    name: "soil-management2",
  },
];

export const section2 = [
  {
    label:
      "What types of farming practices do you currently utilize? Please check all that apply",
    type: "checkbox",
    name: "farming-practices",
    options: ["Organic", "Conventional", "Regenerative", "N/A", "Other"],
  },
  {
    label:
      "What, if any, primary macronutrient fertilizers do you currently use?",
    type: "checkbox",
    name: "fertilizers",
    options: ["Nitrogen", "Phosphorus", "Potassium", "Other", "None"],
  },
  {
    label:
      "For each fertilizer mentioned above, please expand. How approximately much you use per year? What crops do you use each nutrient for? Anything else that you feel could be relevant.",
    type: "textarea",
    name: "fertilizers2",
  },
  {
    label:
      "What, if any, is the active ingredient in any pesticides that you currently use?",
    type: "checkbox",
    name: "pesticides",
    options: ["Mesotrione", "Acetochlor", "Fungicide", "Insecticide"],
  },
  {
    label:
      "For each pesticide mentioned above, please expand. How approximately much you use per year? What crops do you use each nutrient for? Anything else that you feel could be relevant.",
    type: "textarea",
    name: "pesticides2",
  },
  {
    label: "Do you currently use any of your land any carbon offset project?",
    type: "radio",
    name: "carbon-offset",
    options: ["Yes", "No"],
  },
  {
    label:
      "Have you in the past used any of your land for any carbon offset projects?",
    type: "radio",
    name: "carbon-offset2",
    options: ["Yes", "No"],
  },
  {
    label:
      "Do you have any existing forestry or reforestation projects on your land? If yes, please explain. If no, skip.",
    type: "textarea",
    name: "forestry",
  },
  {
    label:
      "Are you open to using some of your land for a forestry or reforestation project?",
    type: "radio",
    name: "forestry2",
    options: ["Yes", "No"],
  },
  {
    label:
      "Do you currently, or have you in the past, used any agroforestry or silvopasture techniques on your land?",
    type: "radio",
    name: "agroforestry",
    options: ["Agroforestry", "Silvopasture", "Both", "Neither"],
  },
  {
    label: "Do you currently use any renewable energy for your power?",
    type: "checkbox",
    name: "renewable-energy",
    options: ["Solar", "Wind", "Hydro", "Geothermal", "Biomass", "N/A"],
  },
  {
    label:
      "Do you have any water conservation projects on your land? If yes, please explain. If no, skip.",
    type: "textarea",
    name: "water-conservation",
  },
  {
    label:
      "Do you have any biodiversity conservation projects on your land? If yes, please explain. If no, skip.",
    type: "textarea",
    name: "biodiversity",
  },
  {
    label:
      "How do you irrigate your fields? How much water do you use per month? How often do you irrigate your fields in the growing season?",
    type: "textarea",
    name: "irrigation",
  },
  {
    label:
      "Please state all current or former verification and/or certifications you have on your land",
    type: "textarea",
    name: "certifications",
  },
  {
    label: "Have you ever had a third-party verification or audit conducted?",
    type: "radio",
    name: "verification",
    options: ["Yes", "No"],
  },
  {
    label:
      "Are you willing to participate in MinnCC's Credit Verification process?",
    type: "radio",
    name: "verification2",
    options: ["Yes", "No"],
  },
  {
    label:
      "Why are you interested in selling your carbon credits? (Please check all that apply)",
    type: "checkbox",
    name: "interest",
    options: [
      "Additional Revenue",
      "Environmental Impact",
      "Community Impact",
      "Other",
    ],
  },
  {
    label:
      "What are your long-term sustainability plans? Are you planning to change your farming practices or altering otherwise altering your land within the next year?",
    type: "textarea",
    name: "sustainability",
  },
  {
    label:
      "Do you currently engage in any sustainable practices not mentioned above?",
    type: "textarea",
    name: "sustainability2",
  },
  {
    label:
      "Would you face any challenges in implementing a new carbon sequestration method?",
    type: "textarea",
    name: "challenges",
  },
  {
    label: "Have you undertaken any other environmental initiatives?",
    type: "textarea",
    name: "initiatives",
  },
  {
    label:
      "Do you have any additional information that you think MinnCC should know about?",
    type: "textarea",
    name: "additional",
  },
];

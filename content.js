/* ============================================================
   GUT & GYNAE — EDIT YOUR WEBSITE'S DETAILS HERE
   ============================================================
   This is the central configuration file for your website.
   You can easily change your phone numbers, hospital address,
   OPD timings, doctor credentials, and service details here.

   RULES:
   1. Keep quotes around text: "like this"
   2. If your text contains quote marks, write \" instead of "
   3. Refresh the website in your browser after saving changes.
   ============================================================ */

window.SITE = {

  /* ---------- CONTACT & PRACTICE DETAILS ---------- */
  phone: "+91 98200 00000",
  whatsappPhone: "+91 98200 00000",
  email: "saransh.vakharia@gmail.com",

  /* ---------- LOCATION & OPD SCHEDULE ---------- */
  hospitalName: "Government Medical College & Hospital (GMC), Nagpur",
  addressLine1: "Government Medical College & Hospital (GMC),",
  addressLine2: "Medical Square, Hanuman Nagar, Nagpur, Maharashtra — 440003",
  opdTimings:   "Monday to Saturday · 9:00 AM – 4:00 PM",
  mapsUrl:      "https://maps.google.com/?q=Government+Medical+College+Nagpur",

  /* ---------- HERO SECTION (top of page) ---------- */
  heroTagline: "<span class='hero-sub-line1'>Surgical gastroenterology by <strong>Dr&nbsp;Saransh&nbsp;Vakharia</strong>. Obstetrics &amp; Gynaecology by <strong>Dr&nbsp;Prapti&nbsp;Shah</strong>.</span><span class='hero-sub-line2'>Two specialists dedicated to advanced, patient-first care.</span>",

  /* ---------- DR SARANSH VAKHARIA (THE GUT) ---------- */
  saransh: {
    name: "Dr Saransh Vakharia",
    roleLines: [
      "Surgical Gastroenterologist,",
      "Consultant HPB & Laparoscopic Surgeon"
    ],
    role: "Surgical Gastroenterologist, Consultant HPB & Laparoscopic Surgeon",
    credentialsLines: [
      "MCh Surgical Gastroenterology (KEM Hospital Mumbai)",
      "MS General Surgery (GMC Nagpur)",
      "MBBS, MRCS (England)",
      "FIAGES"
    ],
    credentials: "MCh Surgical Gastroenterology (KEM Hospital Mumbai) · MS General Surgery (GMC Nagpur) · MBBS, MRCS (England) · FIAGES",
    photo: "assets/dr-saransh.jpg",
    badges: [
      "Gastrointestinal Cancer Specialist",
      "Advanced Laparoscopic Surgery"
    ],
    bio: "Super-specialist in advanced laparoscopic and surgical care of the digestive tract, liver, and pancreas. Dedicated to evidence-based, conservative management first, reserving minimally invasive surgery for clear, safe indications.",
    highlights: [
      "Advanced Laparoscopic (Keyhole) GI & Hernia Surgery",
      "Gallbladder, Bile Duct, Liver & Pancreatic Surgery",
      "Gastrointestinal Cancer Surgery",
      "Fast-track post-operative recovery (ERAS protocol)"
    ],
    services: [
      {
        id: "gallbladder",
        title: "Gallbladder & Biliary Disease",
        desc: "Laparoscopic cholecystectomy for gallstones, CBD stone exploration, bile duct strictures & biliary colic.",
        thumbnail: "assets/thumb-gallbladder.jpg",
        hasGuide: true,
        guidePageUrl: "gallbladder.html",
        guideLabel: "See details",
        quickGuideLabel: "Quick Guide",
        eyebrow: "Patient Clinical Guide · Surgical Gastroenterology",
        doctor: "Dr Saransh Vakharia (MCh Surgical Gastroenterology) · GMC Nagpur",
        symptomsIntro: "Many patients carry silent gallstones for years. However, once a stone causes transient blockage of the gallbladder outlet, characteristic symptoms arise:",
        symptoms: [
          "Episodic right upper abdominal pain (biliary colic), typically 30 to 60 minutes after rich or fatty food",
          "Radiation of discomfort around the right ribcage through to the right shoulder blade or upper back",
          "Persistent indigestion, post-meal bloating, gas, nausea, and occasional belching"
        ],
        redFlags: "High fever with chills (Acute Cholecystitis), yellow eyes or dark urine (Obstructive Jaundice / Common Bile Duct stone), or severe intractable pain penetrating to the back (Gallstone Pancreatitis).",
        investigationsIntro: "A focused, evidence-based imaging sequence confirms gallstones and rules out bile duct complications:",
        investigations: [
          "Ultrasound Whole Abdomen (USG): Frontline gold-standard scan to measure stone count, size, wall edema, and bile duct caliber",
          "Liver Function Tests (LFT): Blood markers evaluating bilirubin and biliary enzymes for outflow obstruction",
          "MRCP (MRI Bile Duct Scan): Specialized scan indicated if bile duct dilation or raised enzymes are detected"
        ],
        investigationsNotice: "Incidental, completely painless gallstones discovered on a routine ultrasound do not always need immediate surgery. Safe clinical observation is usually appropriate unless high-risk features are noted.",
        treatmentIntro: "Once gallstones cause symptoms or complications, medicines cannot reliably dissolve them. Laparoscopic keyhole surgery provides safe, definitive relief:",
        treatment: [
          "Keyhole Precision: Performed through 4 micro-incisions (5mm to 10mm) under high-definition optical magnification (45-60 min)",
          "Fast-Track Recovery: Up and walking comfortably within 3 to 4 hours post-anesthesia; oral fluids resumed the same evening",
          "Rapid Discharge: Most patients return home within 24 to 48 hours and resume regular desk work within 5 to 7 days",
          "Preserved Digestion: The liver continues synthesizing and secreting bile uninterrupted directly into the intestine"
        ]
      },
      {
        id: "pancreas-liver",
        title: "Pancreas & Liver Disorders",
        desc: "Management of acute & chronic pancreatitis, pancreatic pseudocysts, cystic tumors, and liver lesions.",
        thumbnail: "assets/thumb-pancreas-liver.jpg",
        hasGuide: true,
        guidePageUrl: "pancreas-liver.html",
        guideLabel: "See details",
        quickGuideLabel: "Quick Guide",
        eyebrow: "Patient Clinical Guide · Surgical Gastroenterology",
        doctor: "Dr Saransh Vakharia (MCh Surgical Gastroenterology) · GMC Nagpur",
        symptomsIntro: "Pancreatic and liver conditions produce distinct digestive and abdominal symptoms requiring early specialist evaluation:",
        symptoms: [
          "Severe, constant epigastric pain radiating through to the back, easing partially when leaning forward",
          "Persistent nausea, repetitive vomiting, and upper abdominal tenderness or fullness",
          "Unexplained weight loss or pale, oily, foul-smelling stools in chronic pancreatitis",
          "Dull ache or heaviness under the right ribcage from liver lesions"
        ],
        redFlags: "Yellowing of the eyes or skin (jaundice), high fever with chills and abdominal rigidity, or inability to retain fluids.",
        investigationsIntro: "Advanced imaging and functional blood panels provide precise tissue diagnosis:",
        investigations: [
          "Serum Amylase & Lipase: Key biochemical indicators during acute pancreatic inflammation",
          "Triphasic Contrast-Enhanced CT (CECT): Evaluates parenchymal perfusion, necrosis, pseudocysts, and focal liver lesions",
          "MRCP: Non-invasive mapping of the main pancreatic duct and biliary tree",
          "Endoscopic Ultrasound (EUS): High-resolution acoustic evaluation with fine-needle aspiration (FNA) when indicated"
        ],
        treatmentIntro: "Multidisciplinary care emphasizes parenchyma preservation and minimally invasive step-up strategies:",
        treatment: [
          "Optimized medical therapy with aggressive fluid resuscitation and Pancreatic Enzyme Replacement (PERT)",
          "Minimally invasive percutaneous and endoscopic step-up drainage for symptomatic pseudocysts and collections",
          "Parenchyma-sparing operations: Frey procedure for chronic pancreatitis with inflammatory head mass",
          "Laparoscopic and open anatomical resections for complex cystic neoplasms and solid liver tumors"
        ]
      },
      {
        id: "hernia",
        title: "Hernia & Abdominal Wall Reconstruction",
        desc: "Minimally invasive laparoscopic repair (TEP / TAPP) for inguinal, umbilical, epigastric & incisional hernias.",
        thumbnail: "assets/thumb-hernia.jpg",
        hasGuide: true,
        guidePageUrl: "hernia.html",
        guideLabel: "See details",
        quickGuideLabel: "Quick Guide",
        eyebrow: "Patient Clinical Guide · Surgical Gastroenterology",
        doctor: "Dr Saransh Vakharia (MCh Surgical Gastroenterology) · GMC Nagpur",
        symptomsIntro: "An abdominal or groin hernia occurs when internal fat or intestines protrude through a weak muscle opening:",
        symptoms: [
          "A visible bulge in the groin, belly button, or along a previous surgical incision",
          "Bulge expands during standing, coughing, straining, or lifting heavy weights, and recedes when lying down",
          "Dull pulling ache or dragging sensation in the lower abdomen after walking or standing for long hours"
        ],
        redFlags: "Sudden severe pain in the bulge that becomes tender, irreducible, red, accompanied by vomiting or inability to pass gas (strangulated hernia — emergency).",
        investigationsIntro: "Clinical examination by an experienced surgeon remains the cornerstone, complemented by imaging:",
        investigations: [
          "Comprehensive Clinical Examination: Standing and supine palpation with cough impulse assessment",
          "High-Resolution Ultrasound: Dynamic real-time scan during Valsalva maneuver to size the defect",
          "Contrast CT of Abdomen & Pelvis: Essential for complex recurrent, large incisional, or loss-of-domain hernias"
        ],
        treatmentIntro: "Hernia defects never heal on their own; modern keyhole surgery provides durable, tension-free repair:",
        treatment: [
          "Laparoscopic Inguinal Repair (TEP / TAPP): Placing a wide prosthetic mesh behind the defect with tiny incisions",
          "Laparoscopic Ventral / Umbilical Repair (IPOM / eTEP): Durable retromuscular mesh coverage without large cuts",
          "Abdominal Wall Reconstruction (TAR): Advanced component separation for giant complex abdominal wall defects",
          "Day-care or 24-hr discharge with rapid return to desk duties within 5 to 7 days"
        ]
      },
      {
        id: "gerd-reflux",
        title: "GERD, Reflux & Esophageal Disorders",
        desc: "Evaluation of severe acid reflux, hiatus hernia repair (laparoscopic fundoplication), and achalasia cardia.",
        thumbnail: "assets/thumb-gerd-reflux.jpg",
        hasGuide: true,
        guidePageUrl: "gerd-reflux.html",
        guideLabel: "See details",
        quickGuideLabel: "Quick Guide",
        eyebrow: "Patient Clinical Guide · Surgical Gastroenterology",
        doctor: "Dr Saransh Vakharia (MCh Surgical Gastroenterology) · GMC Nagpur",
        symptomsIntro: "Gastroesophageal reflux occurs when the anti-reflux barrier weakens, allowing stomach acid into the esophagus:",
        symptoms: [
          "Persistent burning sensation behind the breastbone (heartburn), especially after meals or when lying flat",
          "Sour or bitter fluid regurgitating into the throat or mouth",
          "Chronic nighttime dry cough, morning hoarseness, throat clearing, or globus sensation (throat lump)",
          "Difficulty or painful swallowing (dysphagia)"
        ],
        redFlags: "Food repeatedly sticking in the mid-chest, progressive difficulty swallowing solids and liquids, vomiting blood, or unintended weight loss.",
        investigationsIntro: "Objective physiological testing differentiates acid reflux from motility disorders like achalasia:",
        investigations: [
          "Upper GI Endoscopy: Visualizes esophageal mucosal lining, assesses esophagitis, Barrett's mucosa, and hiatus hernia",
          "24-Hour Ambulatory pH-Impedance Monitoring: Gold-standard quantification of acid and non-acid reflux episodes",
          "High-Resolution Esophageal Manometry: Evaluates lower esophageal sphincter resting tone and swallowing peristalsis"
        ],
        treatmentIntro: "Tailored therapies range from optimized medical protocols to durable keyhole surgical reconstruction:",
        treatment: [
          "Structured medical management with proton pump inhibitors (PPIs) and personalized lifestyle modifications",
          "Laparoscopic Nissen / Toupet Fundoplication: Keyhole stomach wrap restoring lower esophageal sphincter competence",
          "Laparoscopic Hiatus Hernia Crural Repair: Anatomical reduction and suture approximation of diaphragmatic defect",
          "Laparoscopic Heller Myotomy with anterior Dor fundoplication for achalasia cardia"
        ]
      },
      {
        id: "gi-cancer",
        title: "Gastrointestinal Cancer Surgery",
        desc: "Comprehensive evaluation and radical surgical care for stomach, intestinal, colorectal & hepatobiliary malignancies.",
        thumbnail: "assets/thumb-gi-cancer.jpg",
        hasGuide: true,
        guidePageUrl: "gi-cancer.html",
        guideLabel: "See details",
        quickGuideLabel: "Quick Guide",
        eyebrow: "Patient Clinical Guide · Surgical Gastroenterology",
        doctor: "Dr Saransh Vakharia (MCh Surgical Gastroenterology) · GMC Nagpur",
        symptomsIntro: "Gastrointestinal cancers often start with subtle, non-specific signs that warrant prompt investigation:",
        symptoms: [
          "Unintentional, progressive weight loss and profound, unexplained fatigue or anemia",
          "Persistent change in bowel habits (new-onset constipation alternating with loose stools)",
          "Visible blood in stools (bright red bleeding or dark, sticky black tarry stools)",
          "Persistent dyspepsia, early satiety after small meals, or post-prandial vomiting"
        ],
        redFlags: "Painless progressive jaundice with dark urine and clay stools, palpable hard abdominal mass, or signs of acute intestinal blockage.",
        investigationsIntro: "Comprehensive staging guides personalized, multidisciplinary oncology treatment:",
        investigations: [
          "High-Resolution Triphasic CECT of Chest, Abdomen & Pelvis for precision TNM oncological staging",
          "High-Definition Colonoscopy & Upper GI Endoscopy with targeted tissue biopsies and histopathology",
          "Serum Tumor Markers: Baseline CEA, CA 19-9, and AFP monitoring",
          "Staging Laparoscopy: Visual inspection to rule out occult microscopic peritoneal spread before major resection"
        ],
        treatmentIntro: "Radical, oncologically sound surgery delivers the best curative outcomes:",
        treatment: [
          "Radical Oncological Resection: Complete R0 margin clearance with systematic D2/extended lymphadenectomy",
          "Minimally Invasive Laparoscopic Surgery: Keyhole colorectal and gastric resections with faster recovery",
          "Parenchyma-sparing liver resections and complex biliary/pancreatic resections (Whipple procedure)",
          "Integrated Multidisciplinary Tumor Board: Coordinated neoadjuvant and adjuvant chemotherapy/radiotherapy protocols"
        ]
      },
      {
        id: "emergency-gi",
        title: "Emergency GI Surgery & Laparoscopy",
        desc: "Urgent surgical care for acute appendicitis, intestinal obstruction, gastrointestinal perforation & peritonitis.",
        thumbnail: "assets/thumb-emergency-gi.jpg",
        hasGuide: true,
        guidePageUrl: "emergency-gi.html",
        guideLabel: "See details",
        quickGuideLabel: "Quick Guide",
        eyebrow: "Patient Clinical Guide · Surgical Gastroenterology",
        doctor: "Dr Saransh Vakharia (MCh Surgical Gastroenterology) · GMC Nagpur",
        symptomsIntro: "Acute surgical emergencies of the abdomen require prompt identification and rapid specialist response:",
        symptoms: [
          "Sudden, excruciating, rapidly worsening abdominal pain that peaks within hours",
          "Rigid, board-like abdomen that hurts intensely with any movement, cough, or gentle touch",
          "Inability to pass stool or flatus (gas) accompanied by progressive abdominal distension",
          "Continuous vomiting (bilious or foul-smelling) and high fever with chills"
        ],
        redFlags: "Profound dizziness, cold clammy extremities, rapid pulse, dropping blood pressure (septic shock), or acute confusion.",
        investigationsIntro: "Rapid emergency triage and imaging sequence enable life-saving intervention:",
        investigations: [
          "Immediate Emergency Triage: Hemodynamic monitoring, venous access, and arterial blood gas evaluation",
          "Urgent Blood Work: Complete blood count (CBC), CRP, electrolyte and renal panels",
          "Erect Radiographs: Instant rule-in for free gas under the diaphragm indicating bowel perforation",
          "Emergency Contrast-Enhanced CT: The gold standard for identifying obstruction transition zones and necrosis"
        ],
        treatmentIntro: "Timely laparoscopic and open surgical interventions control contamination and restore GI continuity:",
        treatment: [
          "Emergency Laparoscopic Appendectomy for acute and ruptured appendicitis with thorough pelvic clearance",
          "Laparoscopic or Open Perforation Closure (Graham patch omentopexy for peptic ulcers)",
          "Emergency adhesiolysis and bowel resection-anastomosis for strangulated intestinal obstruction",
          "Comprehensive peritoneal lavage, source control, and coordinated intensive care (ICU) resuscitation"
        ]
      }
    ]
  },

  /* ---------- DR PRAPTI SHAH (THE GYNAE) ---------- */
  prapti: {
    name: "Dr Prapti Shah",
    roleLines: [
      "Obstetrician & Gynaecologist,",
      "Consultant Laparoscopic Surgeon and Infertility Specialist"
    ],
    role: "Obstetrician & Gynaecologist, Consultant Laparoscopic Surgeon and Infertility Specialist",
    credentialsLines: [
      "MS Obstetrics & Gynaecology (KEM Hospital)",
      "DNB OBGY",
      "MBBS",
      "Fellowship in ART (Infertility)"
    ],
    credentials: "MS Obstetrics & Gynaecology (KEM Hospital) · DNB OBGY · MBBS · Fellowship in ART (Infertility)",
    photo: "assets/dr-prapti.jpg",
    badges: [
      "Reproductive Medicine Specialist",
      "Advanced Gynae Laparoscopy"
    ],
    bio: "Compassionate specialist dedicated to women's health across all life stages. Supports every pregnancy journey with gentle expertise, and provides patient-first clinical clarity for fertility, menstrual health, and laparoscopic care.",
    highlights: [
      "Comprehensive Pregnancy Care, Safe Delivery & Postnatal Support",
      "Infertility Evaluation, Ovulation Induction & ART Guidance",
      "PCOS, Hormonal Health & Menstrual Irregularities",
      "Minimally Invasive Laparoscopic Gynaecological Surgery"
    ],
    services: [
      {
        id: "pregnancy",
        title: "Pregnancy Care & Safe Delivery",
        desc: "Pre-conceptional counseling, routine antenatal care, normal delivery advocacy, and high-risk pregnancy monitoring.",
        thumbnail: "assets/thumb-pregnancy.jpg",
        hasGuide: true,
        guidePageUrl: "pregnancy.html",
        guideLabel: "See details",
        quickGuideLabel: "Quick Guide",
        eyebrow: "Patient Clinical Guide · Obstetrics & Gynaecology",
        doctor: "Dr Prapti Shah (MS OBGYN, DNB) · GMC Nagpur",
        symptomsIntro: "Comprehensive antenatal care ensures maternal wellbeing and healthy fetal development across all three trimesters:",
        symptoms: [
          "Missed menstrual period confirmed with a positive urine pregnancy test",
          "Early pregnancy fatigue, morning nausea, breast tenderness, and frequent urination",
          "Mild physiological pelvic stretching sensations as the uterus expands",
          "Perception of regular baby kicks and movements (quickening) from 18 to 22 weeks onward"
        ],
        redFlags: "Any vaginal bleeding or spotting, persistent severe headache with blurred vision, sudden swelling of face/hands, leakage of clear fluid, or reduced fetal kicks.",
        investigationsIntro: "Structured trimester-by-trimester ultrasound and blood screening schedule:",
        investigations: [
          "Dating & Viability Ultrasound (6-8 weeks) to confirm intrauterine pregnancy, gestational age, and fetal cardiac activity",
          "First-Trimester NT Scan & Dual Marker Blood Screen (11-13+6 weeks) for early chromosomal and anatomical risk assessment",
          "Targeted Level-II Anomaly Scan (18-20 weeks): Comprehensive organ-by-organ fetal anatomical survey",
          "Third-Trimester Growth, Amniotic Fluid Index (AFI) & Umbilical Artery Doppler scans"
        ],
        treatmentIntro: "Evidence-based, supportive maternity care focused on mother and infant safety:",
        treatment: [
          "Structured prenatal supplementation: Folic acid, micronutrients, iron, calcium, and vitamin D",
          "Proactive management of gestational diabetes, preeclampsia, and thyroid disorders",
          "Normal Physiological Delivery Advocacy: Active labor support, breathing guidance, and pain relief options",
          "Safe Cesarean Delivery performed strictly for evidence-based medical and obstetric indications"
        ]
      },
      {
        id: "fertility",
        title: "Fertility Evaluation & ART Guidance",
        desc: "Structured couple evaluation, ovarian reserve assessment, ovulation induction, and assistance with IUI / IVF pathways.",
        thumbnail: "assets/thumb-fertility.jpg",
        hasGuide: true,
        guidePageUrl: "fertility.html",
        guideLabel: "See details",
        quickGuideLabel: "Quick Guide",
        eyebrow: "Patient Clinical Guide · Obstetrics & Gynaecology",
        doctor: "Dr Prapti Shah (MS OBGYN, DNB) · GMC Nagpur",
        symptomsIntro: "A structured fertility workup identifies underlying ovulatory, tubal, uterine, or male-factor barriers:",
        symptoms: [
          "Inability to conceive after 12 months of regular unprotected intercourse (or after 6 months if female age ≥35)",
          "Irregular, delayed (oligomenorrhea), or completely absent menstrual periods",
          "Severe menstrual cramps (dysmenorrhea) or painful intercourse suggesting pelvic endometriosis",
          "History of pelvic inflammatory disease, prior abdominal surgery, or thyroid imbalance"
        ],
        redFlags: "Prior ectopic pregnancy, known bilateral tubal blockage, severe pelvic pain, or abnormal semen analysis with severe oligozoospermia.",
        investigationsIntro: "Simultaneous evaluation of both partners identifies clear targets for intervention:",
        investigations: [
          "Semen Analysis: Standard WHO evaluation of sperm concentration, total motility, and normal morphology",
          "Ovarian Reserve Assessment: Serum Anti-Müllerian Hormone (AMH) and transvaginal Antral Follicle Count (AFC)",
          "Tubal Patency Testing: Hysterosalpingography (HSG) or Sono-salpingography (SSG) to verify open fallopian tubes",
          "Hormonal Profiling: Day 2-3 FSH, LH, Estradiol, Serum Prolactin, and Thyroid Stimulating Hormone (TSH)"
        ],
        treatmentIntro: "Stepwise fertility treatments prioritize least-invasive effective options:",
        treatment: [
          "Ovulation Induction with oral agents (Letrozole) and ultrasound follicle tracking for timed intercourse",
          "Intrauterine Insemination (IUI): Prepared motile sperm placed directly into the uterine cavity during ovulation",
          "Assisted Reproductive Technology (IVF / ICSI) guidance for tubal blockage or severe male factor",
          "Hysteroscopic and laparoscopic correction of uterine septa, endometrial polyps, fibroids, or pelvic adhesions"
        ]
      },
      {
        id: "pcos",
        title: "PCOS, PCOD & Hormonal Health",
        desc: "Holistic, evidence-based management of irregular cycles, hyperandrogenism, metabolic health, and weight concerns.",
        thumbnail: "assets/thumb-pcos.jpg",
        hasGuide: true,
        guidePageUrl: "pcos.html",
        guideLabel: "See details",
        quickGuideLabel: "Quick Guide",
        eyebrow: "Patient Clinical Guide · Obstetrics & Gynaecology",
        doctor: "Dr Prapti Shah (MS OBGYN, DNB) · GMC Nagpur",
        symptomsIntro: "Polycystic Ovary Syndrome (PCOS) involves hormonal imbalance, irregular ovulation, and insulin resistance:",
        symptoms: [
          "Irregular, delayed menstrual periods (cycles exceeding 35-45 days) or absent periods",
          "Excess facial and body hair growth (hirsutism) on chin, upper lip, chest, or abdomen",
          "Persistent adult cystic acne resistant to standard topical skincare treatments",
          "Scalp hair thinning (androgenic alopecia) and weight gain with difficulty losing weight"
        ],
        redFlags: "Episodes of prolonged, abnormally heavy menstrual bleeding, dark velvety skin patches on the neck/armpits (acanthosis nigricans indicating insulin resistance), or pelvic pain.",
        investigationsIntro: "Accurate diagnosis using established international Rotterdam Consensus criteria:",
        investigations: [
          "Clinical Ovulatory & Androgenic Evaluation: Grading hirsutism and menstrual cycle patterns",
          "Pelvic Ultrasound: High-resolution transvaginal or transabdominal scan documenting polycystic ovarian morphology (≥20 follicles per ovary)",
          "Hormonal Workup: Total and free testosterone, DHEAS, LH-to-FSH ratio, prolactin, and TSH",
          "Metabolic Screening: Fasting insulin, oral glucose tolerance test (OGTT), HbA1c, and fasting lipid profile"
        ],
        treatmentIntro: "Comprehensive care combines lifestyle modification with targeted medical therapy:",
        treatment: [
          "Sustainable Lifestyle Architecture: Low-glycemic nutrition, resistance exercise, and insulin-sensitizing strategies",
          "Cycle Regularization: Low-dose cyclic oral progestins or combined oral contraceptives to protect the endometrium",
          "Targeted dermatological therapy for acne and excess hair growth",
          "Ovulation induction protocols for women planning pregnancy and long-term metabolic health maintenance"
        ]
      },
      {
        id: "gynae-laparoscopy",
        title: "Laparoscopic Gynaecological Surgery",
        desc: "Keyhole surgery for uterine fibroids (myomectomy), ovarian cysts, ectopic pregnancy, and pelvic endometriosis.",
        thumbnail: "assets/thumb-gynae-laparoscopy.jpg",
        hasGuide: true,
        guidePageUrl: "gynae-laparoscopy.html",
        guideLabel: "See details",
        quickGuideLabel: "Quick Guide",
        eyebrow: "Patient Clinical Guide · Obstetrics & Gynaecology",
        doctor: "Dr Prapti Shah (MS OBGYN, DNB) · GMC Nagpur",
        symptomsIntro: "Benign gynaecological conditions causing pelvic pain or abnormal bleeding can be safely resolved with keyhole surgery:",
        symptoms: [
          "Heavy, prolonged menstrual bleeding (menorrhagia) requiring frequent pad changes or causing severe anemia",
          "Severe, disabling menstrual cramps (dysmenorrhea) or chronic non-menstrual pelvic pain",
          "Painful intercourse (dyspareunia) or chronic lower back ache from endometriosis",
          "Pelvic pressure, frequent urination, or abdominal fullness from enlarging uterine fibroids"
        ],
        redFlags: "Sudden sharp, severe one-sided lower belly pain with dizziness or fainting (ruptured ectopic pregnancy or ovarian cyst torsion — emergency), or rapidly growing pelvic mass.",
        investigationsIntro: "High-definition imaging maps pelvic anatomy before any surgical procedure:",
        investigations: [
          "High-Resolution Pelvic Ultrasound (Transvaginal & Transabdominal): Detailed mapping of fibroid number, size, and cyst structure",
          "Pelvic MRI: Gold-standard imaging for deep infiltrating endometriosis (DIE) and complex myoma mapping",
          "Diagnostic Hysteroscopy: Telescopic inspection of the endometrial cavity for polyps or submucous fibroids",
          "Pre-operative hemoglobin evaluation, CA-125 serum marker, and baseline coagulogram"
        ],
        treatmentIntro: "Minimally invasive keyhole techniques prioritize tissue preservation, fertility, and rapid healing:",
        treatment: [
          "Laparoscopic Myomectomy: Fertility-preserving removal of uterine fibroids through micro-incisions with multilayer closure",
          "Laparoscopic Ovarian Cystectomy: Precision excision of dermoid, endometriotic, or serous cysts preserving healthy ovarian reserve",
          "Laparoscopic Excision of Endometriosis: Thorough clearing of implants and adhesiolysis for pain relief",
          "Total Laparoscopic Hysterectomy (TLH) with 24-48 hr hospital discharge and minimal downtime"
        ]
      },
      {
        id: "well-woman",
        title: "Preventive Well-Woman Screening",
        desc: "Routine cervical cancer screening (Pap smear), HPV vaccination counseling, breast examinations & pelvic checkups.",
        thumbnail: "assets/thumb-well-woman.jpg",
        hasGuide: true,
        guidePageUrl: "well-woman.html",
        guideLabel: "See details",
        quickGuideLabel: "Quick Guide",
        eyebrow: "Patient Clinical Guide · Obstetrics & Gynaecology",
        doctor: "Dr Prapti Shah (MS OBGYN, DNB) · GMC Nagpur",
        symptomsIntro: "Preventive screening detects silent precancerous changes and hormonal shifts long before symptoms develop:",
        symptoms: [
          "Screening is designed for asymptomatic women to ensure ongoing reproductive health and peace of mind",
          "Routine check-ups recommended every 1 to 3 years depending on age and clinical risk factors",
          "Persistent, itchy, malodorous, or discolored vaginal discharge",
          "Post-coital spotting or unexpected bleeding between menstrual cycles"
        ],
        redFlags: "Any bleeding after menopause, a newly discovered painless breast lump or nipple inversion, bloody nipple discharge, or unexplained pelvic pain.",
        investigationsIntro: "Evidence-based screening protocols tailored to your age and personal health profile:",
        investigations: [
          "Liquid-Based Cytology (LBC Pap Smear): Highly sensitive screening for cervical precancerous cell changes",
          "High-Risk HPV DNA Testing: Detects oncogenic human papillomavirus strains (types 16 & 18) years before lesions form",
          "Clinical Breast Examination & Screening Mammography counseling (for women aged 40 and above)",
          "Pelvic Ultrasound, bone mineral density (DEXA) assessment, and vital cardiovascular metabolic panels"
        ],
        treatmentIntro: "Proactive preventive counseling, vaccinations, and early minor intervention:",
        treatment: [
          "HPV Vaccination: Guidance and administration of prophylactic HPV vaccine (9-valent) for girls and women up to age 45",
          "Colposcopy & Directed Biopsy: Magnified examination of the cervix for abnormal Pap or high-risk HPV results",
          "Minimally invasive treatment of cervical ectropion, cervical polyps, and recurrent vaginal infections",
          "Personalized lifestyle, nutritional, and reproductive wellness counseling across every phase of life"
        ]
      },
      {
        id: "menopause",
        title: "Perimenopause & Menopause Care",
        desc: "Guidance through hormonal transitions, bone mineral density protection, vasomotor symptoms, and healthy aging.",
        thumbnail: "assets/thumb-menopause.jpg",
        hasGuide: true,
        guidePageUrl: "menopause.html",
        guideLabel: "See details",
        quickGuideLabel: "Quick Guide",
        eyebrow: "Patient Clinical Guide · Obstetrics & Gynaecology",
        doctor: "Dr Prapti Shah (MS OBGYN, DNB) · GMC Nagpur",
        symptomsIntro: "The menopause transition involves declining ovarian hormone production leading to physical and emotional changes:",
        symptoms: [
          "Hot flashes, sudden sweating episodes, night sweats, and frequent sleep disruptions",
          "Irregular, unpredictable menstrual cycles (skipping periods, shorter or lengthened cycle intervals)",
          "Mood fluctuations, heightened irritability, mild anxiety, or difficulty concentrating (brain fog)",
          "Vaginal dryness, burning sensations, discomfort during intercourse, or increased urinary urgency"
        ],
        redFlags: "ANY vaginal bleeding or spotting occurring after menopause (defined as 12 consecutive months without a period) — requires prompt ultrasound and endometrial evaluation.",
        investigationsIntro: "Clinical symptom scoring and objective health screening during the transition:",
        investigations: [
          "Menopause Transition Evaluation: Standardized Menopause Rating Scale (MRS) assessment",
          "Transvaginal Ultrasound (TVS): Accurate measurement of endometrial stripe thickness (<4mm cutoff in postmenopausal women)",
          "DEXA Bone Mineral Density Scan: Baseline assessment of lumbar spine and femoral neck for osteopenia/osteoporosis",
          "Cardiovascular & Metabolic Risk Profile: Lipid profile, fasting glucose, TSH, and liver function panels"
        ],
        treatmentIntro: "Evidence-based symptom relief and long-term organ protection:",
        treatment: [
          "Personalized Menopausal Hormone Therapy (MHT/HRT) for eligible symptomatic women within the window of opportunity",
          "Non-hormonal medical options (SSRIs, SNRIs, Gabapentinoids) for vasomotor relief when HRT is contraindicated",
          "Local Vaginal Estrogen therapy and non-hormonal moisturizers for genitourinary comfort and bladder health",
          "Bone health optimization: Weight-bearing exercise, calcium, vitamin D3, and anti-resorptive medications"
        ]
      }
    ]
  },

  /* ---------- CINEMATIC QUOTE ---------- */
  quote:       "“We treat every patient the way we'd want our own family treated.”",
  quoteCredit: "— Dr Saransh Vakharia & Dr Prapti Shah",

  /* ---------- FREQUENTLY ASKED QUESTIONS ---------- */
  faqs: [
    {
      q: "When does a gallstone require surgery, and can it be dissolved with medicine?",
      a: "Gallstones that cause symptoms (such as pain in the upper right abdomen, bloating after meals, or nausea) require surgical removal of the gallbladder (laparoscopic cholecystectomy). Medicines cannot reliably dissolve gallstones or prevent future attacks, pancreatitis, or infection. Asymptomatic 'silent' stones found incidentally usually only need observation, unless specific high-risk features are present."
    },
    {
      q: "How soon can I return to normal daily life after laparoscopic (keyhole) surgery?",
      a: "Because laparoscopic surgery uses small 5mm to 10mm incisions rather than large open cuts, post-operative pain is minimal. Most patients walk comfortably within hours of surgery, are discharged within 24 to 48 hours, and can resume desk work and light routine activities within 5 to 7 days."
    },
    {
      q: "What gastrointestinal cancers are treated at Gut & Gynae?",
      a: "We provide comprehensive surgical care for malignancies of the entire digestive tract — including cancers of the stomach, gallbladder, liver, pancreas, colon, and rectum. Treatment emphasizes thorough radiological staging, laparoscopic minimally invasive approaches where indicated, and evidence-based radical resection."
    },
    {
      q: "What should I expect during my first pregnancy (antenatal) consultation?",
      a: "Your first visit includes a comprehensive medical and family health review, baseline vital checks, calculation of gestational age and expected delivery date, prescription of essential prenatal vitamins (folic acid), and planning of routine first-trimester scans (Dating / NT scan) and blood tests."
    },
    {
      q: "Is surgery always required for uterine fibroids or ovarian cysts?",
      a: "No. Small, asymptomatic fibroids and simple ovarian cysts frequently require only routine ultrasound monitoring. Surgery (laparoscopic myomectomy or cystectomy) is considered only if there is severe pelvic pain, heavy menstrual bleeding leading to anemia, rapid growth, or interference with fertility."
    },
    {
      q: "What documents and records should I bring for my OPD consultation at GMC Nagpur?",
      a: "Please bring all recent blood reports, imaging films/CDs (Ultrasound, CT, MRI), endoscopy reports, past surgical discharge summaries, and a list of all current prescription medications."
    }
  ]
};

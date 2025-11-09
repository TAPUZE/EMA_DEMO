// ==================== PATIENT DATA - 3 Patients with Full History ====================

export const patients = [
    {
        id: "001",
        name: "Jane Doe",
        dob: "1965-01-15",
        gender: "Female",
        mrn: "MRN001",
        phone: "(305) 555-0101",
        email: "jane.doe@email.com",
        address: "123 Main St, Miami, FL 33101",
        insurance: "Medicare Advantage",
        allergies: [
            { allergen: "Penicillin", type: "drug", reaction: "Rash, hives", severity: "moderate" },
            { allergen: "Sulfa drugs", type: "drug", reaction: "Difficulty breathing", severity: "severe" }
        ],
        flags: ["Diabetic", "HTN", "CKD Stage 3", "Overdue Mammogram", "High Fall Risk"],
        lastVisit: "2025-11-01",
        
        socialHistory: {
            smoking: { status: "former", details: "Quit 15 years ago, 1 pack/day for 20 years" },
            alcohol: { status: "occasional", details: "1-2 glasses wine per week" },
            drugs: { status: "never", details: "" },
            exercise: { frequency: "2-3 times per week", type: "Walking 30 minutes" },
            occupation: "Retired teacher",
            livingSituation: "Lives alone, daughter nearby"
        },
        
        familyHistory: [
            { relation: "Mother", condition: "Type 2 Diabetes", ageAtDiagnosis: 62, notes: "Managed with medications" },
            { relation: "Father", condition: "Myocardial Infarction", ageAtDiagnosis: 68, notes: "Deceased age 75" },
            { relation: "Sister", condition: "Breast Cancer", ageAtDiagnosis: 58, notes: "In remission" },
            { relation: "Brother", condition: "Hypertension", ageAtDiagnosis: 55, notes: "On medications" }
        ],
        
        surgicalHistory: [
            { procedure: "Cholecystectomy (Laparoscopic)", date: "2018-06-15", hospital: "Miami General", surgeon: "Dr. Rodriguez", complications: "None" },
            { procedure: "Right knee arthroscopy", date: "2015-03-22", hospital: "Orthopedic Specialty", surgeon: "Dr. Chen", complications: "None" },
            { procedure: "Hysterectomy", date: "2010-11-08", hospital: "Women's Health Center", surgeon: "Dr. Martinez", complications: "Mild infection, resolved with antibiotics" }
        ],
        
        preventiveServices: {
            cancerScreenings: {
                mammogram: { completed: true, lastDate: "2023-08-15", dueDate: "2025-08-15", status: "overdue" },
                colonoscopy: { completed: true, lastDate: "2020-03-10", dueDate: "2030-03-10", status: "current" },
                papSmear: { completed: false, lastDate: null, dueDate: null, status: "not-applicable", notes: "S/P hysterectomy" },
                prostatePSA: { completed: false, lastDate: null, dueDate: null, status: "not-applicable" }
            },
            otherScreenings: {
                boneDensity: { completed: true, lastDate: "2023-05-20", dueDate: "2025-05-20", status: "due-soon" },
                diabeticEyeExam: { completed: true, lastDate: "2025-04-15", dueDate: "2026-04-15", status: "current" },
                diabeticFootExam: { completed: true, lastDate: "2025-11-01", dueDate: "2026-11-01", status: "current" },
                dentalExam: { completed: true, lastDate: "2025-09-10", dueDate: "2026-03-10", status: "current" }
            },
            immunizations: {
                influenza: { completed: true, lastDate: "2025-10-01", dueDate: "2026-10-01", status: "current" },
                pneumococcal: { completed: true, lastDate: "2020-01-15", dueDate: null, status: "complete", notes: "PPSV23 given" },
                shingles: { completed: true, lastDate: "2023-06-20", dueDate: null, status: "complete", notes: "Shingrix series complete" },
                covid19: { completed: true, lastDate: "2025-09-15", dueDate: "2026-09-15", status: "current" },
                tdap: { completed: true, lastDate: "2021-03-10", dueDate: "2031-03-10", status: "current" },
                hepatitisB: { completed: false, lastDate: null, dueDate: null, status: "not-indicated" }
            }
        },
        
        assessments: {
            depression: {
                phq2: { completed: true, date: "2025-11-01", score: 1, result: "Negative" },
                phq9: { completed: false, date: null, score: null, result: null, notes: "PHQ-2 negative, PHQ-9 not indicated" }
            },
            fallRisk: {
                historyOfFalls: true,
                gaitBalanceProblems: true,
                highRiskFlag: true,
                lastFallDate: "2025-08-15",
                interventions: "Started physical therapy for balance training. Home safety evaluation completed. Reviewed medications for fall risk."
            },
            functionalStatus: {
                adls: {
                    bathing: "independent",
                    dressing: "independent",
                    toileting: "independent",
                    transferring: "independent",
                    eating: "independent"
                },
                iadls: {
                    medications: "independent",
                    finances: "needs-assistance",
                    meals: "independent",
                    housekeeping: "needs-assistance",
                    transportation: "needs-assistance"
                },
                notes: "Daughter assists with finances, heavy housekeeping, and transportation to appointments"
            },
            counseling: {
                completed: ["diet-nutrition", "exercise", "fall-prevention", "medication-adherence", "diabetic-foot-care"],
                notes: "Counseled on diabetic diet, regular exercise importance, fall prevention strategies. Patient engaged and agreeable to plan."
            }
        },
        
        problems: [
            { code: "E11.65", description: "Type 2 diabetes mellitus with hyperglycemia", status: "Active", onset: "2018-03-15" },
            { code: "I10", description: "Essential hypertension", status: "Active", onset: "2017-06-20" },
            { code: "N18.3", description: "Chronic kidney disease, stage 3", status: "Active", onset: "2020-09-10" },
            { code: "E78.5", description: "Hyperlipidemia", status: "Active", onset: "2019-02-05" }
        ],
        
        medications: [
            { name: "Metformin 1000mg", dosage: "twice daily", prescriber: "Dr. Pompee", startDate: "2018-03-15" },
            { name: "Lisinopril 20mg", dosage: "once daily", prescriber: "Dr. Pompee", startDate: "2017-06-20" },
            { name: "Atorvastatin 40mg", dosage: "once daily at bedtime", prescriber: "Dr. Pompee", startDate: "2019-02-05" },
            { name: "Aspirin 81mg", dosage: "once daily", prescriber: "Dr. Pompee", startDate: "2020-01-10" }
        ],
        
        vitals: [
            { date: "2025-11-01", bp: "142/88", hr: 78, temp: 98.4, weight: 185, height: 64, bmi: 31.8 },
            { date: "2025-08-15", bp: "138/86", hr: 76, temp: 98.6, weight: 187, height: 64, bmi: 32.1 },
            { date: "2025-05-20", bp: "145/90", hr: 80, temp: 98.2, weight: 189, height: 64, bmi: 32.5 },
            { date: "2025-02-10", bp: "140/85", hr: 74, temp: 98.5, weight: 188, height: 64, bmi: 32.3 }
        ],
        
        visits: [
            {
                date: "2025-11-01",
                type: "Follow-up",
                provider: "ARNP Ange Pompee",
                chiefComplaint: "Diabetes follow-up",
                hpi: "Patient presents for routine diabetes management. Reports good adherence to medications. Blood sugars ranging 110-140 fasting. No hypoglycemic episodes. Denies polyuria, polydipsia, or polyphagia.",
                assessment: "Type 2 DM - stable on current regimen. A1C improved to 7.2% from 8.1%.",
                plan: "Continue current medications. Recheck A1C in 3 months. Diabetic eye exam scheduled."
            },
            {
                date: "2025-08-15",
                type: "Follow-up",
                provider: "ARNP Ange Pompee",
                chiefComplaint: "Hypertension management",
                hpi: "Patient reports occasional headaches. Home BP readings averaging 135/85. Good medication compliance.",
                assessment: "HTN - adequately controlled on current therapy.",
                plan: "Continue Lisinopril 20mg daily. Increase monitoring to weekly."
            },
            {
                date: "2025-05-20",
                type: "Annual Physical",
                provider: "ARNP Ange Pompee",
                chiefComplaint: "Annual wellness visit",
                hpi: "Patient here for annual physical. No acute complaints. Reports feeling well overall.",
                assessment: "Multiple chronic conditions, stable.",
                plan: "Labs ordered: CBC, CMP, lipid panel, A1C. Mammogram scheduled. Colonoscopy due."
            }
        ],
        
        labs: [
            {
                date: "2025-10-25",
                tests: [
                    { name: "HbA1c", value: "7.2", unit: "%", normal: "4.0-5.6", flag: "High" },
                    { name: "Glucose", value: "128", unit: "mg/dL", normal: "70-100", flag: "High" },
                    { name: "Creatinine", value: "1.4", unit: "mg/dL", normal: "0.6-1.2", flag: "High" },
                    { name: "eGFR", value: "48", unit: "mL/min", normal: ">60", flag: "Low" }
                ]
            }
        ],
        
        messages: [
            { from: "Jane Doe", to: "Dr. Pompee", date: "2025-11-08", subject: "Question about medication", body: "Should I take my metformin with food?", read: false },
            { from: "Dr. Pompee", to: "Jane Doe", date: "2025-11-05", subject: "Lab Results", body: "Your recent A1C shows improvement. Keep up the good work!", read: true },
            { from: "Jane Doe", to: "Dr. Pompee", date: "2025-10-20", subject: "Appointment request", body: "I'd like to schedule a follow-up appointment.", read: true }
        ]
    },
    
    {
        id: "002",
        name: "John Smith",
        dob: "1958-07-22",
        gender: "Male",
        mrn: "MRN002",
        phone: "(305) 555-0102",
        email: "john.smith@email.com",
        address: "456 Oak Ave, Miami, FL 33102",
        insurance: "Blue Cross Blue Shield",
        allergies: [],
        flags: ["CHF", "COPD", "A-Fib", "Medication Interaction Alert", "Anticoagulation Monitoring"],
        lastVisit: "2025-10-28",
        
        socialHistory: {
            smoking: { status: "former", details: "Quit 10 years ago, 2 packs/day for 35 years" },
            alcohol: { status: "none", details: "Abstinent for 12 years" },
            drugs: { status: "former", details: "Marijuana use in youth, quit age 30" },
            exercise: { frequency: "Daily", type: "Walking 15 minutes as tolerated" },
            occupation: "Retired mechanic",
            livingSituation: "Lives with wife, son visits weekly"
        },
        
        familyHistory: [
            { relation: "Father", condition: "COPD", ageAtDiagnosis: 65, notes: "Deceased age 72 from respiratory failure" },
            { relation: "Mother", condition: "Congestive Heart Failure", ageAtDiagnosis: 70, notes: "Deceased age 78" },
            { relation: "Brother", condition: "Myocardial Infarction", ageAtDiagnosis: 60, notes: "S/P CABG, doing well" },
            { relation: "Sister", condition: "Hypertension", ageAtDiagnosis: 52, notes: "Controlled" }
        ],
        
        surgicalHistory: [
            { procedure: "Coronary Artery Bypass Graft (CABG) x3", date: "2019-06-20", hospital: "Miami Heart Institute", surgeon: "Dr. Thompson", complications: "Atrial fibrillation post-op, converted with amiodarone" },
            { procedure: "Left inguinal hernia repair", date: "2015-09-12", hospital: "Miami General", surgeon: "Dr. Williams", complications: "None" },
            { procedure: "Appendectomy", date: "1985-05-15", hospital: "County Hospital", surgeon: "Unknown", complications: "None" }
        ],
        
        preventiveServices: {
            cancerScreenings: {
                mammogram: { completed: false, lastDate: null, dueDate: null, status: "not-applicable" },
                colonoscopy: { completed: true, lastDate: "2018-07-10", dueDate: "2028-07-10", status: "current" },
                papSmear: { completed: false, lastDate: null, dueDate: null, status: "not-applicable" },
                prostatePSA: { completed: true, lastDate: "2025-03-15", dueDate: "2026-03-15", status: "current" }
            },
            otherScreenings: {
                boneDensity: { completed: false, lastDate: null, dueDate: null, status: "not-indicated" },
                diabeticEyeExam: { completed: false, lastDate: null, dueDate: null, status: "not-applicable" },
                diabeticFootExam: { completed: false, lastDate: null, dueDate: null, status: "not-applicable" },
                dentalExam: { completed: true, lastDate: "2025-06-20", dueDate: "2025-12-20", status: "current" }
            },
            immunizations: {
                influenza: { completed: true, lastDate: "2025-10-05", dueDate: "2026-10-05", status: "current" },
                pneumococcal: { completed: true, lastDate: "2018-02-10", dueDate: null, status: "complete", notes: "PPSV23 and PCV13 series complete" },
                shingles: { completed: true, lastDate: "2024-01-15", dueDate: null, status: "complete", notes: "Shingrix 2-dose series" },
                covid19: { completed: true, lastDate: "2025-10-01", dueDate: "2026-10-01", status: "current" },
                tdap: { completed: true, lastDate: "2020-11-05", dueDate: "2030-11-05", status: "current" },
                hepatitisB: { completed: false, lastDate: null, dueDate: null, status: "not-indicated" }
            }
        },
        
        assessments: {
            depression: {
                phq2: { completed: true, date: "2025-10-28", score: 3, result: "Positive - Further screening recommended" },
                phq9: { completed: true, date: "2025-10-28", score: 8, result: "Mild depression", notes: "Patient reports feeling down due to physical limitations. Discussed options. Will monitor." }
            },
            fallRisk: {
                historyOfFalls: true,
                gaitBalanceProblems: true,
                highRiskFlag: true,
                lastFallDate: "2025-09-10",
                interventions: "Reviewed medications. Reduced Furosemide dose. Home safety assessment scheduled. Physical therapy referral placed."
            },
            functionalStatus: {
                adls: {
                    bathing: "needs-assistance",
                    dressing: "independent",
                    toileting: "independent",
                    transferring: "needs-assistance",
                    eating: "independent"
                },
                iadls: {
                    medications: "needs-assistance",
                    finances: "needs-assistance",
                    meals: "needs-assistance",
                    housekeeping: "dependent",
                    transportation: "dependent"
                },
                notes: "Wife assists with most IADLs. Home health aide 3x/week for bathing assistance."
            },
            counseling: {
                completed: ["diet-nutrition", "exercise", "smoking-cessation", "medication-adherence", "fall-prevention", "advance-directives"],
                notes: "Counseled on low-sodium diet for CHF management. Encouraged continued smoking abstinence. Reviewed advance directives with patient and wife."
            }
        },
        
        problems: [
            { code: "I50.23", description: "Acute on chronic systolic heart failure", status: "Active", onset: "2019-05-10" },
            { code: "J44.1", description: "COPD with acute exacerbation", status: "Active", onset: "2018-11-20" },
            { code: "I48.91", description: "Atrial fibrillation", status: "Active", onset: "2020-03-15" },
            { code: "I10", description: "Essential hypertension", status: "Active", onset: "2015-01-10" }
        ],
        
        medications: [
            { name: "Furosemide 40mg", dosage: "twice daily", prescriber: "Dr. Pompee", startDate: "2019-05-10" },
            { name: "Carvedilol 25mg", dosage: "twice daily", prescriber: "Dr. Pompee", startDate: "2019-05-15" },
            { name: "Lisinopril 10mg", dosage: "once daily", prescriber: "Dr. Pompee", startDate: "2019-05-15" },
            { name: "Apixaban 5mg", dosage: "twice daily", prescriber: "Dr. Pompee", startDate: "2020-03-20" },
            { name: "Albuterol inhaler", dosage: "2 puffs every 4-6 hours as needed", prescriber: "Dr. Pompee", startDate: "2018-11-20" },
            { name: "Spiriva 18mcg", dosage: "once daily", prescriber: "Dr. Pompee", startDate: "2018-11-20" }
        ],
        
        vitals: [
            { date: "2025-10-28", bp: "118/72", hr: 68, temp: 98.1, weight: 220, height: 70, bmi: 31.6, o2sat: 94 },
            { date: "2025-09-15", bp: "125/78", hr: 72, temp: 98.3, weight: 218, height: 70, bmi: 31.3, o2sat: 93 },
            { date: "2025-07-10", bp: "130/80", hr: 75, temp: 98.0, weight: 222, height: 70, bmi: 31.9, o2sat: 92 },
            { date: "2025-05-05", bp: "135/85", hr: 78, temp: 98.4, weight: 225, height: 70, bmi: 32.3, o2sat: 91 }
        ],
        
        visits: [
            {
                date: "2025-10-28",
                type: "Follow-up",
                provider: "ARNP Ange Pompee",
                chiefComplaint: "CHF follow-up",
                hpi: "Patient reports improved exercise tolerance. No orthopnea or PND. Medication compliance good. Weight stable.",
                assessment: "CHF - compensated on current diuretic regimen. EF improved to 35% from 30%.",
                plan: "Continue current medications. Cardiology follow-up in 3 months."
            },
            {
                date: "2025-09-15",
                type: "Sick Visit",
                provider: "ARNP Ange Pompee",
                chiefComplaint: "Increased shortness of breath",
                hpi: "Patient reports increased dyspnea on exertion for past 3 days. + orthopnea. Weight up 5 lbs.",
                assessment: "Acute on chronic systolic CHF exacerbation.",
                plan: "Increased Furosemide to 80mg BID x 3 days. Daily weights. Call if worsening."
            }
        ],
        
        labs: [
            {
                date: "2025-10-20",
                tests: [
                    { name: "BNP", value: "450", unit: "pg/mL", normal: "<100", flag: "High" },
                    { name: "Creatinine", value: "1.3", unit: "mg/dL", normal: "0.7-1.3", flag: "" },
                    { name: "Potassium", value: "4.2", unit: "mEq/L", normal: "3.5-5.0", flag: "" }
                ]
            }
        ],
        
        messages: [
            { from: "John Smith", to: "Dr. Pompee", date: "2025-11-07", subject: "Breathing better", body: "My breathing has improved since medication adjustment.", read: false },
            { from: "Dr. Pompee", to: "John Smith", date: "2025-10-30", subject: "Follow-up", body: "Remember to weigh yourself daily and call if weight increases >3 lbs.", read: true }
        ]
    },
    
    {
        id: "003",
        name: "Alice Johnson",
        dob: "1972-11-30",
        gender: "Female",
        mrn: "MRN003",
        phone: "(305) 555-0103",
        email: "alice.johnson@email.com",
        address: "789 Pine Rd, Miami, FL 33103",
        insurance: "United Healthcare",
        allergies: [
            { allergen: "Codeine", type: "drug", reaction: "Nausea, vomiting", severity: "moderate" }
        ],
        flags: ["Recent amputation", "Diabetic", "Depression - Active Treatment", "PT/OT in progress"],
        lastVisit: "2025-11-03",
        
        socialHistory: {
            smoking: { status: "never", details: "" },
            alcohol: { status: "none", details: "Never used" },
            drugs: { status: "never", details: "" },
            exercise: { frequency: "Daily PT exercises", type: "Physical therapy - prosthetic training, strengthening" },
            occupation: "Office manager - on disability",
            livingSituation: "Lives with husband, 2 adult children live nearby"
        },
        
        familyHistory: [
            { relation: "Mother", condition: "Type 2 Diabetes", ageAtDiagnosis: 58, notes: "Managed with insulin" },
            { relation: "Father", condition: "Hypertension", ageAtDiagnosis: 50, notes: "Well controlled" },
            { relation: "Maternal Grandmother", condition: "Diabetic complications - BKA", ageAtDiagnosis: 65, notes: "Deceased age 72" },
            { relation: "Brother", condition: "Type 1 Diabetes", ageAtDiagnosis: 22, notes: "Insulin pump" }
        ],
        
        surgicalHistory: [
            { procedure: "Right Below-Knee Amputation (BKA)", date: "2024-08-15", hospital: "Miami General", surgeon: "Dr. Harrison - Vascular Surgery", complications: "Delayed wound healing, required wound VAC therapy for 3 weeks" },
            { procedure: "Right femoral-popliteal bypass", date: "2024-03-10", hospital: "Miami Vascular Center", surgeon: "Dr. Harrison", complications: "Graft failed after 4 months" },
            { procedure: "Multiple right foot debridements (3 procedures)", date: "2023-11-15 to 2024-01-20", hospital: "Miami General", surgeon: "Dr. Harrison", complications: "Persistent osteomyelitis" },
            { procedure: "Cesarean Section x2", date: "1998, 2001", hospital: "Women's Hospital", surgeon: "Dr. Stevens", complications: "None" }
        ],
        
        preventiveServices: {
            cancerScreenings: {
                mammogram: { completed: true, lastDate: "2025-02-10", dueDate: "2026-02-10", status: "current" },
                colonoscopy: { completed: true, lastDate: "2022-11-15", dueDate: "2032-11-15", status: "current" },
                papSmear: { completed: true, lastDate: "2024-06-20", dueDate: "2027-06-20", status: "current" },
                prostatePSA: { completed: false, lastDate: null, dueDate: null, status: "not-applicable" }
            },
            otherScreenings: {
                boneDensity: { completed: true, lastDate: "2024-05-15", dueDate: "2026-05-15", status: "current" },
                diabeticEyeExam: { completed: true, lastDate: "2025-09-20", dueDate: "2026-09-20", status: "current" },
                diabeticFootExam: { completed: true, lastDate: "2025-11-03", dueDate: "2026-11-03", status: "current", notes: "Left foot only - monitoring closely" },
                dentalExam: { completed: true, lastDate: "2025-07-15", dueDate: "2026-01-15", status: "current" }
            },
            immunizations: {
                influenza: { completed: true, lastDate: "2025-10-10", dueDate: "2026-10-10", status: "current" },
                pneumococcal: { completed: true, lastDate: "2023-04-10", dueDate: null, status: "complete", notes: "PPSV23" },
                shingles: { completed: false, lastDate: null, dueDate: "2025-11-30", status: "due", notes: "Scheduled for next visit" },
                covid19: { completed: true, lastDate: "2025-09-20", dueDate: "2026-09-20", status: "current" },
                tdap: { completed: true, lastDate: "2024-08-20", dueDate: "2034-08-20", status: "current", notes: "Given post-op" },
                hepatitisB: { completed: false, lastDate: null, dueDate: null, status: "not-indicated" }
            }
        },
        
        assessments: {
            depression: {
                phq2: { completed: true, date: "2025-11-03", score: 4, result: "Positive" },
                phq9: { completed: true, date: "2025-11-03", score: 12, result: "Moderate depression", notes: "Started Sertraline 100mg. Referred to behavioral health. Patient responding well to treatment." }
            },
            fallRisk: {
                historyOfFalls: true,
                gaitBalanceProblems: true,
                highRiskFlag: true,
                lastFallDate: "2025-09-25",
                interventions: "Intensive PT/OT for prosthetic training. Walker prescribed. Home modifications completed (grab bars, ramps). Family educated on fall prevention."
            },
            functionalStatus: {
                adls: {
                    bathing: "needs-assistance",
                    dressing: "needs-assistance",
                    toileting: "independent",
                    transferring: "needs-assistance",
                    eating: "independent"
                },
                iadls: {
                    medications: "independent",
                    finances: "independent",
                    meals: "needs-assistance",
                    housekeeping: "dependent",
                    transportation: "dependent"
                },
                notes: "Functional status improving with prosthetic training. Goal: independent ambulation with walker by 6 months post-op. Husband assists with ADLs/IADLs."
            },
            counseling: {
                completed: ["diet-nutrition", "diabetic-foot-care", "medication-adherence", "fall-prevention", "depression-management", "advance-directives"],
                notes: "Extensive counseling on diabetic management to prevent complications in remaining limb. Depression management discussed. Patient participating in amputee support group."
            }
        },
        
        problems: [
            { code: "E11.51", description: "Type 2 diabetes with diabetic peripheral angiopathy", status: "Active", onset: "2015-04-10" },
            { code: "Z89.512", description: "Acquired absence of right leg below knee", status: "Active", onset: "2024-08-15" },
            { code: "F33.1", description: "Major depressive disorder, recurrent, moderate", status: "Active", onset: "2024-09-01" },
            { code: "M79.604", description: "Pain in right leg", status: "Active", onset: "2024-08-20" }
        ],
        
        medications: [
            { name: "Insulin Glargine", dosage: "30 units at bedtime", prescriber: "Dr. Pompee", startDate: "2020-01-15" },
            { name: "Insulin Lispro", dosage: "sliding scale with meals", prescriber: "Dr. Pompee", startDate: "2020-01-15" },
            { name: "Gabapentin 300mg", dosage: "three times daily", prescriber: "Dr. Pompee", startDate: "2024-08-25" },
            { name: "Sertraline 100mg", dosage: "once daily", prescriber: "Dr. Pompee", startDate: "2024-09-05" },
            { name: "Aspirin 81mg", dosage: "once daily", prescriber: "Dr. Pompee", startDate: "2020-03-10" }
        ],
        
        vitals: [
            { date: "2025-11-03", bp: "135/82", hr: 82, temp: 98.2, weight: 165, height: 65, bmi: 27.5 },
            { date: "2025-09-20", bp: "132/80", hr: 80, temp: 98.4, weight: 168, height: 65, bmi: 28.0 },
            { date: "2025-07-15", bp: "140/85", hr: 85, temp: 98.1, weight: 170, height: 65, bmi: 28.3 },
            { date: "2025-05-10", bp: "138/84", hr: 83, temp: 98.3, weight: 172, height: 65, bmi: 28.6 }
        ],
        
        visits: [
            {
                date: "2025-11-03",
                type: "Follow-up",
                provider: "ARNP Ange Pompee",
                chiefComplaint: "Prosthetic fitting follow-up",
                hpi: "Patient here for follow-up after prosthetic fitting. Ambulating well with walker. Phantom pain improved with Gabapentin. Mood stable on Sertraline.",
                assessment: "S/P BKA - healing well. Prosthetic adaptation progressing. Phantom pain controlled.",
                plan: "Continue current medications. PT twice weekly. Mental health follow-up in 2 weeks."
            },
            {
                date: "2025-09-20",
                type: "Follow-up",
                provider: "ARNP Ange Pompee",
                chiefComplaint: "Post-amputation check",
                hpi: "Patient 5 weeks post-BKA. Residual limb healing well. Significant phantom limb pain. Feeling depressed.",
                assessment: "Post-operative recovery progressing. Phantom pain. Situational depression.",
                plan: "Started Gabapentin for phantom pain. Referred to mental health. Wound care continues."
            }
        ],
        
        labs: [
            {
                date: "2025-10-15",
                tests: [
                    { name: "HbA1c", value: "7.8", unit: "%", normal: "4.0-5.6", flag: "High" },
                    { name: "Glucose", value: "165", unit: "mg/dL", normal: "70-100", flag: "High" }
                ]
            }
        ],
        
        messages: [
            { from: "Alice Johnson", to: "Dr. Pompee", date: "2025-11-06", subject: "Phantom pain", body: "The phantom pain is much better with the new medication. Thank you!", read: false },
            { from: "Dr. Pompee", to: "Alice Johnson", date: "2025-11-04", subject: "Great progress", body: "You're doing wonderful with your prosthetic training. Keep up the good work!", read: true }
        ]
    }
];

// Helper function to get patient by ID
export function getPatientById(id) {
    return patients.find(p => p.id === id);
}

// Helper function to search patients
export function searchPatients(query) {
    const lowerQuery = query.toLowerCase();
    return patients.filter(p => 
        p.name.toLowerCase().includes(lowerQuery) ||
        p.mrn.toLowerCase().includes(lowerQuery) ||
        p.dob.includes(query)
    );
}

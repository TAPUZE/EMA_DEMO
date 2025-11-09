// ==================== VISIT TEMPLATES & PROTOCOLS ====================

export const visitTemplates = {
    // Annual Wellness Visit (AWV) - Medicare Required
    awv: {
        name: "Annual Wellness Visit",
        code: "G0438/G0439",
        requiredDocuments: [
            "healthRiskAssessment",
            "preventiveServices",
            "depressionScreening",
            "fallRiskAssessment",
            "functionalAssessment",
            "advanceCareDirectives",
            "cognitiveAssessment"
        ],
        protocol: {
            title: "Medicare Annual Wellness Visit Protocol",
            steps: [
                { order: 1, section: "healthRiskAssessment", required: true, description: "Complete Health Risk Assessment questionnaire" },
                { order: 2, section: "vitals", required: true, description: "Record height, weight, BP, BMI" },
                { order: 3, section: "preventiveServices", required: true, description: "Review and update preventive service schedule" },
                { order: 4, section: "depressionScreening", required: true, description: "PHQ-2 screening (PHQ-9 if indicated)" },
                { order: 5, section: "fallRiskAssessment", required: true, description: "Fall risk screening and interventions" },
                { order: 6, section: "functionalAssessment", required: true, description: "ADLs and IADLs assessment" },
                { order: 7, section: "cognitiveAssessment", required: true, description: "Cognitive screening if indicated" },
                { order: 8, section: "advanceCareDirectives", required: true, description: "Discuss advance care planning" },
                { order: 9, section: "screenings", required: true, description: "Order/schedule overdue screenings" },
                { order: 10, section: "plan", required: true, description: "Create personalized prevention plan" }
            ]
        },
        billing: {
            newPatient: "G0438",
            established: "G0439",
            time: "30-60 minutes",
            reimbursement: "$174-$220"
        }
    },

    // Chronic Care Management Visit
    ccm: {
        name: "Chronic Care Management",
        code: "99490",
        requiredDocuments: [
            "chronicDiseaseReview",
            "medicationReconciliation",
            "careCoordination",
            "patientEducation"
        ],
        protocol: {
            title: "Chronic Care Management Protocol",
            steps: [
                { order: 1, section: "chiefComplaint", required: true, description: "Document reason for visit" },
                { order: 2, section: "vitals", required: true, description: "Record vital signs" },
                { order: 3, section: "chronicDiseaseReview", required: true, description: "Review all chronic conditions" },
                { order: 4, section: "medicationReconciliation", required: true, description: "Reconcile all medications" },
                { order: 5, section: "labReview", required: true, description: "Review recent lab results" },
                { order: 6, section: "careCoordination", required: true, description: "Document care coordination activities" },
                { order: 7, section: "patientEducation", required: true, description: "Provide disease-specific education" },
                { order: 8, section: "plan", required: true, description: "Update care plan" }
            ]
        }
    },

    // Follow-up Visit
    followup: {
        name: "Follow-up Visit",
        code: "99213/99214",
        requiredDocuments: [
            "chiefComplaint",
            "intervalHistory",
            "medicationReview",
            "assessment",
            "plan"
        ],
        protocol: {
            title: "Follow-up Visit Protocol",
            steps: [
                { order: 1, section: "chiefComplaint", required: true, description: "Chief complaint and reason for visit" },
                { order: 2, section: "vitals", required: true, description: "Record vital signs" },
                { order: 3, section: "intervalHistory", required: true, description: "Changes since last visit" },
                { order: 4, section: "medicationReview", required: true, description: "Review current medications and adherence" },
                { order: 5, section: "physicalExam", required: false, description: "Focused physical examination" },
                { order: 6, section: "labReview", required: false, description: "Review any recent test results" },
                { order: 7, section: "assessment", required: true, description: "Update assessment and diagnoses" },
                { order: 8, section: "plan", required: true, description: "Treatment plan and follow-up" }
            ]
        }
    },

    // New Patient Visit
    newPatient: {
        name: "New Patient Comprehensive",
        code: "99204/99205",
        requiredDocuments: [
            "chiefComplaint",
            "historyOfPresentIllness",
            "pastMedicalHistory",
            "medications",
            "allergies",
            "familyHistory",
            "socialHistory",
            "reviewOfSystems",
            "physicalExamination",
            "assessment",
            "plan"
        ],
        protocol: {
            title: "New Patient Comprehensive Visit Protocol",
            steps: [
                { order: 1, section: "demographics", required: true, description: "Verify patient demographics and insurance" },
                { order: 2, section: "chiefComplaint", required: true, description: "Document chief complaint" },
                { order: 3, section: "hpi", required: true, description: "Detailed history of present illness" },
                { order: 4, section: "pastMedicalHistory", required: true, description: "Complete past medical/surgical history" },
                { order: 5, section: "medications", required: true, description: "Full medication list" },
                { order: 6, section: "allergies", required: true, description: "Allergies and reactions" },
                { order: 7, section: "familyHistory", required: true, description: "Family medical history" },
                { order: 8, section: "socialHistory", required: true, description: "Social history (tobacco, alcohol, drugs)" },
                { order: 9, section: "reviewOfSystems", required: true, description: "14-point review of systems" },
                { order: 10, section: "vitals", required: true, description: "Complete vital signs" },
                { order: 11, section: "physicalExam", required: true, description: "Comprehensive physical examination" },
                { order: 12, section: "assessment", required: true, description: "Assessment and diagnoses" },
                { order: 13, section: "plan", required: true, description: "Treatment plan and follow-up" }
            ]
        }
    },

    // Diabetes Management Visit
    diabetesManagement: {
        name: "Diabetes Management Visit",
        code: "99214",
        requiredDocuments: [
            "diabetesReview",
            "footExam",
            "eyeExam",
            "labReview",
            "medicationReview",
            "dietCounseling"
        ],
        protocol: {
            title: "Diabetes Management Protocol",
            steps: [
                { order: 1, section: "vitals", required: true, description: "Weight, BP, pulse" },
                { order: 2, section: "glucoseReview", required: true, description: "Review home glucose logs" },
                { order: 3, section: "hba1cReview", required: true, description: "Review HbA1c (if within 3 months)" },
                { order: 4, section: "footExam", required: true, description: "Comprehensive foot examination" },
                { order: 5, section: "medications", required: true, description: "Review diabetes medications" },
                { order: 6, section: "hypoglycemiaScreen", required: true, description: "Screen for hypoglycemic episodes" },
                { order: 7, section: "complications", required: true, description: "Screen for complications" },
                { order: 8, section: "preventiveServices", required: true, description: "Diabetic eye exam, foot exam schedule" },
                { order: 9, section: "dietCounseling", required: true, description: "Diet and lifestyle counseling" },
                { order: 10, section: "plan", required: true, description: "Adjust treatment plan as needed" }
            ]
        }
    },

    // CHF Management Visit
    chfManagement: {
        name: "CHF Management Visit",
        code: "99214",
        requiredDocuments: [
            "chfReview",
            "weightTracking",
            "symptomsReview",
            "medicationReview",
            "fluidStatus"
        ],
        protocol: {
            title: "Congestive Heart Failure Management Protocol",
            steps: [
                { order: 1, section: "vitals", required: true, description: "Weight, BP, HR, O2 sat" },
                { order: 2, section: "weightChange", required: true, description: "Compare to previous weights" },
                { order: 3, section: "symptoms", required: true, description: "SOB, orthopnea, PND, edema" },
                { order: 4, section: "functionalClass", required: true, description: "NYHA functional classification" },
                { order: 5, section: "physicalExam", required: true, description: "Cardiac, lung, edema assessment" },
                { order: 6, section: "medications", required: true, description: "Review CHF medications and adherence" },
                { order: 7, section: "labReview", required: false, description: "BNP, electrolytes, renal function" },
                { order: 8, section: "dietCompliance", required: true, description: "Sodium and fluid restriction review" },
                { order: 9, section: "plan", required: true, description: "Adjust medications, follow-up plan" }
            ]
        }
    },

    // Hypertension Management Visit
    hypertensionManagement: {
        name: "Hypertension Management",
        code: "99213",
        requiredDocuments: [
            "bpTracking",
            "medicationReview",
            "lifestyleModifications",
            "targetOrganDamage"
        ],
        protocol: {
            title: "Hypertension Management Protocol (JNC-8 Guidelines)",
            steps: [
                { order: 1, section: "vitals", required: true, description: "BP (both arms), HR, weight" },
                { order: 2, section: "homeBPLog", required: true, description: "Review home BP readings" },
                { order: 3, section: "symptomsReview", required: true, description: "Headache, chest pain, vision changes" },
                { order: 4, section: "medicationReview", required: true, description: "Current antihypertensives and adherence" },
                { order: 5, section: "sideEffects", required: true, description: "Screen for medication side effects" },
                { order: 6, section: "lifestyleAssessment", required: true, description: "Diet (sodium), exercise, weight, alcohol" },
                { order: 7, section: "labReview", required: false, description: "Creatinine, potassium, lipids, urinalysis" },
                { order: 8, section: "targetOrganAssessment", required: true, description: "Heart, kidneys, eyes, brain" },
                { order: 9, section: "plan", required: true, description: "BP target, medication adjustment, follow-up" }
            ]
        }
    },

    // COPD Management Visit
    copdManagement: {
        name: "COPD Management Visit",
        code: "99214",
        requiredDocuments: [
            "respiratoryAssessment",
            "inhalerTechnique",
            "exacerbationHistory",
            "oxygenAssessment"
        ],
        protocol: {
            title: "COPD Management Protocol (GOLD Guidelines)",
            steps: [
                { order: 1, section: "vitals", required: true, description: "O2 sat, RR, HR, BP, weight" },
                { order: 2, section: "symptomsReview", required: true, description: "Dyspnea scale (mMRC), cough, sputum" },
                { order: 3, section: "exacerbationHistory", required: true, description: "Recent exacerbations, hospitalizations" },
                { order: 4, section: "functionalStatus", required: true, description: "Activity tolerance, ADLs" },
                { order: 5, section: "physicalExam", required: true, description: "Lung exam, accessory muscle use, wheezing" },
                { order: 6, section: "inhalerReview", required: true, description: "Review technique and adherence" },
                { order: 7, section: "oxygenAssessment", required: true, description: "Home O2 use, saturation levels" },
                { order: 8, section: "smokingStatus", required: true, description: "Tobacco use, cessation counseling" },
                { order: 9, section: "vaccinations", required: true, description: "Influenza, pneumococcal status" },
                { order: 10, section: "plan", required: true, description: "Medication adjustment, pulmonary rehab" }
            ]
        }
    },

    // Anticoagulation Management Visit
    anticoagulationManagement: {
        name: "Anticoagulation Management",
        code: "99211/99212",
        requiredDocuments: [
            "inrResult",
            "bleedingAssessment",
            "medicationReview",
            "dietaryReview"
        ],
        protocol: {
            title: "Warfarin/Anticoagulation Management Protocol",
            steps: [
                { order: 1, section: "vitals", required: true, description: "BP, HR, weight" },
                { order: 2, section: "inrReview", required: true, description: "Current INR, target range" },
                { order: 3, section: "bleedingAssessment", required: true, description: "Signs of bleeding (bruising, GI, etc.)" },
                { order: 4, section: "medicationReview", required: true, description: "Warfarin dose, adherence, drug interactions" },
                { order: 5, section: "dietaryReview", required: true, description: "Vitamin K intake consistency" },
                { order: 6, section: "fallRisk", required: true, description: "Fall risk assessment" },
                { order: 7, section: "labReview", required: false, description: "CBC, renal function if indicated" },
                { order: 8, section: "plan", required: true, description: "Dose adjustment, next INR date" }
            ]
        }
    },

    // Depression Management Visit
    depressionManagement: {
        name: "Depression Management",
        code: "99214",
        requiredDocuments: [
            "phq9Assessment",
            "suicideRiskAssessment",
            "medicationReview",
            "therapyReferral"
        ],
        protocol: {
            title: "Depression Management Protocol (PHQ-9)",
            steps: [
                { order: 1, section: "vitals", required: true, description: "BP, HR, weight" },
                { order: 2, section: "phq9Score", required: true, description: "PHQ-9 depression screening" },
                { order: 3, section: "suicideRisk", required: true, description: "Suicide ideation/plan assessment" },
                { order: 4, section: "symptomsReview", required: true, description: "Mood, sleep, appetite, energy, concentration" },
                { order: 5, section: "functionalImpact", required: true, description: "Work, relationships, ADLs" },
                { order: 6, section: "medicationReview", required: true, description: "Antidepressants, efficacy, side effects" },
                { order: 7, section: "substanceUse", required: true, description: "Alcohol, drugs, tobacco" },
                { order: 8, section: "socialSupport", required: true, description: "Family, friends, therapy status" },
                { order: 9, section: "safetyPlan", required: true, description: "Crisis resources, support system" },
                { order: 10, section: "plan", required: true, description: "Medication adjustment, therapy referral" }
            ]
        }
    },

    // Asthma Management Visit
    asthmaManagement: {
        name: "Asthma Management Visit",
        code: "99214",
        requiredDocuments: [
            "asthmaControl",
            "peakFlowReview",
            "triggerAssessment",
            "inhalerTechnique"
        ],
        protocol: {
            title: "Asthma Management Protocol (NAEPP Guidelines)",
            steps: [
                { order: 1, section: "vitals", required: true, description: "O2 sat, RR, HR, peak flow" },
                { order: 2, section: "asthmaControlTest", required: true, description: "ACT score (control assessment)" },
                { order: 3, section: "symptomsReview", required: true, description: "Daytime symptoms, night awakening, rescue use" },
                { order: 4, section: "exacerbationHistory", required: true, description: "Recent attacks, ED visits, hospitalizations" },
                { order: 5, section: "triggerIdentification", required: true, description: "Allergens, exercise, weather, infections" },
                { order: 6, section: "physicalExam", required: true, description: "Lung exam, wheezing, accessory muscles" },
                { order: 7, section: "inhalerTechnique", required: true, description: "Demonstrate proper technique" },
                { order: 8, section: "actionPlan", required: true, description: "Review written asthma action plan" },
                { order: 9, section: "plan", required: true, description: "Adjust controller meds, follow-up timing" }
            ]
        }
    },

    // Prenatal Visit
    prenatalVisit: {
        name: "Prenatal Visit",
        code: "99213/99214",
        requiredDocuments: [
            "obHistory",
            "fetalAssessment",
            "prenatalLabs",
            "riskAssessment"
        ],
        protocol: {
            title: "Routine Prenatal Visit Protocol (ACOG)",
            steps: [
                { order: 1, section: "vitals", required: true, description: "Weight, BP, urine dipstick" },
                { order: 2, section: "gestationalAge", required: true, description: "Calculate GA, confirm EDD" },
                { order: 3, section: "symptomsReview", required: true, description: "Contractions, bleeding, leaking, fetal movement" },
                { order: 4, section: "fetalHeartTones", required: true, description: "Doppler FHT (after 10-12 weeks)" },
                { order: 5, section: "fundalHeight", required: true, description: "Measure fundal height (after 20 weeks)" },
                { order: 6, section: "edemaAssessment", required: true, description: "Check for edema, signs of preeclampsia" },
                { order: 7, section: "labReview", required: false, description: "Review labs (CBC, glucose, GBS, etc.)" },
                { order: 8, section: "prenatalEducation", required: true, description: "Nutrition, warning signs, preparations" },
                { order: 9, section: "plan", required: true, description: "Next appointment, tests due, referrals" }
            ]
        }
    },

    // Well Child Check
    wellChildCheck: {
        name: "Well Child Visit",
        code: "99391-99394",
        requiredDocuments: [
            "growthCharts",
            "developmentalScreening",
            "vaccinations",
            "safetyGuidance"
        ],
        protocol: {
            title: "Well Child Visit Protocol (AAP Bright Futures)",
            steps: [
                { order: 1, section: "measurements", required: true, description: "Weight, height, head circumference, BMI" },
                { order: 2, section: "growthCharts", required: true, description: "Plot on growth curves, assess trends" },
                { order: 3, section: "vitals", required: true, description: "BP (age 3+), HR, RR" },
                { order: 4, section: "developmentalScreening", required: true, description: "Age-appropriate milestones (ASQ, M-CHAT)" },
                { order: 5, section: "physicalExam", required: true, description: "Complete head-to-toe examination" },
                { order: 6, section: "visionHearing", required: true, description: "Screen vision (age 3+), hearing" },
                { order: 7, section: "vaccinations", required: true, description: "Review/administer scheduled vaccines" },
                { order: 8, section: "nutritionCounseling", required: true, description: "Diet, breastfeeding, nutrition guidance" },
                { order: 9, section: "safetyGuidance", required: true, description: "Car seats, home safety, injury prevention" },
                { order: 10, section: "anticipatoryGuidance", required: true, description: "Age-specific parenting guidance" }
            ]
        }
    },

    // Post-Operative Follow-up
    postOpFollowup: {
        name: "Post-Operative Follow-up",
        code: "99024/99213",
        requiredDocuments: [
            "surgicalSummary",
            "woundAssessment",
            "painManagement",
            "complicationScreen"
        ],
        protocol: {
            title: "Post-Operative Follow-up Protocol",
            steps: [
                { order: 1, section: "vitals", required: true, description: "Temp, BP, HR, RR, pain scale" },
                { order: 2, section: "surgeryReview", required: true, description: "Procedure performed, complications" },
                { order: 3, section: "woundAssessment", required: true, description: "Incision healing, drainage, infection signs" },
                { order: 4, section: "painManagement", required: true, description: "Pain control, narcotic use, side effects" },
                { order: 5, section: "functionalStatus", required: true, description: "Activity level, mobility, ADLs" },
                { order: 6, section: "complicationScreen", required: true, description: "DVT, PE, infection, bleeding signs" },
                { order: 7, section: "medicationReview", required: true, description: "Post-op meds, antibiotics, anticoagulation" },
                { order: 8, section: "activityRestrictions", required: true, description: "Lifting, driving, work restrictions" },
                { order: 9, section: "plan", required: true, description: "Wound care, follow-up timing, PT/OT referral" }
            ]
        }
    },

    // Geriatric Assessment
    geriatricAssessment: {
        name: "Comprehensive Geriatric Assessment",
        code: "99215",
        requiredDocuments: [
            "functionalAssessment",
            "cognitiveAssessment",
            "fallRiskAssessment",
            "polypharmacyReview",
            "socialSupport"
        ],
        protocol: {
            title: "Comprehensive Geriatric Assessment Protocol",
            steps: [
                { order: 1, section: "vitals", required: true, description: "BP sitting/standing, HR, weight" },
                { order: 2, section: "functionalStatus", required: true, description: "ADLs, IADLs, Katz Independence Scale" },
                { order: 3, section: "mobilityAssessment", required: true, description: "Gait speed, TUG test, assistive devices" },
                { order: 4, section: "fallRiskAssessment", required: true, description: "Fall history, home safety, balance" },
                { order: 5, section: "cognitiveScreening", required: true, description: "MMSE, MoCA, or Mini-Cog" },
                { order: 6, section: "depressionScreening", required: true, description: "GDS-15 (Geriatric Depression Scale)" },
                { order: 7, section: "polypharmacyReview", required: true, description: "Medication reconciliation, Beers criteria" },
                { order: 8, section: "nutritionAssessment", required: true, description: "Weight loss, appetite, dental health" },
                { order: 9, section: "socialSupport", required: true, description: "Caregiver, living situation, safety" },
                { order: 10, section: "advanceCareDirectives", required: true, description: "Goals of care, POLST, advance directives" },
                { order: 11, section: "plan", required: true, description: "Interventions, referrals, follow-up" }
            ]
        }
    }
};

// Visit Type Categories
export const visitCategories = {
    preventive: ["awv", "wellChildCheck"],
    chronic: ["ccm", "diabetesManagement", "chfManagement", "hypertensionManagement", "copdManagement", "asthmaManagement"],
    mentalHealth: ["depressionManagement"],
    specialized: ["anticoagulationManagement", "prenatalVisit", "geriatricAssessment"],
    acute: ["sickVisit", "urgentCare"],
    followup: ["followup", "postOpFollowup", "labReview"]
};

// Get recommended visit template based on patient conditions
export function getRecommendedVisitType(patient) {
    const flags = patient.flags || [];
    const lastVisitType = patient.lastVisitType;
    
    // Check if AWV is due
    const lastAWV = patient.lastAWV || null;
    const awvDue = !lastAWV || isDueForAWV(lastAWV);
    
    if (awvDue) {
        return {
            recommended: "awv",
            reason: "Annual Wellness Visit due",
            priority: "high"
        };
    }
    
    // Check for diabetes management
    if (flags.includes("Diabetic") || flags.includes("Diabetes")) {
        return {
            recommended: "diabetesManagement",
            reason: "Diabetes follow-up recommended",
            priority: "medium"
        };
    }
    
    // Check for CHF
    if (flags.includes("CHF")) {
        return {
            recommended: "chfManagement",
            reason: "Heart failure management needed",
            priority: "medium"
        };
    }
    
    // Default to follow-up
    return {
        recommended: "followup",
        reason: "Standard follow-up visit",
        priority: "low"
    };
}

function isDueForAWV(lastAWVDate) {
    if (!lastAWVDate) return true;
    const lastDate = new Date(lastAWVDate);
    const now = new Date();
    const monthsDiff = (now.getFullYear() - lastDate.getFullYear()) * 12 + (now.getMonth() - lastDate.getMonth());
    return monthsDiff >= 12;
}

// Helper function to get protocol steps
export function getProtocolSteps(visitType) {
    const template = visitTemplates[visitType];
    return template ? template.protocol.steps : [];
}

// Helper function to validate visit completion
export function validateVisitCompletion(visitType, completedSections) {
    const template = visitTemplates[visitType];
    if (!template) return { valid: false, missing: [] };
    
    const requiredSteps = template.protocol.steps.filter(step => step.required);
    const missing = requiredSteps
        .filter(step => !completedSections.includes(step.section))
        .map(step => step.description);
    
    return {
        valid: missing.length === 0,
        missing: missing,
        completionPercent: ((completedSections.length / requiredSteps.length) * 100).toFixed(0)
    };
}

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
    }
};

// Visit Type Categories
export const visitCategories = {
    preventive: ["awv", "physicalExam"],
    chronic: ["ccm", "diabetesManagement", "chfManagement", "ckdManagement"],
    acute: ["sickVisit", "urgentCare"],
    followup: ["followup", "postOp", "labReview"]
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

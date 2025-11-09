// ==================== ICD-10 CODES DATABASE ====================

export const icd10Codes = [
    { code: "E11.65", description: "Type 2 diabetes mellitus with hyperglycemia", hcc: "HCC 19" },
    { code: "E11.9", description: "Type 2 diabetes mellitus without complications", hcc: "HCC 19" },
    { code: "E11.51", description: "Type 2 diabetes mellitus with diabetic peripheral angiopathy", hcc: "HCC 108" },
    { code: "E11.22", description: "Type 2 diabetes mellitus with diabetic chronic kidney disease", hcc: "HCC 18" },
    { code: "I10", description: "Essential (primary) hypertension", hcc: "" },
    { code: "I50.23", description: "Acute on chronic systolic (congestive) heart failure", hcc: "HCC 85" },
    { code: "I50.9", description: "Heart failure, unspecified", hcc: "HCC 85" },
    { code: "I48.91", description: "Unspecified atrial fibrillation", hcc: "HCC 96" },
    { code: "I25.10", description: "Atherosclerotic heart disease of native coronary artery without angina pectoris", hcc: "HCC 86" },
    { code: "I63.9", description: "Cerebral infarction, unspecified", hcc: "HCC 100" },
    { code: "J44.1", description: "Chronic obstructive pulmonary disease with (acute) exacerbation", hcc: "HCC 111" },
    { code: "J44.0", description: "Chronic obstructive pulmonary disease with acute lower respiratory infection", hcc: "HCC 111" },
    { code: "J45.50", description: "Severe persistent asthma, uncomplicated", hcc: "" },
    { code: "N18.3", description: "Chronic kidney disease, stage 3 (moderate)", hcc: "HCC 137" },
    { code: "N18.4", description: "Chronic kidney disease, stage 4 (severe)", hcc: "HCC 136" },
    { code: "N18.5", description: "Chronic kidney disease, stage 5", hcc: "HCC 135" },
    { code: "E78.5", description: "Hyperlipidemia, unspecified", hcc: "" },
    { code: "E66.9", description: "Obesity, unspecified", hcc: "" },
    { code: "E66.01", description: "Morbid (severe) obesity due to excess calories", hcc: "HCC 22" },
    { code: "F33.1", description: "Major depressive disorder, recurrent, moderate", hcc: "HCC 58" },
    { code: "F41.1", description: "Generalized anxiety disorder", hcc: "" },
    { code: "F17.210", description: "Nicotine dependence, cigarettes, uncomplicated", hcc: "" },
    { code: "Z79.4", description: "Long term (current) use of insulin", hcc: "" },
    { code: "Z79.84", description: "Long term (current) use of oral hypoglycemic drugs", hcc: "" },
    { code: "Z87.891", description: "Personal history of nicotine dependence", hcc: "" },
    { code: "M79.604", description: "Pain in right leg", hcc: "" },
    { code: "M79.603", description: "Pain in left leg", hcc: "" },
    { code: "M25.561", description: "Pain in right knee", hcc: "" },
    { code: "M54.5", description: "Low back pain", hcc: "" },
    { code: "R50.9", description: "Fever, unspecified", hcc: "" },
    { code: "R51.9", description: "Headache, unspecified", hcc: "" },
    { code: "R05.9", description: "Cough, unspecified", hcc: "" },
    { code: "J06.9", description: "Acute upper respiratory infection, unspecified", hcc: "" },
    { code: "J02.9", description: "Acute pharyngitis, unspecified", hcc: "" },
    { code: "J01.90", description: "Acute sinusitis, unspecified", hcc: "" },
    { code: "J20.9", description: "Acute bronchitis, unspecified", hcc: "" },
    { code: "J18.9", description: "Pneumonia, unspecified organism", hcc: "" },
    { code: "K21.9", description: "Gastro-esophageal reflux disease without esophagitis", hcc: "" },
    { code: "K59.00", description: "Constipation, unspecified", hcc: "" },
    { code: "K58.9", description: "Irritable bowel syndrome without diarrhea", hcc: "" },
    { code: "N39.0", description: "Urinary tract infection, site not specified", hcc: "" },
    { code: "L03.90", description: "Cellulitis, unspecified", hcc: "" },
    { code: "L70.0", description: "Acne vulgaris", hcc: "" },
    { code: "B35.1", description: "Tinea unguium", hcc: "" },
    { code: "H10.9", description: "Conjunctivitis, unspecified", hcc: "" },
    { code: "H66.90", description: "Otitis media, unspecified", hcc: "" },
    { code: "R42", description: "Dizziness and giddiness", hcc: "" },
    { code: "R53.83", description: "Other fatigue", hcc: "" },
    { code: "R06.02", description: "Shortness of breath", hcc: "" },
    { code: "R10.9", description: "Unspecified abdominal pain", hcc: "" },
    { code: "Z00.00", description: "Encounter for general adult medical examination without abnormal findings", hcc: "" },
    { code: "Z23", description: "Encounter for immunization", hcc: "" },
    { code: "Z89.512", description: "Acquired absence of right leg below knee", hcc: "HCC 189" },
    { code: "Z89.511", description: "Acquired absence of left leg below knee", hcc: "HCC 189" },
    { code: "C50.919", description: "Malignant neoplasm of unspecified site of unspecified female breast", hcc: "HCC 11" },
    { code: "C61", description: "Malignant neoplasm of prostate", hcc: "HCC 12" }
];

// Search function for autocomplete
export function searchICD10(query, limit = 10) {
    const lowerQuery = query.toLowerCase();
    return icd10Codes
        .filter(code => 
            code.code.toLowerCase().includes(lowerQuery) ||
            code.description.toLowerCase().includes(lowerQuery)
        )
        .slice(0, limit);
}

// Get code by exact match
export function getICD10ByCode(code) {
    return icd10Codes.find(c => c.code.toUpperCase() === code.toUpperCase());
}

// ==================== CLINICAL ALERTS & MESSAGES ====================

export const clinicalAlerts = [
    // CRITICAL ALERTS
    {
        id: 1,
        priority: "critical",
        type: "lab",
        patient: { id: "001", name: "Jane Doe", mrn: "MRN001" },
        title: "Critical Lab Value - eGFR Declining",
        message: "Patient's eGFR has decreased from 52 to 48 mL/min. CKD Stage 3 progressing. Consider nephrology referral.",
        date: "2025-11-05T08:00:00",
        read: false,
        actionRequired: true,
        actions: ["Review labs", "Contact patient", "Refer to nephrology"]
    },
    {
        id: 2,
        priority: "critical",
        type: "medication",
        patient: { id: "002", name: "John Smith", mrn: "MRN002" },
        title: "Drug Interaction Alert - Apixaban + Aspirin",
        message: "High bleeding risk: Patient on Apixaban 5mg BID + Aspirin 81mg. Monitor for bleeding signs. Last INR check 2 months ago.",
        date: "2025-11-08T14:30:00",
        read: false,
        actionRequired: true,
        actions: ["Review medication list", "Schedule INR/bleeding assessment", "Patient education"]
    },
    {
        id: 3,
        priority: "critical",
        type: "preventive",
        patient: { id: "001", name: "Jane Doe", mrn: "MRN001" },
        title: "Overdue Mammogram - 3 Months",
        message: "Annual mammogram overdue by 3 months (last: 08/15/2023). Patient has family history of breast cancer.",
        date: "2025-11-01T09:00:00",
        read: true,
        actionRequired: true,
        actions: ["Schedule mammogram", "Contact patient"]
    },

    // HIGH PRIORITY ALERTS
    {
        id: 4,
        priority: "high",
        type: "fall-risk",
        patient: { id: "003", name: "Alice Johnson", mrn: "MRN003" },
        title: "Recent Fall - 3rd Episode This Year",
        message: "Patient fell at home on 09/25/25. Third fall this year. BKA patient with high fall risk. PT/OT in progress.",
        date: "2025-09-26T10:15:00",
        read: true,
        actionRequired: true,
        actions: ["Fall risk assessment", "Home safety evaluation", "Review PT progress"]
    },
    {
        id: 5,
        priority: "high",
        type: "depression",
        patient: { id: "002", name: "John Smith", mrn: "MRN002" },
        title: "PHQ-9 Score: 8 (Mild Depression)",
        message: "Patient screened positive for depression. PHQ-9 score: 8. Reported feeling down about physical limitations.",
        date: "2025-10-28T11:00:00",
        read: true,
        actionRequired: false,
        actions: ["Monitor mood", "Follow-up in 2 weeks"]
    },
    {
        id: 6,
        priority: "high",
        type: "preventive",
        patient: { id: "003", name: "Alice Johnson", mrn: "MRN003" },
        title: "Shingles Vaccine Due",
        message: "Patient eligible for Shingles vaccine (Shingrix). No contraindications. Schedule for next visit.",
        date: "2025-11-03T09:30:00",
        read: false,
        actionRequired: true,
        actions: ["Schedule vaccine", "Patient education"]
    },

    // MEDIUM PRIORITY ALERTS
    {
        id: 7,
        priority: "medium",
        type: "appointment",
        patient: { id: "001", name: "Jane Doe", mrn: "MRN001" },
        title: "Follow-up Needed - A1C Improvement",
        message: "Patient's A1C improved from 8.1% to 7.2%. Schedule 3-month follow-up to maintain progress.",
        date: "2025-11-01T14:00:00",
        read: true,
        actionRequired: false,
        actions: ["Schedule follow-up"]
    },
    {
        id: 8,
        priority: "medium",
        type: "medication",
        patient: { id: "001", name: "Jane Doe", mrn: "MRN001" },
        title: "Medication Refill Due - Metformin",
        message: "Patient's Metformin prescription expires in 7 days. Verify compliance and refill if appropriate.",
        date: "2025-11-07T10:00:00",
        read: false,
        actionRequired: false,
        actions: ["Process refill"]
    },
    {
        id: 9,
        priority: "medium",
        type: "preventive",
        patient: { id: "001", name: "Jane Doe", mrn: "MRN001" },
        title: "Bone Density Scan Due Soon",
        message: "DEXA scan due in 1 month (05/20/2025). Patient on long-term corticosteroids - monitor bone health.",
        date: "2025-10-20T08:00:00",
        read: true,
        actionRequired: false,
        actions: ["Schedule DEXA"]
    },
    {
        id: 10,
        priority: "medium",
        type: "appointment",
        patient: { id: "002", name: "John Smith", mrn: "MRN002" },
        title: "Cardiology Follow-up Recommended",
        message: "Patient's EF improved to 35% from 30%. Cardiologist recommended 3-month follow-up echocardiogram.",
        date: "2025-10-28T15:30:00",
        read: true,
        actionRequired: false,
        actions: ["Schedule echo", "Cardiology appointment"]
    },

    // LOW PRIORITY / ROUTINE
    {
        id: 11,
        priority: "routine",
        type: "preventive",
        patient: { id: "002", name: "John Smith", mrn: "MRN002" },
        title: "Annual Wellness Visit Due Q1 2026",
        message: "Patient's annual wellness visit approaching. Schedule for January-March 2026.",
        date: "2025-11-01T09:00:00",
        read: true,
        actionRequired: false,
        actions: ["Schedule AWV"]
    },
    {
        id: 12,
        priority: "routine",
        type: "lab",
        patient: { id: "003", name: "Alice Johnson", mrn: "MRN003" },
        title: "A1C Recheck in 3 Months",
        message: "Patient's A1C was 7.8%. Recheck in 3 months (02/2026) to assess diabetes control.",
        date: "2025-11-03T12:00:00",
        read: true,
        actionRequired: false,
        actions: ["Schedule labs"]
    }
];

export const extendedMessages = [
    // PATIENT MESSAGES
    {
        id: 101,
        type: "patient-message",
        from: "Jane Doe",
        to: "Dr. Pompee",
        subject: "Question about medication",
        preview: "Should I take my metformin with food? I forgot to ask during my last visit...",
        body: "Hi Dr. Pompee,\n\nShould I take my metformin with food? I forgot to ask during my last visit. Also, I've been experiencing some mild stomach upset. Is this normal?\n\nThank you,\nJane",
        date: "2025-11-08T10:30:00",
        read: false,
        priority: "normal",
        patientId: "001"
    },
    {
        id: 102,
        type: "patient-message",
        from: "John Smith",
        to: "Dr. Pompee",
        subject: "Breathing better",
        preview: "My breathing has improved since medication adjustment...",
        body: "Dr. Pompee,\n\nI wanted to let you know that my breathing has improved significantly since you adjusted my medication. I'm able to walk around the house without getting winded now.\n\nBest regards,\nJohn",
        date: "2025-11-07T14:15:00",
        read: false,
        priority: "normal",
        patientId: "002"
    },
    {
        id: 103,
        type: "patient-message",
        from: "Alice Johnson",
        to: "Dr. Pompee",
        subject: "Phantom pain question",
        preview: "The phantom pain is much better with the new medication...",
        body: "Dear Dr. Pompee,\n\nThe phantom pain is much better with the new medication (Gabapentin). I can finally get some restful sleep at night. My physical therapy is going well too.\n\nThank you so much,\nAlice",
        date: "2025-11-06T16:45:00",
        read: false,
        priority: "normal",
        patientId: "003"
    },
    {
        id: 104,
        type: "patient-message",
        from: "Jane Doe",
        to: "Dr. Pompee",
        subject: "Appointment request - Mammogram follow-up",
        preview: "I scheduled my mammogram as discussed. Can we schedule a follow-up?",
        body: "Dr. Pompee,\n\nI scheduled my overdue mammogram for next week at Miami Imaging Center. Can we schedule a follow-up appointment in 2 weeks to discuss the results?\n\nThanks,\nJane",
        date: "2025-11-05T09:20:00",
        read: true,
        priority: "normal",
        patientId: "001"
    },
    {
        id: 105,
        type: "patient-message",
        from: "John Smith",
        to: "Dr. Pompee",
        subject: "Weight gain question",
        preview: "I gained 3 pounds over the weekend. Should I be concerned?",
        body: "Dr. Pompee,\n\nI've been weighing myself daily like you said. I gained 3 pounds over the weekend. Should I increase my Furosemide? I'm not having any increased shortness of breath.\n\nJohn",
        date: "2025-11-04T08:45:00",
        read: true,
        priority: "high",
        patientId: "002"
    },
    {
        id: 106,
        type: "patient-message",
        from: "Alice Johnson",
        to: "Dr. Pompee",
        subject: "Physical therapy progress update",
        preview: "Great news! I can walk 100 feet with my prosthetic now!",
        body: "Dr. Pompee,\n\nI wanted to share some exciting news! At PT today, I walked 100 feet with my prosthetic and walker. My therapist says I'm progressing faster than expected. I'm feeling much more confident!\n\nAlice",
        date: "2025-11-02T17:30:00",
        read: true,
        priority: "normal",
        patientId: "003"
    },

    // LAB ALERTS
    {
        id: 201,
        type: "lab-alert",
        from: "Lab Department",
        to: "Dr. Pompee",
        subject: "URGENT: Abnormal Lab - Jane Doe",
        preview: "Patient Jane Doe has abnormal lab results requiring immediate attention...",
        body: "URGENT ALERT\n\nPatient: Jane Doe (MRN001)\nTest Date: 2025-11-05\n\nAbnormal Results:\n- HbA1c: 7.2% (HIGH) - Improved from 8.1%\n- Creatinine: 1.4 mg/dL (HIGH) - Increased from 1.3\n- eGFR: 48 mL/min (LOW) - Decreased from 52\n- Potassium: 5.3 mEq/L (HIGH)\n\nRECOMMENDATIONS:\n- Monitor kidney function closely\n- Consider nephrology referral\n- Review medications for renal dosing\n- Repeat labs in 2 weeks\n\nPlease review and follow up with patient.",
        date: "2025-11-05T08:00:00",
        read: true,
        priority: "urgent",
        patientId: "001"
    },
    {
        id: 202,
        type: "lab-alert",
        from: "Lab Department",
        to: "Dr. Pompee",
        subject: "Lab Results - John Smith BNP",
        preview: "BNP results for CHF monitoring...",
        body: "LABORATORY RESULTS\n\nPatient: John Smith (MRN002)\nTest Date: 2025-10-20\n\nResults:\n- BNP: 450 pg/mL (Elevated - CHF monitoring)\n- Creatinine: 1.3 mg/dL (Within normal limits)\n- Potassium: 4.2 mEq/L (Normal)\n- Sodium: 138 mEq/L (Normal)\n\nBNP improved from previous 680 pg/mL. CHF management effective.\n\nNo immediate action required. Continue current therapy.",
        date: "2025-10-20T10:30:00",
        read: true,
        priority: "normal",
        patientId: "002"
    },
    {
        id: 203,
        type: "lab-alert",
        from: "Lab Department",
        to: "Dr. Pompee",
        subject: "A1C Results - Alice Johnson",
        preview: "Quarterly diabetes monitoring...",
        body: "LABORATORY RESULTS\n\nPatient: Alice Johnson (MRN003)\nTest Date: 2025-10-15\n\nResults:\n- HbA1c: 7.8% (HIGH)\n- Fasting Glucose: 165 mg/dL (HIGH)\n- Creatinine: 0.9 mg/dL (Normal)\n- eGFR: >90 mL/min (Normal)\n\nA1C slightly elevated. Consider medication adjustment. Patient compliance good per report. Stress of recent amputation may be affecting control.\n\nFollow-up recommended in 3 months.",
        date: "2025-10-15T11:00:00",
        read: true,
        priority: "normal",
        patientId: "003"
    },

    // PHARMACY / PRESCRIPTION ALERTS
    {
        id: 301,
        type: "pharmacy",
        from: "CVS Pharmacy",
        to: "Dr. Pompee",
        subject: "Prescription Refill Request - Jane Doe",
        preview: "Patient requesting refill for Metformin 1000mg...",
        body: "REFILL REQUEST\n\nPatient: Jane Doe (MRN001)\nMedication: Metformin 1000mg\nDosage: One tablet twice daily\nQuantity: 60 tablets\nRefills Remaining: 0\n\nPatient is requesting refill. Last filled: 09/15/2025 (60-day supply)\n\nPlease approve or contact pharmacy if changes needed.\n\nCVS Pharmacy #2847\n(305) 555-8900",
        date: "2025-11-07T13:20:00",
        read: false,
        priority: "normal",
        patientId: "001"
    },
    {
        id: 302,
        type: "pharmacy",
        from: "Walgreens Pharmacy",
        to: "Dr. Pompee",
        subject: "Prior Authorization Required - John Smith",
        preview: "Insurance requires PA for Apixaban 5mg...",
        body: "PRIOR AUTHORIZATION REQUIRED\n\nPatient: John Smith (MRN002)\nMedication: Apixaban (Eliquis) 5mg\nInsurance: Blue Cross Blue Shield\n\nInsurance requires prior authorization for continued coverage. Patient's current supply ends in 10 days.\n\nClinical justification needed:\n- Indication for anticoagulation\n- Failed alternatives (if any)\n- Risk vs. benefit assessment\n\nPlease complete PA form or contact pharmacy.\n\nWalgreens #5123\n(305) 555-7800",
        date: "2025-11-06T09:15:00",
        read: false,
        priority: "high",
        patientId: "002"
    },

    // APPOINTMENT REMINDERS
    {
        id: 401,
        type: "appointment-reminder",
        from: "Front Desk",
        to: "Jane Doe",
        subject: "Appointment Reminder - Tomorrow 10:00 AM",
        preview: "Reminder: You have an appointment tomorrow...",
        body: "APPOINTMENT REMINDER\n\nPatient: Jane Doe\nDate: November 10, 2025\nTime: 10:00 AM\nProvider: ARNP Ange Pompee\nType: Follow-up Visit\nLocation: Wellness Clinic, Suite 201\n\nPlease arrive 15 minutes early to complete any paperwork.\n\nIf you need to cancel or reschedule, please call (305) 555-1234.\n\nThank you!",
        date: "2025-11-09T18:00:00",
        read: false,
        priority: "normal",
        patientId: "001"
    },
    {
        id: 402,
        type: "appointment-reminder",
        from: "Front Desk",
        to: "Alice Johnson",
        subject: "Appointment Reminder - Physical Therapy",
        preview: "PT appointment on November 12...",
        body: "PHYSICAL THERAPY APPOINTMENT\n\nPatient: Alice Johnson\nDate: November 12, 2025\nTime: 2:00 PM\nTherapist: Michael Rodriguez, PT\nLocation: Miami Rehabilitation Center\n\nSession focus: Prosthetic gait training and balance exercises\n\nPlease bring your prosthetic device and wear comfortable clothing.\n\nContact: (305) 555-4500",
        date: "2025-11-10T10:00:00",
        read: true,
        priority: "normal",
        patientId: "003"
    },

    // STAFF COMMUNICATIONS
    {
        id: 501,
        type: "staff",
        from: "Dr. Martinez - Cardiology",
        to: "Dr. Pompee",
        subject: "RE: John Smith - Echo Results",
        preview: "Echo shows improved EF...",
        body: "Dr. Pompee,\n\nI saw John Smith in cardiology follow-up on 10/25/25. His echocardiogram shows improvement:\n\n- LVEF: 35% (previously 30%)\n- Mild LVH\n- Moderate MR\n- Good response to medical therapy\n\nRECOMMENDATIONS:\n- Continue current CHF regimen (Carvedilol, Lisinopril, Furosemide)\n- Repeat echo in 6 months\n- Consider ICD evaluation if EF remains <35%\n- Continue close monitoring of volume status\n\nPatient doing well overall. I'll see him back in 3 months.\n\nBest regards,\nDr. Maria Martinez, Cardiology",
        date: "2025-10-26T14:30:00",
        read: true,
        priority: "normal",
        patientId: "002"
    },
    {
        id: 502,
        type: "staff",
        from: "Dr. Harrison - Vascular Surgery",
        to: "Dr. Pompee",
        subject: "Alice Johnson - Post-op Follow-up Complete",
        preview: "Patient healing well from BKA...",
        body: "Dr. Pompee,\n\nAlice Johnson came in for her 3-month post-op check. Residual limb is healing excellently:\n\n- No signs of infection\n- Good wound healing\n- Adequate limb shaping for prosthetic\n- Patient tolerating prosthetic well\n\nPhysical therapy reports good progress. She's ambulating 100+ feet with walker and prosthetic.\n\nRECOMMENDATIONS:\n- Continue aggressive diabetic management - critical for remaining limb\n- Daily left foot inspections\n- Continue PT/OT\n- Address depression - appropriate that she's on Sertraline\n\nNo further vascular surgery follow-up needed unless complications. Patient can continue primary care with you.\n\nThank you for the referral,\nDr. James Harrison, Vascular Surgery",
        date: "2025-11-04T11:00:00",
        read: true,
        priority: "normal",
        patientId: "003"
    },
    {
        id: 503,
        type: "staff",
        from: "Behavioral Health - Sarah Chen, LCSW",
        to: "Dr. Pompee",
        subject: "John Smith - Depression Assessment",
        preview: "Initial behavioral health evaluation...",
        body: "Dr. Pompee,\n\nI evaluated John Smith today for depression/mood concerns. \n\nASSESSMENT:\n- PHQ-9: 8 (Mild depression)\n- Patient reports feeling down about physical limitations\n- Good family support system\n- No suicidal ideation\n- Sleep disturbance related to CHF symptoms\n\nIMPRESSION: Adjustment disorder with depressed mood related to chronic illness\n\nPLAN:\n- Supportive counseling - scheduled biweekly sessions\n- CBT techniques for coping with chronic illness\n- Monitor mood - may benefit from medication if worsens\n- Family education completed\n\nI'll keep you updated on his progress. Currently no need for medication change.\n\nBest,\nSarah Chen, LCSW",
        date: "2025-11-01T15:45:00",
        read: true,
        priority: "normal",
        patientId: "002"
    },

    // SENT MESSAGES (from Dr. Pompee)
    {
        id: 601,
        type: "sent",
        from: "ARNP Ange Pompee",
        to: "Jane Doe",
        subject: "RE: Lab Results - Kidney Function",
        body: "Jane,\n\nYour recent lab results show that your kidney function has decreased slightly (eGFR now 48, was 52). This is something we need to monitor closely.\n\nI've made the following changes:\n1. Adjusted your Lisinopril dose\n2. Ordered repeat labs in 2 weeks\n3. Scheduled you for nephrology consultation\n\nPlease continue taking all your medications as prescribed. Make sure you're drinking plenty of water (unless I've told you otherwise) and avoid NSAIDs like ibuprofen.\n\nCall if you have any questions or concerns.\n\nDr. Pompee",
        date: "2025-11-05T14:00:00",
        read: true,
        priority: "normal",
        patientId: "001"
    },
    {
        id: 602,
        type: "sent",
        from: "ARNP Ange Pompee",
        to: "John Smith",
        subject: "RE: Weight Gain",
        body: "John,\n\nGood job weighing yourself daily! A 3-pound gain over the weekend is worth monitoring, but not an emergency if you're breathing well.\n\nHere's what to do:\n1. Take an extra Furosemide 40mg TODAY ONLY\n2. Continue weighing daily\n3. Limit salt intake for the next few days\n4. Call immediately if:\n   - Weight increases another 3+ pounds\n   - Increased shortness of breath\n   - Swelling in legs gets worse\n\nReweigh tomorrow morning. If weight is back down, continue your regular Furosemide dose. If still up, call the office.\n\nYou're doing great managing your CHF!\n\nDr. Pompee",
        date: "2025-11-04T10:15:00",
        read: true,
        priority: "normal",
        patientId: "002"
    },
    {
        id: 603,
        type: "sent",
        from: "ARNP Ange Pompee",
        to: "Alice Johnson",
        subject: "Congratulations on Your PT Progress!",
        body: "Alice,\n\nThat's wonderful news about walking 100 feet! Your progress has been remarkable. Your physical therapist told me you're one of their star patients.\n\nRemember:\n- Keep up with your PT exercises at home\n- Daily skin checks on your remaining foot\n- Continue taking your Gabapentin for phantom pain\n- Keep attending your support group\n\nYour A1C is still a bit high (7.8%), so let's focus on keeping your blood sugars well-controlled. This is critical for protecting your remaining limb.\n\nI'm so proud of how you're handling everything. Keep up the great work!\n\nDr. Pompee",
        date: "2025-11-03T09:00:00",
        read: true,
        priority: "normal",
        patientId: "003"
    }
];

// Helper functions
export function getAlertsByPriority(priority) {
    return clinicalAlerts.filter(alert => alert.priority === priority);
}

export function getUnreadAlerts() {
    return clinicalAlerts.filter(alert => !alert.read);
}

export function getAlertsByPatient(patientId) {
    return clinicalAlerts.filter(alert => alert.patient.id === patientId);
}

export function getAllMessages() {
    return extendedMessages;
}

export function getMessagesByType(type) {
    return extendedMessages.filter(msg => msg.type === type);
}

export function getUnreadMessages() {
    return extendedMessages.filter(msg => !msg.read);
}

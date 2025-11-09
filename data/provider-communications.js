// ==================== PROVIDER COMMUNICATION SYSTEM ====================

export const providerMessages = [
    {
        id: "pm001",
        type: "provider-note",
        fromProvider: { id: "dr.pompee", name: "Dr. Ange Pompee", specialty: "Family Medicine" },
        toProvider: { id: "dr.cardio", name: "Dr. Sarah Chen", specialty: "Cardiology" },
        patient: { id: "002", name: "John Smith", mrn: "MRN002" },
        subject: "CHF Patient - Request Consultation",
        message: "Patient with worsening CHF symptoms. EF 35% on last echo (6 months ago). Recent weight gain 8 lbs in 2 weeks. Would like your input on medication optimization. BNP: 450, Cr: 1.4. Currently on Lasix 40mg BID, Carvedilol 25mg BID, Lisinopril 20mg daily.",
        urgency: "routine",
        date: "2025-11-08T10:30:00",
        status: "sent",
        attachments: ["Echo Report 05-2025.pdf", "Labs 11-2025.pdf"],
        responseRequested: true
    },
    {
        id: "pm002",
        type: "provider-note",
        fromProvider: { id: "dr.cardio", name: "Dr. Sarah Chen", specialty: "Cardiology" },
        toProvider: { id: "dr.pompee", name: "Dr. Ange Pompee", specialty: "Family Medicine" },
        patient: { id: "002", name: "John Smith", mrn: "MRN002" },
        subject: "RE: CHF Patient - Recommendations",
        message: "Thanks for the consult. Reviewed records. Recommendations:\n1. Increase Lasix to 60mg BID\n2. Add spironolactone 25mg daily (monitor K+ and Cr weekly x2)\n3. Repeat echo in 3 months\n4. Daily weights - call if gain >3 lbs in 2 days\n5. Restrict sodium <2g/day, fluids <2L/day\n\nWill see in clinic in 2 weeks. Please send updated med list after changes. Call if questions.",
        urgency: "routine",
        date: "2025-11-08T14:45:00",
        status: "received",
        inReplyTo: "pm001",
        actionItems: [
            "Increase Lasix to 60mg BID",
            "Start spironolactone 25mg daily",
            "Monitor K+ and Cr weekly x2",
            "Schedule cardiology appointment in 2 weeks"
        ]
    },
    {
        id: "pm003",
        type: "provider-note",
        fromProvider: { id: "dr.pompee", name: "Dr. Ange Pompee", specialty: "Family Medicine" },
        toProvider: { id: "dr.vascular", name: "Dr. Michael Torres", specialty: "Vascular Surgery" },
        patient: { id: "003", name: "Alice Johnson", mrn: "MRN003" },
        subject: "Post-BKA Follow-up - Phantom Pain Management",
        message: "52yo F s/p R BKA 3 months ago. Wound healing well, prosthetic fitting ongoing. However, severe phantom limb pain (8/10) interfering with PT. Currently on Gabapentin 300mg TID with minimal relief. Considering adding Duloxetine or referral to pain management. Any recommendations from your experience?",
        urgency: "routine",
        date: "2025-11-07T15:20:00",
        status: "sent",
        responseRequested: true
    }
];

export const providerNoteTemplates = {
    consultation: {
        name: "Consultation Request",
        template: `CONSULTATION REQUEST

Patient: {{patientName}} (MRN: {{mrn}})
DOB: {{dob}} | Age: {{age}}

REASON FOR CONSULTATION:
{{reason}}

RELEVANT HISTORY:
{{history}}

CURRENT MEDICATIONS:
{{medications}}

RECENT LABS/TESTS:
{{labs}}

SPECIFIC QUESTIONS:
{{questions}}

Thank you for your expertise.

{{senderName}}, {{senderSpecialty}}`
    },
    
    handoff: {
        name: "Patient Handoff Note",
        template: `PATIENT HANDOFF

Patient: {{patientName}} (MRN: {{mrn}})
Location: {{location}}

SITUATION:
{{situation}}

BACKGROUND:
{{background}}

ASSESSMENT:
{{assessment}}

RECOMMENDATIONS:
{{recommendations}}

PENDING ITEMS:
{{pending}}

Contact me at {{phone}} if questions.

{{senderName}}, {{senderSpecialty}}`
    },
    
    criticalResult: {
        name: "Critical Lab Result Notification",
        template: `CRITICAL RESULT NOTIFICATION

Patient: {{patientName}} (MRN: {{mrn}})
DOB: {{dob}}

CRITICAL VALUE:
{{testName}}: {{value}} (Normal: {{normalRange}})
Date/Time: {{dateTime}}

CLINICAL CONTEXT:
{{context}}

ACTION TAKEN:
{{actionTaken}}

PATIENT NOTIFIED: {{patientNotified}}
METHOD: {{method}}

FOLLOW-UP PLAN:
{{followUpPlan}}

{{senderName}}, {{senderSpecialty}}
Date: {{currentDate}}`
    },
    
    medicationChange: {
        name: "Medication Change Notification",
        template: `MEDICATION CHANGE NOTIFICATION

Patient: {{patientName}} (MRN: {{mrn}})

CHANGES MADE:
{{changes}}

REASON:
{{reason}}

MONITORING REQUIRED:
{{monitoring}}

PATIENT EDUCATED: Yes/No
PHARMACY NOTIFIED: Yes/No

Next appointment: {{nextAppt}}

{{senderName}}, {{senderSpecialty}}
Date: {{currentDate}}`
    }
};

// Get all provider messages for a specific patient
export function getProviderMessagesByPatient(patientId) {
    return providerMessages.filter(msg => msg.patient.id === patientId);
}

// Get unread provider messages
export function getUnreadProviderMessages(providerId) {
    return providerMessages.filter(msg => 
        msg.toProvider.id === providerId && 
        msg.status === 'received' && 
        !msg.read
    );
}

// Create new provider message
export function createProviderMessage(data) {
    return {
        id: `pm${Date.now()}`,
        type: data.type || "provider-note",
        fromProvider: data.fromProvider,
        toProvider: data.toProvider,
        patient: data.patient,
        subject: data.subject,
        message: data.message,
        urgency: data.urgency || "routine",
        date: new Date().toISOString(),
        status: "sent",
        responseRequested: data.responseRequested || false,
        attachments: data.attachments || [],
        actionItems: data.actionItems || []
    };
}

// Parse template with data
export function fillProviderTemplate(templateKey, data) {
    const template = providerNoteTemplates[templateKey];
    if (!template) return null;
    
    let filled = template.template;
    
    // Replace all {{placeholder}} with actual data
    Object.keys(data).forEach(key => {
        const regex = new RegExp(`{{${key}}}`, 'g');
        filled = filled.replace(regex, data[key] || '');
    });
    
    return filled;
}

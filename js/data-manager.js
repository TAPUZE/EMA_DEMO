// ==================== DATA MANAGER - Runtime Data Persistence ====================
// This module manages runtime data that persists across page navigation
// Data is stored in memory and localStorage for demonstration purposes

export class DataManager {
    constructor() {
        this.data = {
            patients: [],
            messages: [],
            appointments: [],
            visits: []
        };
        this.loadFromStorage();
    }

    // ==================== PATIENTS ====================
    
    addPatient(patient) {
        // Check if patient already exists
        const existing = this.data.patients.findIndex(p => p.id === patient.id || p.mrn === patient.mrn);
        
        if (existing >= 0) {
            // Update existing patient
            this.data.patients[existing] = patient;
            console.log(`✅ Updated patient: ${patient.name}`);
        } else {
            // Add new patient
            this.data.patients.push(patient);
            console.log(`✅ Added new patient: ${patient.name}`);
        }
        
        this.saveToStorage();
        this.triggerEvent('patientAdded', patient);
        return patient;
    }

    getPatient(id) {
        return this.data.patients.find(p => p.id === id || p.mrn === id);
    }

    getAllPatients() {
        return this.data.patients;
    }

    updatePatient(id, updates) {
        const index = this.data.patients.findIndex(p => p.id === id || p.mrn === id);
        if (index >= 0) {
            this.data.patients[index] = { ...this.data.patients[index], ...updates };
            this.saveToStorage();
            this.triggerEvent('patientUpdated', this.data.patients[index]);
            return this.data.patients[index];
        }
        return null;
    }

    deletePatient(id) {
        const index = this.data.patients.findIndex(p => p.id === id);
        if (index >= 0) {
            const deleted = this.data.patients.splice(index, 1)[0];
            this.saveToStorage();
            this.triggerEvent('patientDeleted', deleted);
            return deleted;
        }
        return null;
    }

    // ==================== MESSAGES ====================
    
    addMessage(message) {
        const newMessage = {
            id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            timestamp: new Date().toISOString(),
            unread: true,
            ...message
        };
        
        this.data.messages.unshift(newMessage); // Add to beginning
        this.saveToStorage();
        this.triggerEvent('messageAdded', newMessage);
        console.log(`✅ Message sent: ${newMessage.subject || 'No subject'}`);
        return newMessage;
    }

    getMessage(id) {
        return this.data.messages.find(m => m.id === id);
    }

    getAllMessages() {
        return this.data.messages;
    }

    markMessageRead(id) {
        const message = this.data.messages.find(m => m.id === id);
        if (message) {
            message.unread = false;
            this.saveToStorage();
            this.triggerEvent('messageRead', message);
            return message;
        }
        return null;
    }

    getUnreadCount() {
        return this.data.messages.filter(m => m.unread).length;
    }

    // ==================== APPOINTMENTS ====================
    
    addAppointment(appointment) {
        const newAppointment = {
            id: `appt_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            createdAt: new Date().toISOString(),
            status: 'scheduled',
            ...appointment
        };
        
        this.data.appointments.push(newAppointment);
        this.saveToStorage();
        this.triggerEvent('appointmentAdded', newAppointment);
        console.log(`✅ Appointment scheduled: ${newAppointment.patientName || 'Unknown'}`);
        return newAppointment;
    }

    getAppointment(id) {
        return this.data.appointments.find(a => a.id === id);
    }

    getAllAppointments() {
        return this.data.appointments;
    }

    updateAppointment(id, updates) {
        const index = this.data.appointments.findIndex(a => a.id === id);
        if (index >= 0) {
            this.data.appointments[index] = { ...this.data.appointments[index], ...updates };
            this.saveToStorage();
            this.triggerEvent('appointmentUpdated', this.data.appointments[index]);
            return this.data.appointments[index];
        }
        return null;
    }

    cancelAppointment(id) {
        return this.updateAppointment(id, { status: 'cancelled', cancelledAt: new Date().toISOString() });
    }

    // ==================== VISITS ====================
    
    addVisit(patientId, visit) {
        const patient = this.getPatient(patientId);
        if (!patient) {
            console.error(`❌ Patient not found: ${patientId}`);
            return null;
        }

        const newVisit = {
            id: `visit_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            date: new Date().toISOString().split('T')[0],
            ...visit
        };

        if (!patient.visits) {
            patient.visits = [];
        }
        
        patient.visits.unshift(newVisit); // Add to beginning
        patient.lastVisit = newVisit.date;
        
        this.saveToStorage();
        this.triggerEvent('visitAdded', { patient, visit: newVisit });
        console.log(`✅ Visit documented for: ${patient.name}`);
        return newVisit;
    }

    // ==================== STORAGE ====================
    
    saveToStorage() {
        try {
            localStorage.setItem('emr_runtime_data', JSON.stringify({
                version: '2.0',
                timestamp: new Date().toISOString(),
                data: this.data
            }));
        } catch (error) {
            console.error('❌ Failed to save to localStorage:', error);
        }
    }

    loadFromStorage() {
        try {
            const stored = localStorage.getItem('emr_runtime_data');
            if (stored) {
                const parsed = JSON.parse(stored);
                if (parsed.data) {
                    this.data = parsed.data;
                    console.log(`💾 Loaded runtime data: ${this.data.patients.length} patients, ${this.data.messages.length} messages, ${this.data.appointments.length} appointments`);
                }
            }
        } catch (error) {
            console.error('❌ Failed to load from localStorage:', error);
        }
    }

    clearAllData() {
        this.data = {
            patients: [],
            messages: [],
            appointments: [],
            visits: []
        };
        localStorage.removeItem('emr_runtime_data');
        console.log('🗑️ All runtime data cleared');
    }

    // ==================== EVENTS ====================
    
    triggerEvent(eventName, data) {
        const event = new CustomEvent(`emr:${eventName}`, { detail: data });
        window.dispatchEvent(event);
    }

    // ==================== STATISTICS ====================
    
    getStats() {
        return {
            totalPatients: this.data.patients.length,
            totalMessages: this.data.messages.length,
            unreadMessages: this.getUnreadCount(),
            totalAppointments: this.data.appointments.length,
            scheduledAppointments: this.data.appointments.filter(a => a.status === 'scheduled').length
        };
    }
}

// Create singleton instance
const dataManager = new DataManager();

// Make globally available
window.dataManager = dataManager;

export default dataManager;

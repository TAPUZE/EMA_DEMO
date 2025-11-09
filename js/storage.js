// ==================== STORAGE.JS - LocalStorage Management ====================

const STORAGE_KEY = 'wellness_emr_v2';
const STORAGE_VERSION = '2.0';

// Initialize storage
export function initStorage() {
    console.log('💾 Storage system initialized');
    
    // Check if we need to migrate data from v1
    const oldData = localStorage.getItem('wellness_emr_data');
    if (oldData && !localStorage.getItem(STORAGE_KEY)) {
        console.log('📦 Migrating data from v1...');
        try {
            const parsed = JSON.parse(oldData);
            if (parsed.data) {
                saveData(parsed.data);
                console.log('✅ Data migration complete');
            }
        } catch (e) {
            console.error('❌ Data migration failed:', e);
        }
    }
}

// Save data to localStorage
export function saveData(data) {
    try {
        const payload = {
            version: STORAGE_VERSION,
            timestamp: new Date().toISOString(),
            data: data
        };
        
        localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
        console.log('💾 Data saved to localStorage');
        return true;
    } catch (error) {
        console.error('❌ Failed to save data:', error);
        return false;
    }
}

// Load data from localStorage
export function loadData() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        
        if (!stored) {
            console.log('ℹ️ No saved data found');
            return null;
        }
        
        const payload = JSON.parse(stored);
        
        if (payload.version !== STORAGE_VERSION) {
            console.warn('⚠️ Storage version mismatch');
            // Could implement version migration here
        }
        
        console.log('✅ Data loaded from localStorage');
        return payload.data;
    } catch (error) {
        console.error('❌ Failed to load data:', error);
        return null;
    }
}

// Clear all data
export function clearData() {
    try {
        localStorage.removeItem(STORAGE_KEY);
        console.log('🗑️ Data cleared from localStorage');
        return true;
    } catch (error) {
        console.error('❌ Failed to clear data:', error);
        return false;
    }
}

// Export data as JSON
export function exportData() {
    const data = loadData();
    if (!data) {
        return null;
    }
    
    const exportPayload = {
        version: STORAGE_VERSION,
        exportDate: new Date().toISOString(),
        data: data
    };
    
    const blob = new Blob([JSON.stringify(exportPayload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `wellness-emr-backup-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    return true;
}

// Import data from JSON file
export function importData(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        
        reader.onload = (e) => {
            try {
                const imported = JSON.parse(e.target.result);
                
                if (!imported.data) {
                    throw new Error('Invalid data format');
                }
                
                saveData(imported.data);
                resolve(imported.data);
            } catch (error) {
                reject(error);
            }
        };
        
        reader.onerror = () => {
            reject(new Error('Failed to read file'));
        };
        
        reader.readAsText(file);
    });
}

// Get storage size
export function getStorageSize() {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return 0;
    
    // Calculate size in KB
    const size = new Blob([data]).size;
    return Math.round(size / 1024);
}

// Get last save time
export function getLastSaveTime() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (!stored) return null;
        
        const payload = JSON.parse(stored);
        return new Date(payload.timestamp);
    } catch (error) {
        return null;
    }
}

// Auto-save functionality
let autoSaveTimer = null;

export function enableAutoSave(callback, interval = 120000) {
    // Auto-save every 2 minutes by default
    if (autoSaveTimer) {
        clearInterval(autoSaveTimer);
    }
    
    autoSaveTimer = setInterval(() => {
        if (callback) {
            const data = callback();
            if (data) {
                saveData(data);
                console.log('🔄 Auto-save completed');
            }
        }
    }, interval);
    
    console.log(`⏰ Auto-save enabled (every ${interval / 1000}s)`);
}

export function disableAutoSave() {
    if (autoSaveTimer) {
        clearInterval(autoSaveTimer);
        autoSaveTimer = null;
        console.log('⏸️ Auto-save disabled');
    }
}

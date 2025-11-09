// ==================== AUTH.JS - Authentication Module ====================

// Initialize authentication system
export function initAuth() {
    console.log('🔐 Auth system initialized');
}

// Get current logged-in user
export function getCurrentUser() {
    const userJson = sessionStorage.getItem('currentUser');
    if (userJson) {
        try {
            return JSON.parse(userJson);
        } catch (e) {
            console.error('Failed to parse user session:', e);
            return null;
        }
    }
    return null;
}

// Login function
export async function login(username, password) {
    // In production, this would call an API
    // For demo, we'll validate locally
    
    const validUsers = {
        'dr.pompee': {
            password: 'password',
            user: {
                id: 1,
                username: 'dr.pompee',
                name: 'ARNP Ange Pompee',
                npi: '1234567890',
                email: 'ange.pompee@provider.com',
                phone: '305-665-4437',
                role: 'provider'
            }
        }
    };
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const userRecord = validUsers[username];
            
            if (userRecord && userRecord.password === password) {
                sessionStorage.setItem('currentUser', JSON.stringify(userRecord.user));
                resolve(userRecord.user);
            } else {
                reject(new Error('Invalid username or password'));
            }
        }, 1000); // Simulate network delay
    });
}

// Logout function
export function logout() {
    sessionStorage.removeItem('currentUser');
    window.appState.currentUser = null;
    window.appState.currentPatient = null;
    window.location.reload();
}

// Check if user has permission
export function hasPermission(permission) {
    const user = getCurrentUser();
    if (!user) return false;
    
    // For now, all providers have all permissions
    return user.role === 'provider';
}

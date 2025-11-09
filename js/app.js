// ==================== APP.JS - Main Application Controller ====================

import { initAuth, getCurrentUser } from './auth.js';
import { loadPage, initNavigation } from './navigation.js';
import { showToast } from './ui-components.js';
import { initStorage } from './storage.js';
import dataManager from './data-manager.js';

// Global app state
window.appState = {
    currentUser: null,
    currentPatient: null,
    currentVisit: null,
    unsavedChanges: false
};

// Initialize app on DOM load
document.addEventListener('DOMContentLoaded', async () => {
    console.log('🚀 Wellness EMR v2.0 Starting...');
    
    try {
        // Initialize storage system
        initStorage();
        
        // Initialize data manager (for runtime persistence)
        console.log('💾 Data Manager initialized');
        console.log('📊 Runtime data:', dataManager.getStats());
        
        // Check if user is already logged in
        const user = getCurrentUser();
        
        if (user) {
            // User is logged in, go directly to dashboard
            await loadApp(user);
        } else {
            // Show login screen
            setupLoginForm();
        }
        
    } catch (error) {
        console.error('❌ App initialization error:', error);
        showToast('Application failed to start', 'error');
    }
});

// Setup login form handler
function setupLoginForm() {
    const loginForm = document.getElementById('login-form');
    
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const role = document.querySelector('input[name="role"]:checked').value;
        
        // Show loading state
        const submitBtn = loginForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<div class="spinner"></div> Signing in...';
        submitBtn.disabled = true;
        
        try {
            // Simulate login (in production, this would be an API call)
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            const user = role === 'admin' ? {
                id: 999,
                username: username,
                name: 'System Administrator',
                email: 'admin@wellnessemr.com',
                phone: '305-665-4437',
                role: 'admin',
                permissions: ['all']
            } : {
                id: 1,
                username: username,
                name: 'ARNP Ange Pompee',
                npi: '1234567890',
                email: 'ange.pompee@provider.com',
                phone: '305-665-4437',
                role: 'provider',
                permissions: ['patients', 'visits', 'messages', 'scheduling', 'reports']
            };
            
            // Store user session
            sessionStorage.setItem('currentUser', JSON.stringify(user));
            window.appState.currentUser = user;
            
            // Load main application
            await loadApp(user);
            
            showToast(`Welcome back, ${user.name}!`, 'success');
            
        } catch (error) {
            console.error('Login error:', error);
            showToast('Login failed. Please try again.', 'error');
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
}

// Load main application
async function loadApp(user) {
    console.log('✅ User authenticated:', user.name);
    
    // Hide login screen
    document.getElementById('login-screen').classList.add('hidden');
    
    // Show app container
    const appContainer = document.getElementById('app-container');
    appContainer.classList.remove('hidden');
    
    // Load the main application layout
    await loadAppLayout();
    
    // Initialize navigation system
    initNavigation();
    
    // Load appropriate dashboard based on role
    const defaultPage = user.role === 'admin' ? 'admin-dashboard' : 'dashboard';
    await loadPage(defaultPage);
}

// Load main app layout (sidebar + content area)
async function loadAppLayout() {
    const appContainer = document.getElementById('app-container');
    
    appContainer.innerHTML = `
        <!-- Sidebar -->
        <nav id="sidebar" class="glass-dark text-white flex flex-col shadow-2xl">
            <!-- Sidebar Header -->
            <div class="flex items-center justify-center h-20 border-b border-gray-700 bg-gradient-to-r from-sky-500 to-cyan-500">
                <i class="ph-fill ph-first-aid-kit text-white text-3xl"></i>
                <span class="text-xl font-bold ml-3">Wellness EMR</span>
            </div>
            
            <!-- Navigation Links -->
            <ul id="nav-links" class="flex-grow p-4 space-y-2 overflow-y-auto">
                <!-- Will be populated by navigation.js -->
            </ul>
            
            <!-- Sidebar Footer -->
            <div class="p-4 border-t border-gray-700">
                <div class="flex items-center gap-3 mb-4">
                    <div class="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center">
                        <i class="ph ph-user text-white text-xl"></i>
                    </div>
                    <div class="flex-grow">
                        <p class="text-sm font-semibold" id="user-name">Dr. Pompee</p>
                        <p class="text-xs text-gray-400">Provider</p>
                    </div>
                </div>
                <button id="logout-btn" class="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg transition-colors text-sm flex items-center justify-center gap-2">
                    <i class="ph ph-sign-out"></i>
                    Logout
                </button>
            </div>
        </nav>
        
        <!-- Mobile Menu Toggle -->
        <button id="mobile-menu-toggle" class="fixed top-4 left-4 z-50 lg:hidden bg-sky-500 text-white p-3 rounded-lg shadow-lg">
            <i class="ph ph-list text-2xl"></i>
        </button>
        
        <!-- Overlay for mobile -->
        <div id="sidebar-overlay" class="fixed inset-0 bg-black bg-opacity-50 z-30 hidden lg:hidden"></div>
        
        <!-- Main Content Area -->
        <main id="main-content" class="min-h-screen bg-gray-100 transition-all duration-300">
            <!-- Patient Banner (shown when patient is selected) -->
            <div id="patient-banner" class="hidden"></div>
            
            <!-- Page Content -->
            <div id="page-content" class="p-6">
                <div class="flex items-center justify-center h-96">
                    <div class="spinner"></div>
                    <span class="ml-3 text-gray-600">Loading...</span>
                </div>
            </div>
        </main>
        
        <!-- Toast Container -->
        <div id="toast-container"></div>
        
        <!-- Modal Container -->
        <div id="modal-container"></div>
    `;
    
    // Setup mobile menu toggle
    setupMobileMenu();
    
    // Setup logout button
    document.getElementById('logout-btn').addEventListener('click', handleLogout);
    
    // Update user name in sidebar
    if (window.appState.currentUser) {
        document.getElementById('user-name').textContent = window.appState.currentUser.name;
    }
}

// Setup mobile menu
function setupMobileMenu() {
    const sidebar = document.getElementById('sidebar');
    const toggle = document.getElementById('mobile-menu-toggle');
    const overlay = document.getElementById('sidebar-overlay');
    
    if (!toggle || !sidebar || !overlay) return;
    
    toggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('hidden');
    });
    
    overlay.addEventListener('click', () => {
        sidebar.classList.remove('open');
        overlay.classList.add('hidden');
    });
}

// Handle logout
function handleLogout() {
    if (window.appState.unsavedChanges) {
        if (!confirm('You have unsaved changes. Are you sure you want to logout?')) {
            return;
        }
    }
    
    // Clear session
    sessionStorage.removeItem('currentUser');
    window.appState.currentUser = null;
    window.appState.currentPatient = null;
    
    // Reload page to show login
    window.location.reload();
}

// Export for use in other modules
export { loadApp };

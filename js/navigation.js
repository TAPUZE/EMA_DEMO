// ==================== NAVIGATION.JS - Page Routing & Navigation ====================

import { showToast } from './ui-components.js';

// Define navigation structure
const navItems = [
    { id: 'dashboard', title: 'Dashboard', icon: 'ph-house', page: 'dashboard.html', roles: ['provider'] },
    { id: 'admin-dashboard', title: 'Admin Dashboard', icon: 'ph-shield-check', page: 'admin-dashboard.html', roles: ['admin'] },
    { id: 'patient-search', title: 'Patient Search', icon: 'ph-magnifying-glass', page: 'patient-search.html', roles: ['provider', 'admin'] },
    { id: 'ai-document-processor', title: 'AI Document Scan', icon: 'ph-scan', page: 'ai-document-processor.html', roles: ['provider', 'admin'] },
    { id: 'patient-chart', title: 'Patient Chart', icon: 'ph-folder-open', page: 'patient-chart.html', requiresPatient: true, roles: ['provider', 'admin'] },
    { id: 'guided-visit', title: 'Guided Visit', icon: 'ph-clipboard-text', page: 'guided-visit.html', requiresPatient: true, roles: ['provider'] },
    { id: 'visit-note', title: 'Visit Note', icon: 'ph-note-pencil', page: 'visit-note.html', requiresPatient: true, roles: ['provider'] },
    { id: 'scheduling', title: 'Calendar', icon: 'ph-calendar', page: 'scheduling.html', roles: ['provider', 'admin'] },
    { id: 'messages', title: 'Messages', icon: 'ph-chat-dots', page: 'messages.html', badge: '3', roles: ['provider', 'admin'] },
    { id: 'reports', title: 'Reports', icon: 'ph-chart-line', page: 'reports.html', roles: ['provider', 'admin'] }
];

let currentPage = null;

// Initialize navigation system
export function initNavigation() {
    console.log('🧭 Navigation system initialized');
    
    // Listen for hash changes
    window.addEventListener('hashchange', () => {
        const hash = window.location.hash.slice(1); // Remove #
        if (hash) {
            console.log('🔗 Hash changed to:', hash);
            loadPage(hash);
        }
    });
    
    // Check if there's a hash on load
    const initialHash = window.location.hash.slice(1);
    if (initialHash && initialHash !== 'dashboard') {
        console.log('🔗 Initial hash detected:', initialHash);
        setTimeout(() => loadPage(initialHash), 100);
    }
    
    // Populate navigation links
    const navLinksContainer = document.getElementById('nav-links');
    if (!navLinksContainer) return;
    
    navLinksContainer.innerHTML = '';
    
    const currentUser = window.appState.currentUser;
    const userRole = currentUser?.role || 'provider';
    
    navItems.forEach((item, index) => {
        // Check if user has permission to see this nav item
        if (item.roles && !item.roles.includes(userRole)) {
            return; // Skip items not allowed for this role
        }
        
        const li = document.createElement('li');
        
        // Check if item requires patient selection
        const isDisabled = item.requiresPatient && !window.appState.currentPatient;
        
        li.innerHTML = `
            <a href="#${item.id}" 
               data-page="${item.id}" 
               class="nav-link flex items-center px-4 py-3 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-200 group ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}"
               ${isDisabled ? 'data-disabled="true"' : ''}>
                <i class="${item.icon} text-xl text-gray-400 group-hover:text-sky-400 transition-colors duration-200"></i>
                <span class="ml-3 font-medium">${item.title}</span>
                ${item.badge ? `<span class="ml-auto bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">${item.badge}</span>` : ''}
            </a>
        `;
        
        navLinksContainer.appendChild(li);
    });
    
    // Add click handlers
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', async (e) => {
            e.preventDefault();
            
            if (link.dataset.disabled === 'true') {
                showToast('Please select a patient first', 'warning');
                return;
            }
            
            const pageId = link.dataset.page;
            await loadPage(pageId);
            
            // Close mobile menu if open
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('sidebar-overlay');
            if (sidebar && sidebar.classList.contains('open')) {
                sidebar.classList.remove('open');
                overlay?.classList.add('hidden');
            }
        });
    });
}

// Load a page
export async function loadPage(pageId) {
    console.log(`📄 Loading page: ${pageId}`);
    
    const pageContent = document.getElementById('page-content');
    if (!pageContent) {
        console.error('Page content container not found');
        return;
    }
    
    // Show loading state
    pageContent.innerHTML = `
        <div class="flex items-center justify-center h-96">
            <div class="spinner"></div>
            <span class="ml-3 text-gray-600">Loading ${pageId}...</span>
        </div>
    `;
    
    try {
        // Find the nav item
        const navItem = navItems.find(item => item.id === pageId);
        
        if (!navItem) {
            throw new Error(`Page not found: ${pageId}`);
        }
        
        // Load the page HTML
        const response = await fetch(`./pages/${navItem.page}`);
        
        if (!response.ok) {
            throw new Error(`Failed to load page: ${response.statusText}`);
        }
        
        const html = await response.text();
        pageContent.innerHTML = html;
        
        // Execute any scripts in the loaded HTML
        executePageScripts(pageContent);
        
        // Update active nav link
        updateActiveNavLink(pageId);
        
        // Execute page-specific initialization
        await initializePage(pageId);
        
        currentPage = pageId;
        
        // Update URL hash
        window.location.hash = pageId;
        
    } catch (error) {
        console.error('Error loading page:', error);
        pageContent.innerHTML = `
            <div class="max-w-2xl mx-auto mt-20 text-center">
                <i class="ph ph-warning-circle text-red-500 text-6xl mb-4"></i>
                <h2 class="text-2xl font-bold text-gray-800 mb-2">Page Not Found</h2>
                <p class="text-gray-600 mb-6">The page "${pageId}" could not be loaded.</p>
                <button onclick="window.location.hash='dashboard'" class="btn btn-primary">
                    <i class="ph ph-house"></i>
                    Go to Dashboard
                </button>
            </div>
        `;
    }
}

// Execute scripts from loaded HTML
function executePageScripts(container) {
    const scripts = container.querySelectorAll('script');
    scripts.forEach(oldScript => {
        const newScript = document.createElement('script');
        
        // Copy all attributes
        Array.from(oldScript.attributes).forEach(attr => {
            newScript.setAttribute(attr.name, attr.value);
        });
        
        // Copy script content
        newScript.textContent = oldScript.textContent;
        
        // Replace old script with new one to trigger execution
        oldScript.parentNode.replaceChild(newScript, oldScript);
    });
}

// Update active navigation link
function updateActiveNavLink(pageId) {
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.dataset.page === pageId) {
            link.classList.add('bg-gray-700', 'text-white');
            link.querySelector('i').classList.add('text-sky-400');
        } else {
            link.classList.remove('bg-gray-700', 'text-white');
            link.querySelector('i')?.classList.remove('text-sky-400');
        }
    });
}

// Initialize page-specific functionality
async function initializePage(pageId) {
    console.log(`⚙️ Initializing page: ${pageId}`);
    
    // Wait for scripts to be parsed
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // Import and run page-specific scripts
    switch (pageId) {
        case 'dashboard':
            if (window.initDashboard) {
                console.log('🎯 Calling initDashboard...');
                await window.initDashboard();
            } else {
                console.error('❌ initDashboard function not found');
            }
            break;
        case 'patient-search':
            if (window.initPatientSearch) {
                await window.initPatientSearch();
            }
            break;
        case 'ai-document-processor':
            if (window.initAIDocumentProcessor) {
                await window.initAIDocumentProcessor();
            }
            break;
        case 'patient-chart':
            if (window.initPatientChart) {
                await window.initPatientChart();
            }
            break;
        case 'visit-note':
            if (window.initVisitNote) {
                await window.initVisitNote();
            }
            break;
        case 'scheduling':
            if (window.initScheduling) {
                await window.initScheduling();
            }
            break;
        case 'messages':
            if (window.initMessages) {
                await window.initMessages();
            }
            break;
        case 'guided-visit':
            if (window.initGuidedVisit) {
                await window.initGuidedVisit();
            }
            break;
        case 'admin-dashboard':
            if (window.initAdminDashboard) {
                await window.initAdminDashboard();
            }
            break;
    }
}

// Navigate to a specific page
export function navigateTo(pageId) {
    loadPage(pageId);
}

// Update patient banner
export function updatePatientBanner(patient) {
    const banner = document.getElementById('patient-banner');
    if (!banner) return;
    
    if (patient) {
        banner.classList.remove('hidden');
        banner.innerHTML = `
            <div class="patient-banner">
                <div class="container mx-auto flex items-center justify-between">
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                            <i class="ph ph-user text-2xl"></i>
                        </div>
                        <div>
                            <h2 class="text-xl font-bold">${patient.name}</h2>
                            <div class="flex gap-4 text-sm opacity-90">
                                <span>DOB: ${patient.dob} (${calculateAge(patient.dob)}y)</span>
                                <span>MRN: ${patient.id}</span>
                                <span>Gender: ${patient.gender}</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex gap-2">
                        ${patient.allergies?.length > 0 ? 
                            `<span class="badge bg-red-500">Allergies: ${patient.allergies.join(', ')}</span>` : 
                            `<span class="badge">NKDA</span>`
                        }
                        ${patient.flags?.map(flag => `<span class="badge">${flag}</span>`).join('') || ''}
                    </div>
                </div>
            </div>
        `;
        
        // Enable patient-specific nav items
        enablePatientNavigation();
    } else {
        banner.classList.add('hidden');
        disablePatientNavigation();
    }
}

// Enable navigation items that require a patient
function enablePatientNavigation() {
    document.querySelectorAll('.nav-link[data-disabled="true"]').forEach(link => {
        link.classList.remove('opacity-50', 'cursor-not-allowed');
        link.removeAttribute('data-disabled');
    });
}

// Disable navigation items that require a patient
function disablePatientNavigation() {
    navItems.forEach(item => {
        if (item.requiresPatient) {
            const link = document.querySelector(`.nav-link[data-page="${item.id}"]`);
            if (link) {
                link.classList.add('opacity-50', 'cursor-not-allowed');
                link.setAttribute('data-disabled', 'true');
            }
        }
    });
}

// Calculate age from date of birth
export function calculateAge(dob) {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    return age;
}

// Export functions
export { navItems, currentPage };

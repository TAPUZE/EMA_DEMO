// ==================== UI-COMPONENTS.JS - Reusable UI Components ====================

// Show toast notification
export function showToast(message, type = 'info', duration = 3000) {
    const container = document.getElementById('toast-container');
    if (!container) {
        console.error('Toast container not found');
        return;
    }
    
    const icons = {
        success: 'ph-check-circle',
        error: 'ph-warning-circle',
        warning: 'ph-warning',
        info: 'ph-info'
    };
    
    const colors = {
        success: 'text-green-500',
        error: 'text-red-500',
        warning: 'text-yellow-500',
        info: 'text-sky-500'
    };
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <i class="${icons[type]} text-2xl ${colors[type]}"></i>
        <span class="flex-grow text-gray-800">${message}</span>
        <button class="text-gray-400 hover:text-gray-600" onclick="this.parentElement.remove()">
            <i class="ph ph-x text-xl"></i>
        </button>
    `;
    
    container.appendChild(toast);
    
    // Auto remove after duration
    if (duration > 0) {
        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => toast.remove(), 300);
        }, duration);
    }
    
    return toast;
}

// Show modal
export function showModal(options) {
    const {
        title,
        content,
        buttons = [],
        size = 'md',
        onClose
    } = options;
    
    const modalContainer = document.getElementById('modal-container');
    if (!modalContainer) {
        console.error('Modal container not found');
        return;
    }
    
    const sizeClasses = {
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-2xl',
        xl: 'max-w-4xl',
        full: 'max-w-6xl'
    };
    
    const modal = document.createElement('div');
    modal.className = 'modal-overlay animate-fade-in';
    modal.innerHTML = `
        <div class="modal-content ${sizeClasses[size]} animate-slide-up">
            <!-- Header -->
            <div class="flex items-center justify-between p-6 border-b border-gray-200">
                <h3 class="text-xl font-semibold text-gray-800">${title}</h3>
                <button class="modal-close text-gray-400 hover:text-gray-600 transition-colors">
                    <i class="ph ph-x text-2xl"></i>
                </button>
            </div>
            
            <!-- Content -->
            <div class="p-6">
                ${content}
            </div>
            
            <!-- Footer -->
            ${buttons.length > 0 ? `
                <div class="flex items-center justify-end gap-2 p-6 border-t border-gray-200 bg-gray-50">
                    ${buttons.map(btn => `
                        <button class="btn ${btn.class || 'btn-secondary'}" data-action="${btn.action || ''}">
                            ${btn.icon ? `<i class="${btn.icon}"></i>` : ''}
                            ${btn.label}
                        </button>
                    `).join('')}
                </div>
            ` : ''}
        </div>
    `;
    
    modalContainer.appendChild(modal);
    
    // Close button handler
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.addEventListener('click', () => {
        closeModal(modal, onClose);
    });
    
    // Overlay click handler
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal(modal, onClose);
        }
    });
    
    // Button handlers
    buttons.forEach(btn => {
        if (btn.action) {
            const button = modal.querySelector(`[data-action="${btn.action}"]`);
            if (button) {
                button.addEventListener('click', async () => {
                    if (btn.handler) {
                        const result = await btn.handler();
                        if (result !== false) {
                            closeModal(modal, onClose);
                        }
                    } else {
                        closeModal(modal, onClose);
                    }
                });
            }
        }
    });
    
    return modal;
}

// Close modal
function closeModal(modal, onClose) {
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.remove();
        if (onClose) onClose();
    }, 300);
}

// Show confirmation dialog
export function showConfirm(message, title = 'Confirm') {
    return new Promise((resolve) => {
        showModal({
            title,
            content: `<p class="text-gray-700">${message}</p>`,
            buttons: [
                {
                    label: 'Cancel',
                    class: 'btn-secondary',
                    action: 'cancel',
                    handler: () => {
                        resolve(false);
                    }
                },
                {
                    label: 'Confirm',
                    class: 'btn-primary',
                    action: 'confirm',
                    handler: () => {
                        resolve(true);
                    }
                }
            ]
        });
    });
}

// Show loading overlay
export function showLoading(message = 'Loading...') {
    const overlay = document.createElement('div');
    overlay.id = 'loading-overlay';
    overlay.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]';
    overlay.innerHTML = `
        <div class="bg-white rounded-lg p-6 flex items-center gap-4">
            <div class="spinner"></div>
            <span class="text-gray-700 font-medium">${message}</span>
        </div>
    `;
    document.body.appendChild(overlay);
    return overlay;
}

// Hide loading overlay
export function hideLoading() {
    const overlay = document.getElementById('loading-overlay');
    if (overlay) {
        overlay.remove();
    }
}

// Create dropdown menu
export function createDropdown(trigger, items) {
    const dropdown = document.createElement('div');
    dropdown.className = 'absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50 hidden';
    
    items.forEach(item => {
        if (item.divider) {
            dropdown.innerHTML += '<div class="border-t border-gray-200 my-1"></div>';
        } else {
            const button = document.createElement('button');
            button.className = 'w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors flex items-center gap-2';
            button.innerHTML = `
                ${item.icon ? `<i class="${item.icon}"></i>` : ''}
                <span>${item.label}</span>
            `;
            button.addEventListener('click', () => {
                if (item.handler) item.handler();
                dropdown.classList.add('hidden');
            });
            dropdown.appendChild(button);
        }
    });
    
    // Toggle dropdown
    trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('hidden');
    });
    
    // Close when clicking outside
    document.addEventListener('click', () => {
        dropdown.classList.add('hidden');
    });
    
    trigger.parentElement.style.position = 'relative';
    trigger.parentElement.appendChild(dropdown);
    
    return dropdown;
}

// Format date
export function formatDate(dateString, format = 'MM/DD/YYYY') {
    const date = new Date(dateString);
    
    const parts = {
        'YYYY': date.getFullYear(),
        'MM': String(date.getMonth() + 1).padStart(2, '0'),
        'DD': String(date.getDate()).padStart(2, '0'),
        'HH': String(date.getHours()).padStart(2, '0'),
        'mm': String(date.getMinutes()).padStart(2, '0'),
        'ss': String(date.getSeconds()).padStart(2, '0')
    };
    
    let formatted = format;
    Object.keys(parts).forEach(key => {
        formatted = formatted.replace(key, parts[key]);
    });
    
    return formatted;
}

// Format time ago
export function timeAgo(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);
    
    const intervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60
    };
    
    for (const [unit, secondsInUnit] of Object.entries(intervals)) {
        const interval = Math.floor(seconds / secondsInUnit);
        if (interval >= 1) {
            return `${interval} ${unit}${interval > 1 ? 's' : ''} ago`;
        }
    }
    
    return 'just now';
}

// Debounce function
export function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Copy to clipboard
export async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        showToast('Copied to clipboard', 'success');
    } catch (err) {
        console.error('Failed to copy:', err);
        showToast('Failed to copy', 'error');
    }
}

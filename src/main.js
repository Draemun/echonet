// Simple hash-based router
const router = {
    routes: {
        'home': 'main-window',
        'timeline': 'timeline-window',
        'dynamics': 'dynamics-window',
        'stories': 'storyposts-window',
        'characters': 'characters-window'
    },
    
    init() {
        window.addEventListener('hashchange', () => this.handleRoute());
        this.handleRoute();
    },
    
    handleRoute() {
        const hash = window.location.hash.slice(1);
        const windowId = this.routes[hash] || this.routes[''];
        openWindow(windowId);
    }
};

let activeWindow = 'main-window';

function openWindow(windowId) {
    document.querySelectorAll('.window').forEach(w => {
        w.classList.remove('active');
    });
    document.querySelectorAll('.taskbar-item').forEach(t => {
        t.classList.remove('active');
    });
    
    document.getElementById(windowId).classList.add('active');
    activeWindow = windowId;
    
    const taskbarMap = {
        'main-window': 0,
        'timeline-window': 1,
        'dynamics-window': 2,
        'storyposts-window': 3,
        'characters-window': 4
    };
    const index = taskbarMap[windowId];
    if (index !== undefined) {
        document.querySelectorAll('.taskbar-item')[index].classList.add('active');
    }
    
    const route = Object.keys(router.routes).find(key => router.routes[key] === windowId);
    if (route !== undefined && window.location.hash.slice(1) !== route) {
        window.location.hash = route;
    }
}

function closeWindow(windowId) {
    document.getElementById(windowId).classList.remove('active');
    if (windowId === activeWindow) {
        openWindow('main-window');
    }
}

function toggleDynamics(header) {
    const content = header.nextElementSibling;
    const symbol = header.querySelector('.prompt');
    
    if (content.classList.contains('active')) {
        content.classList.remove('active');
        symbol.textContent = '[+]';
    } else {
        content.classList.add('active');
        symbol.textContent = '[-]';
    }
}

function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('system-time').textContent = timeString;
}

function updateOnlineCount() {
    const count = Math.floor(Math.random() * 8) + 8; 
    document.getElementById('online-count').textContent = count;
    document.getElementById('survivor-count').textContent = count;
}

document.addEventListener('DOMContentLoaded', function() {
    router.init();
    updateTime();
    updateOnlineCount();
    renderTimeline();
    renderDynamics();
    renderCharacterList();
    renderStories();
    setInterval(updateTime, 1000);
    setInterval(updateOnlineCount, 30000);
    
    const mainWindowHeader = document.querySelector('#main-window .window-header');
    mainWindowHeader.addEventListener('mousedown', function(e) {
        if (e.target.classList.contains('window-control')) return;
        
        const window = mainWindowHeader.closest('.window');
        let isDragging = true;
        let startX = e.clientX - window.offsetLeft;
        let startY = e.clientY - window.offsetTop;
        
        function handleMouseMove(e) {
            if (isDragging) {
                window.style.left = (e.clientX - startX) + 'px';
                window.style.top = (e.clientY - startY) + 'px';
            }
        }
        
        function handleMouseUp() {
            isDragging = false;
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        }
        
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && document.getElementById('main-interface').classList.contains('active')) {
            closeCharacterSheet();
        }
    });
    
    document.getElementById('character-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeCharacterSheet();
        }
    });
});

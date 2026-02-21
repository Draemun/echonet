const router = {
    routes: {
        '': 'main-window',
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
    },
    
    navigate(route) {
        window.location.hash = route;
    }
};

const originalOpenWindow = window.openWindow;
window.openWindow = function(windowId) {
    originalOpenWindow(windowId);
    const route = Object.keys(router.routes).find(key => router.routes[key] === windowId);
    if (route !== undefined && window.location.hash.slice(1) !== route) {
        history.replaceState(null, '', '#' + route);
    }
};

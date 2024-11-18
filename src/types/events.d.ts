interface DrawerToggleEvent extends CustomEvent {
    detail: {
        isOpen: boolean;
    };
}

declare global {
    interface WindowEventMap {
        'drawer-toggle': DrawerToggleEvent;
    }
}

export {};

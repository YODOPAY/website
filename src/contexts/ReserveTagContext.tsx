"use client";

import { createContext, useCallback, useContext, useState } from 'react';
import ReserveTagModal from '@/components/ReserveTagModal';

const ReserveTagContext = createContext<(() => void) | null>(null);

/** Returns a function that opens the "Reserve your Yodo Tag" flow. */
export const useReserveTag = () => {
    const open = useContext(ReserveTagContext);
    if (!open) {
        throw new Error('useReserveTag must be used within a ReserveTagProvider');
    }
    return open;
};

export const ReserveTagProvider = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const open = useCallback(() => setIsOpen(true), []);
    const close = useCallback(() => setIsOpen(false), []);

    return (
        <ReserveTagContext.Provider value={open}>
            {children}
            <ReserveTagModal open={isOpen} onClose={close} />
        </ReserveTagContext.Provider>
    );
};

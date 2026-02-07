import React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    showCloseButton?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    title,
    children,
    size = 'md',
    showCloseButton = true,
}) => {
    if (!isOpen) return null;

    const sizes = {
        sm: 'max-w-md',
        md: 'max-w-2xl',
        lg: 'max-w-4xl',
        xl: 'max-w-6xl',
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className={cn('modal', sizes[size])}
                onClick={(e) => e.stopPropagation()}
            >
                {(title || showCloseButton) && (
                    <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-olive-pale">
                        {title && (
                            <h2 className="text-2xl font-serif text-olive-dark">{title}</h2>
                        )}
                        {showCloseButton && (
                            <button
                                onClick={onClose}
                                className="p-2 rounded-lg hover:bg-olive-pale transition-colors"
                                aria-label="Close modal"
                            >
                                <X size={24} className="text-olive-medium" />
                            </button>
                        )}
                    </div>
                )}

                <div>{children}</div>
            </div>
        </div>
    );
};

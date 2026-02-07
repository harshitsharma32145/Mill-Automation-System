import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: 'success' | 'warning' | 'danger' | 'info' | 'default';
}

export const Badge: React.FC<BadgeProps> = ({
    className,
    variant = 'default',
    children,
    ...props
}) => {
    const variants = {
        success: 'bg-olive-medium/15 text-olive-medium',
        warning: 'bg-gold/15 text-gold',
        danger: 'bg-accent-red/15 text-accent-red',
        info: 'bg-accent-blue/15 text-accent-blue',
        default: 'bg-olive-pale text-olive-dark',
    };

    return (
        <span
            className={cn(
                'px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide inline-block',
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </span>
    );
};

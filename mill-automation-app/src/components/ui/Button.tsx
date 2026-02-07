import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant = 'primary',
            size = 'md',
            isLoading = false,
            leftIcon,
            rightIcon,
            children,
            disabled,
            ...props
        },
        ref
    ) => {
        const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 rounded-xl focus:outline-none focus:ring-4 disabled:opacity-50 disabled:cursor-not-allowed';

        const variants = {
            primary: 'bg-olive-dark text-white hover:bg-olive-medium hover:-translate-y-0.5 hover:shadow-lg focus:ring-olive-medium/20',
            secondary: 'bg-gold text-white hover:bg-gold-light hover:-translate-y-0.5 focus:ring-gold/20',
            outline: 'bg-transparent border-2 border-olive-dark text-olive-dark hover:bg-olive-dark hover:text-white focus:ring-olive-dark/20',
            ghost: 'bg-transparent text-olive-dark hover:bg-olive-pale focus:ring-olive-pale',
            danger: 'bg-accent-red text-white hover:bg-accent-red/90 hover:-translate-y-0.5 focus:ring-accent-red/20',
        };

        const sizes = {
            sm: 'px-3 py-1.5 text-sm',
            md: 'px-6 py-3 text-base',
            lg: 'px-8 py-4 text-lg',
        };

        return (
            <button
                ref={ref}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                disabled={disabled || isLoading}
                {...props}
            >
                {isLoading && <span className="spinner" />}
                {!isLoading && leftIcon}
                {children}
                {!isLoading && rightIcon}
            </button>
        );
    }
);

Button.displayName = 'Button';

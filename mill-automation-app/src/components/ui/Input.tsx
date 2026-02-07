import React from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    helperText?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    (
        {
            className,
            label,
            error,
            helperText,
            leftIcon,
            rightIcon,
            id,
            ...props
        },
        ref
    ) => {
        const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

        return (
            <div className="w-full">
                {label && (
                    <label
                        htmlFor={inputId}
                        className="block mb-2 text-sm font-medium text-olive-dark"
                    >
                        {label}
                    </label>
                )}

                <div className="relative">
                    {leftIcon && (
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-olive-medium/60">
                            {leftIcon}
                        </div>
                    )}

                    <input
                        ref={ref}
                        id={inputId}
                        className={cn(
                            'w-full px-4 py-3 border-2 rounded-xl transition-all duration-300',
                            'focus:outline-none focus:ring-4',
                            leftIcon && 'pl-12',
                            rightIcon && 'pr-12',
                            error
                                ? 'border-accent-red focus:border-accent-red focus:ring-accent-red/10'
                                : 'border-olive-pale focus:border-olive-medium focus:ring-olive-medium/10',
                            className
                        )}
                        {...props}
                    />

                    {rightIcon && (
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-olive-medium/60">
                            {rightIcon}
                        </div>
                    )}
                </div>

                {error && (
                    <p className="mt-1.5 text-sm text-accent-red flex items-center gap-1">
                        <span>⚠</span> {error}
                    </p>
                )}

                {helperText && !error && (
                    <p className="mt-1.5 text-sm text-olive-medium/60">{helperText}</p>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';

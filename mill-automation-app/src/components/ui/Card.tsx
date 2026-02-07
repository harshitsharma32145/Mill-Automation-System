import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    hover?: boolean;
    padding?: 'none' | 'sm' | 'md' | 'lg';
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, hover = false, padding = 'md', children, ...props }, ref) => {
        const paddings = {
            none: 'p-0',
            sm: 'p-4',
            md: 'p-7',
            lg: 'p-10',
        };

        return (
            <div
                ref={ref}
                className={cn(
                    'bg-white rounded-2xl shadow-lg border border-olive-dark/5 transition-all duration-300',
                    paddings[padding],
                    hover && 'hover:-translate-y-1 hover:shadow-xl cursor-pointer',
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Card.displayName = 'Card';

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> { }

export const CardHeader: React.FC<CardHeaderProps> = ({
    className,
    children,
    ...props
}) => {
    return (
        <div
            className={cn(
                'flex items-center justify-between mb-6 pb-4 border-b-2 border-olive-pale',
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> { }

export const CardTitle: React.FC<CardTitleProps> = ({
    className,
    children,
    ...props
}) => {
    return (
        <h3
            className={cn('text-2xl font-serif text-olive-dark', className)}
            {...props}
        >
            {children}
        </h3>
    );
};

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> { }

export const CardContent: React.FC<CardContentProps> = ({
    className,
    children,
    ...props
}) => {
    return (
        <div className={cn('', className)} {...props}>
            {children}
        </div>
    );
};

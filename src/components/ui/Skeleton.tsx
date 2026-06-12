import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
  animation?: boolean;
}

export const Skeleton = ({
  className = '',
  variant = 'rectangular',
  width,
  height,
  animation = true,
}: SkeletonProps) => {
  const baseClasses = 'bg-gray-200 relative overflow-hidden';
  const variantClasses = {
    text: 'rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-lg',
  };

  const style: React.CSSProperties = {};
  if (width) style.width = typeof width === 'number' ? `${width}px` : width;
  if (height) style.height = typeof height === 'number' ? `${height}px` : height;

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={style}
    >
      {animation && (
        <div className="absolute inset-0 shimmer" />
      )}
    </div>
  );
};

export const CardSkeleton = () => (
  <div className="bg-white rounded-xl p-6 shadow-sm">
    <Skeleton variant="circular" width={48} height={48} className="mb-4" />
    <Skeleton variant="text" width="60%" height={20} className="mb-2" />
    <Skeleton variant="text" width="100%" height={16} className="mb-1" />
    <Skeleton variant="text" width="80%" height={16} className="mb-4" />
    <Skeleton variant="text" width="40%" height={14} />
  </div>
);

export const StatSkeleton = () => (
  <div className="bg-white rounded-xl p-6 shadow-sm">
    <Skeleton variant="text" width="50%" height={48} className="mb-2" />
    <Skeleton variant="text" width="70%" height={16} />
  </div>
);

export const TableSkeleton = ({ rows = 5 }: { rows?: number }) => (
  <div className="bg-white rounded-xl shadow-sm overflow-hidden">
    <div className="p-4 border-b">
      <Skeleton variant="text" width="30%" height={20} />
    </div>
    {[...Array(rows)].map((_, i) => (
      <div key={i} className="p-4 border-b last:border-b-0 flex gap-4">
        <Skeleton variant="circular" width={40} height={40} />
        <div className="flex-1">
          <Skeleton variant="text" width="40%" height={16} className="mb-2" />
          <Skeleton variant="text" width="60%" height={14} />
        </div>
      </div>
    ))}
  </div>
);

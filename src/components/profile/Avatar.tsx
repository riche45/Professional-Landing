import Image from '../../components/common/Image';
import images from '../../config/images';

interface AvatarProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-16 h-16',
  xl: 'w-24 h-24'
};

export default function Avatar({ size = 'md', className = '' }: AvatarProps) {
  return (
    <div className={`relative rounded-full overflow-hidden ${sizeClasses[size]} ${className} ring-2 ring-gray-200 dark:ring-dark-600`}>
      <Image
        src={images.profile.avatar}
        alt="Richard Garcia Profile"
        width={96}
        height={96}
        priority
        className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
      />
    </div>
  );
} 
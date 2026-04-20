import { getImgPath } from '@/utils/image';
import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {
  return (
    <Link href="/" className="inline-block">
      <Image
        src={getImgPath("/images/logo/de-logo.png")}
        alt="Dana Electrical Logo"
        width={200}
        height={95}
        quality={100}
        className="h-12 md:h-14 w-auto object-contain"
        unoptimized
        priority
      />
    </Link>
  );
};

export default Logo;

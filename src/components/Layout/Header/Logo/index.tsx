import { getImgPath } from '@/utils/image';
import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image
        src={getImgPath("/images/logo/logo.svg")}
        alt="Dana Electrical Logo"
        width={190}
        height={44}
        style={{ width: 'auto', height: 'auto' }}
        quality={100}
        className='dark:hidden'
        unoptimized
      />
      <Image
        src={getImgPath("/images/logo/logo-white.svg")}
        alt="Dana Electrical Logo"
        width={190}
        height={44}
        style={{ width: 'auto', height: 'auto' }}
        quality={100}
        className='dark:block hidden'
        unoptimized
      />
    </Link>
  );
};

export default Logo;

import Link from 'next/link';
import Image from 'next/image';

const Logo = () => (
  <Link href="/">
    <a>
      <Image
        src={'/moviger-logo.png'}
        alt="Moviger logo"
        width={100}
        height={100}
      />
    </a>
  </Link>
);

export default Logo;

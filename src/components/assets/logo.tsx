import React from 'react';
import Image from 'next/image';

interface Props {
  className?: string;
}

const Logo = ({className}: Props): JSX.Element => (
  <Image className={className} src={`/assets/SJ.png`} alt='logo' height={40} width={40} />
);

export default Logo;

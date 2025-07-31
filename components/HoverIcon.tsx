'use client';
import { useState } from 'react';
import Image      from 'next/image';
import Link       from 'next/link';

type Props = {
  href: string;
  black: string;   // src чёрной версии
  blue:  string;   // src синей версии
  alt:  string;
};

export default function HoverIcon({ href, black, blue, alt }: Props) {
  const [src, setSrc] = useState(black);

  return (
    <Link
      href={href}
      target="_blank"
      className="transition-transform hover:scale-110"
      onMouseEnter={() => setSrc(blue)}
      onMouseLeave={() => setSrc(black)}
    >
      <Image
        src={src}
        alt={alt}
        width={36}
        height={36}
        className="select-none"
      />
    </Link>
  );
}

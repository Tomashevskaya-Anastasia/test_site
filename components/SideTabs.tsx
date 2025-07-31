'use client';
import Image from 'next/image';

const tabs = [
  { href: 'https://t.me/…',           black: '/icons/telegram.svg',    white: '/icons/telegramhover.svg',    alt: 'Telegram'   },
  { href: 'https://dexscreener.com/…', black: '/icons/dexscreener.svg', white: '/icons/dexscreenerhover.svg', alt: 'Dex'        },
  { href: 'https://x.com/…',           black: '/icons/twitter.svg',     white: '/icons/twitterhover.svg',     alt: 'X'          },
];

export default function SideTabsMobile() {
  return (
    /* block на мобиле, скрыто ≥ 640 px */
    <div className="sm:hidden fixed right-2 top-[320px] z-50">
      <div
        className="flex flex-col items-center gap-[30px] p-[10px]
                   w-[44px] h-[152px]
                   bg-header/30 backdrop-blur-[5px] rounded-[15px]">
        {tabs.map(({ href, black, white, alt }) => (
          <a key={alt} href={href} target="_blank" rel="noopener" className="group">
            {/* base icon */}
            <Image src={black} alt={alt} width={24} height={24}
                   className="block group-hover:hidden select-none" />
            {/* hover (white) */}
            <Image src={white} alt={alt} width={24} height={24}
                   className="hidden group-hover:block select-none" />
          </a>
        ))}
      </div>
    </div>
  );
}

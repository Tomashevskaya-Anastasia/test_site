'use client';
import { useEffect, useState } from 'react';
import HoverIcon from '@/components/HoverIcon';   // компонент из предыдущего шага

export default function Header() {
  /* --- автоскрытие при прокрутке вниз --- */
  const [visible, setVisible] = useState(true);
  const [lastY , setLastY ]   = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y > lastY && y > 80) setVisible(false);  // прячемся, если крутим вниз
      else setVisible(true);                       // показываемся при прокрутке вверх
      setLastY(y);
    };
    window.addEventListener('scroll', onScroll, { passive:true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastY]);

  /* --- классы для показа/скрытия --- */
  const wrapper =
    `hidden sm:block 
     fixed inset-x-0 top-0 z-50 h-[90px]
     bg-header/40
     backdrop-blur-md
     transition-transform duration-300`;

  return (
    <>

    {/* ===== mobile header  (<640px) ===== */}
    <header
    className="
        sm:hidden      /* только телефон */
        fixed left-1/2 -translate-x-1/2 top-[53px] z-50
        w-[388px] h-[50px] rounded-[15px]
        flex items-center justify-between px-[22px]
        bg-header/30 backdrop-blur-[5px]">
    
    {/* логотип 24 px, контур 2 px */}
    <span className="font-titan text-[28px] leading-[24px] uppercase logo-stroke-sm select-none">
        BASE&nbsp;CAPY
    </span>

    {/* BUY-кнопка 73×43 */}
    <a href="#buy" className="buy-btn-sm"><span className="buy-label-sm">BUY</span></a>

    </header>

    
    <header className={wrapper}>
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-8">

        {/* ---------- логотип ---------- */}
        <span className="font-titan text-[41px] leading-[41px] uppercase logo-stroke select-none">
          BASE&nbsp;CAPY
        </span>

        {/* ---------- BUY ---------- */}
        <a href="#buy" className="buy-btn"><span className="buy-label">BUY</span></a>

        {/* ---------- соц-иконки ---------- */}
        <nav className="flex items-center gap-[65px]">
          <HoverIcon
            href="https://t.me/..."
            black="/icons/telegram.svg"
            blue="/icons/telegramhover.svg"
            alt="Telegram"
          />
          <HoverIcon
            href="https://dexscreener.com/..."
            black="/icons/dexscreener.svg"
            blue="/icons/dexscreenerhover.svg"
            alt="DexScreener"
          />
          <HoverIcon
            href="https://twitter.com/..."
            black="/icons/twitter.svg"
            blue="/icons/twitterhover.svg"
            alt="X"
          />
        </nav>
      </div>
    </header>
    
    </>
  );
}

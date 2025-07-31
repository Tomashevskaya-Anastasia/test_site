'use client';
import Image from 'next/image';

export default function Hero() {
  return (
    <>
      {/* ============ DESKTOP / TABLET  (≥640 px) ================= */}
      <section className="hidden sm:block relative h-[930px] lg:h-[910px] md:h-[720px] w-full overflow-hidden bg-[#F7FFC1]">

        {/* бегущая строка */}
        <div className="h-[60px] w-full bg-lime flex items-center overflow-hidden absolute bottom-[40px] bg-header/40">
          <div className="marquee flex items-center gap-[100px] whitespace-nowrap">
            {[...Array(25)].map((_, i) => (
              <div key={i} className="flex items-center gap-[100px]">
                <span className="font-nerko text-[24px] leading-[29px] tracking-[0.07em] uppercase text-sky">$capy</span>
                <Image src="/assets/orange.svg" width={35} height={35} alt="" />
              </div>
            ))}
          </div>
        </div>

        {/* BG-текст */}
        <Image
          src="/assets/based bara text bg.svg"
          alt=""
          width={1295}
          height={642}
          priority
          className="absolute z-0 left-1/2 -translate-x-1/2 top-[148px] w-full max-w-[1295px] object-contain select-none pointer-events-none"
        />

        {/* капибара + пальма */}
        <div className="relative z-10 mx-auto mt-[200px] max-w-[1440px] px-4 flex items-end justify-center gap-[60px]">
          <Image src="/assets/bara1.svg"       alt="" width={954} height={449} className="w-[500px] lg:w-[750px] md:w-[480px] object-contain select-none" priority/>
          <Image src="/assets/orange palm.svg" alt="" width={578} height={613} className="w-[480px] lg:w-[480px] md:w-[340px] object-contain select-none" priority/>
        </div>

        {/* заголовок */}
        <Image
          src="/assets/basecapytxt2.png"
          alt=""
          width={480}
          height={96}
          className="absolute left-1/2 top-[220px] -translate-x-1/2 select-none md:w-[340px]"
        />
      </section>

      {/* ============ MOBILE  (<640 px) =========================== */}
      <section className="sm:hidden relative w-full min-h-[858px] overflow-hidden bg-[#00000]">
        {/* BG-текст 429×774 */}
        <Image
          src="/assets/text bg mob 1.svg"
          alt=""
          width={430}
          height={774}
          priority
          className="absolute inset-0 w-full h-auto z-0 select-none pointer-events-none"
        />

        {/* заголовок 275×55 */}
        <Image
          src="/assets/basecapytxt2.png"
          alt=""
          width={275}
          height={55}
          priority
          className="absolute left-1/2 -translate-x-1/2 top-[173px] select-none"
        />

        {/* пальма + капибара */}
        <div className="relative z-10 flex flex-col items-center gap-[16px] px-4">
          <Image
            src="/assets/palm orange mob 1.svg"
            alt="Palm"
            width={393}
            height={417}
            className="w-[90vw] max-w-[393px] object-contain select-none transform-gpu translate-y-[185px] -z-10"
          />
          <Image
            src="/assets/bara1.svg"
            alt="Capybara & bird"
            width={585}
            height={275}
            className="w-[100vw] max-w-[585px] mx-auto object-contain select-none"
          />
        </div>

        {/* бегущая строка 50 px + 15 px зазор */}
        <div className="h-[50px] w-full bg-lime mt-[30px] flex items-center overflow-hidden bg-header/40 ">
          <div className="marquee flex items-center gap-[70px] whitespace-nowrap">
            {[...Array(30)].map((_, i) => (
              <div key={i} className="flex items-center gap-[70px]">
                <span className="font-nerko text-[20px] leading-[24px] tracking-[0.07em] uppercase text-sky">$capy</span>
                <Image src="/assets/orange.svg" width={24} height={24} alt="" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

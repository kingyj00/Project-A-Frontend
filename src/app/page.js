export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-white text-[#B44740] font-[Arial]">
      {/* ▣ TOP TEXT NAVIGATION (NO TOP BORDER) */}
      <header className="w-full flex justify-between items-center px-[60px] pt-[28px] text-[14px] uppercase font-extrabold tracking-[0.12em]">
        <span>SHARE CULTURE</span>

        <span className="text-center font-extrabold">
          Food, House, Event,&nbsp;
          <span className="underline">Public Transport</span>, Everything
        </span>

        <span>SHARE LIFE</span>
      </header>

      {/* ▣ MAIN TITLE — PERFECT CENTERED */}
      <div className="absolute top-1/2 left-1/2 -translate-x-[300px] -translate-y-[180px] leading-[1] text-center">
        <h1 className="text-[140px] font-extrabold uppercase leading-[0.9]">
          LIFE <br />
          IN <br />
          SEOUL
        </h1>
      </div>

      {/* ▣ LOGIN — VERTICAL TEXT WITH ARROW ON RIGHT */}
      <div className="absolute top-1/2 right-[90px] -translate-y-[120px] text-[22px] tracking-[0.35em] uppercase font-extrabold flex flex-row items-start">
        {/* vertical letters */}
        <div className="flex flex-col items-center mr-[20px]">
          <span>L</span>
          <span>O</span>
          <span>G</span>
          <span>I</span>
          <span>N</span>
        </div>

        {/* arrow (same horizontal position as PNG) */}
        <div className="text-[48px] leading-none mt-[40px]">→</div>
      </div>

      {/* ▣ BOTTOM SECTION */}
      <div className="absolute bottom-[120px] left-1/2 -translate-x-1/2 w-full flex flex-col items-center">
        <p className="text-[14px] tracking-[0.15em] font-semibold mb-[6px] text-center w-[90%]">
          Community service that shares and shares everything together, including
          culture, transportation, and food in Seoul.
        </p>

        <div className="w-[92%] border-t-[3px] border-[#B44740]" />
      </div>
    </main>
  );
}
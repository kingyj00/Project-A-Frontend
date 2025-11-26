import Link from "next/link";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-white text-[#B44740] font-[Arial]">
      {/* TOP NAVIGATION */}
      <header className="w-full flex justify-between items-center px-[60px] pt-[28px] text-[14px] uppercase font-bold tracking-[0.12em]">
        <span>SHARE CULTURE</span>

        <span className="text-center">
          Food, House, Event,&nbsp;
          <span className="underline">Public Transport</span>, Everything
        </span>

        <span>SHARE LIFE</span>
      </header>

      {/* MAIN TITLE */}
      <div className="absolute left-[80px] top-[160px] leading-[1]">
        <h1 className="text-[140px] font-extrabold uppercase">
          LIFE <br />
          IN <br />
          SEOUL
        </h1>
      </div>

      {/* LOGIN – RIGHT VERTICAL */}
      <Link
        href="/login"
        className="absolute right-[110px] top-[320px] flex flex-col items-center text-[22px] tracking-[0.35em] uppercase font-semibold"
      >
        <span>L</span>
        <span>O</span>
        <span>G</span>
        <span className="mt-[8px]">I</span>
        <span>N</span>

        <div className="text-[48px] mt-[20px]">→</div>
      </Link>

      {/* BOTTOM DESCRIPTION */}
      <div className="absolute bottom-[120px] left-0 w-full flex flex-col items-center">
        <div className="w-[92%] border-t-[3px] border-[#B44740]" />
        <p className="mt-[10px] text-[14px] tracking-[0.15em] font-semibold text-[#B44740] text-center">
          Community service that shares and shares everything together, including
          culture, transportation, and food in Seoul.
        </p>
      </div>
    </main>
  );
}
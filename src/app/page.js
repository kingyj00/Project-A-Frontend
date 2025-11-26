import Link from "next/link";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-white text-[#B44740]">
      {/* Top Navigation */}
      <header className="flex justify-between px-[72px] pt-[32px] text-[11px] tracking-[0.18em] font-semibold uppercase">
        <span>Share Culture</span>
        <span>
          Food, House, Event,{" "}
          <span className="underline">Public Transport</span>, Everything
        </span>
        <span>Share Life</span>
      </header>

      {/* Main Title + Login */}
      <section className="flex">
        <div className="mt-[140px] ml-[90px]">
          <h1 className="text-[112px] leading-[0.9] font-extrabold tracking-[0.04em] uppercase">
            Life
            <br />
            In
            <br />
            Seoul
          </h1>
        </div>

        <div className="flex-1 relative">
          <Link
            href="/login"
            className="absolute right-[96px] top-1/2 -translate-y-1/2 flex flex-col items-center text-[14px] tracking-[0.35em] font-semibold uppercase"
          >
            <span>L</span>
            <span>O</span>
            <span>G</span>
            <span className="mt-[12px]">I</span>
            <span>N</span>
            <div className="mt-[18px] text-[28px]">→</div>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="absolute bottom-[90px] left-0 right-0">
        <div className="mx-[72px] border-t-[2px] border-[#B44740]" />
        <p className="mt-[8px] text-center text-[11px] tracking-[0.16em] font-semibold uppercase text-[#B44740]">
          Community service that shares and shares everything together, including culture,
          transportation, and food in Seoul.
        </p>
      </footer>
    </main>
  );
}
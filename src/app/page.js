export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-[#B44740] font-[Arial]">
      {/* 상단 네비게이션 - 선 없음 */}
      <header className="flex justify-between items-center px-16 pt-8 text-xs uppercase font-extrabold tracking-[0.2em]">
        <span>SHARE CULTURE</span>
        <span className="text-center">
          Food, House, Event, <span className="underline">Public Transport</span>, Everything
        </span>
        <span>SHARE LIFE</span>
      </header>

      {/* 가운데 메인 영역 */}
      <section className="flex flex-1 items-center justify-center px-16">
        {/* 가운데 정렬된 메인 로고 */}
        <div className="flex flex-col items-center">
          <h1 className="text-[120px] leading-[0.9] font-extrabold uppercase text-center">
            LIFE
            <br />
            IN
            <br />
            SEOUL
          </h1>
        </div>

        {/* 오른쪽 LOGIN + 옆에 화살표 */}
        <div className="ml-24 flex items-center">
          <div className="flex flex-col items-center text-[18px] tracking-[0.35em] uppercase font-extrabold">
            <span>L</span>
            <span>O</span>
            <span>G</span>
            <span>I</span>
            <span>N</span>
          </div>
          <span className="ml-4 text-[40px] font-extrabold">→</span>
        </div>
      </section>

      {/* 하단 문구 + 그 아래 선 */}
      <footer className="px-16 pb-16">
        <p className="text-[12px] tracking-[0.15em] font-semibold text-center mb-3">
          Community service that shares and shares everything together, including culture,
          transportation, and food in Seoul.
        </p>
        <div className="border-t-2 border-[#B44740]" />
      </footer>
    </main>
  );
}

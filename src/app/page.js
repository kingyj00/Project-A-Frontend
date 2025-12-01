export default function Home() {
  return (
    <main className="relative w-[1440px] h-[1600px] bg-white text-[#C04040] font-['Archivo_Black'] overflow-hidden mx-auto">
      {/* 상단 라인 */}
      <div className="absolute left-[55px] top-[55px] w-[1330px] border-t-[3px] border-[#C04040]" />

      {/* 상단 네비 */}
      <div className="absolute left-[55px] top-[69px] text-[20px] font-normal">
        SHARE CULTURE
      </div>

      <div className="absolute left-[452px] top-[69px] text-[20px] font-normal">
        Food, House, Event, Public Transper, Everything
      </div>

      <div className="absolute left-[1253px] top-[69px] text-[20px] font-normal">
        SHARE LIFE
      </div>

      {/* 메인 타이틀 */}
      <div className="absolute left-[424px] top-[166px] w-[592px] h-[488px] text-[150px] leading-[1] font-normal">
        LIFE<br />IN<br />SEOUL
      </div>

      {/* LOGIN (세로 텍스트) */}
      <div className="absolute left-[1218px] top-[300px] text-[36px] text-center font-normal leading-[1.4]">
        L<br />O<br />G<br />I<br />N
      </div>

      {/* ──▼ 스타일 화살표 (LOGIN 가운데 정렬) */}
      {/* LOGIN 세로 텍스트 높이가 약 5줄 → center는 top + 약 36px * 2.5 ≈ 350~360px */}
      <div className="absolute left-[1270px] top-[362px] flex items-center">
        {/* 가로선 */}
        <div className="w-[40px] border-t-[3px] border-[#C04040] mr-[4px]"></div>

        {/* 삼각형 ▼ */}
        <svg width="18" height="18" viewBox="0 0 24 24">
          <path
            d="M7 10l5 5 5-5"
            stroke="#C04040"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* 하단 문구 */}
      <div className="absolute left-[213px] top-[766px] w-[1000px] text-[16px] font-normal">
        Community service that shares and shares everything together, including culture,
        transportation, and food in Seoul.
      </div>

      {/* 하단 라인 */}
      <div className="absolute left-[55px] top-[800px] w-[1330px] border-t-[3px] border-[#C04040]" />
    </main>
  );
}
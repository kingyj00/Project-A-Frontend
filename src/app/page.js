import React from "react";
import LIFEInSeoul from "./LIFE-IN-SEOUL.png";
import line1 from "./line-1.svg";
import line2 from "./line-2.svg";

export default function Page() {
  return (
    <div className="bg-[url(/rectangle-1.png)] bg-[100%_100%] w-full min-w-[1440px] min-h-[1600px] relative">
      {/* HEADER */}
      <header className="absolute top-[52px] left-[55px] right-[55px]">
        <img
          className="w-[1330px] h-[3px]"
          alt=""
          src={line1}
        />

        <nav className="flex justify-between items-start mt-[17px]">
          <h2 className="font-normal text-[#c03f3f] text-xl whitespace-nowrap">
            SHARE CULTURE
          </h2>

          <p className="font-normal text-[#c03f3f] text-xl whitespace-nowrap">
            Food, House, Event, Public Transper, Everything
          </p>

          <h2 className="font-normal text-[#c03f3f] text-xl whitespace-nowrap">
            SHARE LIFE
          </h2>
        </nav>
      </header>

      {/* MAIN IMAGE */}
      <main className="absolute top-[195px] left-[430px] w-[557px] h-[431px]">
        <img
          className="w-full h-full"
          alt="Life IN SEOUL - Community service platform"
          src={LIFEInSeoul}
        />
      </main>

      {/* LOGIN */}
      <aside
        className="absolute top-[300px] left-[1218px] w-[17px]"
        aria-label="Login navigation"
      >
        <button
          className="font-normal text-[#c03f3f] text-4xl text-center leading-[normal] cursor-pointer hover:opacity-80 transition-opacity"
        >
          L<br />O<br />G<br />I<br />N
        </button>
      </aside>

      {/* ──▼ 화살표 */}
      <div className="absolute top-[365px] left-[1280px] flex items-center">
        <div className="w-[60px] border-t-[4px] border-[#C03F3F] mr-[6px]" />
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path
            d="M7 10l5 5 5-5"
            stroke="#C03F3F"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* FOOTER */}
      <footer className="absolute top-[766px] left-[55px] right-[55px]">
        <img
          className="absolute top-[31px] left-0 w-[1330px] h-[3px]"
          alt=""
          src={line2}
        />

        <p className="absolute top-0 left-[158px] font-normal text-[#c03f3f] text-base whitespace-nowrap">
          Community service that shares and shares everything together,
          including culture, transportation, and food in Seoul.
        </p>
      </footer>
    </div>
  );
}
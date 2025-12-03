export default function Page() {
  return (
    <div className="bg-[url(/rectangle-1.png)] bg-[100%_100%] w-full min-w-[1440px] min-h-[1600px] relative">

      <header className="absolute top-[52px] left-[55px] right-[55px]">
        <img
          className="w-[1330px] h-[3px]"
          alt=""
          src="/line-1.svg"
        />

        <nav className="flex justify-between items-start mt-[17px]">
          <div className="text-[#c03f3f] text-xl whitespace-nowrap">
            SHARE CULTURE
          </div>

          <p className="text-[#c03f3f] text-xl whitespace-nowrap">
            Food, House, Event, Public Transper, Everything
          </p>

          <div className="text-[#c03f3f] text-xl whitespace-nowrap">
            SHARE LIFE
          </div>
        </nav>
      </header>

      <main className="absolute top-[195px] left-[430px] w-[557px] h-[431px]">
        <img
          className="w-full h-full"
          alt="Life IN SEOUL - Community service platform"
          src="/LIFE-IN-SEOUL.png"
        />
      </main>

      <aside className="absolute top-[300px] left-[1218px] w-[17px]">
        <button className="text-[#c03f3f] text-4xl text-center leading-[normal]">
          L<br />O<br />G<br />I<br />N
        </button>
      </aside>

      <div className="absolute top-[373px] left-[1280px] w-[110px] h-[74px]">
        <img
          className="w-full h-full cursor-pointer hover:opacity-80 transition-opacity"
          alt="Navigate forward"
          src="/arrow-1.png"
        />
      </div>

      <footer className="absolute top-[766px] left-[55px] right-[55px]">
        <img
          className="absolute top-[31px] left-0 w-[1330px] h-[3px]"
          alt=""
          src="/line-2.svg"
        />

        <p className="absolute top-0 left-[158px] text-[#c03f3f] text-base whitespace-nowrap">
          Community service that shares and shares everything together,
          including culture, transportation, and food in Seoul.
        </p>
      </footer>

    </div>
  );
}
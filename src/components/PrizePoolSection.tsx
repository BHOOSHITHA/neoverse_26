import firstPlaceImg from '../assets/first_place.png';
import secondPlaceImg from '../assets/second_place.png';
import thirdPlaceImg from '../assets/third_place.png';

export default function PrizePoolSection() {
  return (
    <section id="prizes" className="min-h-screen flex items-center justify-center py-20 px-6 bg-transparent">
      <div className="max-w-5xl mx-auto w-full">

        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-5xl md:text-6xl font-bold text-white uppercase tracking-wider mb-4"
            style={{ textShadow: '0 0 30px rgba(255,255,255,0.15)' }}>
            PRIZE POOL
          </h2>
          <p className="text-2xl md:text-3xl font-bold tracking-wide"
            style={{ color: '#22d3ee', textShadow: '0 0 16px rgba(34,211,238,0.5)' }}>
            Total Prize Pool Worth ₹30,000
          </p>
        </div>

        {/* Prize Cards — 2nd | 1st (taller) | 3rd */}
        <div className="flex flex-col md:flex-row items-end justify-center gap-5 mb-8">

          {/* 2nd Place */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div
              className="rounded-2xl p-7 text-center flex flex-col items-center"
              style={{
                background: 'rgba(20,20,35,0.85)',
                border: '2px solid rgba(180,180,220,0.55)',
                boxShadow: '0 0 18px rgba(180,180,220,0.25)',
              }}
            >
              <div className="mb-5 flex justify-center h-24 items-center">
                <img
                  src={secondPlaceImg}
                  alt="2nd Place"
                  className="h-20 w-auto object-contain"
                  style={{ filter: 'drop-shadow(0 0 12px rgba(192,192,192,0.6))' }}
                />
              </div>
              <h3 className="text-white text-xl font-bold mb-2">2nd Prize</h3>
              <p className="text-3xl font-extrabold text-white mb-4">₹10,000</p>
              {/* Badge */}
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold text-white"
                style={{
                  background: 'rgba(60,60,80,0.9)',
                  border: '1px solid rgba(180,180,220,0.3)',
                }}
              >
                🏅 Runner Up
              </span>
            </div>
          </div>

          {/* 1st Place — Center & Taller */}
          <div className="w-full md:w-72 flex-shrink-0">
            <div
              className="rounded-2xl p-9 text-center flex flex-col items-center"
              style={{
                background: 'rgba(20,20,35,0.9)',
                border: '2px solid #facc15',
                boxShadow: '0 0 30px rgba(250,204,21,0.45), 0 0 60px rgba(250,204,21,0.2)',
              }}
            >
              <div className="mb-5 flex justify-center h-28 items-center">
                <img
                  src={firstPlaceImg}
                  alt="1st Place"
                  className="h-24 w-auto object-contain"
                  style={{ filter: 'drop-shadow(0 0 16px rgba(255,215,0,0.7))' }}
                />
              </div>
              <h3 className="text-white text-2xl font-bold mb-2">1st Prize</h3>
              <p className="text-4xl font-extrabold text-white mb-4">₹15,000</p>
              {/* Badge */}
              <span
                className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full text-sm font-bold text-black"
                style={{
                  background: 'linear-gradient(135deg, #facc15, #d97706)',
                  boxShadow: '0 0 10px rgba(250,204,21,0.5)',
                }}
              >
                🏅 Winner
              </span>
            </div>
          </div>

          {/* 3rd Place */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div
              className="rounded-2xl p-7 text-center flex flex-col items-center"
              style={{
                background: 'rgba(20,20,35,0.85)',
                border: '2px solid rgba(200,130,60,0.55)',
                boxShadow: '0 0 18px rgba(200,130,60,0.25)',
              }}
            >
              <div className="mb-5 flex justify-center h-24 items-center">
                <img
                  src={thirdPlaceImg}
                  alt="3rd Place"
                  className="h-20 w-auto object-contain"
                  style={{ filter: 'drop-shadow(0 0 12px rgba(205,127,50,0.6))' }}
                />
              </div>
              <h3 className="text-white text-xl font-bold mb-2">3rd Prize</h3>
              <p className="text-3xl font-extrabold text-white mb-4">₹5,000</p>
              {/* Badge */}
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold text-white"
                style={{
                  background: 'rgba(60,40,20,0.9)',
                  border: '1px solid rgba(200,130,60,0.4)',
                }}
              >
                🏅 Second Runner Up
              </span>
            </div>
          </div>
        </div>

        {/* Additional Opportunities */}
        <div
          className="rounded-2xl px-8 py-7 mt-4"
          style={{
            background: 'rgba(15,15,30,0.75)',
            border: '2px solid transparent',
            backgroundClip: 'padding-box',
            boxShadow: '0 0 0 2px rgba(34,211,238,0.55), 0 0 0 4px rgba(168,85,247,0.35)',
          }}
        >
          <h4 className="text-center text-white text-xl font-bold mb-5 tracking-wide">
            Additional Opportunities
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <span className="text-white text-lg mt-0.5">•</span>
              <p className="text-gray-200 text-base font-medium leading-snug">
                Internship Opportunities for Top Performing Teams
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-white text-lg mt-0.5">•</span>
              <p className="text-gray-200 text-base font-medium leading-snug">
                Special Recognition for{' '}
                <span style={{ color: '#f472b6' }}>Women's Team</span>
                {' '}(Women's Day Special){' '}
                <span className="inline-block ml-1">🎀</span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

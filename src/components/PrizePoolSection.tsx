export default function PrizePoolSection() {
  return (
    <section id="prizes" className="min-h-screen flex items-center justify-center py-20 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider mb-6">
            PRIZE POOL
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-blue-600 mx-auto mb-6 opacity-80"></div>
          <p className="text-lg text-white mb-16">Total worth ₹30,000</p>
        </div>

        {/* Prize Cards - All Same Size */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

          {/* 1st Place - Winner (LEFT) */}
          <div className="w-full">
            <div className="bg-white/5 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-8 text-center hover:border-primary-400/40 transition-all duration-300 shadow-lg">
              {/* Emoji Icon */}
              <div className="text-7xl mb-6">
                🏆
              </div>

              {/* Title */}
              <h3 className="text-white text-xl font-bold mb-4 uppercase">
                Winner
              </h3>

              {/* Amount */}
              <p className="text-2xl md:text-3xl font-bold text-white">
                ₹15,000
              </p>
            </div>
          </div>

          {/* 2nd Place - Runner Up (CENTER) */}
          <div className="w-full">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:border-white/20 transition-all duration-300">
              {/* Emoji Icon */}
              <div className="text-7xl mb-6">
                🥈
              </div>

              {/* Title */}
              <h3 className="text-white text-xl font-bold mb-4 uppercase">
                Runner Up
              </h3>

              {/* Amount */}
              <p className="text-2xl md:text-3xl font-bold text-white">
                ₹10,000
              </p>
            </div>
          </div>

          {/* 3rd Place - 2nd Runner Up (RIGHT) */}
          <div className="w-full">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:border-white/20 transition-all duration-300">
              {/* Emoji Icon */}
              <div className="text-7xl mb-6">
                🥉
              </div>

              {/* Title */}
              <h3 className="text-white text-xl font-bold mb-4 uppercase">
                2nd Runner Up
              </h3>

              {/* Amount */}
              <p className="text-2xl md:text-3xl font-bold text-white">
                ₹5,000
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

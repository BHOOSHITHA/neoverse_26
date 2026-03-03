import { useEffect, useRef, useState, useMemo, memo } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import introAudio from '../assets/audio/intro.mp3?url';

const NameList = memo(({ names, keyPrefix }: { names: string[], keyPrefix: string }) => (
  <>
    {names.map((name, index) => (
      <p
        key={`${keyPrefix}-${index}`}
        className="text-lg md:text-xl text-white font-medium tracking-wide"
      >
        {name}
      </p>
    ))}
  </>
));

NameList.displayName = 'NameList';

export default function EventOrganizers() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const aimlTeam = useMemo(() => [
    'Vinoth kumar A',
    'Sarvesh P V',
    'Abishek M',
    'Akash S',
    'Anusree L G',
    'Arya H',
    'Balaganesh S',
    'Bhooshitha V',
    'Deepika K S R',
    'Dhaarani Murugesan',
    'Dharaneesh V',
    'Jayasurya S',
    'Maghasri S',
    'Mathyer Vishnu M',
    'Muthuram R G M',
    'Muthusingam N',
    'Nithin Karthik',
    'Sangamithra G',
    'Sanjeevi Kumar S',
    'Shanmuga Prakash S',
    'Siva Sabarivel K M',
    'Snegith V',
    'Suvetha V',
    'Vishnu V',
  ], []);

  const sdcTeam = useMemo(() => [
    'Ananthika',
    'Deepak K V',
    'Harshini Sanjana J',
    'HemaVarshini P C',
    'Joshiga S',
    'Kaviselvan S J',
    'Lakshana',
    'Lathikka',
    'Madhumitha N',
    'Nandhana',
    'Shane Israel N',
    'Tharikashri S K',
    'Theebikasri J',
  ], []);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.5;
      audio.muted = true;
      audio.loop = true;
      audio.load();
    }
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      const newMutedState = !isMuted;
      audioRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
      
      if (!newMutedState && audioRef.current.paused) {
        audioRef.current.play().catch(err => console.log("Audio play error:", err));
      }
    }
  };

  return (
    <section id="organizers" className="min-h-screen flex items-center justify-center py-20 px-6 bg-transparent relative overflow-hidden">
      {/* Audio element */}
      <audio ref={audioRef} src={introAudio} preload="metadata" />

      {/* Mute/Unmute Button - Top Right */}
      <button
        onClick={toggleMute}
        className="absolute top-8 right-8 p-3 bg-transparent border-2 border-teal-400 hover:border-pink-400 text-white rounded-lg shadow-lg transition-all hover:scale-105 hover:bg-white/10 z-20"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </button>

      <div className="relative z-10 w-full max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Event Organizers
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-pink-500 mx-auto mb-6"></div>
        </div>

        {/* Scrolling Credits Container - 2 Column Layout */}
        <div className="relative h-[600px] overflow-hidden">
          {/* Gradient fade at top and bottom */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling content - duplicated for seamless loop */}
          <div className="animate-scroll-up will-change-transform">
            {/* First instance */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
              {/* AI & ML Column - Left */}
              <div className="text-center pt-20">
                <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-teal-400 to-pink-400 bg-clip-text mb-12">
                  AI & ML
                </h3>
                <div className="space-y-5">
                  <NameList names={aimlTeam} keyPrefix="aiml-1" />
                </div>
                {/* Final Message for AI & ML */}
                <div className="text-center mt-24 mb-24">
                  <p className="text-2xl md:text-3xl text-teal-400 font-bold mb-6">
                    Thank You
                  </p>
                  <p className="text-xl text-white/80 font-medium">
                    NeoVerse '26
                  </p>
                </div>
              </div>

              {/* SDC Column - Right */}
              <div className="text-center pt-20">
                <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-teal-400 bg-clip-text mb-12">
                  SDC
                </h3>
                <div className="space-y-5">
                  <NameList names={sdcTeam} keyPrefix="sdc-1" />
                </div>
                {/* Final Message for SDC */}
                <div className="text-center mt-24 mb-24">
                  <p className="text-2xl md:text-3xl text-pink-400 font-bold mb-6">
                    Thank You
                  </p>
                  <p className="text-xl text-white/80 font-medium">
                    NeoVerse '26
                  </p>
                </div>
              </div>
            </div>

            {/* Second instance for seamless loop */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
              {/* AI & ML Column - Left */}
              <div className="text-center pt-20">
                <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-teal-400 to-pink-400 bg-clip-text mb-12">
                  AI & ML
                </h3>
                <div className="space-y-5">
                  <NameList names={aimlTeam} keyPrefix="aiml-2" />
                </div>
                {/* Final Message for AI & ML */}
                <div className="text-center mt-24 mb-24">
                  <p className="text-2xl md:text-3xl text-teal-400 font-bold mb-6">
                    Thank You
                  </p>
                  <p className="text-xl text-white/80 font-medium">
                    NeoVerse '26
                  </p>
                </div>
              </div>

              {/* SDC Column - Right */}
              <div className="text-center pt-20">
                <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-teal-400 bg-clip-text mb-12">
                  SDC
                </h3>
                <div className="space-y-5">
                  <NameList names={sdcTeam} keyPrefix="sdc-2" />
                </div>
                {/* Final Message for SDC */}
                <div className="text-center mt-24 mb-24">
                  <p className="text-2xl md:text-3xl text-pink-400 font-bold mb-6">
                    Thank You
                  </p>
                  <p className="text-xl text-white/80 font-medium">
                    NeoVerse '26
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import internSponsorImg from '../assets/sponsors/InternshipSponsor.jpeg';
import bronzeSponsorImg from '../assets/sponsors/bronze-sponsor.jpeg';
import wellWisher1Img from '../assets/sponsors/wellwisher-1.jpeg';
import wellWisher2Img from '../assets/sponsors/wellwisher-2.png';
import joslinImg from '../assets/Joslin.png';
import ixesImg from '../assets/IXES.png';
import vispraImg from '../assets/sponsors/vispra.png';


export default function SponsorCarousel() {
  const sponsors = [
    { id: '2', name: 'Internship Sponsor', logo: internSponsorImg },
    { id: '3', name: 'Bronze Sponsor', logo: bronzeSponsorImg },
    { id: '4', name: 'Well Wisher', logo: wellWisher1Img },
    { id: '5', name: 'Well Wisher', logo: wellWisher2Img },
    { id: '6', name: 'Joslin', logo: joslinImg },
    { id: '7', name: 'IXES', logo: ixesImg },
    { id: '8', name: 'Vispra', logo: vispraImg },
  ];

  // Duplicate sponsors for seamless loop
  const duplicatedSponsors = [...sponsors, ...sponsors];

  return (
    <div className="w-full max-w-md overflow-hidden relative mt-12 -ml-4">
      <div className="relative h-12">
        {/* Gradient fade on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black to-transparent z-10"></div>

        {/* Scrolling container */}
        <div className="flex gap-6 animate-scroll-left">
          {duplicatedSponsors.map((sponsor, index) => (
            <div
              key={`${sponsor.id}-${index}`}
              className="flex-shrink-0 h-8 w-auto flex items-center"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-full w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

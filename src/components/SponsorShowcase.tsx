import titleSponsorImg from '../assets/sponsors/titlesponsor.jpeg';
import internSponsorImg from '../assets/sponsors/InternshipSponsor.jpeg';
import bronzeSponsorImg from '../assets/sponsors/bronze-sponsor.jpeg';
import wellWisher1Img from '../assets/sponsors/wellwisher-1.jpeg';
import wellWisher2Img from '../assets/sponsors/wellwisher-2.png';
import joslinImg from '../assets/Joslin.png';
import ixesImg from '../assets/IXES.png';
import vispraImg from '../assets/sponsors/vispra.png';
import goushaaImg from '../assets/sponsors/Goushaa-Agronutrients.jpeg';

interface Sponsor {
  id: string;
  name: string;
  logo: string;
  link?: string;
}

export default function SponsorShowcase() {
  const allSponsors: Sponsor[] = [
    { id: '1', name: 'SurveySparrow', logo: titleSponsorImg, link: 'https://surveysparrow.com/' },
    { id: '2', name: 'Internship Sponsor', logo: internSponsorImg },
    { id: '3', name: 'Bronze Sponsor', logo: bronzeSponsorImg },
    { id: '4', name: 'Well Wisher', logo: wellWisher1Img },
    { id: '5', name: 'Well Wisher', logo: wellWisher2Img },
    { id: '6', name: 'Joslin', logo: joslinImg },
    { id: '7', name: 'IXES', logo: ixesImg, link: 'https://ixes.ai/' },
    { id: '8', name: 'Vispra', logo: vispraImg, link: 'https://vispra.com/' },
    { id: '9', name: 'Goushaa Agronutrients', logo: goushaaImg }
  ];

  return (
    <section className="py-20 px-6 bg-transparent overflow-x-hidden">
      <div className="max-w-7xl mx-auto overflow-x-hidden">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sponsored by
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-pink-500 mx-auto mb-6"></div>
        </div>

        {/* All Sponsors Horizontally */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {allSponsors.map((sponsor) => {
            const sponsorImage = (
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-16 md:h-20 lg:h-24 w-auto object-contain max-w-[150px] md:max-w-[200px]"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `<span class="text-white font-bold text-sm">${sponsor.name}</span>`;
                  }
                }}
              />
            );

            return sponsor.link ? (
              <a
                key={sponsor.id}
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 transition-all duration-300 hover:scale-110"
              >
                {sponsorImage}
              </a>
            ) : (
              <div
                key={sponsor.id}
                className="p-4 transition-all duration-300 hover:scale-110"
              >
                {sponsorImage}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

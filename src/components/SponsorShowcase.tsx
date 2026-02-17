import { useState } from 'react';
import titleSponsorImg from '../assets/sponsors/titlesponsor.jpeg';
import internSponsorImg from '../assets/sponsors/InternshipSponsor.jpeg';
import bronzeSponsorImg from '../assets/sponsors/bronze-sponsor.jpeg';
import wellWisher1Img from '../assets/sponsors/wellwisher-1.jpeg';
import wellWisher2Img from '../assets/sponsors/wellwisher-2.png';

interface Sponsor {
  id: string;
  name: string;
  logo: string;
}

interface SponsorData {
  title: Sponsor[];
  internship: Sponsor[];
  bronze: Sponsor[];
  wellWisher: Sponsor[];
}

export default function SponsorShowcase() {
  const defaultSponsors: SponsorData = {
    title: [
      { id: '1', name: 'Title Sponsor', logo: titleSponsorImg }
    ],
    internship: [
      { id: '2', name: 'Internship Sponsor', logo: internSponsorImg }
    ],
    bronze: [
      { id: '3', name: 'Bronze Sponsor', logo: bronzeSponsorImg }
    ],
    wellWisher: [
      { id: '4', name: 'Well Wisher', logo: wellWisher1Img },
      { id: '5', name: 'Well Wisher', logo: wellWisher2Img }
    ]
  };

  const [sponsorTiers] = useState<SponsorData>(defaultSponsors);

  const TitleSponsor = ({ sponsor }: { sponsor: Sponsor }) => (
    <div className="mb-16">
      <h3 className="text-3xl font-bold text-center mb-8 text-primary-400">
        Title Sponsor
      </h3>
      <div className="flex justify-center">
        <div className="p-4 transition-all duration-300 inline-block hover:scale-105">
          <img
            src={sponsor.logo}
            alt={sponsor.name}
            className="h-20 w-auto object-contain"
          />
        </div>
      </div>
    </div>
  );

  const TierSection = ({
    title,
    sponsors,
    tierColor,
    columns = 1,
    imageSize = 'h-16'
  }: {
    title: string;
    sponsors: Sponsor[];
    tierColor: string;
    columns?: number;
    imageSize?: string;
  }) => {
    if (sponsors.length === 0) return null;

    const gridClass = 'flex flex-wrap justify-center';

    return (
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-center mb-8" style={{ color: tierColor }}>
          {title}
        </h3>
        <div className={`${gridClass} gap-8 max-w-5xl mx-auto`}>
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className="p-6 transition-all duration-300 flex items-center justify-center hover:scale-105"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className={`${imageSize} w-auto object-contain max-w-full`}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `<span class="text-white font-bold text-sm">${sponsor.name}</span>`;
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 px-6 bg-transparent overflow-x-hidden">
      <div className="max-w-6xl mx-auto overflow-x-hidden">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Sponsors
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-blue-600 mx-auto mb-6 opacity-80"></div>
          <p className="text-lg text-primary-100 max-w-2xl mx-auto">
            Powered by industry leaders who believe in innovation
          </p>
        </div>

        {sponsorTiers.title.length > 0 && <TitleSponsor sponsor={sponsorTiers.title[0]} />}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TierSection
            title="Internship Offer Sponsor"
            sponsors={sponsorTiers.internship}
            tierColor="#4FC3F7"
            columns={1}
            imageSize="h-32"
          />

          <TierSection
            title="Bronze Sponsor"
            sponsors={sponsorTiers.bronze}
            tierColor="#CD7F32"
            columns={1}
            imageSize="h-28"
          />
        </div>

        <TierSection
          title="Well Wishers"
          sponsors={sponsorTiers.wellWisher}
          tierColor="#8b5cf6"
          columns={2}
          imageSize="h-28"
        />
      </div>
    </section>
  );
}

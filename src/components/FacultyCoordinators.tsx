import sujithraImg from '../assets/faculty/Dr Sujithra M Associate Professor.jpeg';
import arunaImg from '../assets/faculty/Dr Aruna P Assistant Professor.jpeg';
import srideviImg from '../assets/faculty/Dr Sridevi V Assistant Professor.jpeg';
import karthikImg from '../assets/faculty/D Karthik N Assistant Professor.jpeg';
import hemashreeImg from '../assets/faculty/Mrs Hemashree P Assistant Professor.jpeg';
import kavithaImg from '../assets/faculty/Dr Kavitha D Assistant Professor.jpeg';
import swathineImg from '../assets/faculty/Dr Swathine K Assistant Professor.jpeg';
import banuprivaImg from '../assets/faculty/Mrs Banupriya R Assistant Professor.jpeg';
import sudhaImg from '../assets/faculty/Dr Sudha Muthusamy Assistant Professor.jpeg';
import vanithaImg from '../assets/faculty/Dr Vanitha N Assistant Professor.jpeg';

interface Faculty {
  name: string;
  designation: string;
  image: string;
}

export default function FacultyCoordinators() {
  const eventConvener: Faculty[] = [
    {
      name: 'Dr. M. Sujithra',
      designation: 'Associate Professor & HOD (I/C), Dept. Of Computing (AI&ML)',
      image: sujithraImg
    }
  ];

  const facultyCoordinators: Faculty[] = [
    {
      name: 'Dr. N. Karthick',
      designation: 'Assistant Professor (Sr.Gr.), Dept. Of Computing (AI&ML)',
      image: karthikImg
    },
    {
      name: 'Mrs. P. Hemashree',
      designation: 'Assistant Professor, Dept. Of Computing (AI&ML)',
      image: hemashreeImg
    }
  ];

  const organisingCommittee: Faculty[] = [
    {
      name: 'Dr. P. Aruna',
      designation: 'Assistant Professor (Sl.Gr.), Dept. Of Computing (AI&ML)',
      image: arunaImg
    },
    {
      name: 'Dr. V. Sridevi',
      designation: 'Assistant Professor (Sl.Gr.), Dept. Of Computing (AI&ML)',
      image: srideviImg
    },
    {
      name: 'Dr. D. Kavitha',
      designation: 'Assistant Professor (Sl.Gr.), Dept. Of Computing (AI&ML)',
      image: kavithaImg
    },
    {
      name: 'Dr. K. Swathine',
      designation: 'Assistant Professor, Dept. Of Computing (AI&ML)',
      image: swathineImg
    },
    {
      name: 'Mrs. R. Banupriya',
      designation: 'Assistant Professor, Dept. Of Computing (AI&ML)',
      image: banuprivaImg
    },
    {
      name: 'Dr. R. Sudha',
      designation: 'Assistant Professor, Dept. Of Computing (AI&ML)',
      image: sudhaImg
    },
    {
      name: 'Dr. N. Vanitha',
      designation: 'Assistant Professor, Dept. Of Computing (AI&ML)',
      image: vanithaImg
    }
  ];

  const renderFacultyGroup = (facultyList: Faculty[]) => (
    <div className="flex flex-wrap justify-center gap-8">
      {facultyList.map((faculty, index) => (
        <div
          key={index}
          className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-teal-500/20 hover:border-pink-500/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-teal-500/20 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] xl:w-[calc(25%-1.5rem)] max-w-sm"
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 mb-4 rounded-2xl overflow-hidden border-2 border-teal-400/30 group-hover:border-pink-400/50 transition-all">
              <img
                src={faculty.image}
                alt={faculty.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              {faculty.name}
            </h3>
            <p className="text-xs text-teal-200/80 leading-relaxed">
              {faculty.designation}
            </p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="faculty" className="py-20 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Faculty Coordinators
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-pink-500 mx-auto mb-6"></div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-pink-400 mb-8 text-center flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-pink-500/50 hidden sm:block"></span>
            Event Convener
            <span className="h-px w-12 bg-pink-500/50 hidden sm:block"></span>
          </h3>
          {renderFacultyGroup(eventConvener)}
        </div>

        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-pink-400 mb-8 text-center flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-pink-500/50 hidden sm:block"></span>
            Faculty Coordinators
            <span className="h-px w-12 bg-pink-500/50 hidden sm:block"></span>
          </h3>
          {renderFacultyGroup(facultyCoordinators)}
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-pink-400 mb-8 text-center flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-pink-500/50 hidden sm:block"></span>
            Faculty Organisers
            <span className="h-px w-12 bg-pink-500/50 hidden sm:block"></span>
          </h3>
          {renderFacultyGroup(organisingCommittee)}
        </div>
      </div>
    </section>
  );
}

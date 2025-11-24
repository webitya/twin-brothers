"use client";

export default function AboutTeam() {
  const therapists = [
    {
      id: 1,
      name: "Kush Kumar",
      title: "Founder & Senior Therapist",
      specialty: "Deep Tissue • Sports Therapy • Rehabilitation",
      image: "/male-massage-therapist-professional.jpg",
      bio: "Certified therapist with over 12 years of hands-on experience in sports injury recovery, deep tissue therapy, and chronic pain relief.",
    },
    {
      id: 2,
      name: "Aaradhya Verma",
      title: "Certified Female Therapist",
      specialty: "Relaxation • Aromatherapy • Swedish Massage",
      image: "/professional-female-massage-therapist.png",
      bio: "A licensed therapist known for her calming approach, Aaradhya specializes in relaxation techniques, aromatherapy, and Swedish wellness treatments.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-br from-white via-teal-50/40 to-white">

      {/* Background soft blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-10 left-0 w-72 h-72 bg-teal-200/40 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-200/40 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-teal-900 mb-3">
            Meet Our Team
          </h2>
          <p className="text-teal-700 text-lg max-w-xl mx-auto">
            Skilled professionals committed to your comfort, healing, and well-being.
          </p>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {therapists.map((person) => (
            <div key={person.id} className="group text-center">
              
              {/* Image */}
              <div className="relative mx-auto w-56 h-56 rounded-2xl overflow-hidden shadow-md group-hover:shadow-lg transition-all duration-300">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="text-2xl font-serif font-bold text-teal-900 mt-6">
                {person.name}
              </h3>

              {/* Title */}
              <p className="text-teal-700 font-medium text-sm mt-1">
                {person.title}
              </p>

              {/* Specialty */}
              <p className="text-teal-600 text-sm mt-1 italic">
                {person.specialty}
              </p>

              {/* Bio */}
              <p className="text-teal-800 text-sm leading-relaxed max-w-md mx-auto mt-4">
                {person.bio}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

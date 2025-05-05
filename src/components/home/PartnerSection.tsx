import React from 'react';

interface Partner {
  id: number;
  name: string;
  logo: string;
}

const PartnerSection: React.FC = () => {
  const partners: Partner[] = [
    {
      id: 1,
      name: 'CTEVT',
      logo: 'https://images.pexels.com/photos/270669/pexels-photo-270669.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
    },
    {
      id: 2,
      name: 'Ministry of Education',
      logo: 'https://images.pexels.com/photos/270669/pexels-photo-270669.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
    },
    {
      id: 3,
      name: 'National Examination Board',
      logo: 'https://images.pexels.com/photos/270669/pexels-photo-270669.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
    },
    {
      id: 4,
      name: 'Higher Secondary Education Board',
      logo: 'https://images.pexels.com/photos/270669/pexels-photo-270669.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
    },
    {
      id: 5,
      name: 'University Grants Commission',
      logo: 'https://images.pexels.com/photos/270669/pexels-photo-270669.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
    },
    {
      id: 6,
      name: 'Cambridge Assessment',
      logo: 'https://images.pexels.com/photos/270669/pexels-photo-270669.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container">
        <h2 className="text-2xl font-bold text-center mb-8">Our Partners & Affiliations</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {partners.map((partner) => (
            <div key={partner.id} className="flex justify-center">
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
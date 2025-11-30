import React from 'react';

const services = [
  { title: 'Consulting', icon: '🔍' },
  { title: 'Development', icon: '💻' },
  { title: 'Design', icon: '🎨' },
  { title: 'Marketing', icon: '📈' }
];

const Services = () => {
  return (
    <div className='p-10 text-center'>
      <h2 className='text-4xl font-semibold mb-4'>What We Do</h2>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
        {services.map((service) => (
          <div key={service.title} className='border rounded-lg p-6 shadow-lg'>
            <span className='text-5xl'>{service.icon}</span>
            <h3 className='text-xl'>{service.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
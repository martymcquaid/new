import React from 'react';

const Contact = () => {
  return (
    <div className='p-10 text-center'>
      <h2 className='text-4xl font-semibold mb-4'>Contact Us</h2>
      <form className='flex flex-col items-center'>
        <input type='text' placeholder='Your Name' className='border p-2 mb-2 rounded w-1/2'/>
        <input type='email' placeholder='Your Email' className='border p-2 mb-2 rounded w-1/2'/>
        <textarea placeholder='Your Message' className='border p-2 mb-2 rounded w-1/2' rows={4}></textarea>
        <button type='submit' className='bg-blue-500 text-white rounded py-2 px-4'>Send Message</button>
      </form>
      <div className='mt-4'>
        <p>Follow us on social media</p>
        <div className='flex justify-center space-x-4'>
          <a href='#'>Facebook</a>
          <a href='#'>Twitter</a>
          <a href='#'>Instagram</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
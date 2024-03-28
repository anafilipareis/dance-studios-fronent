import React from 'react';
import DanceClasses from '../components/DanceClassesList';
import Footer from '../components/footer'; // Import your Footer component

const DanceClassesPage = () => {
  return (
    <div className='background-color'> 
      <DanceClasses />
      <Footer /> {/* Render the Footer component */}
    </div>
  );
};

export default DanceClassesPage;




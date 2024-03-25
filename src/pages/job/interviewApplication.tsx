import { useState, useEffect } from 'react';
import Image from 'next/image';
import interview from '@/assets/interview.png';
import React, { ChangeEvent } from 'react';

export default function InterviewApplication() {
  const [formData, setFormData] = useState({
    expectedPackage: '', // Add state for the expected package
    // ... other form fields
  });

  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const isMobile = windowWidth !== null && windowWidth <= 768;

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const imageContainerStyle: React.CSSProperties = {
    position: 'absolute',
    top: isMobile ? '20%' : '25%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '90%', // Allows for some responsiveness
    width: isMobile ? '80%' : 'min(300px, 100%)', // Adjusts based on screen size
  };

  const textStyle: React.CSSProperties = {
    textAlign: 'center',
    marginTop: '15px',
    fontSize: isMobile ? '10px' : '14px',
    color: 'white',
    fontWeight: 'bold',
    whiteSpace: 'nowrap', // Keeps text on one line
  };

  return (
    <div style={containerStyle}>
      <div style={imageContainerStyle}>
        <Image src={interview} alt="Submission Image" layout="responsive" width={400} height={120} priority />
        <p style={textStyle}>
          Input your details to secure an <span>INSTANT INTERVIEW</span>
        </p>
        
      </div>
      {/* Other content below */}
    </div>
  );
}

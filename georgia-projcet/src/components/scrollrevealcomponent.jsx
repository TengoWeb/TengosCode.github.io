import React, { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';

export function ScrollRevealComponent({ children }) {
  const revealRef = useRef(null);

  useEffect(() => {
    ScrollReveal().reveal(revealRef.current, {
      delay: 300,
      distance: '',
      duration: 1000,
      easing: '',
      origin: '', // Logo will appear from the right side
    });
    ScrollReveal().reveal(revealRef.current.querySelector('.Navigtion-hodler'), {
      delay: 400, 
      distance: '20px',
      duration: 1000,
      easing: 'ease-in-out',
      origin: 'top', 
    });

    ScrollReveal().reveal(revealRef.current.querySelector('#Landing-Text-section-h1'), {
      delay: 600, // Delayed appearance for the text box
      distance: '20px',
      duration: 1000,
      easing: 'ease-in-out',
      origin: 'left', // Text box will appear from the left side
    });
    ScrollReveal().reveal(revealRef.current.querySelector('#Landing-Text-section-h2'), {
      delay: 700, // Delayed appearance for the text box
      distance: '20px',
      duration: 1000,
      easing: 'ease-in-out',
      origin: 'left', // Text box will appear from the left side
    });
    ScrollReveal().reveal(revealRef.current.querySelector('.Landing-buttons-holder'), {
      delay: 900, // Delayed appearance for the text box
      distance: '20px',
      duration: 1000,
      easing: 'ease-in-out',
      origin: 'left', // Text box will appear from the left side
    });
    ScrollReveal().reveal(revealRef.current.querySelector('.Landing-social-media-btns-holder'), {
      delay: 1000, // Delayed appearance for the text box
      distance: '20px',
      duration: 1000,
      easing: 'ease-in-out',
      origin: 'bottom', // Text box will appear from the left side
    });
    ScrollReveal().reveal(revealRef.current.querySelector('.Landing-backgrounds-images-holder'), {
      delay: 1000, // Delayed appearance for the text box
      distance: '20px',
      duration: 1000,
      easing: 'ease-in-out',
      origin: 'bottom', // Text box will appear from the left side
    });

    ScrollReveal().reveal(revealRef.current.querySelector('.section1img'), {
      delay: 100, // Delayed appearance for the text box
      distance: '20px',
      duration: 1000,
      easing: 'ease-in-out',
      origin: 'left', // Text box will appear from the left side
    });
    ScrollReveal().reveal(revealRef.current.querySelector('.scetion-box-title'), {
      delay: 100, // Delayed appearance for the text box
      distance: '20px',
      duration: 1000,
      easing: 'ease-in-out',
      origin: 'right', // Text box will appear from the left side
    });
    ScrollReveal().reveal(revealRef.current.querySelector('.section-third-holder-text'), {
      delay: 100, // Delayed appearance for the text box
      distance: '20px',
      duration: 1000,
      easing: 'ease-in-out',
      origin: 'left', // Text box will appear from the left side
    });
    ScrollReveal().reveal(revealRef.current.querySelector('.section-third-holder-input'), {
      delay: 100, // Delayed appearance for the text box
      distance: '20px',
      duration: 1000,
      easing: 'ease-in-out',
      origin: 'right', // Text box will appear from the left side
    });
    ScrollReveal().reveal(revealRef.current.querySelector('.fourth-section-text-side'), {
      delay: 150, // Delayed appearance for the text box
      distance: '20px',
      duration: 1000,
      easing: 'ease-in-out',
      origin: 'left', // Text box will appear from the left side
    });
    ScrollReveal().reveal(revealRef.current.querySelector('.fourth-section-photo-side'), {
      delay: 100, // Delayed appearance for the text box
      distance: '20px',
      duration: 1000,
      easing: 'ease-in-out',
      origin: 'right', // Text box will appear from the left side
    });

    const bgElements = revealRef.current.querySelectorAll('.bg-number, .nameofbg');
    bgElements.forEach((element) => {
      ScrollReveal().reveal(element, {
        delay: 1500,
        distance: '10px',
        duration: 800,
        easing: 'ease-in-out',
        opacity: 0,
        origin: 'left'
      });
    });
  }, []);

  return <div ref={revealRef}>{children}</div>;
}

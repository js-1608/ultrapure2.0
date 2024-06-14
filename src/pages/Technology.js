
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Technology() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div>
      <h1>Technology</h1>
      <section id="section1">
        <h2>Section 1</h2>
        <p>
			
			Content for section 1...

		</p>
      </section>
      <section id="section2">
        <h2>Section 2</h2>
        <p>Content for section 2...</p>
      </section>
      <section id="section3">
        <h2>Section 3</h2>
        <p>Content for section 3...</p>
      </section>
    </div>
  );
}

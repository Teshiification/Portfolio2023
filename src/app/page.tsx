import React from 'react';

import { Navbar } from '@/components/ui/';

export default function Index() {
  return (
    <div className="grid gap-16">
      <section
        id="hero"
        className="h-screen bg-vicious-black/60 pt-10"
        style={{
          backgroundImage: `url(/images/portraits/landscape.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'multiply',
        }}
      >
        <Navbar />
      </section>

      <section id="about" className="h-1/2">
        <div
          id="container"
          className="mx-auto grid justify-between rounded bg-vicious-gray p-4 lg:flex lg:w-1/2"
        >
          <div
            id="img_container_gradient"
            className="h-48 w-48 shrink-0 rounded bg-gradient-to-br from-vicious-primary to-vicious-secondary p-1"
          >
            <div
              id="img_container"
              className="h-full w-full rounded"
              style={{
                backgroundImage: `url(/images/portraits/me-zoomed.jpg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </div>
          <p className="h-full w-full p-4 text-vicious-white">
            Seite noch in Bearbeitung
          </p>
        </div>
      </section>
      <section id="projects" className="h-screen"></section>
    </div>
  );
}

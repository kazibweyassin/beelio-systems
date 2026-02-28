import '../app/globals.css';

export default function Head() {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#0a1020" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      {/* Google Fonts preconnect and import (manual) */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
    </>
  );
}

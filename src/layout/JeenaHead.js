import Head from "next/head";
const JeenaHead = () => {
  return (
    <Head>
      {/* Required meta tags */}
      <meta charSet="utf-8" />
      <meta name="description" content="" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      {/* Title */}

      {/* Favicon Icon */}
      <Link legacyBehavior 
        rel="shortcut icon"
        href="assets/images/favicon.png"
        type="image/x-icon"
      />
      {/* Google Fonts */}
      <Link legacyBehavior 
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&family=Roboto:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      {/* Flaticon */}
      <Link legacyBehavior  rel="stylesheet" href="assets/css/flaticon.min.css" />
      {/* Font Awesome */}
      <Link legacyBehavior  rel="stylesheet" href="assets/css/fontawesome-5.14.0.min.css" />
      {/* Bootstrap */}
      <Link legacyBehavior  rel="stylesheet" href="assets/css/bootstrap.min.css" />
      {/* Magnific Popup */}
      <Link legacyBehavior  rel="stylesheet" href="assets/css/magnific-popup.min.css" />
      {/* Nice Select */}
      <Link legacyBehavior  rel="stylesheet" href="assets/css/nice-select.min.css" />
      {/* Animate */}
      <Link legacyBehavior  rel="stylesheet" href="assets/css/animate.min.css" />
      {/* Slick */}
      <Link legacyBehavior  rel="stylesheet" href="assets/css/slick.min.css" />
      {/* Main Style */}
      <Link legacyBehavior  rel="stylesheet" href="assets/css/style.css" />
    </Head>
  );
};
export default JeenaHead;

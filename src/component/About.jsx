import React from 'react'

const About = () => {
  return (
    <>
    <div className='custom-about-bg-image'>
      <div>
        <p className='custom-about-text pb-0 mb-0'>Our Story</p>
        <p className='custom-text-subheading pt-0 mt-0'>STUNNING, STYLISH AND WITHIN REACH</p>
      </div>
    </div>

    <div className='container pt-5 '>
              <div className='row'>
                 <div className='col-lg-4'>
                    <img src="assets/images/about.webp" alt="about-img" className='img-fluid'/>
                 </div>

                   <div className='col-lg-4'>
                    <img src="assets/images/about1.webp" alt="about-img" className='img-fluid'/>
                 </div>

                   <div className='col-lg-4'>
                    <img src="assets/images/about2.webp" alt="about-img" className='img-fluid'/>
                 </div>
              </div>
        </div>



         <section className="where-section py-5">
      <div className="container text-center">

        {/* Icon */}
        {/* <div className="icon-wrapper mb-3">
          <img
            src="/assets/icons/diamond.svg" 
            alt="icon"
            className="section-icon"
          />
        </div> */}

        {/* Heading */}
        <h2 className="section-heading mb-4">Where It All Began</h2>

        {/* Paragraph */}
        <p className="section-description">
          Aenean imperdiet. Proin viverra, ligula sit amet ultrices semper, ligula arcu
          tristique sapien, a accumsan nisi mauris ac eros. Vestibulum fringilla pede
          sit amet augue. Donec quam felis, ultricies nec, pellentesque eu, pretium
          quis, sem. Fusce fermentum odio nec arcu. Suspendisse faucibus, nunc et
          pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit
          id tortor. Sed cursus turpis vitae tortor. Vestibulum eu odio. Sed in libero
          ut nibh placerat accumsan. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas.
        </p>

      </div>
    </section>



{/* 
    <div className='custom-about-bg-section'>
     
    </div>
     */}




      <section className="custom-about-bg-section">
      <div className="container about-wrapper">

        {/* LEFT TEXT SECTION */}
        <div className="about-text">
          <h2 className="about-heading">
            WE KNOW JEWELLERY – <br /> & WE KNOW OUR CUSTOMERS
          </h2>

          <p className="about-description">
            Cenean imperdiet. Proin viverra, ligula sit amet ultrices semper,
            ligula arcu tristique sapien, a accumsan nisi mauris ac eros.
            Vestibulum fringilla pede sit amet augue. Donec quam felis,
            ultricies nec, pellentesque eu, pretium quis, sem. Fusce fermentum
            odio nec arcu.
          </p>
        </div>

        {/* RIGHT IMAGES SECTION */}
        <div className="about-images">
          <img
            src="assets/images/about3.webp"
            alt="Jewellery 1"
            className="about-img small-img"
          />

          <img
            src="assets/images/about4.webp"
            alt="Jewellery model"
            className="about-img large-img"
          />
        </div>

      </div>
    </section>
    </>
  )
}

export default About
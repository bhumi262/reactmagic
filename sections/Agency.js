import Banner from "@/components/Banner"
import Brand from "@/components/Brand"
import Testimonial from "@/components/Testimonial"
import { Title, TitleSm } from "@/components/common/Title"

const Agency = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='ABOUT AGENCY' /> <br />
            <br />
            <Title title='Who we are ?' className='title-bg' />
          </div>

          <div className='content flex1'>
            <div className='left w-60 py'>
              {/* <TitleSm title='Turning your business ideas into smart digital products since 2001' /> */}
              <p className='desc-p'>At React Agency, we are a dynamic team of passionate individuals committed to crafting digital experiences that resonate and elevate businesses to new heights. Specializing in website development, e-commerce solutions, and digital marketing strategies, we merge creativity with cutting-edge technology to bring your vision to life. Whether you're a startup looking for a striking online presence or an established business aiming to boost your e-commerce capabilities, we have the expertise to deliver tailored solutions. Our focus on innovation, user-centric design, and results-driven digital marketing sets us apart. Partner with React Agency and embark on a journey where your digital success becomes our mission.</p>
              <div className='grid-3'>
                <div className='box'>
                  <h1 className='indigo'>10+</h1>
                  <h3>Years of experience</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>50+</h1>
                  <h3>Successful cases</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>12+</h1>
                  <h3>Industry awards</h3>
                </div>
              </div>
            </div>
            <div className='right w-40 ml'>
              <img src='/images/s1.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
          </div>

          <div className='content flex'>
            <div className='left w-40 py'>
              <img src='/images/s4.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
            <div className='right w-60 ml'>
              <TitleSm title='Our mission' />
              <br />
              <p className='misson-p'>At React Agency, our mission is to empower businesses with unparalleled digital solutions that transcend expectations and drive success. We are dedicated to harnessing the power of technology to create innovative websites, robust e-commerce platforms, and impactful digital marketing strategies. We strive to be a catalyst for our clients' growth, providing them with the tools and strategies they need to thrive in the digital landscape. Our commitment to excellence, creativity, and client satisfaction fuels our mission to not only meet but exceed the evolving needs of businesses in an ever-changing digital world. Join us on this journey, and let's redefine what's possible in the digital realm together.

</p>
            </div>
          </div>
        </div>
      </section>

      <Brand />
      <Testimonial />
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default Agency

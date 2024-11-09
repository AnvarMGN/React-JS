import "./MainBlock.scss";

export const MainBlock = () => {
  return (
    <>
      <section className="main-container">
        <div className="main-about">

          <article className="main-about-block">
            <h1 className="main-about-title" >I`m Anvar Akchalov</h1>
            <h1 className="main-about-title" >Frontend Developer</h1>
            <p className="main-about-paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem numquam placeat minus provident nesciunt voluptatum commodi nemo dolorem sapiente blanditiis!
            </p>
            <button className="main-about-btn">
              HIRE ME
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </article>

          <div className="main-img-box">
            <img className="main-about-photo" src="/images/main-container/your_image.png" alt="my photo" />

            <svg className="rectangle2"
              xmlns="http://www.w3.org/2000/svg"
              width="21.401"
              height="21.401"
              fill="none">
              <path
                stroke="#FFB400"
                strokeOpacity=".8"
                strokeWidth="2"
                d="m7.486 1.337 12.578 6.148-6.149 12.578-12.577-6.149z" />
            </svg>

            <svg className="triangle1"
              xmlns="http://www.w3.org/2000/svg"
              width="13.856"
              height="12"
              fill="none">
              <path
                fill="#FF2E00"
                fillOpacity=".8"
                fillRule="evenodd"
                d="M0 12h13.85L6.92 0 0 12Zm3.46-2h6.93L6.92 4l-3.46 6Z" />
            </svg>

            <svg className="ellipse2"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none">
              <circle
                cx="8"
                cy="8"
                r="7"
                stroke="#FFB400"
                strokeOpacity=".8"
                strokeWidth="2" />
            </svg>
          </div>

          <svg className="ellipse1"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none">
            <circle
              cx="8"
              cy="8"
              r="7"
              stroke="#FFB400"
              strokeOpacity=".8"
              strokeWidth="2" />
          </svg>

          <svg className="ellipse3"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none">
            <circle
              cx="8"
              cy="8"
              r="7"
              stroke="#05FF00"
              strokeOpacity=".8"
              strokeWidth="2" />
          </svg>

          <svg className="ellipse4"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none">
            <circle
              cx="8"
              cy="8"
              r="7"
              stroke="#05FF00"
              strokeOpacity=".8"
              strokeWidth="2" />
          </svg>

          <svg className="rectangle1"
            xmlns="http://www.w3.org/2000/svg"
            width="21.401"
            height="21.401"
            fill="none">
            <path
              stroke="#0047FF"
              strokeOpacity=".8"
              strokeWidth="2"
              d="m7.486 1.337 12.578 6.148-6.149 12.578-12.577-6.149z" />
          </svg>

        </div>

        <section className="main-services">
          <h2 className="main-services-title">My Services</h2>
          <p className="main-services-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, quisquam commodi! Quia itaque laborum maiores sint libero illo fugit eius.</p>
          <article className="main-services-cart">
            <svg className="services-cart-svg"
              xmlns="http://www.w3.org/2000/svg"
              width="65.875"
              height="53.125"
              fill="none">
              <path
                fill="#FFB400"
                d="M62.15 0H3.71c-.98 0-1.93.39-2.62 1.09C.39 1.78 0 2.73 0 3.71V40.9c0 .99.39 1.93 1.09 2.63.69.7 1.64 1.09 2.62 1.09h21.28l-1.28 3.19h-5.65A1.06 1.06 0 0 0 17 48.87V51h-6.38a1.06 1.06 0 1 0 0 2.12h44.63a1.06 1.06 0 1 0 0-2.12h-6.38v-2.13a1.06 1.06 0 0 0-1.06-1.06h-5.66l-1.27-3.19h21.27c.99 0 1.93-.39 2.63-1.09.7-.7 1.09-1.64 1.09-2.63V3.71c0-.98-.39-1.93-1.09-2.62C64.08.39 63.14 0 62.15 0Zm-15.4 49.93V51H19.12v-1.07h27.63ZM26 47.81l1.28-3.19h11.31l1.27 3.19H26Zm37.75-6.91c-.01.42-.17.83-.47 1.13-.3.3-.71.46-1.13.47H3.71c-.42-.01-.82-.17-1.12-.47-.3-.3-.47-.71-.47-1.13v-2.65h61.63v2.65Zm0-4.78H2.12V3.71c0-.42.17-.82.47-1.12.3-.3.7-.47 1.12-.47h58.44c.42 0 .83.17 1.13.47.3.3.46.7.47 1.12v32.41Z" />
            </svg>
            <i className="fa-solid fa-code"></i>
            <h5 className="services-cart-title">Web Development</h5>
            <p className="services-cart-text">Web Site, Advertising</p>
          </article>
        </section>

        <section className="main-education">

          <h2 className="main-education-title">Education</h2>
          <p className="main-education-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, quisquam commodi! Quia itaque laborum maiores sint libero illo fugit eius.
          </p>

          <div className="main-education-box">

            <div className="main-education-block">

              <article className="education-block-date">
                <h5 className="education-block-date-title">Web Developer Courses</h5>
                <p className="education-block-date-text">Student
                  <span className="education-block-date-text-span">Nov 2022 - Nov 2024</span>
                </p>
              </article>

              <article className="education-block-certificate">
                <h5 className="education-block-certificate-title">Certificate Of Web Training</h5>
                <p className="education-block-certificate-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique laudantium consequuntur cumque exercitationem quas, quaerat nihil nobis quia nam tempora!
                </p>
              </article>

            </div>

          </div>
        </section>

        <footer className="footer">
          <p>2024 All Rights Reserved. Anvar Akchalov</p>
        </footer>
      </section>
    </>
  )
}

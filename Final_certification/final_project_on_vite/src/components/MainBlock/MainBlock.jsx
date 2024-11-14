import "./MainBlock.scss";


export const MainBlock = () => {
  return (
    <>
      <section className="main-container">
        <div id="home" className="main-about slide-in-top">

          <article className="main-about-block">
            <h1 className="main-about-title tilt-in-fwd-tr">Anvar Akchalov</h1>
            <h1 className="main-about-title tilt-in-fwd-bl " >Frontend Developer</h1>
            <article className="main-about-paragraph">
              <p>I am glad to welcome you to my portfolio page.</p>
              <p>I am a novice frontend developer, and this site is the final work of my studies at the GeekBrains online university.</p>
              <p>Thanks to the inspiration that GeekBrains teachers gave me, I chose to study such web technologies as HTML, CSS, JS, REACT.</p>
              <p>It is important for me to use a simple and functional approach in website development so that it is understandable and user-friendly for each user.</p>
              <p>However, web technologies do not stand still, they become more complex and interesting, so in order to create a modern product, a more detailed study of development tools is necessary.</p>
              <p>I am looking forward to completing my studies so that I can start working in this exciting field as soon as possible.</p>
              <p>I hope my diligence and patience will help me in this –</p>
              <p>&quot;This is my ninja way!&quot;</p>
            </article>

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
            {/* 
              Рад приветствовать Вас на странице моего портфолио.
              Я начинающий фронтенд разработчик, а этот сайт, является итоговой работой моего обучения в онлайн университете GeekBrains.
              Благодаря вдохновению, которое передали мне преподаватели GeekBrains, я остановил свой выбор на изучении таких веб-технологий как: HTML, CSS, JS, REACT.
              Для меня важно использовать простой и функциональный подход в разработке сайтов, чтобы он был понятный и удобный для каждого пользователя.
              Однако, веб-технологии не стоят на месте, они становятся сложнее и интереснее, поэтому для того, чтобы создавать современный продукт необходимо более детальное изучение инструментов разработки.
              С нетерпением жду завершения обучения, чтобы поскорее начать работу в этой увлекательной сфере. Надеюсь, моё усердие и терпение помогут мне в этом – «Таков мой путь ниндзя!».
            */}
            <a href="#contact" className="main-about-btn">
              HIRE ME
              <i className="fa-solid fa-arrow-right"></i>
            </a>
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
        </div>

        <section id="services" className="main-services slide-in-bottom ">
          <h2 className="main-services-title">My Services</h2>
          <p className="main-services-text">
            The services that I can offer.</p>
          <article className="main-services-card">
            <svg className="services-card-svg"
              xmlns="http://www.w3.org/2000/svg"
              width="65.875"
              height="53.125"
              fill="none">
              <path
                fill="#FFB400"
                d="M62.15 0H3.71c-.98 0-1.93.39-2.62 1.09C.39 1.78 0 2.73 0 3.71V40.9c0 .99.39 1.93 1.09 2.63.69.7 1.64 1.09 2.62 1.09h21.28l-1.28 3.19h-5.65A1.06 1.06 0 0 0 17 48.87V51h-6.38a1.06 1.06 0 1 0 0 2.12h44.63a1.06 1.06 0 1 0 0-2.12h-6.38v-2.13a1.06 1.06 0 0 0-1.06-1.06h-5.66l-1.27-3.19h21.27c.99 0 1.93-.39 2.63-1.09.7-.7 1.09-1.64 1.09-2.63V3.71c0-.98-.39-1.93-1.09-2.62C64.08.39 63.14 0 62.15 0Zm-15.4 49.93V51H19.12v-1.07h27.63ZM26 47.81l1.28-3.19h11.31l1.27 3.19H26Zm37.75-6.91c-.01.42-.17.83-.47 1.13-.3.3-.71.46-1.13.47H3.71c-.42-.01-.82-.17-1.12-.47-.3-.3-.47-.71-.47-1.13v-2.65h61.63v2.65Zm0-4.78H2.12V3.71c0-.42.17-.82.47-1.12.3-.3.7-.47 1.12-.47h58.44c.42 0 .83.17 1.13.47.3.3.46.7.47 1.12v32.41Z" />
            </svg>
            <i className="fa-solid fa-code"></i>
            <h5 className="services-card-title">Web Development</h5>
            <p className="services-card-text">Web Site, Advertising</p>
          </article>
        </section>

        <section id="portfolio" className="main-portfolio">
          <h2 className="main-portfolio-title">Portfolio</h2>
          <p className="main-portfolio-text">
            My Projects.</p>

          <article className="main-portfolio-card">
            <a className="main-portfolio-link" href="http://p91277dr.beget.tech/">
              {/* <img className="portfolio-img" src="images/main-portfolio/template_project.png" alt="template project" /> */}
              <video className="main-portofolio-video"
                // width="750"
                autoPlay
                muted
                loop
                src="video/store_clothing.mp4">
              </video>
            </a>
            <article className="portfolio-desc">
              <h5 className="portfolio-card-title">Web Store</h5>
              <p className="portfolio-card-text">Description of the store.</p>
            </article>
          </article>
        </section>

        <section id="education" className="main-education">

          <h2 className="main-education-title">Education</h2>
          <p className="main-education-text">
            Information about completed courses.
          </p>

          <div className="main-education-box">

            <div className="main-education-block">

              <article className="education-block-date">
                <h5 className="education-block-date-title">Web Developer Courses</h5>
                <p className="education-block-date-text">Student
                  <span className="education-block-date-text-span">GEEK BRAINS 2022 - 2024</span>
                </p>
              </article>

              <article className="education-block-certificate">
                <h5 className="education-block-certificate-title">Certificate Of Web Training</h5>
                <p className="education-block-certificate-text">
                  In the learning process.
                </p>
              </article>

            </div>

          </div>
        </section>

        <section id="contact" className="contact">

          <article className="contact-leaveform">

            <h2 className="contact-leaveform-title" > Leave Your Info</h2>
            <form className="contact-leaveform-box">
              <div className="contact-leaveform-block">
                <label htmlFor="firstName">Your Full Name (Required)</label>
                <input className="contact-leaveform-input" type="text" />
              </div>

              <div className="contact-leaveform-block">
                <label htmlFor="firstName">Your Email (Required)</label>
                <input className="contact-leaveform-input" type="text" />
              </div>

              <div className="contact-leaveform-block">
                <label htmlFor="firstName">Subject</label>
                <input className="contact-leaveform-input" type="text" />
              </div>

              <div className="contact-leaveform-block">
                <label htmlFor="firstName">Your Message</label>
                <textarea className="contact-leaveform-input-mess" type="text" name="" id=""></textarea>
                {/* <input className="contact-leaveform-input-mess" type="text" /> */}
              </div>

              <button className="contact-leaveform-btn" type="submit">SEND MESSAGE</button>
            </form>

          </article>

          <article className="contact-information">
            <h2 className="contact-information-title">Contact Information</h2>

            <article className="contact-information-box">
              <div className="contact-information-block">
                <i className="fa-regular fa-map"></i>
                <svg className="contact-information-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="">
                  <circle
                    className="svg-circle"
                    cx="20"
                    cy="20"
                    r="20"
                    fill="#FFB400" />
                </svg>
              </div>

              <ul className="contact-information-grid">
                <li className="contact-information-grid-li">
                  <p className="contact-information-grid-title">Country:</p>
                  <p className="contact-information-grid-text">Russian Federation</p>
                </li>
                <li className="contact-information-grid-li">
                  <p className="contact-information-grid-title">City:</p>
                  <p className="contact-information-grid-text">Magnitogorsk</p>
                </li>
                <li className="contact-information-grid-li">
                  <p className="contact-information-grid-title">Streat:</p>
                  <p className="contact-information-grid-text">Lenin Avenue 12</p>
                </li>
              </ul>
            </article>

            <article className="contact-information-box">
              <div className="contact-information-block">
                <i className="fa-regular fa-envelope"></i>
                <svg className="contact-information-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="">
                  <circle
                    className="svg-circle"
                    cx="20"
                    cy="20"
                    r="20"
                    fill="#FFB400" />
                </svg>
              </div>

              <ul className="contact-information-grid">
                <li className="contact-information-grid-li">
                  <p className="contact-information-grid-title">Email:</p>
                  <p className="contact-information-grid-text">akchalov.a.m@yandex.ru</p>
                </li>
                <li className="contact-information-grid-li">
                  <p className="contact-information-grid-title">Skype:</p>
                  <p className="contact-information-grid-text">Anvar Akchalov</p>
                </li>
                <li className="contact-information-grid-li">
                  <p className="contact-information-grid-title">Telegram:</p>
                  <p className="contact-information-grid-text">Anvar Akchalov</p>
                </li>
              </ul>
            </article>

            <article className="contact-information-box">
              <div className="contact-information-block">
                <i className="fa-solid fa-mobile-screen"></i>
                <svg className="contact-information-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="">
                  <circle
                    className="svg-circle"
                    cx="20"
                    cy="20"
                    r="20"
                    fill="#FFB400" />
                </svg>
              </div>

              <ul className="contact-information-grid">
                <li className="contact-information-grid-li">
                  <p className="contact-information-grid-title">Phone number:</p>
                  <p className="contact-information-grid-text">+7(999)-888-7766</p>
                </li>

              </ul>
            </article>

          </article>

        </section>
        
        {/* Добавить карту(местоположение) - пока не реализованно */}
        {/* <section className="map"></section> */}

        <footer className="footer">
          <p>2024 All Rights Reserved. Anvar Akchalov</p>
        </footer>
      </section>
    </>
  )
}

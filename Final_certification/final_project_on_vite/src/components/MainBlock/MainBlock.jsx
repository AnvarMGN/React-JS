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

        <article></article>
        <article></article>

        <footer className="footer">
          <p>2024 All Rights Reserved. Anvar Akchalov</p>
        </footer>
      </section>
    </>
  )
}

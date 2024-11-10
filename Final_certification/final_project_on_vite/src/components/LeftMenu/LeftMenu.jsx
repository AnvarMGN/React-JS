import './LeftMenu.scss';

export const LeftMenu = () => {
    return (
        <>
            <aside className="left-menu">
                <article className="profile">

                    <h3 className="my-name">Profile</h3>
                    <i className="fa-solid fa-id-card"></i>

                    {/* <figure className="figure-profile">
                        <img className="my-avatar" src="/images/left-menu/Profile.svg" alt="photo-avatar" />
                        <svg className="svg-available"
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            fill="none">
                            <defs>
                                <filter
                                    id="a"
                                    width="36"
                                    height="36"
                                    x="0"
                                    y="0"
                                    colorInterpolationFilters="sRGB"
                                    filterUnits="userSpaceOnUse">
                                    <feFlood
                                        floodOpacity="0"
                                        result="BackgroundImageFix" />
                                    <feColorMatrix
                                        in="SourceAlpha"
                                        result="hardAlpha"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="3.333" />
                                    <feComposite
                                        in2="hardAlpha"
                                        k2="-1"
                                        k3="1"
                                        operator="out" />
                                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                                    <feBlend
                                        in2="BackgroundImageFix"
                                        result="effect_dropShadow_1" />
                                    <feBlend
                                        in="SourceGraphic"
                                        in2="effect_dropShadow_1"
                                        result="shape" />
                                </filter>
                            </defs>
                            <g filter="url(#a)">
                                <circle cx="18" cy="14" r="8" fill="#7EB942" />
                            </g>
                        </svg>
                        <figcaption className="my-name">Анвар Акчалов</figcaption>
                        <figcaption className="my-profession">Frontend Developer</figcaption>
                    </figure> */}

                    {/* <div className="social-icons">
                        <a className='icon-link' href="https://vk.com/">
                            <svg className="svg-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none">
                                <circle
                                    cx="12"
                                    cy="12"
                                    r="12"
                                    fill="#FFB400" />
                            </svg>
                            <i className="fa fa-brands fa-vk"></i>
                        </a>
                        <a className='icon-link' href="https://www.facebook.com">
                            <svg className="svg-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none">
                                <circle
                                    cx="12"
                                    cy="12"
                                    r="12"
                                    fill="#FFB400" />
                            </svg>
                            <i className="fa fa-brands fa-facebook-f"></i>
                        </a>
                        <a className='icon-link' href="https://www.youtube.com">
                            <svg className="svg-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none">
                                <circle
                                    cx="12"
                                    cy="12"
                                    r="12"
                                    fill="#FFB400" />
                            </svg>
                            <i className="fa-brands fa-youtube"></i>
                        </a>
                        <a className='icon-link' href="https://twitter.com">
                            <svg className="svg-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none">
                                <circle
                                    cx="12"
                                    cy="12"
                                    r="12"
                                    fill="#FFB400" />
                            </svg>
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                        <a className='icon-link' href="https://apps.microsoft.com/detail/9nblggh5l9xt?hl=en-US&gl=US">
                            <svg className="svg-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none">
                                <circle
                                    cx="12"
                                    cy="12"
                                    r="12"
                                    fill="#FFB400" />
                            </svg>
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a className='icon-link' href="https://www.linkedin.com">
                            <svg className="svg-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none">
                                <circle
                                    cx="12"
                                    cy="12"
                                    r="12"
                                    fill="#FFB400" />
                            </svg>
                            <i className="fab fa-brands fa-linkedin-in"></i>
                        </a>
                    </div> */}

                </article>

                <article className="about">
                    <ul className="about-list">
                        <li className='about-li'>
                            <span className="left-text">Age:</span>
                            <span>35</span>
                        </li>
                        <li className='about-li'>
                            <span className="left-text">Residence:
                            </span><span>RF</span>
                        </li>
                        {/* <li className='about-li'>
                            <span className="left-text">Freelance:</span>
                            <span className="right-text-available">Available</span>
                        </li> */}
                        <li className='about-li'>
                            <span className="left-text">Address:</span>
                            <span>
                                Magnitogorsk,
                                <br></br>
                                Russian Federation
                            </span>
                        </li>
                    </ul>
                </article>

                <article className="languages">
                    <h4 className="title-languages">Languages</h4>
                    <ul className="language-list">
                        <li>
                            <i className="fa-solid fa-language"></i>
                            Russian -
                            <span> native speaker</span>
                        </li>
                        <li>
                            <i className="fa-solid fa-language"></i>
                            English -
                            <span> pre-intermediate</span>
                        </li>
                        {/* <li>
                            <i className="fa-solid fa-language"></i>
                            Tatar -
                            <span> pre-intermediate</span>
                        </li> */}
                    </ul>
                </article>

                <article className="skills">
                    <h4 className="title-skills">Skills</h4>
                    <ul className="skills-list">
                        <li className='skills-li'>
                            <i className="fa-brands fa-html5"></i>
                            <span className="skills-text">Html</span>
                        </li>
                        <li className='skills-li'>
                            <i className="fa-brands fa-css3-alt"></i>
                            <span className="skills-text">CSS</span>
                        </li>
                        <li className='skills-li'>
                            <i className="fa-brands fa-js"></i>
                            <span className="skills-text">Js</span>
                        </li>
                        <li className='skills-li'>
                            <i className="fa-brands fa-react"></i>
                            <span className="skills-text">React</span>
                        </li>
                    </ul>
                </article>

                <article className="extra-skills">
                    <h4 className="title-extra-skills">Extra Skills</h4>
                    <ul className="extra-skills-list">
                        <li className="extra-skills-li">
                            <i className="fa-brands fa-sass"></i>
                            <span className="extra-skills-text">SASS/
                                <br />
                                SCSS
                            </span>
                        </li>
                        <li className="extra-skills-li">
                            <i className="fa-brands fa-node-js"></i>
                            <span className="extra-skills-text">Node.js
                                <br />
                                basics
                            </span>
                        </li>
                        <li className="extra-skills-li">
                            <i className="fa-brands fa-github"></i>
                            <span className="extra-skills-text">GIT</span>
                        </li>
                        <li className="extra-skills-li">
                            <i className="fa-brands fa-react"></i>
                            <span className="extra-skills-text">Redux</span>
                        </li>

                        {/* <i className="fa-brands fa-sass"></i>
                        <span className="extra-skills-text desc1">Sass/Scss</span>

                        <i className="fa-brands fa-node-js"></i>
                        <span className="extra-skills-text desc2">Node.js - basics</span>

                        <i className="fa-brands fa-react"></i>
                        <span className="extra-skills-text desc3">Redux</span>

                        <i className="fa-brands fa-github"></i>
                        <span className="extra-skills-text desc4">GIT Knowledge</span> */}
                    </ul>
                </article>

                <article className="download-cv">
                    <button className="btn-cv">
                        DOWNLOAD CV
                        <svg className='svg-download-cv'
                            xmlns="http://www.w3.org/2000/svg"
                            width="11.667"
                            height="12"
                            fill="none">
                            <path fill="#2B2B2B" d="M1.16 10.66h9.34V6h1.16v5.33c0 .18-.06.34-.17.47-.11.12-.26.2-.41.2H.58c-.16 0-.3-.08-.41-.2a.714.714 0 0 1-.17-.47V6h1.16v4.66ZM7 4h2.91L5.83 8.66 1.75 4h2.91V0H7v4Z" />
                        </svg>
                        {/* <i className="fa-solid fa-download download"></i> */}
                    </button>
                </article>
            </aside>
        </>
    )
};

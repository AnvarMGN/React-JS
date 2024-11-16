import { DownloadResumeButton } from './DownloadResumeButton';
import './LeftMenu.scss';

export const LeftMenu = () => {
    return (
        <>
            <aside className="left-menu slide-in-left">
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

                    <div className="social-icons">
                        <a className='icon-link' href="https://t.me/anvar_akchalov">
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
                            <i className="fa fa-brands fa-telegram"></i>
                        </a>
                        <a className='icon-link' href="mailto:akchalov.a.m@yandex.ru">
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
                            <i className="fa-regular fa-envelope"></i>
                        </a>
                        <a className='icon-link' href="https://github.com/AnvarMGN">
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
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a className='icon-link' href="https://vk.com/anvar_akchalov">
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
                            <i className="fa-brands fa-vk"></i>
                        </a>
                    </div>

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
                            <span className="extra-skills-text">React-Redux</span>
                        </li>
                    </ul>
                </article>
                <DownloadResumeButton />
            </aside>
        </>
    )
};

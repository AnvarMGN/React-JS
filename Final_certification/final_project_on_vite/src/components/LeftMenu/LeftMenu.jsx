import './LeftMenu.scss'

export const LeftMenu = () => {
    return (
        <>
            <aside className="left-menu">
                <article className="profile">
                    <figure>
                        <img className="my-avatar" src="../../../public/images/left-menu/Profile.svg" alt="photo-avatar" />
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
                    </figure>

                    <div className="social-icons">
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
                    </div>
                </article>

                <article>
                </article>

            </aside>
            <div>

            </div>
        </>
    )
};

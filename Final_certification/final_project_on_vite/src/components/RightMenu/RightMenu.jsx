import './RightMenu.scss'

export const RightMenu = () => {
    return (
        <>
            <aside className="right-menu">
                <div className="contrast">
                    <svg className="" 
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="none">
                        <defs>
                            <clipPath id="a">
                                <rect
                                    width="29"
                                    height="29"
                                    fill="#fff"
                                    fillOpacity="0"
                                    rx="0"
                                    transform="translate(.5 .5)"/>
                            </clipPath>
                        </defs>
                        <rect
                            width="29"
                            height="29"
                            fill="none"
                            rx="0"
                            transform="translate(.5 .5)"/>
                        <g clipPath="url(#a)">
                            <path
                                fill="#1B1B1B"
                                d="M15.5 27C8.59 27 3 21.4 3 14.5 3 7.59 8.59 2 15.5 2 22.4 2 28 7.59 28 14.5 28 21.4 22.4 27 15.5 27Zm-8.34-6.97c.82 1.23 1.9 2.26 3.17 3.02 1.27.76 2.69 1.23 4.16 1.37 1.47.15 2.96-.04 4.35-.54a9.798 9.798 0 0 0 3.7-2.34c1.05-1.05 1.85-2.31 2.35-3.7.49-1.39.68-2.88.53-4.35a9.937 9.937 0 0 0-1.37-4.16 9.942 9.942 0 0 0-3.02-3.17c.54 1.92.55 3.95.05 5.88-.51 1.93-1.52 3.69-2.93 5.11a11.322 11.322 0 0 1-5.11 2.93c-1.93.5-3.96.48-5.88-.05Z"/>
                        </g>
                    </svg>
                </div>

                <nav>

                </nav>

            </aside>
        </>
    )
}

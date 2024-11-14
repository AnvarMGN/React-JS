import { useState } from "react";
import myCv from "../../resume/my_cv.pdf";

export const DownloadResumeButton = () => {
    const [cvUrl] = useState(myCv);

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = cvUrl;
        link.setAttribute("download", "resume.pdf");

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <article className="download-cv" >
                <button className="btn-cv" onClick={handleDownload}>
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
        </>
    )
};

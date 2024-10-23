
export const Subscribe = () => {
    return (
        <div className="lower center">
            <div className="lower_feedback">
                <img src="img/jpg_image_feedback.png" alt="photo" className="lower_feedback_image" />
                <div className="lower_feedback_description">
                    <p className="lower_feedback_text">
                        “Vestibulum quis porttitor dui! Quisque viverra nunc mi,
                        a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”
                    </p>
                    <p className="lower_feedback_name">Bin Burhan</p>
                    <p className="lower_feedback_location">Dhaka, Bd</p>
                    <img src="img/feedback_line1.png" alt="line" />
                    <img src="img/feedback_line2.png" alt="line" />
                </div>
            </div>
            <article className="lower_newletter">
                <h3 className="lower_newletter_title">SUBSCRIBE</h3>
                <h5 className="lower_newletter_text">FOR OUR NEWLETTER AND PROMOTION</h5>
                <form action="#" className="lower_newletter_form">
                    <input id="inputLower_index.html"
                        required
                        className="lower_newletter_form_input"
                        type="email"
                        placeholder="Enter Your Email" />
                    <button className="lower_newletter_form_link" type="submit">Subscribe</button>
                </form>
            </article>
        </div>

    )
};

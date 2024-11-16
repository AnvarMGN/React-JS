import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addLeaveForm } from "../../store/leaveFormSlice";

export const LeaveForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [submited, setSubmited] = useState(false);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            addLeaveForm({ fullName, email, subject, message }),
        );
        setFullName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setSubmited(true);
    };

    useEffect(() => {
        let timeout;
        if (submited) {
            timeout = setTimeout(() => {
                setSubmited(false);
            }, 4000);
        }

        return () => {
            clearTimeout(timeout);
        }
    }, [submited]);


    return (
        <>
            <article className="contact-leaveform">

                <h2 className="contact-leaveform-title" > Leave Your Info</h2>

                <form onSubmit={handleSubmit} className="contact-leaveform-box">

                    <div className="contact-leaveform-block">
                        <label htmlFor="firstName">Your Full Name (Required)</label>
                        <input
                            className="contact-leaveform-input"
                            type="text"
                            required
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </div>

                    <div className="contact-leaveform-block">
                        <label htmlFor="firstName">Your Email (Required)</label>
                        <input
                            className="contact-leaveform-input"
                            type="text"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="contact-leaveform-block">
                        <label htmlFor="firstName">Subject</label>
                        <input
                            className="contact-leaveform-input"
                            type="text"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                    </div>

                    <div className="contact-leaveform-block">
                        <label htmlFor="firstName">Your Message</label>
                        <textarea
                            className="contact-leaveform-input-mess"
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>

                    <button className="contact-leaveform-btn" type="submit">{submited ? "MESSAGE SENT" : "SEND MESSAGE"}</button>
                </form>

            </article>
        </>
    )
};

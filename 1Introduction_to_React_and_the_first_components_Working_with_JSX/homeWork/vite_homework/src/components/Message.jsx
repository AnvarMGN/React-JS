import "./message.css"

function Message({number, title, text}) {
    return ( 
        <div className="container">
            <p className="number">{number}</p>
            <p className="title">{title}</p>
            <p className="text">{text}</p>
        </div>
     );
}

export default Message
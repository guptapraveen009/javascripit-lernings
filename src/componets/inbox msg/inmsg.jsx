import "./inmsg.css"


const InboxMsg = (props) => {
    const { text, userName, isBot } = props;
   
    return (
      <div
        className={`msgBox ${
          isBot ? `msgBoxLeft` : `msgBoxRight`
        }`}
      >
        <p className="msgUser">
          <span className="msgName">{userName}</span>
         
        </p>
        <p className="msgTxt">{text}</p>
      </div>
    );
  };
  export default InboxMsg;
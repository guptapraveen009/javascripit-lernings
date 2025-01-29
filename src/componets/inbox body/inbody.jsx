
import InboxMsg from "../inbox msg/inmsg"
import "./inbody.css"

const Inbody = () =>{
    return (
        <div className="inbody">
           <InboxMsg text =" Hello" userName = " Bot" isBot={true}/>
           <InboxMsg text =" Bye" userName = " Me" isBot={false}/>
        </div>
    );
};

export default Inbody;
import Inheader from "../inbox header/inheader";
import Inbody from "../inbox body/inbody";
import Infooter from "../inbox footer/infooter";
import "./inbox.css"


const Inbox = () =>{
    const userName = " Bot"
    return (
    
      <div className="inbox">
      <Inheader  name = " {userName}"/>
      <Inbody/>
      <Infooter/>
        </div>
    )
}

export default Inbox;

import rLogo from "../../assets/react.svg"
import "./footer.css"

const Footer = () =>{
    return(
<footer className="Footer">
  <p className="Footer_Text ">Made By React  <img  alt=" react" src ={rLogo} className="Footerimg" />
   </p>
</footer>
    );
};



export default Footer;
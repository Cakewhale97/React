import "../styles/Footer.css";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <div className="footer">
      <p>Copyright</p>
      <div className="Icons">
        <XIcon fontSize="medium" />
        <FacebookIcon fontSize="medium" />
        <InstagramIcon fontSize="medium" />
      </div>
    </div>
  );
}

import { ReactComponent as Logo } from "assets/logo/logo.svg";
import style from "./Footer.style";

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <Logo />
      </div>
    </footer>
  );
}

export default Footer;

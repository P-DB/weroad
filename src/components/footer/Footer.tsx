import { ReactComponent as Logo } from "assets/logo/logo-white.svg";
import { ReactComponent as IconPeople } from "assets/icons/people.svg";
import { ReactComponent as IconInstagram } from "assets/icons/instagram.svg";
import { ReactComponent as IconFacebook } from "assets/icons/facebook.svg";
import MyButton from "components/shared/myButton/MyButton";
import style from "./Footer.style";

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.gradient}>
        <div className={style.container}>
          <Logo className={style.logo} />
          <div>
            <div className={style.inputContainer}>
              <input
                className={style.input}
                type="text"
                placeholder="La tua email...."
              />
              <MyButton
                customClass={style.button}
                type="PRIMARY-SMALL"
                label="Ricevi la newsletter"
                onClick={() => -1}
              />
            </div>
            <p className={style.info}>
              Consigli di viaggio direttamente nella tua email.
              <small className={style.infoSuggestion}>
                (puoi cancellare la tua iscrizione in ogni momento)
              </small>
            </p>
          </div>
          <div className={style.social}>
            <IconPeople />
            <IconInstagram className={style.instagram} />
            <IconFacebook />
          </div>
        </div>
        <div className={style.disclaimer}>
          <small>
            Questo sito è proprietà di WeRoad S.r.l. - Viale Cassala, 30 - 20143
            Milano (MI) | Cod. fiscale e P.IVA 10380820968 | Capitale sociale
            Euro 64.267,00 € i.v. | Registro Imprese Milano 08/06/2018
            n°10380820968 | Num R.E.A.: MI-2526851 WeRoad S.r.l. (part of
            OneDay) - 02.89950522 - Pagamenti sicuri via Stripe
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

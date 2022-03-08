import { ReactComponent as Logo } from "assets/logo/logo-white.svg";
import { ReactComponent as IconPeople } from "assets/icons/people.svg";
import { ReactComponent as IconInstagram } from "assets/icons/instagram.svg";
import { ReactComponent as IconFacebook } from "assets/icons/facebook.svg";
import MyButton from "components/shared/myButton/MyButton";
import style from "./Footer.style";

function Footer() {
  const linkFooter = [
    [
      {
        title: "INVERNO SULLA NEVE",
        links: [
          "Austria",
          "Bormio",
          "Bardonecchia",
          "Canazei",
          "Cervinia",
          "Dolomiti",
          "Dolomiti Express",
          "Monte Civetta",
          "Plan de Corones",
          "Prato Nevoso",
          "Sestriere",
          "Trentino",
        ],
      },
      {
        title: "PRIMAVERA IN EUROPA",
        links: [
          "Canarie",
          "Guadeloupe",
          "Portogallo",
          "Scozia",
          "Belgio",
          "Polonia",
          "Andalusia",
          "Olanda",
        ],
      },
    ],
    [
      {
        title: "UTILIZZA VOUCHER COVID",
        links: ["Prenota per il 2021"],
      },
      {
        title: "2021 IN GIRO PER IL MONDO",
        links: [
          "Asia",
          "Africa",
          "Europa",
          "Nord America",
          "Centro America",
          "Sud America",
          "Middle East",
          "Oceania",
        ],
      },
      {
        title: "2021 IN ITALIA",
        links: [
          "Barca a vela",
          "Campania",
          "Sicilia",
          "Sardegna",
          "Toscana",
          "Puglia",
          "Sicilia",
          "Toscana",
        ],
      },
    ],
    [
      {
        title: "VIAGGI EXPRESS EUROPA",
        links: [
          "Belgio",
          "Edimburgo",
          "Portogallo",
          "Vienna e Praga",
          "Stoccolma",
          "San Pietroburgo",
          "Sofia",
        ],
      },
      {
        title: "VIAGGI EXPRESS ITALIA",
        links: [
          "Orvieto e Civita di Bagnoregio",
          "Venezia",
          "Toscana Express",
          "Napoli e Pompei",
          "Matera e Alberobello",
          "Umbria Express",
        ],
      },
    ],
    [
      {
        title: "IL MONDO WEROAD",
        links: [
          "La formula WeRoad",
          "Fasce d'età",
          " Turni speciali",
          "Mood",
          "Il buon WeRoader",
          "FAQ",
          " Tutti i viaggi",
          "Coordinatori",
          "Contatti",
          "Lavora con noi",
          "Termini e condizioni",
          "Privacy Policy",
          "Cookie Policy",
          "Company Profile",
        ],
      },
    ],
    [
      {
        title: "DIVENTA COORDINATORE",
        links: ["Vita da Coordinatore", "Fai application", "Accedi"],
      },
      {
        title: "CARTE REGALO WEROAD",
        links: ["Scopri le gift card WeRoad"],
      },
      {
        title: "T-SHIRT & GADGET",
        links: ["Collection CASA 360°"],
      },
      {
        title: "PARTNERS AND DMCS",
        links: ["Become our partner"],
      },
    ],
  ];

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
        <div className={style.links}>
          {linkFooter.map((item, i) => (
            <div key={i} className={style.col}>
              {item.map((el, i) => (
                <div className={style.linkSection} key={i}>
                  <h6 className={style.linkTitle}>{el.title}</h6>
                  <ul>
                    {el.links.map((link, i) => (
                      <li key={i} className={style.linkItem}>
                        {link}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className={style.disclaimer}>
          <small>
            Questo sito è proprietà di WeRoad S.r.l. - Viale Cassala, 30 - 20143
            Milano (MI) | Cod. fiscale e P.IVA 10380820968 | Capitale sociale
            Euro 64.267,00 € i.v. | Registro Imprese Milano 08/06/2018
            n°10380820968 | Num R.E.A.: <br />
            MI-2526851 WeRoad S.r.l. (part of OneDay) - 02.89950522 - <br />
            Pagamenti sicuri via Stripe
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

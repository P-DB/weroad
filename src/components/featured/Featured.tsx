import style from "./Featured.style";
import maroccoSM from "assets/images/marocco-sm.jpg";
import maroccoLG from "assets/images/marocco-lg.jpg";
import MyButton from "components/shared/myButton/MyButton";
import Carousel from "components/shared/carousel/Carousel";
import AccordionList from "./components/accordionList/AccordionList";
import Sidebar from "./components/sidebar/Sidebar";
import { ReactComponent as IconShared } from "assets/icons/shared.svg";
import { ReactComponent as IconBookmark } from "assets/icons/bookmark.svg";

const renderMainContent = () => (
  <div className={style.wrapper}>
    <div className={style.header}>
    <h1 className={style.title}>Marocco</h1>
    <p className={style.subtitle}>5 itinerari per questa destinazione</p>
    </div>
    <picture className={style.img}>
      <source media="(min-width:700px)" srcSet={maroccoLG} />
      <img className={style.img} src={maroccoSM} alt="Marocco temple" />
    </picture>
    <div className={style.actions}>
      <p className={style.link}><IconShared className={style.linkIcon} />Condividi</p>
      <p className={style.link}><IconBookmark className={style.linkIcon} />Aggiungi ai preferiti</p>
    </div>
    <div className={style.content}>
      <MyButton
        customClass={style.button}
        label="Scopri i nostri viaggi in Marocco"
        onClick={() => -1}
      />
      <p className={style.text}>
        Influenze berbere, arabe ed europee, la magica Città Blu, il fascino dei
        bazar ricchi di spezie profumati e colorati tappeti, i cieli stellati
        nel deserto del Sahara: il Marocco è tutto questo, basta lasciarsi
        incantare.
      </p>
      <p className={style.text}>
        Un viaggio in Marocco è quello che serve per avere un assaggio di questo
        Paese da mille e una notte. Noi di notti ne faremo quattro, ma ci
        basteranno: il nostro punto di partenza non può che essere Marrakech,
        dove veniamo subito travolti dai profumi, dai rumori e dalla frenesia di
        questa città, il cuore pulsante del Marocco.
      </p>
    </div>
  </div>
);

function Featured() {
  return (
    <section className={style.featured}>
      <div className={style.container}>
        {renderMainContent()}
        <Sidebar />
        <AccordionList />
      </div>
      <Carousel />
    </section>
  );
}

export default Featured;

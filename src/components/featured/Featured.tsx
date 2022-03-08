import style from "./Featured.style";
import maroccoSM from "assets/images/marocco-sm.jpg";
import maroccoLG from "assets/images/marocco-lg.jpg";
import MyButton from "components/shared/myButton/MyButton";
import { ReactComponent as IconExperience } from "assets/icons/experience.svg";
import { ReactComponent as IconWish } from "assets/icons/wish.svg";
import { ReactComponent as IconWeather } from "assets/icons/weather.svg";
import { ReactComponent as IconFood } from "assets/icons/food.svg";
import { ReactComponent as IconLanguages } from "assets/icons/languages.svg";
import { ReactComponent as IconTimezone } from "assets/icons/timezone.svg";
import { ReactComponent as IconCulture } from "assets/icons/culture.svg";
import { ReactComponent as IconEarth } from "assets/icons/earth.svg";
import { ReactComponent as IconCalendarWeather } from "assets/icons/calendar-weather.svg";
import MyAccordion from "components/shared/myAccordion/MyAccordion";
import Carousel from 'components/shared/carousel/Carousel';

interface SidebarItem {
  icon: JSX.Element;
  title: string;
  description: string[];
}

const sidebarItems: SidebarItem[] = [
  {
    icon: <IconExperience className={style.sidebar.icon} />,
    title: "Top 5 da visitare",
    description: [
      "Marrakech",
      "Chefchaouen",
      "Essaouira",
      "Taghazout",
      "Casablanca",
    ],
  },
  {
    icon: <IconWish className={style.sidebar.icon} />,
    title: "Best experience",
    description: [
      "Quad nel deserto",
      "Traversato del deserto in cammello",
      "Notte in tenda sotto le stelle",
    ],
  },
  {
    icon: <IconFood className={style.sidebar.icon} />,
    title: "Cosa che devi assaggiare",
    description: [
      "Tagine",
      "Chicken pastilla",
      "Maakouda",
      "Zalouk",
      "Couscous",
    ],
  },
  {
    icon: <IconWeather className={style.sidebar.icon} />,
    title: "Clima",
    description: [
      "Il Marocco ha un clima desertico subtropicale con temperature medie in alta stagione di 25° e 12° in inverno. Il migliore periodo per andare è la primavera.",
    ],
  },
  {
    icon: <IconLanguages className={style.sidebar.icon} />,
    title: "Lingua",
    description: [
      "Le due lingue ufficiali del Maroccosono l'arabo el'amazigh, ma praticamente tutti i marocchini parlano e capiscono il francese. Lo spagnolo è diffuso al nord e al sud del Marocco.",
    ],
  },
  {
    icon: <IconTimezone className={style.sidebar.icon} />,
    title: "Timezone",
    description: ["In marocco il fuso orario è GMT+1."],
  },
];

const renderMainContent = () => (
  <div className={style.main.container}>
    <h1 className={style.main.title}>Marocco</h1>
    <p className={style.main.subtitle}>5 itinerari per questa destinazione</p>
    <picture className={style.main.img}>
      <source media="(min-width:700px)" srcSet={maroccoLG} />
      <img className={style.main.img} src={maroccoSM} alt="Marocco temple" />
    </picture>
    <div className={style.main.content}>
      <MyButton
        customClass={style.main.button}
        label="Scopri i nostri viaggi in Marocco"
        onClick={() => -1}
      />
      <p className={style.main.text}>
        Influenze berbere, arabe ed europee, la magica Città Blu, il fascino dei
        bazar ricchi di spezie profumati e colorati tappeti, i cieli stellati
        nel deserto del Sahara: il Marocco è tutto questo, basta lasciarsi
        incantare.
      </p>
      <p className={style.main.text}>
        Un viaggio in Marocco è quello che serve per avere un assaggio di questo
        Paese da mille e una notte. Noi di notti ne faremo quattro, ma ci
        basteranno: il nostro punto di partenza non può che essere Marrakech,
        dove veniamo subito travolti dai profumi, dai rumori e dalla frenesia di
        questa città, il cuore pulsante del Marocco.
      </p>
    </div>
  </div>
);

const renderSidebar = () => (
  <aside className={style.sidebar.container}>
    <h2 className={style.sidebar.title}>Marocco in pillole</h2>
    <div className={style.sidebar.itemContainer}>
      {sidebarItems.map(({ icon, title, description }, i) => (
        <div key={`${i}-${title}`} className={style.sidebar.item}>
          <div>{icon}</div>
          <div>
            <h5 className={style.sidebar.itemTitle}>{title}</h5>
            {description.map((text, i) => (
              <span
                key={`${i}-${text}`}
                className={style.sidebar.itemDescription}
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
    <MyButton
      customClass={style.sidebar.button}
      label="Scopri i nostri viaggi in Marocco"
      onClick={() => -1}
    />
  </aside>
);

const renderAccordions = () => (
  <div className={style.accordion.container}>
    <MyAccordion
      icon={<IconCalendarWeather className={style.accordion.icon} />}
      label="Clima durante l’anno"
    >
      Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor
      sit amet
    </MyAccordion>
    <MyAccordion
      icon={<IconEarth className={style.accordion.icon} />}
      label="Cose da sapere"
    >
      Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor
      sit amet
    </MyAccordion>
    <MyAccordion
      icon={<IconCulture className={style.accordion.icon} />}
      label="Paese che vai usanze che trovi"
    >
      Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor
      sit amet
    </MyAccordion>
    <MyAccordion
      icon={<IconFood className={style.accordion.icon} />}
      label="Cibi consigliati"
    >
      Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor
      sit amet
    </MyAccordion>
  </div>
);

function Featured() {
  return (
    <section className={style.featured}>
      <div className={style.container}>
        {renderMainContent()}
        {renderSidebar()}
        {renderAccordions()}
      </div>
      <Carousel />
    </section>
  );
}

export default Featured;

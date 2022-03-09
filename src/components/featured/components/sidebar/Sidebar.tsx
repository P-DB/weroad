import { ReactComponent as IconExperience } from "assets/icons/experience.svg";
import { ReactComponent as IconWish } from "assets/icons/wish.svg";
import { ReactComponent as IconWeather } from "assets/icons/weather.svg";
import { ReactComponent as IconFood } from "assets/icons/food.svg";
import { ReactComponent as IconLanguages } from "assets/icons/languages.svg";
import { ReactComponent as IconTimezone } from "assets/icons/timezone.svg";
import MyButton from "components/shared/myButton/MyButton";
import style from "./Sidebar.style";

function Sidebar() {
  interface SidebarItem {
    icon: JSX.Element;
    title: string;
    description: string[];
  }
  
  const sidebarItems: SidebarItem[] = [
    {
      icon: <IconExperience className={style.icon} />,
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
      icon: <IconWish className={style.icon} />,
      title: "Best experience",
      description: [
        "Quad nel deserto",
        "Traversato del deserto in cammello",
        "Notte in tenda sotto le stelle",
      ],
    },
    {
      icon: <IconFood className={style.icon} />,
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
      icon: <IconWeather className={style.icon} />,
      title: "Clima",
      description: [
        "Il Marocco ha un clima desertico subtropicale con temperature medie in alta stagione di 25° e 12° in inverno. Il migliore periodo per andare è la primavera.",
      ],
    },
    {
      icon: <IconLanguages className={style.icon} />,
      title: "Lingua",
      description: [
        "Le due lingue ufficiali del Maroccosono l'arabo el'amazigh, ma praticamente tutti i marocchini parlano e capiscono il francese. Lo spagnolo è diffuso al nord e al sud del Marocco.",
      ],
    },
    {
      icon: <IconTimezone className={style.icon} />,
      title: "Timezone",
      description: ["In marocco il fuso orario è GMT+1."],
    },
  ];

  return (
    <aside className={style.container}>
    <h2 className={style.title}>Marocco in pillole</h2>
    <div className={style.itemContainer}>
      {sidebarItems.map(({ icon, title, description }, i) => (
        <div key={`${i}-${title}`} className={style.item}>
          <div>{icon}</div>
          <div>
            <h5 className={style.itemTitle}>{title}</h5>
            {description.map((text, i) => (
              <span
                key={`${i}-${text}`}
                className={style.itemDescription}
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
    <MyButton
      customClass={style.button}
      label="Scopri i nostri viaggi in Marocco"
      onClick={() => -1}
    />
  </aside>
  );
}

export default Sidebar;

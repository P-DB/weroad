import { ReactComponent as IconCulture } from "assets/icons/culture.svg";
import { ReactComponent as IconEarth } from "assets/icons/earth.svg";
import { ReactComponent as IconCalendarWeather } from "assets/icons/calendar-weather.svg";
import { ReactComponent as IconFood } from "assets/icons/food.svg";
import MyAccordion from "components/shared/myAccordion/MyAccordion";
import style from "./AccordionList.style";

function AccordionList() {
  interface AccordionItem {
    icon: JSX.Element;
    label: string;
    content: JSX.Element;
  }

  const weather = [
    {
      month: "Gen",
      day: "17°",
      night: "11°",
    },
    {
      month: "Feb",
      day: "17°",
      night: "10°",
    },
    {
      month: "Mar",
      day: "19°",
      night: "12°",
    },
    {
      month: "Apr",
      day: "21°",
      night: "13°",
    },
    {
      month: "Mag",
      day: "24°",
      night: "16°",
    },
  ];

  const renderWeatherAccordion = () => (
    <MyAccordion
      customHeaderClass={style.headerWeatherLayout}
      header={<div>Marocco del Nord</div>}
    >
      <div className={style.contentWeather}>
        {weather.map(({ month, day, night }, i) => (
          <div key={i} className={style.weatherCard}>
            <h6 className={style.weatherTitle}>{month}</h6>
            <p className={style.weatherDay}>
              <span className={style.weatherCircleDay} />
              {day}
              </p>
            <p className={style.weatherNight}>
              <span className={style.weatherCircleNight} />
              {night}
              </p>
          </div>
        ))}
      </div>
    </MyAccordion>
  );

  const renderWeatherContent = () => (
    <div className={style.wrapWeather}>
      Il Marocco ha un clima desertico subtropicale con temperature medie in
      alta stagione di 25° e 12° in inverno. Il migliore periodo per andare è la
      primavera.
      <p className={style.title}>Temperature medie in gradi centrigradi:</p>
      {renderWeatherAccordion()}
    </div>
  );

  const accordionItems: AccordionItem[] = [
    {
      icon: <IconCalendarWeather className={style.icon} />,
      label: "Clima durante l’anno",
      content: renderWeatherContent(),
    },
    {
      icon: <IconEarth className={style.icon} />,
      label: "Cose da sapere",
      content: (
        <p className={style.content}>
          Laborum similique ullam unde, eveniet at maiores, dignissimos
          explicabo libero optio harum suscipit!
        </p>
      ),
    },
    {
      icon: <IconCulture className={style.icon} />,
      label: "Paese che vai usanze che trovi",
      content: (
        <p className={style.content}>
          Non doloribus magni deleniti. Laborum similique ullam unde, eveniet at
          maiores, dignissimos explicabo libero optio harum suscipit!
        </p>
      ),
    },
    {
      icon: <IconFood className={style.icon} />,
      label: "Cibi Consigliati",
      content: (
        <p className={style.content}>
          Dolor sit amet consectetur adipisicing elit. Nam magnam aspernatur
          dolor cum, non doloribus magni deleniti.
        </p>
      ),
    },
  ];

  const renderMainAccordionHeader = (icon: JSX.Element, label: string) => (
    <div className={style.headerContent}>
      {icon}
      <span className={style.headerTitle}>{label}</span>
    </div>
  );

  return (
    <div className={style.container}>
      {accordionItems.map(({ icon, label, content }, i) => (
        <MyAccordion
          key={i}
          customClass={i + 1 === accordionItems.length ? style.headerLayoutLast : style.headerLayout}
          header={renderMainAccordionHeader(icon, label)}
          children={content}
        />
      ))}
    </div>
  );
}

export default AccordionList;

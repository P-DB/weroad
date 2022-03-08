import { useEffect, useState } from "react";
import Card from "./components/card/Card";
import style from "./Travels.style";

function Travels() {
  const [travels, setTravels] = useState([]);

  useEffect(() => {
    fetch("https://staging-api-catalog.weroad.it/travels")
      .then((res) => res.json())
      .then((res) =>
        setTravels(
          res.data.filter((item: any) => item.destinationLabel === "Marocco")
        )
      )
      .catch((error) => {
        throw new Error(error);
      });
  }, []);

  return (
    <section className={style.travels}>
      <div className={style.container}>
        <h1 className={style.title}>I nostri viaggi in Marocco</h1>
        <div className={style.content}>
          {travels.map((travel: any, i) => (
            <Card
              key={i}
              img={travel.thumbnailImage.desktop.thumbnailUrl}
              title={travel.title}
              date={travel.numberOfDays}
              price={travel.bestTour.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Travels;

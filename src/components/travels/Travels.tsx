import { useEffect, useState } from "react";
import Card from "./components/card/Card";
import style from "./Travels.style";

function Travels() {
  const [travels, setTravels] = useState([]);

  const fetchTravels = async () => {
    const res = await fetch("https://staging-api-catalog.weroad.it/travels");
    const json = await res.json();
    setTravels(
      json.data.filter((item: any) => item.destinationLabel === "Marocco")
    );
  };

  useEffect(() => {
    try {
      fetchTravels();
    } catch (error) {
      console.error(error);
    }
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

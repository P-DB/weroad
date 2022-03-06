import { useEffect, useState } from 'react';
import style from './Travels.style';

function Travels() {

  const [travels, setTravels] = useState([]); 

  useEffect(() => {
    fetch('https://staging-api-catalog.weroad.it/travels')
    .then(res => res.json())
    .then(res => setTravels(res.data.filter((item:any) => item.destinationLabel === 'Marocco')))
    .catch((error) => { 
      throw new Error(error);
    });
  }, []);

  console.log(travels)

  return (
    <section className={style.travels}>
      <div className={style.container}>
        <h1 className={style.title}>I nostri viaggi in Marocco</h1>
      </div>
    </section>
  );
}

export default Travels;

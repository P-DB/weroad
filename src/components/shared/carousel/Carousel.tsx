import MyButton from "components/shared/myButton/MyButton";
import china from "assets/carousel/china.jpg";
import spain from "assets/carousel/spain.jpg";
import usa from "assets/carousel/usa.jpg";
import style from "./Carousel.style";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function Carousel() {

  const settings = {
    autoPlay: true,
    infinite:true,
    autoPlayInterval: 3000,
    disableButtonsControls: true,
    disableDotsControls: true,
    disableSlideInfo: true,
    animationDuration:600,
    animationEasingFunction:'ease-out'
  }

  return (
    <section className={style.container} >
      <AliceCarousel {...settings}>
        <section>
          <div
            className={style.slide}
            style={{ backgroundImage: `url(${china})` }}
          >
            <div className={style.content}>
              <h3 className={style.title}>Consectetur adipisicing</h3>
              <p className={style.description}>
                Voluptas dicta nemo quae exercitationem quam, necessitatibus sit
                molestias earum.
              </p>
              <MyButton
                type="PRIMARY-SMALL"
                label="Vedi l'offerta"
                onClick={() => -1}
              />
            </div>
          </div>
        </section>
        <section>
          <div
            className={style.slide}
            style={{ backgroundImage: `url(${spain})` }}
          >
            <div className={style.content}>
              <h3 className={style.title}>Suscipit eaque</h3>
              <p className={style.description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit
                architecto qui itaque.
              </p>
              <MyButton
                type="PRIMARY-SMALL"
                label="Vedi l'offerta"
                onClick={() => -1}
              />
            </div>
          </div>
        </section>
        <section>
          <div
            className={style.slide}
            style={{ backgroundImage: `url(${usa})` }}
          >
            <div className={style.content}>
              <h3 className={style.title}>Voluptates dolores</h3>
              <p className={style.description}>
                Officia molestias esse, voluptates dolores architecto qui itaque
                suscipit eaque blanditiis repellendus.
              </p>
              <MyButton
                type="PRIMARY-SMALL"
                label="Vedi l'offerta"
                onClick={() => -1}
              />
            </div>
          </div>
        </section>
      </AliceCarousel>
    </section>
  );
}

export default Carousel;

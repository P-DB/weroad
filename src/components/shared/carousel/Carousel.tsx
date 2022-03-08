import Slider from "react-slick";
import MyButton from "../myButton/MyButton";
import china from "assets/carousel/china.jpg";
import spain from "assets/carousel/spain.jpg";
import usa from "assets/carousel/usa.jpg";
import style from "./Carousel.style";

export interface CarouselProps {}

function Carousel(props: CarouselProps) {
  var settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className={style.container} >
      <Slider {...settings}>
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
      </Slider>
    </section>
  );
}

export default Carousel;

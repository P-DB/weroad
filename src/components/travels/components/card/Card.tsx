import MyButton from "components/shared/myButton/MyButton";
import { ReactComponent as IconCalendar } from "assets/icons/calendar.svg";
import { ReactComponent as Logo } from "assets/logo/logo.svg";
import style from "./Card.style";

export interface CardProps {
  img: string;
  title: string;
  date: number;
  price: number;
}

function Card({ img, title, date, price }: CardProps) {
  return (
    <article className={style.card}>
      <div
        className={style.image}
        style={{ backgroundImage: `url(${img})` }}
      >
        {
          !img ? <Logo /> : <></>
        }
      </div>
      <div className={style.content}>
        <h4 className={style.title}>{title}</h4>
        <div className={style.rowBetween}>
          <div className={style.rowBetween}>
            <IconCalendar />
            <span className={style.date}>
              {date} {date > 1 ? "giorni" : "giorno"}
            </span>
          </div>
          <div className={style.row}>
            <span className={style.fromText}>A partire da</span>
            <span className={style.price}>{price}€</span>
          </div>
        </div>
        <div className={style.footer}>
          <MyButton
            customClass={style.actions}
            type="WHITE"
            label="Vedi date"
            onClick={() => -1}
          />
          <MyButton
            customClass={style.actions}
            label="Vedi viaggio"
            onClick={() => -1}
          />
        </div>
      </div>
    </article>
  );
}

export default Card;

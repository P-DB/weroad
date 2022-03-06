import Logo from "assets/logo/logo.svg";
import logoSmall from "assets/logo/logo-small.svg";
import { ReactComponent as IconMagnify } from "assets/icons/magnify.svg";
import { ReactComponent as IconMenuButton } from "assets/icons/menu-button.svg";
import { ReactComponent as IconArrowDown } from "assets/icons/arrow-down.svg";
import { ReactComponent as IconUser } from "assets/icons/user.svg";
import style from "./Navbar.style";
import MyButton from "components/shared/myButton/MyButton";

interface MenuItem {
  label: string;
  hasChildren: boolean;
}

function Navbar() {
  const menu: MenuItem[] = [
    {
      label: "Viaggi",
      hasChildren: true,
    },
    {
      label: "Come funziona",
      hasChildren: false,
    },
    {
      label: "Fasce d'età",
      hasChildren: false,
    },
    {
      label: "Offerte",
      hasChildren: false,
    },
  ];

  const renderMenuItems = () => (
    <ul className={style.menu}>
      {menu.map(({ label, hasChildren }, i) => (
        <li className={style.menuItem} key={`${i}-${label}`}>
          {label}
          {hasChildren && <IconArrowDown className={style.menuItemArrow} />}
        </li>
      ))}
    </ul>
  );

  return (
    <nav className={style.nav}>
      <div className={style.container}>
        <div className={style.content}>
          <picture>
            <source media="(min-width:465px)" srcSet={Logo} />
            <img src={logoSmall} alt="WeRoad Logo" />
          </picture>
          <div className={style.find}>
            <IconMagnify className={style.magnify} />
            <span className={style.findTextMobile}>Cerca viaggi</span>
            <span className={style.findTextDesktop}>Cerca su WeRoad</span>
          </div>
        </div>
        <div className={style.content}>
          {renderMenuItems()}
          <MyButton
            customClass={style.button}
            label="Turni confermati"
            type="PRIMARY-OUTLINE"
            onClick={() => -1}
          />
          <div className={style.userBadge}>
            <IconUser className={style.userIcon} />
            <IconArrowDown />
          </div>
          <MyButton label="Parla con noi" type="SECONDARY" onClick={() => -1} />
          <IconMenuButton className={style.menuButton} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

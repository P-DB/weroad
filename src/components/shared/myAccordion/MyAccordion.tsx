import { useState } from "react";
import Collapsible from "react-collapsible";
import style from "./MyAccordion.style";
import { ReactComponent as IconArrowDown } from "assets/icons/accordion-arrow-down.svg";
import { ReactComponent as IconArrowUp } from "assets/icons/accordion-arrow-up.svg";

export interface MyAccordionProps {
  header: JSX.Element;
  children: React.ReactNode;
  customClass?: string;
  customHeaderClass?:string;
}

function MyAccordion({ header, children, customClass, customHeaderClass }: MyAccordionProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const accordionHeader = () => (
    <div
      className={`${style.header} ${customHeaderClass ? customHeaderClass : ''}`}
      onClick={() => setIsOpen((prevState) => !prevState)}
    >
      {header}
      {isOpen ? (
        <IconArrowUp className={style.iconArrow} />
      ) : (
        <IconArrowDown className={style.iconArrow} />
      )}
    </div>
  );

  return (
    <div className={customClass ? customClass : ''}>
      <Collapsible
        open={isOpen}
        trigger={accordionHeader()}
        transitionTime={300}
        easing="ease-out"
      >
        {children}
      </Collapsible>
    </div>
  );
}

export default MyAccordion;

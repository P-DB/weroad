import { useState } from 'react';
import Collapsible from 'react-collapsible';
import style from './MyAccordion.style';
import { ReactComponent as IconArrowDown } from "assets/icons/accordion-arrow-down.svg";
import { ReactComponent as IconArrowUp } from "assets/icons/accordion-arrow-up.svg";

export interface MyAccordionProps {
  icon: JSX.Element,
  label: string
  children: React.ReactNode,
  customClass?: string
}

function MyAccordion({icon, label, children, customClass }: MyAccordionProps) {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  const accordionHeader = () => (
    <div className={style.header} onClick={() => setIsOpen(prevState => !prevState)}>
      <div className={style.headerContent}>
        {icon}<span className={style.title}>{label}</span>
        </div>
      {isOpen ?  <IconArrowUp /> : <IconArrowDown /> }
    </div>
  )

  return (
   <div className={`${style.container} ${customClass ? customClass : ''}`}>
     <Collapsible open={isOpen} trigger={accordionHeader()}>
      {children}
     </Collapsible>
   </div>
  );
}

export default MyAccordion;

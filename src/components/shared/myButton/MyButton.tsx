import style from './MyButton.style';

type MyButtonType = "PRIMARY" | "PRIMARY-OUTLINE" | "SECONDARY" | "WHITE";

export interface MyButtonProps {
  label: string;
  onClick: () => void;
  type?: MyButtonType;
  customClass?: string
}

const renderType = (type: MyButtonType | undefined) => {
  switch (type) {
    case "PRIMARY-OUTLINE":
      return style.primaryOutline;
    case "SECONDARY":
      return style.secondary;
      case "WHITE":
        return style.white;
    default:
      return style.primary;
  }
};

function MyButton({ label, onClick, type, customClass }: MyButtonProps) {
  return (
    <button 
      className={`${renderType(type)} ${customClass ? ' ' + customClass : ''}`} 
      onClick={() => onClick()}>
      {label}
    </button>
  );
}

export default MyButton;

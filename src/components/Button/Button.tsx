import "./button.scss";

interface ButtonProps {
  inlineText: string;
  type: "button" | "submit";
  onclick?: () => void;
}
export const Button: React.FC<ButtonProps> = ({
  inlineText,
  type,
  onclick,
}) => {
  return (
    <button className='form-btn header-small' type={type} onClick={onclick}>
      {inlineText}
    </button>
  );
};

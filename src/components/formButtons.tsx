import { type } from "os";
import style from "./css/formButtons.module.css";
interface Props {
  type?: "button" | "submit" | "reset";
  text?: string;
  onClick?: (e: any) => void;
  color: string;
  children?: React.ReactNode;
}

export default function FormButton(props: Props) {
  return (
    <>
      <button
        className={`mt-5 w-64 h-14 rounded-xl ${
          props.color === "claro" ? style.claro : style.oscuro
        }`}
        type={props.type}
      >
        {props.text}
        {props.children}
      </button>
    </>
  );
}

import Link from "next/link";
import style from "./css/secundaryButton.module.css";

interface SecondaryButtonProps {
  text: string;
  href: string;
  style?: any;
  reactElemet?: JSX.Element;
}

export const SecondaryButton = (props: SecondaryButtonProps) => {
  return (
    <Link className={props.style || style.button} href={props.href}>
      {props.reactElemet}
      {props.text}
    </Link>
  );
};

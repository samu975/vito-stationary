import Link from "next/link";
import style from "./css/secundaryButton.module.css";

interface SecondaryButtonProps {
  text: string;
  href: string;
  reactElemet?: JSX.Element;
}

export const SecondaryButton = (props: SecondaryButtonProps) => {
  return (
    <Link className={style.button} href={props.href}>
      {props.reactElemet}
      {props.text}
    </Link>
  );
};

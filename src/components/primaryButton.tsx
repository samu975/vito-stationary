import Link from "next/link";
import styles from "./css/primaryButton.module.css";

interface PrimaryButtonProps {
  href: string;
  text: string;
  style?: any;
}

export const PrimaryButton = (props: PrimaryButtonProps) => {
  return (
    <Link className={props.style || styles["btn-primary"]} href={props.href}>
      {props.text}
    </Link>
  );
};

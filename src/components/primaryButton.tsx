import Link from "next/link";
import styles from "./css/primaryButton.module.css";

interface PrimaryButtonProps {
  href: string;
  text: string;
}

export const PrimaryButton = (props: PrimaryButtonProps) => {
  return (
    <div className="mt-6">
      <Link className={styles["btn-primary"]} href={props.href}>
        {props.text}
      </Link>
    </div>
  );
};

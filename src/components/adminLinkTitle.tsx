import style from "./css/adminLinkTitle.module.css";

interface AdminLinkTitleProps {
  text: string;
}

export const AdminLinkTitle = (props: AdminLinkTitleProps) => {
  return (
    <div className={style.container}>
      <h1>{props.text}</h1>
    </div>
  );
};

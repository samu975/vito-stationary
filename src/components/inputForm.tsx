import style from "./css/input.module.css";
interface Props {
  text: string;
  type: string;
  placeholder: string;
  onChange?: (e: any) => void;
  width: string;
  value?: string | number | readonly string[];
}
export const InputForm = (props: Props) => {
  return (
    <div className="flex justify-around w-full my-5">
      <div className="flex justify-left w-1/3 ">
        <label className="text-lg">{props.text}</label>
      </div>
      <div className="flex justify-left w-2/4 ">
        <input
          value={props.value}
          type={props.type}
          placeholder={props.placeholder}
          onChange={props.onChange}
          className={`h-7 border rounded placeholder:text-gray-500 placeholder:text-sm ${props.width} ${style.color}`}
        />
      </div>
    </div>
  );
};

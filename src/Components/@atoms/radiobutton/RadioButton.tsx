import classNames from "classnames";
import { ClassName } from "../../../enums/ClassName";
import { InputType } from "../../../enums/InputType";
import { WithClassName } from "../../../types/types";

interface Props {
    id?: string;
    name: string;
    isChecked?: boolean;
    label?: string;
}

const mainClass = ClassName.Radiobutton;

const RadioButton = ({ className, id, name, label, isChecked }: Props & WithClassName) => {
    return (
        <label className={classNames(mainClass, className)}>
            <input className={`${mainClass}__input`} type={InputType.Radio} name={name} checked={isChecked ? true : false} />
            <span className={`${mainClass}__style`}></span>
            {label && <span className={`${mainClass}__text`}>{label}</span>}
        </label>
    );
};

export default RadioButton;
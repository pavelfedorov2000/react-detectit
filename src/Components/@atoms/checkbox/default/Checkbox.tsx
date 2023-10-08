import classNames from "classnames";
import { WithClassName } from "../../../../types/types";
import { ClassName } from "../../../../enums/ClassName";
import { InputType } from "../../../../enums/InputType";

interface Props {
    id?: string;
    name?: string;
    label?: string;
    isChecked?: boolean;
}

const mainClass = ClassName.Checkbox;

const Checkbox = ({ className, id, name, label, isChecked }: Props & WithClassName) => {
    return (
        <label className={classNames(mainClass, className)}>
            <input className={`${mainClass}__input`} type={InputType.Checkbox} name={name} checked={isChecked ? true : false} />
            <span className={`${mainClass}__style`}></span>
            {label && <span className={`${mainClass}__text`}>{label}</span>}
        </label>
    );
};

export default Checkbox;
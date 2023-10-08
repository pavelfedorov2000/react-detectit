import classNames from "classnames";
import { ClassName } from "../../../enums/ClassName";
import { InputType } from "../../../enums/InputType";
import { WithClassName } from "../../../types/types";

interface Props {
    id?: string;
    type?: InputType;
    name?: string;
    placeholder?: string;
    value?: string;
    readonly?: boolean;
}

const mainClass = ClassName.Input;

const Input = ({ className, id, type = InputType.Text, name, placeholder, value, readonly = false }: Props & WithClassName) => {
    return (
        <input
            className={classNames(mainClass, className)}
            id={id}
            name={name}
            placeholder={placeholder}
            value={value}
            type={type}
            readOnly={readonly}
        />
    );
};

export default Input;
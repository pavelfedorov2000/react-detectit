import { InputType } from "../../../enums/InputType";
import { Option } from "../../../interfaces/Option";
import { WithClassName } from "../../../types/types";

const mainClass = 'select';

const Option = ({ className, id, index, label, name }: Option & { index: number; } & WithClassName) => {
    return (
        <>
            <input id={id} className={`${mainClass}__input`} type={InputType.Radio} name={name} checked={index === 0 ? true : false} />
            <label htmlFor={id} tabIndex={0} className={`${mainClass}__label`} data-value={label}>
                {label}
            </label>
        </>
    );
};

export default Option;
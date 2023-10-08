import classNames from "classnames";
import { ClassName } from "../../../enums/ClassName";
import { WithClassName } from "../../../types/types";
import Option from "../option/Option";
import { Option as OptionType } from "../../../interfaces/Option";

interface Props {
    id: string;
    label: string;
    options: OptionType[];
    name: string;
}

const mainClass = ClassName.Select;

const Select = ({ className, id, label, name, options }: Props & WithClassName) => {
    return (
        <div className={classNames(mainClass, className)}>
            <button className={`${mainClass}__toggle`} aria-controls={id} aria-expanded={false}>
                <span className={`${mainClass}__toggle-text`}>{label}</span>
            </button>
            <div id={id} className={`${mainClass}__dropdown`}>
                <div className={`${mainClass}__content`}>
                    {options.map((option, index) => (
                        <Option {...option} index={index} name={name} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Select;
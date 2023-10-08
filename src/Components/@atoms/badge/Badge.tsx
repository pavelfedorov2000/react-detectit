import classNames from "classnames";
import { WithClassName } from "../../../types/types";
const mainClass = 'badge';

const Badge = ({ className }: WithClassName) => {
    return (
        <span className={classNames(mainClass, className)}>
            <span className={`${mainClass}__text`}></span>
        </span>
    );
}

export default Badge;
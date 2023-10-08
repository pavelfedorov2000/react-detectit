import classNames from "classnames";
import { WithClassName } from "../../../types/types";

const mainClass = 'form';

const Form = ({ className }: WithClassName) => {
    return (
        <form className={classNames(mainClass, className)}>
            
        </form>
    );
}

export default Form;
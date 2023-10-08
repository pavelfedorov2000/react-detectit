import classNames from 'classnames';
import { ClassName } from '../../../enums/ClassName';
import { WithClassName } from '../../../types/types';
import { ButtonType } from '../../../enums/ButtonType';

interface Props {
    onClick: () => void;
    text?: string;
    type?: ButtonType;
    primary?: boolean;
    secondary?: boolean;
    border?: boolean;
    transparent?: boolean;
    isDisabled?: boolean;
    icon?: boolean;
}

const Button = ({ onClick, className, text, type = ButtonType.Button, isDisabled, primary, secondary, border, transparent, icon }: Props & WithClassName) => {
    return (
        <button
            onClick={onClick}
            className={classNames(ClassName.Button, className, {
                [`${ClassName.Button}--primary`]: primary,
                [`${ClassName.Button}--secondary`]: secondary,
                [`${ClassName.Button}--border`]: border,
                [`${ClassName.Button}--transparent`]: transparent,
            })}
            type={type}
            disabled={isDisabled}
        >
            <span className={`${ClassName.Button}__text`}>{text}</span>
            {icon && icon}
        </button>
    );
}

export default Button;

//style={cart && { backgroundColor: `${isBasketProduct ? '#479458' : '#ee3333'}` }}
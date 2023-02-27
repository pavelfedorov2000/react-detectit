import classNames from 'classnames';

interface Props {
    onClick: () => void;
    className?: string;
    border?: boolean;
    text?: string;
    type?: 'button' | 'submit' | 'reset';
    isDisabled?: boolean;
    icon?: boolean;
    transparent?: boolean;
}

const Button = ({ onClick, className, border, text, type, isDisabled, transparent, icon }: Props) => {
    return (
        <button
            onClick={onClick}
            disabled={isDisabled}
            type={type || 'button'}
            className={classNames('button', className, {
                'button--border': border,
                'button--transparent': transparent,
            })}>
            {text}
        </button>
    );
}

export default Button;

//style={cart && { backgroundColor: `${isBasketProduct ? '#479458' : '#ee3333'}` }}
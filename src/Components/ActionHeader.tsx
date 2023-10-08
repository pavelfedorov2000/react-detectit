import classNames from "classnames";
import { Link } from "react-router-dom";
import { HeaderAction } from "../interfaces/HeaderAction";
import { ClassName } from "../enums/ClassName";
import { WithClassName } from "../types/types";

const ActionHeader = ({ popupId, className, href, icon, text, onClick, quantity }: HeaderAction & WithClassName) => {
    const handleClick = () => {
        document.body.classList.add(ClassName.Lock);
        onClick && onClick();
    }

    const children = <>
        {icon}
        <span>
            {text}
            {quantity && quantity !== 0 ? <span>({quantity})</span> : null}
        </span>
    </>;

    return (
        <>
            {
                !href ?
                    <button aria-controls={popupId} onClick={handleClick} className={classNames('action-header', className)} type="button">
                        {children}
                    </button>
                    :
                    <Link to={href} className={classNames('action-header', className)}>
                        {children}
                    </Link>
            }
        </>
    );
};

export default ActionHeader;
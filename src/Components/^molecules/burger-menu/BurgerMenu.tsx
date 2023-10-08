import classNames from 'classnames';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useActions } from '../../../hooks/useActions';
import { PopupId } from '../../../enums/PopupId';
import { ClassName } from '../../../enums/ClassName';

const mainClass = 'burger-menu';

const BurgerMenu = () => {
    const { isMenuOpen } = useTypedSelector((state) => state.burgerReducer);
    const { closeBurgerMenu } = useActions();

    const handleClose = () => {
        document.body.classList.remove(ClassName.Lock);
        closeBurgerMenu();
    }

    return (
        <div id={PopupId.BurgerMenu} className={classNames(mainClass, {
            [ClassName.Active]: isMenuOpen
        })}>
            
        </div>
    );
}

export default BurgerMenu;
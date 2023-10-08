//import burger from '../../assets/images/icons/burger.svg';
import { ClassName } from '../../../enums/ClassName';
import { PopupId } from '../../../enums/PopupId';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import Image from '../image/Image';
import { ButtonType } from '../../../enums/ButtonType';

const burgerMap = {
    className: 'burger-btn',
    ariaLabel: 'Открыть меню',
    controls: PopupId.BurgerMenu,
    icon: {
        size: 20,
        alt: 'кнопка бургер'
    }
}

const BurgerButton = () => {
    const { openBurgerMenu } = useActions();
    const { isMenuOpen } = useTypedSelector((state) => state.burgerReducer);

    const handleOpenMenu = () => {
        document.body.classList.add(ClassName.Lock);
        openBurgerMenu();
    }

    return (
        <button onClick={handleOpenMenu} className={burgerMap.className} type={ButtonType.Button} aria-label={burgerMap.ariaLabel} aria-expanded={isMenuOpen} aria-controls={burgerMap.controls}>
            {/* <Image src={burger} alt={burgerMap.icon.alt} width={burgerMap.icon.size} height={burgerMap.icon.size} /> */}
        </button>
    );
}

export default BurgerButton;
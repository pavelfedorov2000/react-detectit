import classNames from 'classnames';
import { WithClassName } from '../../../types/types';
import { InputType } from '../../../enums/InputType';
import { Button } from '../../@atoms';
import { ButtonType } from '../../../enums/ButtonType';

interface Props {
    onMinus: () => void;
    onPlus: () => void;
    value: number;
}

const mainClass = 'counter';

const Counter = ({ className, onMinus, onPlus, value }: Props & WithClassName) => {
    return (
        <div className={classNames(mainClass, className)}>
            <Button onClick={onMinus} className={`${mainClass}__btn`} type={ButtonType.Button} />

            <input className={`${mainClass}__input`} type={InputType.Number} value={value} readOnly />

            <Button onClick={onPlus} className={`${mainClass}__btn`} type={ButtonType.Button} />
        </div>
    );
}

export default Counter;
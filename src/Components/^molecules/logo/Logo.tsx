import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../@atoms/image/Image';
import { WithClassName } from '../../../types/types';
//import logo from '../assets/images/logo/logo.svg';

interface Props {
    width: number;
    height: number;
}

const mainClass = 'logo';

const Logo = ({ className, width, height }: Props & WithClassName) => {
    return (
        <Link to="/" className={classNames(mainClass, `${className}__${mainClass}`)}>
            <Image className={classNames(`${mainClass}__img`, `${className}__${mainClass}-img`)} width={width} height={height} />
        </Link>
    );
}

export default Logo;
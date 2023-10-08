import classNames from 'classnames';
import { SOCIALS } from '../../../constants/socials';
import { WithClassName } from '../../../types/types';

const mainClass = 'social';

const Social = ({ className }: WithClassName) => {
    return (
        <ul className={classNames(mainClass, className)}>
            {SOCIALS.map((social) => (
                <li key={social.name} className={classNames(`${mainClass}__item`)}>
                    <a className={`${mainClass}__link`} href={social.link.href} target="_blank" rel="nofollow">
                        <social.svg />
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default Social;
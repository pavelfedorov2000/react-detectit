import classNames from "classnames";
import { WithClassName } from "../types/types";

const mainClass = 'pagination';

const Pagination = ({ className }: WithClassName) => {
    return (
        <nav className={classNames(mainClass, className)} aria-label="pagination">
            <button className="pagination__arrow">
                
            </button>
            <ol className="pagination__list">
                <li className="pagination__item">
                    <button className="pagination__link active">1</button>
                </li>
            </ol>
            <button className="pagination__arrow">
                
            </button>
        </nav>
    );
};

export default Pagination;
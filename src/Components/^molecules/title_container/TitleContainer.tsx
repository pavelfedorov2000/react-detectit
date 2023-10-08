import classNames from "classnames";
import { WithChildren, WithClassName } from "../../../types/types";
import { Title } from "../../@atoms";
import { TitleLevel } from "../../../enums/TitleLevel";

const mainClass = 'title-container';

const TitleContainer = ({ className, level, children }: { level: TitleLevel; } & WithClassName & WithChildren) => {
    return (
        <div className={classNames(mainClass, className)}>
            <Title tag={level}>
                {children}
            </Title>
        </div>
    );
}

export default TitleContainer;
import classNames from "classnames";
import { TitleContainer } from "../../^molecules";
import { TitleLevel } from "../../../enums/TitleLevel";
import Container from "../../container/Container";
import { WithChildren, WithClassName } from "../../../types/types";

const mainClass = 'section';

interface Props {
    title?: string;
    titleLevel?: TitleLevel;
}

const Section = ({ className, title, titleLevel, children }: Props & WithClassName & WithChildren) => {
    return (
        <section className={classNames(mainClass, className)}>
            <Container>
                <TitleContainer className={`${mainClass}__title`} level={titleLevel ?? TitleLevel.H2} children={title} />
                {children}
            </Container>
        </section>
    );
};

export default Section;
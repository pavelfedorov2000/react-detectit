import { WithClassName } from "../../../types/types";
import { formatDateTime } from "../../../utils/formatDateTime";

const DateTime = ({ date, className }: { date?: string; } & WithClassName) => {
    return (
        <time className="date" dateTime={formatDateTime(date)}>
            {date}
        </time>
    );
}

export default DateTime;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function getIcon(open: boolean) {
    const color = open ? "#007acc" : "";
    const rotationClass = open ? "rotate-90" : "rotate-0";

    return (
        <FontAwesomeIcon
            icon={faChevronRight}
            style={{ color, transition: "transform 0.3s" }}
            className={`mr-2 ${rotationClass}`}
        />
    );
}
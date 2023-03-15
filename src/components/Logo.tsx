import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/" className="flex items-center space-x-6 text-blue">
            <FontAwesomeIcon icon={faCode} />
            <h1>component gallery</h1>
        </Link>
    );
};
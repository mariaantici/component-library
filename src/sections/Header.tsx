import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../components/Logo";
import { useTheme } from "next-themes";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";
import { useState, useEffect } from "react";

export default function Header() {

    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
    }, [])

    const { systemTheme, theme, setTheme } = useTheme();

    const renderThemeChanger = () => {

        if (!mounted) return null;

        const currentTheme = theme === "system" ? systemTheme : theme;

        if (currentTheme === "dark") {
            return (
                <FontAwesomeIcon icon={faSun} role="button" onClick={() => setTheme('light')} />
            )
        }

        else {
            return (
                <FontAwesomeIcon icon={faMoon} role="button" onClick={() => setTheme('dark')} />
            )
        }
    };

    return (
        <header>
            {renderThemeChanger()}
        </header>
    );
};
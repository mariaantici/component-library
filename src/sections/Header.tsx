import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../layouts/Logo";
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
        <div className="fixed top-0 w-full">
            <header className="bg-light dark:bg-dark-500 backdrop-filter backdrop-blur-md bg-opacity-50 dark:bg-opacity-50 border-b border-light dark:border-dark-500">
                <div className="mx-auto max-w-7xl flex justify-between items-center px-6 sm:px-8 xl:px-0 py-4 sm:py-6 text-xl xxs:text-2xl xs:text-3xl sm:text-4xl">
                    <Logo />
                    {renderThemeChanger()}
                </div>
            </header>
        </div>
    );
};
export default function Footer() {
    return (
        <footer className="text-center text-md text-dark-300 py-4">
            <span className="text-dark-400 dark:text-dark-200 mr-2">component gallery</span>&copy; {new Date().getFullYear()}
        </footer>
    );
};
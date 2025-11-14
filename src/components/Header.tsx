import { ThemeToggle } from './ThemeToggle';

export const Header = () => {
    return (
        <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-4 shadow-sm">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                    🪙 CryptoApp
                </h1>
                <ThemeToggle />
            </div>
        </header>
    );
};

import React, {useContext} from 'react';
import ThemeContext from '../../context/themeContext';
import {MoonIcon, SunIcon} from '@heroicons/react/24/solid';
import './NavHeader.scss';

const NavHeader = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <header className={`shadow-lg ${theme === 'light' ? 'bg-white': 'bg-transparent'}`}>
            <nav className="flex items-center justify-between p-4 lg:px-8">
                <div className="flex lg:flex-1">
                    <img className="h-8 w-auto" src={theme === 'light' ? "./amdocs-logo.svg" : "./amdocs-logo-dark.svg"} alt=""/>
                </div>

                <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-800">
                    {theme === 'dark' ? <SunIcon className="h-6 w-6 text-yellow-500 dark:text-yellow-500"/> :
                        <MoonIcon className="h-6 w-6 text-gray-800 dark:text-gray-200"/>}
                </button>
            </nav>
        </header>
    );
};

export default NavHeader;

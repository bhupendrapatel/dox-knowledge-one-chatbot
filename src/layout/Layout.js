import React, {useContext} from 'react';
// ... other imports ...
import SidePanel from '../components/SidePanel/SidePanel';
import NavHeader from '../components/NavHeader/NavHeader';
import ChatApp from '../components/ChatApp/ChatApp';
import ThemeContext from '../context/themeContext';

const Layout = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`min-h-screen ${theme === 'light' ? 'bg-white' : 'bg-neutral-800'} flex`}>
            <div className={`w-72 ${theme === 'light' ? 'bg-gray-50' : 'bg-neutral-900'}`}>
                <SidePanel />
            </div>
            <div className='flex-grow text-gray-500 h-screen right-0 top-0 overflow-y-auto'>
                <NavHeader />
                <ChatApp />
            </div>
        </div>
    );
}

export default Layout;

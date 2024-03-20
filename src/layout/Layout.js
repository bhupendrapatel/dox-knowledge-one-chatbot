import React, {useContext} from 'react';
// ... other imports ...
import SidePanel from '../components/SidePanel/SidePanel';
import NavHeader from '../components/NavHeader/NavHeader';
import ChatApp from '../components/ChatApp/ChatApp';
import ThemeContext from '../context/themeContext';
import './Layout.scss';

const Layout = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`${theme === 'light' ? 'bg-neutral-100' : 'bg-neutral-800'} flex flex-row`}>
            <div className={`side-panel h-screen ${theme === 'light' ? 'bg-gray-50' : 'bg-neutral-900'}`}>
                <SidePanel />
            </div>
            <div className='dynamic-window text-gray-500 h-screen'>
                <NavHeader />
                <ChatApp />
            </div>
        </div>
    );
}

export default Layout;

import React, {useState} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './store/store';
import Layout from './layout/Layout';
import ThemeContext from './context/themeContext';

function App() {
    const [theme, setTheme] = useState('dark'); // State to hold the current theme

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light'); // Function to toggle the theme
    };

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeContext.Provider value={{ theme, toggleTheme }}> {/* Pass the current theme and the toggle function as context */}
                    <Layout />
                </ThemeContext.Provider>
            </PersistGate>
        </Provider>
    );
}

export default App;

import React, { useState, useRef, useEffect } from 'react';

const MenuPopover = ({menu, disabled, onClick}) => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div ref={menuRef} className='relative left-8'>
            <button onClick={toggleMenu} disabled={disabled}>
                {menu}
            </button>
            {isOpen && (
                <div className='absolute bg-white shadow-md mt-2 py-2 w-25 rounded' style={{zIndex: 10}}>
                    <ul>
                        <li className='px-4 py-2 text-gray-500' onClick={() => {
                            toggleMenu();
                            onClick();
                        }}>{'Delete'}</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default MenuPopover;
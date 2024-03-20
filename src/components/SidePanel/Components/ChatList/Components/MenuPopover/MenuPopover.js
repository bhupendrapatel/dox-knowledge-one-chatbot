import React, { useState, useRef, useEffect } from 'react';

const MenuPopover = ({top, left, display, menu, disabled, onClick}) => {
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
        <div ref={menuRef}>
            <button onClick={toggleMenu} disabled={disabled}>
                {menu}
            </button>
            {isOpen && (
                <div className='absolute bg-white shadow-md rounded' style={{top, left, zIndex: 100, display}}>
                    <ul>
                        <li className='px-4 py-2 text-gray-500 cursor-pointer' onClick={(event) => {
                            toggleMenu(event);
                            onClick();
                        }}>
                            Delete
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default MenuPopover;

import React from 'react';

export default function MenuItem({ icon: IconComponent, label }) {
    return (
        <div className='menu-item'>
            <div style={{ width: '30px', height: '30px' }}>
                {IconComponent && <IconComponent />}
            </div>
            <a href="#">{label}</a>
        </div>
    );
}

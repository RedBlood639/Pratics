import React from 'react';

const WorkIcon: React.FC<{ fillColor?: string, width?: number, height?: number }> = (
    {
        fillColor = "currentColor",
        width = 48,
        height = 48
    }
) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 48 48">
            <g id="Category_Icon" data-name="Category Icon" transform="translate(-84 -220)">
                <g id="Icon_Safe_Background" data-name="Icon Safe Background" transform="translate(84 220)" fill="none"
                   stroke={fillColor} strokeWidth="1" opacity="0">
                    <circle cx="24" cy="24" r="24" stroke="none"/>
                    <circle cx="24" cy="24" r="23.5" fill="none"/>
                </g>
                <path id="Icon_material-work" data-name="Icon material-work"
                      d="M30,9H24V6a2.99,2.99,0,0,0-3-3H15a2.99,2.99,0,0,0-3,3V9H6a2.977,2.977,0,0,0-2.985,3L3,28.5a2.99,2.99,0,0,0,3,3H30a2.99,2.99,0,0,0,3-3V12A2.99,2.99,0,0,0,30,9ZM21,9H15V6h6Z"
                      transform="translate(90 227)" fill={fillColor}/>
            </g>
        </svg>


    );
};

export default WorkIcon;

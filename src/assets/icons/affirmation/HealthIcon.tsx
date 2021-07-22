import React from 'react';

const HealthIcon: React.FC<{ fillColor?: string, width?: number, height?: number }> = (
    {
        fillColor = "currentColor",
        width = 48,
        height = 48
    }
) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 48 48">
            <g id="Category_Icon" data-name="Category Icon" transform="translate(-85 -220)">
                <g id="Icon_Safe_Background" data-name="Icon Safe Background" transform="translate(85 220)" fill="none"
                   stroke={fillColor} strokeWidth="1" opacity="0">
                    <circle cx="24" cy="24" r="24" stroke="none"/>
                    <circle cx="24" cy="24" r="23.5" fill="none"/>
                </g>
                <path id="Icon_ionic-ios-pulse" data-name="Icon ionic-ios-pulse"
                      d="M30.558,19.132a3.394,3.394,0,0,0-3.389,2.313H24.434l-2-6a1.125,1.125,0,0,0-1.069-.773h-.021a1.112,1.112,0,0,0-1.055.816L17.163,26.4,13.486,4.317a1.129,1.129,0,0,0-2.208-.091L7.552,21.445H3.375A1.128,1.128,0,0,0,2.25,22.57h0A1.128,1.128,0,0,0,3.375,23.7H8.438a1.121,1.121,0,0,0,1.09-.851l2.63-12.811,3.607,21.649a1.117,1.117,0,0,0,1.048.935h.063a1.129,1.129,0,0,0,1.083-.816L21.452,19.6l1.1,3.326a1.134,1.134,0,0,0,1.069.773h3.593a3.376,3.376,0,1,0,3.34-4.563Z"
                      transform="translate(90.75 225.626)" fill={fillColor}/>
            </g>
        </svg>


    );
};

export default HealthIcon;

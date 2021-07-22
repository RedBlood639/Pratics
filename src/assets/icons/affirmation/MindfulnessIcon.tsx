import React from 'react';

const MindfulnessIcon: React.FC<{ fillColor?: string, width?: number, height?: number }> = (
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
                <path id="Icon_ionic-md-water" data-name="Icon ionic-md-water"
                      d="M18.276,8.059,13.035.706,7.794,7.777a8.125,8.125,0,0,0,0,11.046,7.151,7.151,0,0,0,10.482,0A7.762,7.762,0,0,0,18.276,8.059Z"
                      transform="translate(96.371 233.294)" fill={fillColor}/>
                <g id="Ellipse_7" data-name="Ellipse 7" transform="translate(97 232)" fill="none" stroke={fillColor}
                   strokeWidth="0.4">
                    <circle cx="12.5" cy="12.5" r="12.5" stroke="none"/>
                    <circle cx="12.5" cy="12.5" r="12.3" fill="none"/>
                </g>
                <g id="Ellipse_8" data-name="Ellipse 8" transform="translate(94 229)" fill="none" stroke={fillColor}
                   strokeWidth="0.6">
                    <circle cx="15.5" cy="15.5" r="15.5" stroke="none"/>
                    <circle cx="15.5" cy="15.5" r="15.2" fill="none"/>
                </g>
                <g id="Ellipse_9" data-name="Ellipse 9" transform="translate(91 226)" fill="none" stroke={fillColor}
                   strokeWidth="0.8">
                    <circle cx="18.5" cy="18.5" r="18.5" stroke="none"/>
                    <circle cx="18.5" cy="18.5" r="18.1" fill="none"/>
                </g>
            </g>
        </svg>

    );
};

export default MindfulnessIcon;

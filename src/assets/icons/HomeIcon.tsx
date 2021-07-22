import React from 'react';

const HomeIcon: React.FC<{fillColor?: string, fontSize?: string, fontWeight?: string}> = (
    {
        fillColor= "#9993A5",
        fontSize = "20",
        fontWeight="600",
    }
    ) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 80 80">
            <g id="Logo_-_Big" data-name="Logo - Big" transform="translate(-99 -90)">
                <g id="Ellipse_1" data-name="Ellipse 1" transform="translate(99 90)" fill="none" stroke={fillColor} strokeWidth="1">
                    <circle cx="40" cy="40" r="40" stroke="none" />
                    <circle cx="40" cy="40" r="39.5" fill="none" />
                </g>
                <text id="LOGO" transform="translate(109 137)" fill={fillColor} fontSize={fontSize} fontFamily="Montserrat-SemiBold, Montserrat" fontWeight={fontWeight}>
                    <tspan x="0" y="0">LOGO</tspan>
                </text>
            </g>
        </svg>
    );
};

export default HomeIcon;

import React from 'react';

const FinanceIcon: React.FC<{ fillColor?: string, width?: number, height?: number }> = (
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
                <path id="Icon_map-bank" data-name="Icon map-bank"
                      d="M21.809,15.744A10.132,10.132,0,0,0,17.887,14.1l-1.338-.316V8.07l.181.074a3.378,3.378,0,0,1,1.829,2.874h4.553a6.67,6.67,0,0,0-2.686-5.481A9.284,9.284,0,0,0,16.55,3.882V.72h-4.24V3.785a8.306,8.306,0,0,0-4.658,1.9A6.516,6.516,0,0,0,5.41,10.746,5.529,5.529,0,0,0,7.7,15.652a14.468,14.468,0,0,0,4.608,1.654v6.189a3.643,3.643,0,0,1-1.883-1.117A3.836,3.836,0,0,1,9.562,20.1H5.04A6.515,6.515,0,0,0,7.6,25.615a9.486,9.486,0,0,0,4.7,1.82V29.8h4.24V27.475a8.972,8.972,0,0,0,4.884-1.941,6.507,6.507,0,0,0,2.4-5.161A5.548,5.548,0,0,0,21.809,15.744ZM10.9,12.22a1.947,1.947,0,0,1-1.1-1.817,2.342,2.342,0,0,1,1.119-2.065,4.289,4.289,0,0,1,1.4-.574v4.982A7.3,7.3,0,0,1,10.9,12.22Zm6.345,11.15a5.9,5.9,0,0,1-.692.185V18.287a7.566,7.566,0,0,1,1.725.705,1.944,1.944,0,0,1,.993,1.742A2.647,2.647,0,0,1,17.242,23.37Z"
                      transform="translate(94.96 228.28)" fill={fillColor}/>
            </g>
        </svg>


    );
};

export default FinanceIcon;

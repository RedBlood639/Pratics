import React from 'react';

const LifeIcon: React.FC<{ fillColor?: string, width?: number, height?: number }> = (
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
                <g id="Icon_ionic-ios-aperture" data-name="Icon ionic-ios-aperture"
                   transform="translate(90.625 225.625)">
                    <path id="Path_42" data-name="Path 42"
                          d="M17.592,26.114a.139.139,0,0,0-.1.239l3.86,3.86,1.568,1.568a14.675,14.675,0,0,0,7.249-5.667Z"
                          fill={fillColor}/>
                    <path id="Path_43" data-name="Path 43"
                          d="M11.742,23.527v7.692A14.649,14.649,0,0,0,20.9,32.337l-8.916-8.909A.139.139,0,0,0,11.742,23.527Z"
                          fill={fillColor}/>
                    <path id="Path_44" data-name="Path 44"
                          d="M18,3.375a14.594,14.594,0,0,0-2.848.281l8.916,8.916a.139.139,0,0,0,.239-.1V4.8A14.538,14.538,0,0,0,18,3.375Z"
                          fill={fillColor}/>
                    <path id="Path_45" data-name="Path 45"
                          d="M4.788,11.714A14.69,14.69,0,0,0,3.663,20.9L12.6,11.953a.139.139,0,0,0-.1-.239Z"
                          fill={fillColor}/>
                    <path id="Path_46" data-name="Path 46"
                          d="M13.127,4.212A14.628,14.628,0,0,0,5.836,9.893H18.471a.139.139,0,0,0,.1-.239Z"
                          fill={fillColor}/>
                    <path id="Path_47" data-name="Path 47"
                          d="M11.742,15.511v4.971a.255.255,0,0,0,.084.2l3.516,3.516a.278.278,0,0,0,.2.084H20.51a.255.255,0,0,0,.2-.084l3.516-3.516a.278.278,0,0,0,.084-.2V15.511a.255.255,0,0,0-.084-.2L20.707,11.8a.278.278,0,0,0-.2-.084H15.539a.255.255,0,0,0-.2.084l-3.516,3.516A.311.311,0,0,0,11.742,15.511Z"
                          fill={fillColor}/>
                    <path id="Path_48" data-name="Path 48"
                          d="M32.344,15.152l-8.888,8.895a.139.139,0,0,0,.1.239H31.2a14.6,14.6,0,0,0,1.139-9.134Z"
                          fill={fillColor}/>
                    <path id="Path_49" data-name="Path 49"
                          d="M26.142,5.85V18.436a.139.139,0,0,0,.239.1l5.407-5.407A14.635,14.635,0,0,0,26.142,5.85Z"
                          fill={fillColor}/>
                    <path id="Path_50" data-name="Path 50"
                          d="M4.226,22.915a14.641,14.641,0,0,0,5.7,7.27V17.564a.139.139,0,0,0-.239-.1Z" fill={fillColor}/>
                </g>
            </g>
        </svg>
    );
};

export default LifeIcon;

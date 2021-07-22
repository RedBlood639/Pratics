import React from 'react';

const RelationshipIcon: React.FC<{ fillColor?: string, width?: number, height?: number }> = (
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
                <path id="Icon_awesome-hand-holding-heart" data-name="Icon awesome-hand-holding-heart"
                      d="M16.237,14.774a1.027,1.027,0,0,0,1.5,0l6.423-6.735a4.889,4.889,0,0,0-.33-7.007,4.483,4.483,0,0,0-6.187.454l-.661.69-.655-.684a4.478,4.478,0,0,0-6.187-.46,4.894,4.894,0,0,0-.33,7.007Zm17.1,4.577a1.952,1.952,0,0,0-2.512,0l-5.45,4.359a3.755,3.755,0,0,1-2.359.826H16.042a.944.944,0,0,1,0-1.887H20.66a1.964,1.964,0,0,0,1.964-1.569,1.889,1.889,0,0,0-1.864-2.206H11.324a6.941,6.941,0,0,0-4.37,1.551L4.211,22.648H.944A.946.946,0,0,0,0,23.591v5.662a.946.946,0,0,0,.944.944H21.987a3.779,3.779,0,0,0,2.359-.826l8.918-7.136A1.886,1.886,0,0,0,33.341,19.351Z"
                      transform="translate(92 229.002)" fill={fillColor}/>
            </g>
        </svg>

    );
};

export default RelationshipIcon;

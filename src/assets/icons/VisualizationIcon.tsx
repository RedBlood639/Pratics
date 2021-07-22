import React from "react";

const VisualizationIcon: React.FC<{
    fillColor?: string;
    width?: number;
    height?: number;
}> = ({ fillColor = "CurrentColor", width = 20, height = 20 }) => {
    return (
        <svg
            stroke={fillColor}
            className="icons"
            fill={fillColor}
            strokeWidth="0"
            viewBox="0 0 20 20"
            height={height + "px"}
            width={width + "px"}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
};

export default VisualizationIcon;

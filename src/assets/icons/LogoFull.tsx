import React from 'react';

interface LogoFullInterface {
    color?: string,
    width?: string,
    height?: string,
    fontSize?: string,
    fontSizeText?: string,
}

export const LogoFull: React.FC<LogoFullInterface> = (
    {
        color = '#9993a5',
        width = '146',
        height = '36',
        fontSize = '20',
        fontSizeText = '9'
    }) => {
    return (
        <svg id="Horozintal_Logo" data-name="Horozintal Logo" xmlns="http://www.w3.org/2000/svg" width="159.6" height="33.704" viewBox="0 0 159.6 33.704">
            <g id="Group_80" data-name="Group 80" transform="translate(-2662 -501.939)">
                <g id="Group_81" data-name="Group 81">
                    <g id="Group_8" data-name="Group 8" transform="translate(2662 501.939)">
                        <path id="Path_22" data-name="Path 22" d="M131.113,25.14c5.734-8.8,6.824-16.568,6.21-23.291h0a4.228,4.228,0,0,1,4.438,4.263c-.06,8.241-2.219,17.307-9.075,24.48h0a3.762,3.762,0,0,1-1.572-5.452Z" transform="translate(-118.751 -1.262)" fill="#710efd" />
                        <path id="Path_23" data-name="Path 23" d="M102.822,30.542a24.422,24.422,0,0,0,5.8-14.872h0a3.633,3.633,0,0,1,3.8,3.988,24.564,24.564,0,0,1-8.457,15.988h0a3.312,3.312,0,0,1-1.147-5.1Z" transform="translate(-99.323 -10.702)" fill="#0782e4" />
                        <path id="Path_24" data-name="Path 24" d="M154.957,16.068a41.841,41.841,0,0,1-1.452,10.958,5.75,5.75,0,0,0,3.113,6.688h0A47.1,47.1,0,0,0,158.2,3.043,4.19,4.19,0,0,0,152.39.409L152,.6A41.771,41.771,0,0,1,154.957,16.068Z" transform="translate(-133.429 -0.009)" fill="#fb00a3" />
                        <path id="Path_25" data-name="Path 25" d="M94.481,35.367a21.279,21.279,0,0,1-.124,2.3A6.406,6.406,0,0,0,97.946,44.2l.1.048A26.585,26.585,0,0,0,99.35,31.908a4.187,4.187,0,0,0-5.94-3.243h0A21.5,21.5,0,0,1,94.481,35.367Z" transform="translate(-93.41 -19.309)" fill="#22ceb8" />
                        <path id="Path_26" data-name="Path 26" d="M124.764,25.623a31.757,31.757,0,0,1-.7,6.631,5.874,5.874,0,0,0,3.192,6.58l.127.06a37.034,37.034,0,0,0,1.521-21.643,4.194,4.194,0,0,0-5.874-2.853l-.263.124a31.631,31.631,0,0,1,1.994,11.1Z" transform="translate(-113.464 -9.565)" fill="#fdb806" />
                    </g>
                    <text id="MINDMAIL" transform="translate(2708.6 525.939)" fill="#000037" fontSize="20" fontFamily="SegoeUI, Segoe UI" letterSpacing="0.028em"><tspan x="0" y="0">MINDMAIL</tspan></text>
                </g>
            </g>
        </svg>
    );
};

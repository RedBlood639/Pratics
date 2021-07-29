import React from "react";

const GoogleSvg: React.FC = () => {
  return (
    <svg
      id="GooglePay"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="31"
      height="20"
      viewBox="0 0 31 20"
    >
      <defs>
        <pattern
          id="pattern"
          preserveAspectRatio="none"
          width="100%"
          height="100%"
          viewBox="0 0 98 41"
        >
          <image
            width="98"
            height="41"
            xlinkHref="data:image/png;base64,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"
          />
        </pattern>
      </defs>
      <rect
        id="Google_Pay"
        data-name="Google Pay"
        width="31"
        height="20"
        rx="2"
        fill="none"
      />
      <rect
        id="GooglePay-2"
        data-name="GooglePay"
        width="19.747"
        height="8.588"
        transform="translate(5.626 4.706)"
        fill="url(#pattern)"
      />
    </svg>
  );
};

export default GoogleSvg;

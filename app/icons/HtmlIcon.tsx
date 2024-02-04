import React from "react";

interface htmlIconAttributes {
  className?: string;
}

export const HtmlIcon: React.FC<htmlIconAttributes> = ({
  className = "",
}: htmlIconAttributes) => {
  return (
    <svg
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        rx="30"
        fill="transparent"
        stroke="transparent"
        stroke-width="0"
        stroke-opacity="100%"
        paint-order="stroke"
      ></rect>
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="currentColor">
          <path
            fill="currentColor"
            d="M4.136 3.012h15.729l-1.431 16.15l-6.451 1.826l-6.414-1.826l-1.433-16.15zm5.266 7.302l-.173-2.035l7.533.002l.173-1.963l-9.87-.002l.522 5.998h6.835l-.243 2.566l-2.179.602l-2.214-.605l-.141-1.58H7.691l.247 3.123L12 17.506l4.028-1.08l.558-6.111H9.402v-.001z"
          />
        </g>
      </svg>
    </svg>
  );
};

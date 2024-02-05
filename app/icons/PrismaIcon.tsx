import React from "react";

interface prismaIconAttributes {
  className?: string;
}

export const PrismaIcon: React.FC<prismaIconAttributes> = ({
  className = "",
}: prismaIconAttributes) => {
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
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m4.186 16.202l3.615 5.313c.265.39.754.57 1.215.447l10.166-2.718a1.086 1.086 0 0 0 .713-1.511L12.39 2.25a.448.448 0 0 0-.787-.033L4.15 15.055a1.07 1.07 0 0 0 .037 1.147zM8.5 22L12 2"
          />
        </g>
      </svg>
    </svg>
  );
};

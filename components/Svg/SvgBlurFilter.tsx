import * as React from "react";
import { SVGProps } from "react";

function SvgBlurFilter(props: SVGProps<SVGSVGElement>) {
  const id = React.useId();
  return (
    <svg
      viewBox="0 0 1500 1500"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter={`url(#${id})`} opacity={0.7}>
        <circle cx={750} cy={750} r={240} />
      </g>
      <defs>
        <filter
          id={id}
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0.1} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            result="effect1_foregroundBlur_39_4392"
            stdDeviation={250}
          />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgBlurFilter;

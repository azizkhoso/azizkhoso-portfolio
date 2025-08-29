import * as React from "react"
import { SVGProps } from "react"
function SvgBlurFilter(props: SVGProps<SVGSVGElement>) {
  const id = React.useId();
  return (
    <svg width={1038} height={938} {...props}>
      <g filter={`url(#${id})`} opacity={0.5}>
        <circle cx={290.5} cy={282.5} r={247.5} />
      </g>
      <defs>
        <filter
          id={id}
          width={1495}
          height={1495}
          x={-457}
          y={-465}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
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

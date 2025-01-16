import { FC, SVGProps } from 'react';

const IconPlus: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="20" height="20" rx="10" fill="#00B370" />
    <path
      d="M10.0001 4.34315V15.6569M4.34326 10H15.657"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default IconPlus;

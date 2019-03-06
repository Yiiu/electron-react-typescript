import * as React from 'react';

export interface IXProps {
  color?: string;
  size?: number;
  [key: string]: any;
}

export const Mini: React.SFC<IXProps> = ({
  color = 'currentColor',
  size = '24',
  ...otherProps
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size} viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...otherProps}
  >
    <line x1="18" y1="14" y2="14" x2="4" />
  </svg>
);

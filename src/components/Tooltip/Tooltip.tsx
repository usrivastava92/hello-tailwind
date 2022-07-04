import React, { useState } from 'react';

export interface TooltipProps {
  content: string | JSX.Element;
  position?: 'left' | 'right' | 'top' | 'bottom';
  children: JSX.Element;
}

export const Tooltip: React.FC<TooltipProps> = ({
  position,
  children,
  content
}) => {
  const [hide, setHideTooltip] = useState<boolean>(true);
  const tooltip = (
    <div
      className={`bg-slate-500 m-2 z-50 absolute px-1.5 py-0.5 w-fit rounded-md text-white text-sm cursor-default ${
        hide ? 'hidden' : ''
      }`}
    >
      {content}
    </div>
  );
  return (
    <>
      <div
        className='w-fit'
        onMouseEnter={() => setHideTooltip(false)}
        onMouseLeave={() => setHideTooltip(true)}
      >
        {children}
      </div>
      {tooltip}
    </>
  );
};

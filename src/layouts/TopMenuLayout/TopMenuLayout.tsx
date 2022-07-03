import React from 'react';
import {
  Button,
  ButtonHeights,
  ButtonShadowLevels,
  ButtonTheme,
  ButtonVariants,
  ButtonWidths
} from '@/components/Button';

export const TopMenuLayout: React.FC = () => {
  return (
    <div className="bg-slate-800">
      <div className="grid grid-cols-4 gap-3">
        {ButtonTheme.map((theme) =>
          ButtonVariants.map((variant) => (
            <Button key={`${theme}-${variant}`} theme={theme} variant={variant}>
              <span className="capitalize">
                {variant} {theme}
              </span>
            </Button>
          ))
        )}
      </div>
      <div className="grid grid-cols-3 gap-3 mt-3">
        {ButtonShadowLevels.map((level) => (
          <Button key={`${level}`} theme="success" shadow={level}>
            <span className="capitalize">Shadow {level}</span>
          </Button>
        ))}
        {ButtonTheme.map((theme) =>
          ButtonShadowLevels.map((level) => (
            <Button key={`${level}`} theme={theme} themedShadow shadow={level}>
              <span className="capitalize">Themed Shadow {level}</span>
            </Button>
          ))
        )}
      </div>
      <div className="grid grid-cols-7 gap-3 mt-3 justify-items-center ">
        {ButtonWidths.map((width) => (
          <Button key={`width-${width}`} theme="info" width={width}>
            <span className="capitalize">Width {width}</span>
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-6 gap-3 mt-3 content-center">
        {ButtonHeights.map((height) => (
          <Button key={`height--${height}`} theme="info" height={height}>
            <span className="capitalize">Height {height}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

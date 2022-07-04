import React from 'react';
import {
  Button,
  ButtonHeights,
  ButtonLoadingStyles,
  ButtonShadowLevels,
  ButtonTheme,
  ButtonVariants,
  ButtonWidths
} from '@/components/Button';
import SettingsIcon from '@mui/icons-material/Settings';
import { Tooltip } from '@/components/Tooltip';

export const TopMenuLayout: React.FC = () => {
  return (
    <div className="p-10 bg-slate-800">
      <Tooltip content='This is tooltip'>
        <Button>Tooltip button</Button>
      </Tooltip>
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
      <div className="grid grid-cols-3 gap-3 gap-y-8 mt-3">
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
      <div className="grid grid-cols-4 gap-3 mt-3 content-center">
        {ButtonLoadingStyles.map((loadingStyle) => (
          <Button
            theme="info"
            endIcon={<SettingsIcon />}
            loading
            loadingStyle={loadingStyle}
          >
            <span className="capitalize">{loadingStyle}</span>
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-3 mt-3 content-center">
        {ButtonVariants.map((variant) => (
          <Button
            theme="info"
            endIcon={<SettingsIcon />}
            disabled
            variant={variant}
          >
            <span className="capitalize">{variant}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

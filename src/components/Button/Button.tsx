import React, { MouseEventHandler } from 'react';
import { twMerge } from 'tailwind-merge';

export const ButtonShadowLevels = ['sm', 'md', 'lg'] as const;
export type ButtonShadowLevels = typeof ButtonShadowLevels[number];

export const ButtonHeights = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const;
export type ButtonHeights = typeof ButtonHeights[number];

export const ButtonWidths = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
  'full'
] as const;
export type ButtonWidths = typeof ButtonWidths[number];

export const ButtonRoundedLevels = [
  'none',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
  'full'
] as const;
export type ButtonRoundedLevels = typeof ButtonRoundedLevels[number];

export const ButtonVariants = ['bordered', 'soft', 'filled', 'text'] as const;
export type ButtonVariants = typeof ButtonVariants[number];

export const ButtonTheme = [
  'primary',
  'secondary',
  'success',
  'warning',
  'info',
  'danger'
] as const;
export type ButtonTheme = typeof ButtonTheme[number];

export const ButtonLoadingStyles = [
  'spinner',
  'circle',
  'arrow',
  'gear'
] as const;
export type ButtonLoadingStyles = typeof ButtonLoadingStyles[number];

export interface ButtonProps {
  variant?: ButtonVariants;
  theme?: ButtonTheme;
  shadow?: ButtonShadowLevels;
  width?: ButtonWidths;
  height?: ButtonHeights;
  rounded?: ButtonRoundedLevels;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  classes?: string;
  children?: string | JSX.Element | JSX.Element[];
  themedShadow?: boolean;
  disabled?: boolean;
  loading?: boolean;
  loadingStyle?: ButtonLoadingStyles;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<ButtonProps> = ({
  theme = 'primary',
  variant = 'filled',
  rounded = 'md',
  width,
  height,
  shadow,
  themedShadow,
  classes,
  children,
  onClick,
  loadingStyle,
  startIcon,
  endIcon,
  disabled,
  loading
}) => {
  const finalClasses = twMerge(
    'flex justify-center items-center',
    'py-2 px-4',
    'disabled:opacity-60',
    getThemeClass(theme, variant),
    getWidthClass(width),
    getHeightClass(height),
    getRoundedClass(rounded),
    getShadowClass(theme, themedShadow, shadow),
    getCursorStyle(disabled, loading),
    classes
  );
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={finalClasses}
    >
      {startIcon && React.cloneElement(startIcon, { className: 'mr-2' })}
      {children}
      {endIcon &&
        React.cloneElement(endIcon, {
          className: `ml-2 ${getLoadingClass(loading, loadingStyle)}`
        })}
    </button>
  );
};

const getCursorStyle = (disabled?: boolean, loading?: boolean): string => {
  if (disabled) {
    return 'hover:ring-0 cursor-not-allowed';
  }
  if (loading) {
    return 'hover:ring-0 cursor-progress';
  }
  return '';
};

const getLoadingClass = (
  loading?: boolean,
  loadingStyle?: ButtonLoadingStyles
): string => {
  if (!loading) {
    return '';
  }
  switch (loadingStyle) {
    case 'spinner':
      return 'animate-spin';
    case 'circle':
      return 'animate-ping';
    case 'arrow':
      return 'animate-pulse';
    case 'gear':
      return 'animate-pulse';
    default:
      return '';
  }
};

const getRoundedClass = (roundedLevel?: ButtonRoundedLevels): string => {
  switch (roundedLevel) {
    case 'sm':
      return 'rounded-sm';
    case 'md':
      return 'rounded-md';
    case 'lg':
      return 'rounded-lg';
    case 'xl':
      return 'rounded-xl';
    case '2xl':
      return 'rounded-2xl';
    case 'full':
      return 'rounded-full';
    default:
      return '';
  }
};

const getWidthClass = (width?: ButtonWidths): string => {
  switch (width) {
    case 'xs':
      return 'w-10';
    case 'sm':
      return 'w-20';
    case 'md':
      return 'w-24';
    case 'lg':
      return 'w-32';
    case 'xl':
      return 'w-40';
    case '2xl':
      return 'w-48';
    case 'full':
      return 'w-full';
    default:
      return 'w-fill';
  }
};

const getHeightClass = (height?: ButtonHeights): string => {
  switch (height) {
    case 'xs':
      return 'h-4';
    case 'sm':
      return 'h-7';
    case 'md':
      return 'h-10';
    case 'lg':
      return 'h-14';
    case 'xl':
      return 'h-20';
    case '2xl':
      return 'h-24';
    default:
      return 'h-fill';
  }
};

const getShadowClass = (
  theme: ButtonTheme,
  themedShadow?: boolean,
  shadowLevel?: ButtonShadowLevels
): string => {
  switch (shadowLevel) {
    case 'sm':
      return `shadow-md ${getShadowColorClass(theme)}`;
    case 'md':
      return `shadow-lg ${getShadowColorClass(theme)}`;
    case 'lg':
      return `shadow-xl ${getShadowColorClass(theme)}`;
    default:
      return '';
  }
};

const getThemeClass = (theme: ButtonTheme, variant: ButtonVariants): string => {
  switch (variant) {
    case 'soft':
      return `hover:ring-2
      ${getSoftBgClass(theme)} ${getTextColorClass(theme)}`;
    case 'bordered':
      return `border hover:ring-2 
      ${getBorderColorClass(theme)} ${getTextColorClass(theme)}`;
    case 'text':
      return `hover:font-medium ${getTextColorClass(theme)}`;
    default:
      return `hover:ring-2 text-white ${getBgColorClass(theme)}`;
  }
};

const getBorderColorClass = (theme: ButtonTheme): string => {
  switch (theme) {
    case 'primary':
      return 'border-primary-500 hover:ring-primary-400';
    case 'secondary':
      return 'border-secondary-500 hover:ring-secondary-400';
    case 'success':
      return 'border-success-500 hover:ring-success-400';
    case 'info':
      return 'border-info-500 hover:ring-info-400';
    case 'warning':
      return 'border-warning-500 hover:ring-warning-400';
    case 'danger':
      return 'border-danger-500 hover:ring-danger-400';
  }
};

const getBgColorClass = (theme: ButtonTheme): string => {
  switch (theme) {
    case 'primary':
      return 'bg-primary-500 hover:ring-primary-500';
    case 'secondary':
      return 'bg-secondary-500 hover:ring-secondary-500';
    case 'success':
      return 'bg-success-500 hover:ring-success-500';
    case 'info':
      return 'bg-info-500 hover:ring-info-500';
    case 'warning':
      return 'bg-warning-500 hover:ring-warning-500';
    case 'danger':
      return 'bg-danger-500 hover:ring-danger-500';
  }
};

const getTextColorClass = (theme: ButtonTheme): string => {
  switch (theme) {
    case 'primary':
      return 'text-primary-500';
    case 'secondary':
      return 'text-secondary-500';
    case 'success':
      return 'text-success-500';
    case 'info':
      return 'text-info-500';
    case 'warning':
      return 'text-warning-500';
    case 'danger':
      return 'text-danger-500';
  }
};

const getSoftBgClass = (theme: ButtonTheme): string => {
  switch (theme) {
    case 'primary':
      return 'bg-primary-100 hover:ring-primary-300';
    case 'secondary':
      return 'bg-secondary-100 hover:ring-secondary-300';
    case 'success':
      return 'bg-success-100 hover:ring-success-300';
    case 'info':
      return 'bg-info-100 hover:ring-info-300';
    case 'warning':
      return 'bg-warning-100 hover:ring-warning-300';
    case 'danger':
      return 'bg-danger-100 hover:ring-danger-300';
  }
};

const getShadowColorClass = (theme?: ButtonTheme): string => {
  switch (theme) {
    case 'primary':
      return 'shadow-primary-400';
    case 'secondary':
      return 'shadow-secondary-400';
    case 'success':
      return 'shadow-success-400';
    case 'info':
      return 'shadow-info-400';
    case 'warning':
      return 'shadow-warning-400';
    case 'danger':
      return 'shadow-danger-400';
    default:
      return '';
  }
};

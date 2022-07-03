import React, { MouseEventHandler } from 'react';
import { twMerge } from 'tailwind-merge';

export const ButtonShadowLevels = ['sm', 'md', 'lg', 'xl', '2xl'] as const;
type ButtonShadowLevels = typeof ButtonShadowLevels[number];

export const ButtonHeights = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const;
type ButtonHeights = typeof ButtonHeights[number];

export const ButtonWidths = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
  'full'
] as const;
type ButtonWidths = typeof ButtonWidths[number];

export const ButtonRoundedLevels = [
  'none',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
  'full'
] as const;
type ButtonRoundedLevels = typeof ButtonRoundedLevels[number];

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

export interface ButtonProps {
  variant?: ButtonVariants;
  theme?: ButtonTheme;
  shadow?: ButtonShadowLevels;
  width?: ButtonWidths;
  height?: ButtonHeights;
  rounded?: ButtonRoundedLevels;
  classes?: string;
  leftIcon?: string;
  rightIcon?: string;
  themedShadow?: boolean;
  disabled?: boolean;
  loading?: boolean;
  children?: string | JSX.Element | JSX.Element[];
  loadingVariant?: 'spinner' | 'circle' | 'arrow' | 'gear';
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export const Button: React.FC<ButtonProps> = ({
  theme = 'primary',
  variant = 'filled',
  width,
  height,
  shadow,
  rounded,
  themedShadow,
  classes,
  children,
  onClick,
  loadingVariant,
  leftIcon,
  rightIcon,
  disabled,
  loading
}) => {
  const finalClasses = twMerge(
    `flex justify-center items-center p-2 
    ${getThemeClass(theme, variant)}
    ${getWidthClass(width)} 
    ${getHeightClass(height)} 
    ${getRoundedClass(rounded)} 
    ${getShadowClass(theme, themedShadow, shadow)} 
    `,
    classes
  );
  return (
    <button onClick={onClick} className={finalClasses}>
      {children}
    </button>
  );
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
  const coloredShadowClass = themedShadow ? `shadow-${theme}-400` : '';
  switch (shadowLevel) {
    case 'sm':
      return `shadow-md ${coloredShadowClass}`;
    case 'md':
      return `shadow-lg ${coloredShadowClass}`;
    case 'lg':
      return `shadow-xl ${coloredShadowClass}`;
    case 'xl':
      return `shadow-2xl ${coloredShadowClass}`;
    default:
      return '';
  }
};

const getThemeClass = (theme: ButtonTheme, variant: ButtonVariants): string => {
  switch (variant) {
    case 'soft':
      return `bg-${theme}-100 text-${theme}-500`;
    case 'bordered':
      return `border border-${theme}-500 text-${theme}-500`;
    case 'text':
      return `text-${theme}-500`;
    default:
      return `bg-${theme}-500 text-white`;
  }
};

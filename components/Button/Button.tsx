import React, { MouseEventHandler } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonShadowLevels = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
type ButtonHeights = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
type ButtonWidths = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
type ButtonRoundedLevels = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
type ButtonVariants = 'bordered' | 'soft' | 'filled' | 'text';

export interface ButtonProps {
  variant?: ButtonVariants;
  shadow?: ButtonShadowLevels;
  width?: ButtonWidths;
  height?: ButtonHeights;
  rounded?: ButtonRoundedLevels;
  classes?: string;
  leftIcon?: string;
  rightIcon?: string;
  disabled?: boolean;
  loading?: boolean;
  children?: string | JSX.Element | JSX.Element[];
  loadingVariant?: 'spinner' | 'circle' | 'arrow' | 'gear';
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export class Button {
  static Primary: React.FC<ButtonProps> = ({
    children,
    variant,
    classes = '',
    ...rest
  }) => {
    let themeClass = 'bg-indigo-500 text-white';
    switch (variant) {
      case 'soft':
        themeClass = 'bg-indigo-100 text-indigo-500';
        break;
      case 'bordered':
        themeClass = 'border-indigo-500 text-indigo-500';
        break;
      case 'text':
        themeClass = 'text-indigo-500';
        break;
    }
    return (
      <Button.Base
        {...rest}
        variant={variant}
        classes={`${themeClass} ${classes}`}
      >
        {children}
      </Button.Base>
    );
  };
  static Secondary: React.FC<ButtonProps> = ({
    children,
    variant,
    classes = '',
    ...rest
  }) => {
    let themeClass = 'bg-gray-500 text-white';
    switch (variant) {
      case 'soft':
        themeClass = 'bg-gray-100 text-gray-500';
        break;
      case 'bordered':
        themeClass = 'border-gray-500 text-gray-500';
        break;
      case 'text':
        themeClass = 'text-gray-500';
        break;
    }
    return (
      <Button.Base
        {...rest}
        variant={variant}
        classes={`${themeClass} ${classes}`}
      >
        {children}
      </Button.Base>
    );
  };
  static Tertiary: React.FC<ButtonProps> = ({
    children,
    variant,
    classes = '',
    ...rest
  }) => {
    let themeClass = 'bg-blue-500 text-white';
    switch (variant) {
      case 'soft':
        themeClass = 'bg-blue-100 text-blue-500';
        break;
      case 'bordered':
        themeClass = 'border-blue-500 text-blue-500';
        break;
      case 'text':
        themeClass = 'text-blue-500';
        break;
    }
    return (
      <Button.Base
        {...rest}
        variant={variant}
        classes={`${themeClass} ${classes}`}
      >
        {children}
      </Button.Base>
    );
  };
  static Success: React.FC<ButtonProps> = ({
    children,
    variant,
    classes = '',
    ...rest
  }) => {
    let themeClass = 'bg-green-500 text-white';
    switch (variant) {
      case 'soft':
        themeClass = 'bg-green-100 text-green-500';
        break;
      case 'bordered':
        themeClass = 'border-green-500 text-green-500';
        break;
      case 'text':
        themeClass = 'text-green-500';
        break;
    }
    return (
      <Button.Base
        {...rest}
        variant={variant}
        classes={`${themeClass} ${classes}`}
      >
        {children}
      </Button.Base>
    );
  };
  static Info: React.FC<ButtonProps> = ({
    children,
    variant,
    classes = '',
    ...rest
  }) => {
    let themeClass = 'bg-blue-500 text-white';
    switch (variant) {
      case 'soft':
        themeClass = 'bg-blue-100 text-blue-500';
        break;
      case 'bordered':
        themeClass = 'border-blue-500 text-blue-500';
        break;
      case 'text':
        themeClass = 'text-blue-500';
        break;
    }
    return (
      <Button.Base
        {...rest}
        variant={variant}
        classes={`${themeClass} ${classes}`}
      >
        {children}
      </Button.Base>
    );
  };
  static Danger: React.FC<ButtonProps> = ({
    children,
    variant,
    classes = '',
    ...rest
  }) => {
    let themeClass = 'bg-red-500 text-white';
    switch (variant) {
      case 'soft':
        themeClass = 'bg-red-100 text-red-500';
        break;
      case 'bordered':
        themeClass = 'border-red-500 text-red-500';
        break;
      case 'text':
        themeClass = 'text-red-500';
        break;
    }
    return (
      <Button.Base
        {...rest}
        variant={variant}
        classes={`${themeClass} ${classes}`}
      >
        {children}
      </Button.Base>
    );
  };
  static Warning: React.FC<ButtonProps> = ({
    children,
    variant,
    classes = '',
    ...rest
  }) => {
    let themeClass = 'bg-yellow-500 text-white';
    switch (variant) {
      case 'soft':
        themeClass = 'bg-yellow-100 text-yellow-500';
        break;
      case 'bordered':
        themeClass = 'border-yellow-500 text-yellow-500';
        break;
      case 'text':
        themeClass = 'text-yellow-500';
        break;
    }
    return (
      <Button.Base
        {...rest}
        variant={variant}
        classes={`${themeClass} ${classes}`}
      >
        {children}
      </Button.Base>
    );
  };
  static Base: React.FC<ButtonProps> = ({
    variant = 'filled',
    rounded = 'md',
    height,
    width,
    children,
    shadow,
    leftIcon,
    rightIcon,
    classes,
    onClick
  }) => {
    const finalClasses = twMerge(
      `p-2 ${getVariantClass(variant)} ${widthClass(width)} ${heightClass(
        height
      )} ${getRoundedClass(rounded)} ${shadowClass(shadow)}`,
      classes
    );
    return (
      <button onClick={onClick} className={finalClasses}>
        {children}
      </button>
    );
  };
}

const getVariantClass = (variant?: ButtonVariants): string => {
  switch (variant) {
    case 'bordered':
      return 'border';
    case 'filled':
    case 'soft':
    case 'text':
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

const widthClass = (width?: ButtonWidths): string => {
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

const heightClass = (height?: ButtonHeights): string => {
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

const shadowClass = (shadowLevel?: ButtonShadowLevels): string => {
  switch (shadowLevel) {
    case 'sm':
      return 'shadow-sm';
    case 'md':
      return 'shadow-md';
    case 'lg':
      return 'shadow-lg';
    case 'xl':
      return 'shadow-xl';
    case '2xl':
      return 'shadow-2xl';
    default:
      return '';
  }
};

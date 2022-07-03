import React from 'react';
import { Button, ButtonTheme, ButtonVariants } from '@/components/Button';


export const TopMenuLayout: React.FC = () => {
  return (
    <>
      {ButtonTheme.map(theme =>
        ButtonVariants.map(variant =>
          <Button key={`${theme}-${variant}`} theme={theme} variant={variant}>
            <span className='capitalize'>{variant} {theme}</span>
          </Button>
        )
      )}
    </>
  );
};

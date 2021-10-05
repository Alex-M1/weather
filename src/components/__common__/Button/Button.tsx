import { useTheme } from '@src/components/hoc/withTheme';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { SizesProps, BorderProps, FontProps, PositionProps } from '../styled/types';
import { StButton } from './styled';

interface IProps extends SizesProps, BorderProps, FontProps, PositionProps {
  translateKey: string;
  onClick: () => void;
  backgroundColor?: string;
  borderRadius?: string;
}
export const Button: React.FC<IProps> = ({
  width = '100px',
  padding = '10px',
  textAlign = 'center',
  onClick,
  translateKey,
  borderRadius = '6px',
  ...props
}) => {
  const { t } = useTranslation();
  const { colors, theme } = useTheme();
  return (
    <StButton
      colors={colors}
      theme={theme}
      width={width}
      padding={padding}
      textAlign={textAlign}
      onClick={onClick}
      borderRadius={borderRadius}
      {...props}
    >
      {t(translateKey)}
    </StButton >
  );
};

/// <reference path="../../../StartUi.d.ts" />
import styled from 'styled-components';

interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {
  theme: StartUi.Theme;
};

const Button = styled.button`
  cursor: pointer;
  user-select: none;
  border: ${(props: IButtonProps) => props.theme.neutralColorDarker} 1px solid;
  background-color: ${(props: IButtonProps) => props.theme.neutralColor};
  color: ${(props: IButtonProps) => props.theme.neutralColorInverted};
  border-radius: ${(props: IButtonProps) => props.theme.standardRadius};
  padding: ${(props: IButtonProps) => props.theme.baseUnit}px ${(props: IButtonProps) => props.theme.baseUnit * 2}px;
  font-weight: bold;
  font-size: 16px;

  &:hover {
    background-color: ${(props: IButtonProps) => props.theme.neutralColorDarker};
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 3px ${(props: IButtonProps) => props.theme.focusHaloColor};
  }

  &:active {
    background-color: ${(props: IButtonProps) => props.theme.neutralColorLighter};
    border-color: ${(props: IButtonProps) => props.theme.neutralColorLighter};
  }

  &:disabled {
    pointer-events: none;
    opacity: ${(props: IButtonProps) => props.theme.standardOpactiy};
  }
`

export default Button;

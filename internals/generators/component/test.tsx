interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {
  theme: StartUi.Theme;
};

const TestComponent: React.SFC = (props: IButtonProps) => {
  return <div>Hello</div>;
}

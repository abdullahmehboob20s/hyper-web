import styles from "scss/components/LinkButton.module.scss";

interface Props {
  title: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  type?: "button" | "submit" | "reset" | undefined;
  otherProps?: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
}

function Button(props: Props) {
  const { title, onClick, type, otherProps } = props;

  return (
    <button
      {...otherProps}
      type={type}
      onClick={onClick}
      className={`${styles.button} bg-link-2 white fs-16px weight-7 pointer opacity-hover-effect`}
    >
      {title}
    </button>
  );
}

export default Button;

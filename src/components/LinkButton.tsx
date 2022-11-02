import styles from "scss/components/LinkButton.module.scss";
import { Link, LinkProps } from "react-router-dom";

interface Props {
  title: string;
  LinkProps?: LinkProps;
}

function LinkButton(props: Props) {
  const { title, LinkProps } = props;

  return (
    <>
      <Link
        {...LinkProps}
        to={LinkProps?.to ? LinkProps?.to : "/"}
        className={`${styles.button} bg-link-2 white fs-16px weight-7 pointer opacity-hover-effect`}
      >
        {title}
      </Link>
    </>
  );
}

export default LinkButton;

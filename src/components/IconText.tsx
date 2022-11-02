import styles from "scss/components/IconText.module.scss";

interface Props {
  Icon: React.FC;
  text: string;
}

function IconText({ Icon, text }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <Icon />
      </div>
      <p className="fs-16px text weight-5">{text}</p>
    </div>
  );
}

export default IconText;

import { InputHTMLAttributes } from "react";
import styles from "scss/components/Input.module.scss";

interface Props {
  placeholder: string;
  value: string | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  name?: string;
  otherProps?: React.DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
}

function Input({ placeholder, value, onChange, name, otherProps }: Props) {
  return (
    <div className={styles.floatingLable}>
      <input
        {...otherProps}
        value={value}
        onChange={onChange}
        name={name}
        className={`${styles.did_floating_input} fs-14px black weight-5`}
        type="text"
        placeholder=" "
      />
      <label className={`${styles.did_floating_label} fs-14px weight-5`}>
        {placeholder}
      </label>
    </div>
  );
}

export default Input;

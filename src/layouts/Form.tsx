import Button from "components/Button";
import Input from "components/Input";
import { useState } from "react";
import styles from "scss/layouts/Form.module.scss";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Msg from "components/Msg";

interface FormData {
  ethAddress: string;
  telegram: string;
  discord: string;
}

function Form() {
  const [formData, setFormData] = useState<FormData>({
    ethAddress: "",
    telegram: "",
    discord: "",
  });

  const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      formData.ethAddress === "" ||
      formData.telegram === "" ||
      formData.discord === ""
    )
      return;

    toast.success(<Msg />);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={`${styles.inputs} form-inputs mb-30px`}>
        <Input
          otherProps={{ required: true }}
          name="ethAddress"
          onChange={onChangeHandler}
          value={formData.ethAddress}
          placeholder="ETH Address *"
        />
        <Input
          otherProps={{ required: true }}
          name="telegram"
          onChange={onChangeHandler}
          value={formData.telegram}
          placeholder="Telegram *"
        />
        <Input
          otherProps={{ required: true }}
          name="discord"
          onChange={onChangeHandler}
          value={formData.discord}
          placeholder="Discord *"
        />
      </div>

      <p className="fs-16px weight-4 italic mb-30px">
        Join the{" "}
        <a href="/" className="link-2 underline">
          Hyper Liquid server
        </a>{" "}
        with the same Discord username.
      </p>

      <div className={styles.formSubmit}>
        <Button
          otherProps={{
            disabled:
              formData.ethAddress === "" ||
              formData.telegram === "" ||
              formData.discord === ""
                ? true
                : false,
          }}
          type="submit"
          title="Submit"
        />
      </div>
    </form>
  );
}

export default Form;

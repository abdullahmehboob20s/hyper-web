import Button from "components/LinkButton";
import Input from "components/Input";
import useMediaQuery from "hooks/useMediaQuery";
import Form from "layouts/Form";
import styles from "scss/pages/RegisterationPage.module.scss";

function RegisterationPage() {
  // if you are changing it then also change it in (_breakpoints.scss) file
  const isBellow640px = useMediaQuery("(max-width: 640px)");

  return (
    <div
      className={`${styles.wrapper} registeration-page landing-page page-container bg-purple-to-blue`}
    >
      <div className={styles.card}>
        <div className={styles.left}>
          {isBellow640px ? (
            <img
              src="images/logo-variant-1.svg"
              className={styles.logo}
              alt=""
            />
          ) : (
            <img
              src="images/logo-variant-2.svg"
              className={styles.logo}
              alt=""
            />
          )}

          <h1 className="fs-40px weight-7 mb-20px">
            Paper trading competition
          </h1>

          <p className="fs-16px weight-3 mb-20px">
            Trade mock USDC at no cost and win prizes from a $7,500 pool.
          </p>

          <div className="mb-20px">
            <p className="fs-16px weight-3">Starting Nov 9 at 18:00 UTC. </p>
            <p className="fs-16px weight-3">Ending Nov 16 at 18:00 UTC. </p>
          </div>

          <p className="fs-16px weight-3">
            Learn more{" "}
            <a href="here" className="link-2 weight-7 underline">
              here
            </a>
            .
          </p>
        </div>
        <div className={styles.right}>
          <h1 className="link-2 fs-40px weight-7 mb-20px">Register</h1>

          <Form />
        </div>
      </div>
    </div>
  );
}

export default RegisterationPage;

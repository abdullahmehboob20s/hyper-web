import IconText from "components/IconText";
import styles from "scss/pages/LandingPage.module.scss";
import { HiChevronDoubleUp } from "react-icons/hi";
import { MdNotInterested } from "react-icons/md";
import { BsLightningFill, BsBricks } from "react-icons/bs";
import LinkButton from "components/LinkButton";

function LandingPage() {
  return (
    <div
      className={`${styles.wrapper} landing-page page-container bg-purple-to-blue`}
    >
      <div className={styles.card}>
        <img src="images/logo-variant-1.svg" className={styles.logo} alt="" />
        <div data-type="titles">
          <h1 className="weight-8 text weight-7 fs-52px">Trade perpetuals</h1>
          <p className="text fs-20px weight-7 mb-10px">
            with best-in-class liquidity, speed, and price
          </p>

          <div className={styles.launchExchangeButtonWrapper}>
            <LinkButton
              LinkProps={{ to: "/register", target: "_self" }}
              title="Launch exchange"
            />
          </div>
        </div>

        <div className={styles.sideBySide}>
          <div className={styles.left}>
            <IconText
              text="20x leverage"
              Icon={() => <HiChevronDoubleUp style={{ fontSize: ".7em" }} />}
            />
            <IconText
              text="Zero gas"
              Icon={() => <MdNotInterested style={{ fontSize: ".7em" }} />}
            />
            <IconText
              text="Lightning fast"
              Icon={() => <BsLightningFill style={{ fontSize: ".6em" }} />}
            />
            <IconText
              text="Decentralized"
              Icon={() => <BsBricks style={{ fontSize: ".6em" }} />}
            />
          </div>
          <div>
            <h4 className="fs-20px text weight-7 mb-10px dont-change-font-size">
              Paper trading competition
            </h4>

            <p className="fs-16px text lh-1_4 mb-20px lh-1_8">
              Win prizes from a $7,500 pool. <br /> Starting Nov 8 at 18:00 UTC.{" "}
              <br />
              Learn more {">"}{" "}
              <a href="here" className="weight-9 underline link-2">
                here
              </a>
            </p>

            <div className={styles.registerButtonWrapper}>
              <LinkButton
                LinkProps={{ to: "/register", target: "_self" }}
                title="Register"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

import { Button } from "../Button";
import { Modal } from "../Modal";

import styles from "./styles.module.scss";

export const CreateLot = ({
  changeStep,
}: {
  changeStep: (type: "next" | "back") => void;
}) => {
  return (
    <Modal>
      <div className={styles.top}>
        <p className={styles.title}>Most played</p>
        <img src="/assets/svg/heartCircle.svg" alt="heart circle" />
      </div>
      <div className={styles.center}>
        <img className={styles.persons} src="/assets/svg/persons.svg" />
        <img src="/assets/svg/arrows.svg" />
        <img className={styles.persons} src="/assets/svg/persons.svg" />
      </div>
      <div className={styles.texts}>
        <p>Multi-user Lot</p>
        <span>
          In this lot multiple people will bet against you. The condition for
          the lot to start is both sides should have equal funds.
        </span>
      </div>

      <Button title="Create Lot" onClick={() => changeStep("next")} />
    </Modal>
  );
};

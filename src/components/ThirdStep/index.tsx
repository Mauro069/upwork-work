import { InputCalendar } from "../InputCalendar";
import { DummyProps } from "../../utils/data";
import { Button } from "../Button";
import { useState } from "react";

import styles from "./styles.module.scss";

interface ThirdStepProps {
  changeStep: (type: "next" | "back") => void;
  yourAsset: DummyProps | null;
  opposingAsset: DummyProps | null;
}

export const ThirdStep = ({
  changeStep,
  opposingAsset,
  yourAsset,
}: ThirdStepProps) => {
  const [start, setStart] = useState<Date | null>(null);
  const [end, setEnd] = useState<Date | null>(null);

  console.log({ start, end });

  return (
    <>
      <p className={styles.title}>Take Position</p>

      <div className={styles.assets}>
        <div className={styles.asset}>
          <span>Your Asset</span>
          <img src={yourAsset?.img} alt="" />
          <span>{yourAsset?.name}</span>
        </div>
        <img src="/assets/svg/create.svg" alt="create" />
        <div className={styles.asset}>
          <span>Opossing Asset</span>
          <img src={opposingAsset?.img} alt="" />
          <span>{opposingAsset?.name}</span>
        </div>
      </div>

      <div className={styles.inputContainer}>
        <label>Fund your Pool (Ethereum)</label>
        <input type="text" placeholder="$100.00" />
      </div>

      <div className={styles.inputContainer}>
        <label>Lot Starts On</label>
        <InputCalendar handleChange={setStart} />
      </div>

      <div className={styles.inputContainer}>
        <label>Lot Ends On</label>
        <InputCalendar handleChange={setEnd} />
      </div>

      <div className={styles.buttons}>
        <Button
          title="Back"
          onClick={() => changeStep("back")}
          type="secondary"
        />
        <Button title="Create Lot" />
      </div>
    </>
  );
};

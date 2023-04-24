import { createSteps } from "../../utils/createSteps";
import styles from "./styles.module.scss";

interface StepsProps {
  steps: number;
  currentStep: number;
}
export const Steps = ({ currentStep, steps }: StepsProps) => {
  return (
    <div className={styles.stepsContainer}>
      <div className={styles.steps}>
        {createSteps(steps).map((step) => (
          <p
            key={step}
            className={`${styles.step} ${
              step === currentStep && styles.current
            } ${step < currentStep && styles.ready}`}
          >
            {step}
          </p>
        ))}
      </div>
      <div className={styles.line} />
    </div>
  );
};

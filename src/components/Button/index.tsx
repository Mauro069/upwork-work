import styles from "./styles.module.scss";

interface ButtonProps {
  title: string;
  onClick?: () => void;
  type?: "primary" | "secondary";
}

export const Button = ({ title, onClick, type = "primary" }: ButtonProps) => {
  return (
    <button className={`${styles.button} ${styles[type]}`} onClick={onClick}>
      {title}
    </button>
  );
};

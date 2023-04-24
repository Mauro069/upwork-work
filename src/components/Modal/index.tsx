import styles from "./styles.module.scss";

interface ModalProps {
  children: JSX.Element | JSX.Element[];
}
export const Modal = ({ children }: ModalProps) => {
  const modalContainerStyles =
    "bg-[#14172b] fixed top-0 left-0 w-full h-full z-50";

  const modalStyles = `${styles.modal} max-w-[600px] relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`;

  return (
    <main className={modalContainerStyles}>
      <div className={modalStyles}>{children}</div>
    </main>
  );
};

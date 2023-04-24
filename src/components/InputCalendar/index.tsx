import Datepicker from "tailwind-datepicker-react";
import { useState } from "react";

import styles from "./styles.module.scss";

const options = {
  todayBtn: false,
  clearBtn: false,
  autoHide: false,
  datepickerClassNames: "top-0 mt-[-332px]",
  language: "en",
};

export const InputCalendar = ({
  handleChange,
}: {
  handleChange: (date: Date) => void;
}) => {
  const [show, setShow] = useState<boolean>(false);
  const onChange = (selectedDate: Date) => {
    handleChange(selectedDate);
    setShow(false);
  };

  const handleClose = (state: boolean) => {
    setShow(state);
  };

  return (
    <div className={styles.calendarContainer}>
      <Datepicker
        classNames="text-[#fff]"
        options={options}
        onChange={onChange}
        show={show}
        setShow={handleClose}
      />
    </div>
  );
};

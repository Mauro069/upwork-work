import { ChangeEvent } from "react";

import styles from "./styles.module.scss";

interface SearchBarProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className={styles.searchBar}>
      <img src="/assets/svg/search.svg" />
      <input
        value={value}
        onChange={onChange}
        type="text"
        placeholder="Search Token eg. ETH, Gold etc"
      />
    </div>
  );
};

import { DataType } from "../../utils/data";

import styles from "./styles.module.scss";

interface FilterProps {
  filters: DataType[];
  toggleFilter: (filter: DataType) => void;
  filterActive: DataType | string;
}

export const Filters = ({
  filters,
  toggleFilter,
  filterActive,
}: FilterProps) => {
  return (
    <div className={styles.filters}>
      {filters.map((filter) => (
        <p
          key={filter}
          className={`${filter === filterActive && styles.active}`}
          onClick={() => toggleFilter(filter)}
        >
          {filter}
        </p>
      ))}
    </div>
  );
};

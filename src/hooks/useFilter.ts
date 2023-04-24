import { useState } from "react";
import { DataType } from "../utils/data";

export const useFilter = () => {
  const [filterActive, setFilterActive] = useState<DataType | string>("");

  const toggleFilter = (filter: DataType) =>
    filter === filterActive ? setFilterActive("") : setFilterActive(filter);

  return {
    toggleFilter,
    filterActive,
  };
};

import { DummyProps, dummyData } from "../../utils/data";
import { useFilter } from "../../hooks/useFilter";
import { filters } from "../../utils/filters";
import { SearchBar } from "../SearchBar";
import { ItemList } from "../ItemList";
import { Filters } from "../Filters";
import { Button } from "../Button";
import { useState } from "react";

import styles from "./styles.module.scss";

interface FirstStepProps {
  changeStep: (type: "next" | "back") => void;
  yourAsset: DummyProps | null;
  setYourAsset: (asset: DummyProps) => void;
}

export const FirstStep = ({
  changeStep,
  yourAsset,
  setYourAsset,
}: FirstStepProps) => {
  const [searchValue, setSearchValue] = useState("");
  const { filterActive, toggleFilter } = useFilter();

  const filteredData = dummyData.filter(
    (item) =>
      item.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1 &&
      (filterActive === "" || item.type === filterActive)
  );

  return (
    <>
      <div className={styles.searchBarContainer}>
        <p>Choose your Asset</p>
        <SearchBar
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>

      <Filters
        filterActive={filterActive}
        filters={filters}
        toggleFilter={toggleFilter}
      />

      <ItemList
        items={filteredData}
        itemSelected={yourAsset}
        setItemSelected={setYourAsset}
      />

      <Button title="Next" onClick={() => changeStep("next")} />
    </>
  );
};

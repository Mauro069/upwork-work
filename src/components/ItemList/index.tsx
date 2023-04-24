import { DummyProps } from "../../utils/data";

import styles from "./styles.module.scss";

interface ItemListProps {
  items: DummyProps[];
  itemSelected: null | DummyProps;
  setItemSelected: (item: DummyProps) => void;
}

export const ItemList = ({
  items,
  itemSelected,
  setItemSelected,
}: ItemListProps) => {
  return (
    <div className={styles.items}>
      {items.map((item) => (
        <Item
          key={item.id}
          itemSelected={itemSelected}
          onClick={() => setItemSelected(item)}
          {...item}
        />
      ))}
    </div>
  );
};

interface ItemProps extends DummyProps {
  onClick: () => void;
  itemSelected: DummyProps | null;
}

const Item = ({ id, img, name, itemSelected, onClick }: ItemProps) => {
  return (
    <div
      onClick={onClick}
      className={`${styles.item} ${id === itemSelected?.id && styles.selected}`}
    >
      <img src={img} />
      <p>{name}</p>
    </div>
  );
};

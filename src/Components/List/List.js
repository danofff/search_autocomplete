import classes from "./List.module.css";

const List = ({ drugs, onListElementClick, isActive }) => {
  return (
    <ul className={`${classes.autocomplete} ${isActive ? classes.active : ""}`}>
      {drugs.map((drug, idx) => {
        return (
          <li key={`druglist_${idx}`} onClick={() => onListElementClick(drug)}>
            {drug}
          </li>
        );
      })}
    </ul>
  );
};

export default List;

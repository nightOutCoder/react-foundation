export default function TabButton({ children, onSelect, isSelected }) {
  console.log("Tab Button COMPONENT EXECUTION!");
  return (
    <li>
      <button className={isSelected ? "active" : ""} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}

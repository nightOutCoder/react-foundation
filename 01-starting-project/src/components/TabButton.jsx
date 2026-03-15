export default function TabButton({ children, onSelect }) {
  console.log("Tab Button COMPONENT EXECUTION!");
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}

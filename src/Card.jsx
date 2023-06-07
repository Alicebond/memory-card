export default function Card(props) {
  return (
    <div className="card" onClick={props.onClick}>
      {props.number || "A card"}
    </div>
  );
}

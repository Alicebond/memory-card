export default function Card(props) {
  return <div className="card">{props.number || "A card"}</div>;
}

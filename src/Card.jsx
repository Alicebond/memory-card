export default function Card(props) {
  return (
    <div className="card" onClick={props.onClick}>
      <img src={props.image} alt={props.alt} />
      <p className="name">{props.name}</p>
    </div>
  );
}

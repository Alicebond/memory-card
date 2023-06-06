export default function Header(props) {
  return (
    <header className="header">
      <div className="header-left">
        <h1>Memory Nothing Card</h1>
        <p>
          Get points by clicking on an image but don&apos;t click on any more
          than once!
        </p>
      </div>
      <div className="header-right">
        <p>Score: {props.score}</p>
        <p>Best score: 99</p>
      </div>
    </header>
  );
}

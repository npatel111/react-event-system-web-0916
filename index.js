const app = "I don't do much.";
class Tickler extends React.Component {
  constructor() {
    super();

    this.tickle = this.tickle.bind(this);
  }

  tickle() {
    console.log('Tee hee!');
  }

  render() {
    return (
      <button>Tickle me!</button>
    );
  }
}

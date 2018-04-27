class Toggle extends React.Component {
  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);

    this.state = {
      visible: false
    }
  }
  handleShow() {
    this.setState((prevState) => {
      return {
        visible: !prevState.visible
      }
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Challenge!</h1>
        <button onClick={this.handleShow}>{this.state.visible ? 'Hide!' : 'Show!' }</button>
        <p>{this.state.visible ? 'Uncovered details!' : ''}</p>
    </div>
    )
  }
}

ReactDOM.render(<Toggle />, document.getElementById('app'));
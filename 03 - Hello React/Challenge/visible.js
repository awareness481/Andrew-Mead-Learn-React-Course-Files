let show = false
let pText = "";
let buttonText = "Show!";

const showHide = (e) => {
  show ? show = false : show = true;

  if (show) {
    pText = "Show the details!";
    buttonText = "Hide!";
  } else {
    pText = "";
    buttonText = "Show!";
  }

  render();
}



const render = () => {
  const template = (
    <div id="app">
      <h1>Visibility Challenge!</h1>
      <button onClick={showHide}>{buttonText}</button>
      <p>{pText}</p>
    </div>
  );

  ReactDOM.render(template, document.getElementById('app'));
}

render();



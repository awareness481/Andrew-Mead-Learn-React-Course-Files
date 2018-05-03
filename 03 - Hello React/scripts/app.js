"use strict";

var show = false;
var pText = "";
var buttonText = "Show!";

var showHide = function showHide(e) {
  show ? show = false : show = true;

  if (show) {
    pText = "Show the details!";
    buttonText = "Hide!";
  } else {
    pText = "";
    buttonText = "Show!";
  }

  render();
};

var render = function render() {
  var template = React.createElement(
    "div",
    { id: "app" },
    React.createElement(
      "h1",
      null,
      "Visibility Challenge!"
    ),
    React.createElement(
      "button",
      { onClick: showHide },
      buttonText
    ),
    React.createElement(
      "p",
      null,
      pText
    )
  );

  ReactDOM.render(template, document.getElementById('app'));
};

render();

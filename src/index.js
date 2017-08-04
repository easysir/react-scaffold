import React from 'react';
import { render } from "react-dom";

class Button extends React.Component {
  render() {
    return (
      <button style={{backgroundColor: this.props.color}}>
        {this.props.children}
      </button>
    );
  }
}

class Message extends React.Component {
  render() {
    return (
      <div>
        {this.props.text} <Button color={this.props.color}>Delete</Button>
      </div>
    );
  }
}

class MessageList extends React.Component {
  render() {
    const color = 'purple';
    const Children = [];
    this.props.messages.forEach((message, index) => {
      Children.push(<Message text={message.text} key={index} color={color} />);
    });
    console.log(Children);
    return <div>{Children}</div>
  }
}

render(
  <MessageList messages={["hello", "world", "yes"]}/>,
  document.getElementById("root")
)




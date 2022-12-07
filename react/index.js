class Hello extends React.Component {
  render() {
    return React.createElement('div',  { style: { color: "green" } }, `Hello ${this.props.toWhat}`);
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(Hello, {toWhat: 'World'}, null));
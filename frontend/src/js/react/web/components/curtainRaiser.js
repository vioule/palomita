const React = require("react");

export default class CurtainRaiser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      update: false
    }
    this.update = this.update.bind(this);
  };
  update() {
    this.setState(state=>{return{update: !state.update}})
  };
  render() {
    let maxHeight, opacity;
    this.wrapper && this.props.trigger ?
    (maxHeight = this.wrapper.clientHeight, 
    opacity = 1) :
    (maxHeight = 0, opacity = 0)
    return (
      <div className="curtainRaiser" style={{maxHeight, opacity}}>
          <div ref={c => (this.wrapper = c)}>
            {React.Children.map(this.props.children, child=>(
              React.cloneElement(child, {updateParent: this.update})
            ))}
          </div>
      </div>
    )
  };
};
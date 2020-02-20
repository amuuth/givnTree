import React from 'react';
// import Slots from './slotsContainer.jsx';

class Event extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.togglePanel = this.togglePanel.bind(this);
    }

    togglePanel(e){
        this.setState({open: !this.state.open})
    }

    componentDidUpdate(){
        // this.props.on Toggle(this.props.index);
    }

    render() {
      return (<div>
        {this.props.name ? (
        <div onClick={(e)=>this.togglePanel(e)} className='event'>
        
        
            <strong>NAME: {this.props.name} </strong> | Description: {this.props.description} | Time: {this.props.start} - {this.props.end}</div>
            ) : null}
        
        
        {this.state.open ? (
            <div className='event'>
                This is where the slots would be!!!
                {/* <Slots></Slots> */}
            </div>
            ) : null}
      </div>);
    }
  }

export default Event


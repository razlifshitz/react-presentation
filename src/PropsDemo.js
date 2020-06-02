import React from 'react';

class PropsDemo extends React.Component{
    state = {
        input: ''
    };

    onInputChange = e => {
        this.setState({...this.state, input:e.target.value})
    };

    render() {
       return <div>
           <input onChange={this.onInputChange} value={this.state.input}/>
           <ToUpper text={this.state.input}/>
       </div>
    }
}

export default PropsDemo

function ToUpper({text}) {
    return <span>{text.toUpperCase()}</span>
}
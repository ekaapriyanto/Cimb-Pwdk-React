import React from 'react'

class LifecycleScreen extends React.Component {

    state = {
        username: "",
        time: new Date(),
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            this.triggerClock()  
        }, 1000);
    }
    triggerClock = () => {
        this.setState({time: new Date()})
    }
    componentWillMount(){
        clearInterval(this.timer)
    }
    // componentDidUpdate() {
    //     console.log(this.state.username)
    // }
    // componentWillMount() {
    //     alert("Component will mount")
    // }

    render(){
        return(
            <div>
                <h1>LifeCycleScreen</h1>
                {this.state.time.toLocaleTimeString()}
                {/* <h2>welcome, {this.state.username}</h2> */}
                {/* <input type="text" onChange={(e) => this.setState({username: e.target.value})}/> */}
            </div>
        )
    }
}

export default LifecycleScreen;
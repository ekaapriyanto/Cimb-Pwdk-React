import React from 'react'

// const CounterScreen = () => {
//     return (
//         <div>
//             <h1>{props.kota}</h1>
//         </div>
//     )
// }

class Human {
    constructor(a, b, c){
        this.namaBelakang = a
        this.namaDepan = b
    }
}

class CounterScreen extends React.Component {

    state = {
        countera: 0,
        counterb: 0,
        counterc: 0,
        berapa: 'kali'
    }
    render() {
        const { countera, counterb, counterc} = this.state
        return (
            <div>
                <h1>
                    Counter 1 = {countera}
                </h1>
                <input className="btn btn-primary"
                type='button'
                value='+'
                onClick={() => this.setState({ countera: countera + 1})}/>
                <input className="btn btn-danger"
                type='button'
                value='-'
                onClick={() => this.setState({ countera: countera - 1})}/>
                
                <h1>
                    Counter 2 = {counterb}
                </h1>
                <input className="btn btn-primary"
                type='button'
                value='+'
                onClick={() => this.setState({ counterb: counterb + 1})}/>
                <input className="btn btn-danger"
                type='button'
                value='-'
                onClick={() => this.setState({ counterb: counterb - 1})}/>

                <h1>
                    Counter 3 = {counterc}
                </h1>
                <input className="btn btn-primary"
                type='button'
                value='+'
                onClick={() => this.setState({ counterc: counterc + 1})}/>
                <input className="btn btn-danger"
                type='button'
                value='-'
                onClick={() => this.setState({ counterc: counterc - 1})}/>

                <h1>
                    Counter all = {countera, counterb, counterc}
                </h1>
                <input className="btn btn-primary"
                type='button'
                value='+'
                onClick={() => this.setState({
                    countera: countera + 1,
                    counterb: counterb + 1,
                    counterc: counterc + 1
                })}/>
                <input className="btn btn-danger"
                type='button'
                value='-'
                onClick={() => this.setState({
                    countera: countera - 1,
                    counterb: counterb - 1,
                    counterc: counterc - 1
                })}/>
            </div>
        )
    }
}

export default CounterScreen;
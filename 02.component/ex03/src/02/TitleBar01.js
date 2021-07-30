import React, { Component } from 'react';

export default class TitleBar01 extends Component {

    constructor() {
        super(...arguments);
        // this.no = 10; 
        this.state = {
            no : 10
        }
    }

    onClickHeader(e) {
        // this.no++;
        // console.log('TitleBar01 click!!', this.no);
        // this.render(); // 이렇게 호출하면 안됨
        
        console.log('TitleBar01 click!!', ':' ,this.state.no);
        this.setState({
            no : this.state.no +1
        })
    }

    render() {
        return (
            <h1 onClick={this.onClickHeader.bind(this)}
                style={{
                    cursor: 'pointer'
                }}>
                ex03 - Function Event Handler(Class Component) {this.state.no}
            </h1>
        )
    }

}
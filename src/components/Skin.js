import React, { Component } from 'react'
import {
    BrowserRouter as Router,
 Link
  } from "react-router-dom";

export default class Skin extends Component {
    constructor(){
        super()
        this.state={
        
        }
    }

    componentDidUpdate(){    
        window.onpopstate = e => {
            this.props.goBack()
        }
      }

    componentDidMount(){
        let filteredData = []
            Object.keys(this.props.allSkins).map((obj, i) => {
                if(this.props.allSkins[obj][0].includes(this.props.godName)){
                    filteredData.push(this.props.allSkins[obj])
                }
            });

        this.setState({
            filteredData
        })
    }

    render() {
        return (
            <Router>
            <div>
                <div className="skins-header ">
                    <Link to="/">
                <h1 className="go-back" onClick={this.props.goBack}>Go Back</h1></Link>
                <h1 className="header">{this.props.godName}</h1>
                </div>
                {this.state.filteredData && <div className="skins">
                {this.state.filteredData.map((god, i) =>(
                        <div key={god[0]+i} className='single-skin'>
                            <div className='single-skin'>
                        <img src={god[4]} width="300" alt={god[0]}/>
                        <div className="skin-name">
                        <p>{god[0]}</p>
                        </div>
                        </div>
                        <div className="links">
                        <a href={god[1]} rel="noreferrer" target="_blank" >1920x1080</a>
                        <a href={god[2]} rel="noreferrer" target="_blank">2056x1446</a>
                        <a href={god[3]} rel="noreferrer" target="_blank">3840x2160</a>
                        <a href={god[4]} rel="noreferrer" target="_blank">Mobile</a>
                        </div>
                        </div>
              
                ))}</div>}
            </div>
            </Router>
        )
    }
}

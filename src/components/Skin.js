import React, { Component } from 'react'

export default class Skin extends Component {
    constructor(){
        super()
        this.state={
        
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
            <div>
                <div className="skins-header ">
                <p onClick={this.props.goBack}>Go Back</p>
                <h1 className="header">{this.props.godName}</h1>
                </div>
                {this.state.filteredData && <div className="skins">
                {this.state.filteredData.map((god, i) =>(
                        <div key={god[0]} className='single-skin'>
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
                        <a href={god[4]} rel="noreferrer" target="_blank">1080x1920</a>
                        </div>
                        </div>
              
                ))}</div>}
            </div>
        )
    }
}

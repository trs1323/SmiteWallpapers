import React, { Component } from 'react'
import Skin from './Skin';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default class Home extends Component {
    constructor(){
        super()
        this.state={
            allSkins: {},
            skinsloaded: false,
            showGodSkins: false,
            godName: "",
        }
    }

//return new Promise ((resolve, reject) => {})
    componentDidMount() {
        this.promise()
      }

      getAllUpdates=()=>{
       return new Promise ((resolve, reject) => {
        fetch("https://cms.smitegame.com/wp-json/smite-api/get-posts/1?tag=update-notes&per_page=10000", {
            method: "GET", 
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            }
        })
          .then(res => res.json())
          .then(
            (res) => {

                const filtered = res.filter((update) => update.real_categories.includes('PC'))
                
              this.setState({
                allUpdates: filtered
              });

              fetch("https://cms.smitegame.com/wp-json/smite-api/all-gods/1?",{
                method: "GET", 
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
              .then(res => res.json())
              .then(
                  (res) => {
                    this.setState({
                      gods: res
                    });
                    resolve()
                  }  
              )
              
            }
          )
       
        })
      }

      
      //gets the update url and recives the update info from the url given
    sendSlug = () =>{
        return new Promise ((resolve, reject) => {   
        for(let x = 0; x<this.state.allUpdates.length; x++){

        if(this.state.allUpdates[x].real_categories.includes('PC')){

            if(this.state.allUpdates[x].id === 15808){ continue }else{
        fetch(`https://cms.smitegame.com/wp-json/smite-api/get-post/1?slug=${this.state.allUpdates[x].slug}`,{
            method: "GET",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            }
        })
          .then(res => res.json())
          .then(
            (res) => {
                var splitt = res.content.split('\n');

            //filters only the skins in the content
            var filtered = splitt.filter(word => word.startsWith('<li><a href=') || word.startsWith('<p class=\"name\">') || word.startsWith('<h3>')|| word.startsWith('<h5>Recolor ') || word.startsWith("<h5>Shadows Over Hercopolis</h5>") || word.startsWith("<h5>Legend of the Foxes</h5>"))
            
            //deletes the non skins links
            filtered = filtered.filter(word => word !== "<h5>Recolor &#8211; Shogun Hachiman</h5>" && word!== "<h5>Recolor &#8211; Red Rum Baron Samedi</h5>" && word !== "<h5>Recolor &#8211; Myrmidon Achilles</h5>" && word !== '<li><a href="https://www.smitegame.com/news/8-6-bonus-update-notes-live-june-29/">More details here</a>!</li>' && word !== '<li><a href="https://www.smitegame.com/news/8-8-bonus-update-notes-live-september-7th/">More details here!</a></li>')
   
        
            var i,j,temparray,chunk = 5;
            for (i=0,j=filtered.length; i<j; i+=chunk) {
                temparray = filtered.slice(i,i+chunk);

                //grabs name
                const searchTerm = '>';
                const searchTerm1 = '<';
                let indexOfFirst = temparray[0].indexOf(searchTerm,1);
                let indexOfSecond = temparray[0].indexOf(searchTerm1,1);
                let onlyWord = temparray[0].slice(indexOfFirst+ 1, indexOfSecond)

                temparray[0] = onlyWord;

                //grabs urls
                const URLsearchTerm = '=';
                let URLsearchTerm1 = ".jpg";

        
       

                let URLindexOfFirst = temparray[1].indexOf(URLsearchTerm);
                let URLindexOfSecond = temparray[1].indexOf(URLsearchTerm1);
                if(URLindexOfSecond === -1){
                    URLindexOfSecond = temparray[1].indexOf('.png');
                }
                let onlyURL = temparray[1].slice(URLindexOfFirst+ 2, URLindexOfSecond+ 4)

                temparray[1] = onlyURL;

                URLindexOfFirst = temparray[2].indexOf(URLsearchTerm);
                URLindexOfSecond = temparray[2].indexOf(URLsearchTerm1);
                if(URLindexOfSecond === -1){
                    URLindexOfSecond = temparray[2].indexOf('.png');
                }
                onlyURL = temparray[2].slice(URLindexOfFirst+ 2, URLindexOfSecond+ 4)

                temparray[2] = onlyURL;
                
                URLindexOfFirst = temparray[3].indexOf(URLsearchTerm);
                URLindexOfSecond = temparray[3].indexOf(URLsearchTerm1);
                if(URLindexOfSecond === -1){
                    URLindexOfSecond = temparray[3].indexOf('.png');
                }
                onlyURL = temparray[3].slice(URLindexOfFirst+ 2, URLindexOfSecond+ 4)

                temparray[3] = onlyURL;
                
                URLindexOfFirst = temparray[4].indexOf(URLsearchTerm);
                URLindexOfSecond = temparray[4].indexOf(URLsearchTerm1);
                if(URLindexOfSecond === -1){
                    URLindexOfSecond = temparray[4].indexOf('.png');
                }
                onlyURL = temparray[4].slice(URLindexOfFirst+ 2, URLindexOfSecond+ 4)

                temparray[4] = onlyURL;

                
                let tempState = `${x}${i}`
                this.setState({
                    allSkins: {...this.state.allSkins, [tempState]: temparray}
                  });
                  if(Object.keys(this.state.allSkins).length >750){
                          resolve();
                  }
                }


            },
           
            (error) => {
             console.log(error)
            }
          )
        }
    }
    }
        })
    }

    setGodName = (name) =>{
        this.setState({
            godName: name,
            showGodSkins: true
        })
    }

    goBack = () =>{
        this.setState({
            showGodSkins: false
        })
    }

    filterSkinsToGods = () =>{
        
        Object.keys(this.state.gods).map((god, i) =>{
            let arr = [];

            Object.keys(this.state.allSkins).map((obj, i) => {
                if(this.state.allSkins[obj][0].includes(god.god_name_EN)){
                    //filteredData.push(this.props.allSkins[obj])
                }
            });

        });

       
    }

promise = () =>{
    this.getAllUpdates()
        .then(()=>{
            this.sendSlug()
            .then(() =>{
                this.setState({
                    skinsloaded: true
                })
            })
        })
}


    render() {

        return (
            <Router>
            <Switch>
                
            <div>
            
                {this.state.showGodSkins ?(
                <Route path="/skins">
                    <div>
                    <Skin allSkins={this.state.allSkins} godName={this.state.godName} goBack={this.goBack}/>
                    </div>
                </Route>):( this.state.gods && this.state.skinsloaded?(<Route path="/"> <div >
            
                    <div>
                    <h1 className="header">Smite Card Art Wallpapers</h1>
                    <div className="home">
                    {this.state.gods.map((god, i) =>(<Link to="skins" key={god.id}><div onClick={()=> this.setGodName(god.name)} className="single-god"  id={god.name.replace(/\s/g, '')} >
                            <div className='home-godcardart'>
                            <img src={god.card.replace(/[']/g, '')} alt={god.name}/>
                            </div>
                            <div className='god-name'>
                            <p onClick={()=> this.setGodName(god.name)}>{god.name}</p>
                            </div>
                   </div></Link> ))}
                    </div>
                    </div>
                    </div></Route>): <h1 className="loading">Loading...</h1>)}
                    <footer className="footer">
                    <p>Smite Wallpapers By Tanner Shilson.</p>
                    <p>Data &amp; Art provided by Hi-Rez Studios. © Hi-Rez Studios, Inc. All rights reserved.</p>
                    </footer>
            </div>
            </Switch>
            </Router>
        )
    }
}
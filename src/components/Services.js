import React, { Component } from 'react'
import { FaCocktail,FaShuttleVan,FaDrum,FaCamera} from 'react-icons/fa'
import Title from "./Title"
export default class Services extends Component {
  state={
    services:[
      {
        icon:<FaShuttleVan/>,
        title:"Free Shuttle",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, aut."
      },
      {
        icon:<FaDrum/>,
        title:"Wedding Band",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, aut."
      },
      {
        icon:<FaCamera/>,
        title:"Wedding Photoshoot",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, aut."
      },
      {
        icon:<FaCocktail/>,
        title:"Free Cocktails",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, aut."
      }
    ]
  }

  render() {
    return (
       <section className="services">
        <Title title="services"/>
        <div className="services-center">
          {this.state.services.map((item,index) => {
            return ( 
            <article key={index} className="service">
            <span>{item.icon}</span>
            <h6>{item.title}</h6>
            <p>{item.info}</p>
          </article>
          );
          }
          )}
        </div>
      </section>
    )
  }
}

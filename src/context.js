import React, { Component } from 'react'
import items from './data'
const VenueContext= React.createContext();
class VenueProvider extends Component {
  state={
    Venue:[],
    sortedVenue:[],
    featuredVenue:[],
    loading:true
  };
//getdata
  componentDidMount(){
    let Venue=this.formatData(items)
    let featuredVenue=Venue.filter(venue=>venue.featured===true);
    this.setState({
      Venue,
      featuredVenue,
      sortedVenue:Venue,
      loading: false
    }
    )
  }

  formatData(items){
    let tempItems= items.map(item =>{

      let id=item.sys.id;
      let images=item.fields.images.map(image=> image.fields.file.url);
      let venue ={...item.fields,images,id}
      return venue;
    })
    return tempItems;
  }
  
  getVenue = (Hall) => {
    let tempVenue = [...this.state.Venue];
    const venue = tempVenue.find(venue => venue.Hall === Hall);
    return venue;
  }
  
  render() {
     
    return (
      <VenueContext.Provider 
      value={{
        ...this.state,
        getVenue: this.getVenue}}>
        {this.props.children}
      </VenueContext.Provider>
      
    );
  }
}
// console.log(getVenue);
const VenueConsumer= VenueContext.Consumer;

export function withVenueConsumer(Component){
  return function ConsumerWrapper(props){
    return(
      <VenueConsumer>
        {value=> <Component {...props} context={value}/>}
      </VenueConsumer>
    )
  }
}
export{VenueProvider,VenueConsumer,VenueContext};
import React, { Component } from 'react'
import items from './data'
const VenueContext= React.createContext();
class VenueProvider extends Component {
  state={
    Venue:[],
    sortedVenue:[],
    featuredVenue:[],
    loading:true,
    type: 'all',
    capacity:100,
    price:0,
    minPrice:0,
    maxPrice:0,
    wedding:false,
    birthday: false,
    threadceremony:false,
    anniversary:false,
    others:false,
    officeconferences:false,
    veg: false,
    nveg: false,
    anveg: false
  };
//getdata
  componentDidMount(){
    let Venue=this.formatData(items)
    let featuredVenue=Venue.filter(venue=>venue.featured===true);
    let maxPrice=Math.max(...Venue.map(item=>item.price));

    this.setState({
      Venue,
      featuredVenue,
      sortedVenue:Venue,
      loading: false,
      price: maxPrice,
      maxPrice
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
  handleChange= event =>{
    const target=event.target
    const value=target.type ==='checkbox'? target.checked:target.value
    const name= event.target.name;
    this.setState({
      [name]:value
    },this.filterVenue)
  };
  filterVenue= () =>{
   let{
     Venue,
     type,
     capacity,
     price,
     wedding,
     birthday,
     threadceremony,
     anniversary,
     others,
     officeconferences,
     veg,
     nveg,
     anveg
   }=this.state
//all the venues
   let tempVenue=[...Venue];
//transform value
capacity=parseInt(capacity)
price=parseInt(price)

//filter by type
   if(type!=='all')
   {
     tempVenue =tempVenue.filter(venue =>venue.type===type)
   }
//filter by capacity
if(capacity!==100){
  tempVenue=tempVenue.filter(venue =>venue.capacity>=capacity)
}

//filter by price
tempVenue=tempVenue.filter(venue=>venue.price <=price);
//filter by food
if(veg){
  tempVenue=tempVenue.filter(venue=>venue.veg===true)
}
if(nveg){
  tempVenue=tempVenue.filter(venue=>venue.nveg===true)
}
if(anveg){
  tempVenue=tempVenue.filter(venue=>venue.anveg===true)
}
//filter by events
if(wedding){
  tempVenue=tempVenue.filter(venue=>venue.wedding===true)
}
if(birthday){
  tempVenue=tempVenue.filter(venue=>venue.birthday===true)
}
if(threadceremony){
  tempVenue=tempVenue.filter(venue=>venue.threadceremony===true)
}
if(anniversary){
  tempVenue=tempVenue.filter(venue=>venue.anniversary===true)
}
if(officeconferences){
  tempVenue=tempVenue.filter(venue=>venue.officeconferences===true)
}
if(others){
  tempVenue=tempVenue.filter(venue=>venue.others===true)
}

//change state
   this.setState({
     sortedVenue:tempVenue
   })
  };
  
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
        getVenue: this.getVenue, handleChange:this.handleChange}}>
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
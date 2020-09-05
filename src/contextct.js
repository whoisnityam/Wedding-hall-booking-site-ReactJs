import React, { Component } from 'react'
import items from './datact'
const CatererContext= React.createContext();
class CatererProvider extends Component {
  state={
    Caterer:[],
    sortedCaterer:[],
    loading:true,
    location: '',
    capacity:100,
    price:0,
    minPrice:0,
    maxPrice:0,
    alc: false,
    nalc: false,
    veg: false,
    nveg: false,
    snveg: false
  };
//getdata
  componentDidMount(){
    let Caterer=this.formatData(items)
   // let featuredVenue=Venue.filter(venue=>venue.featured===true);
    let maxPrice=Math.max(...Caterer.map(item=>item.price));

    this.setState({
      Caterer,
      sortedCaterer:Caterer,
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
      let caterer ={...item.fields,images,id}
      return caterer;
    })
    return tempItems;
  }
  handleChange= event =>{
    const target=event.target
    const value=target.type ==='checkbox'? target.checked:target.value
    const name= event.target.name;
    this.setState({
      [name]:value
    },this.filterCaterer)
  };
  filterCaterer= () =>{
   let{
     Caterer,
     location,
     capacity,
     price,
     alc,
     nalc,
     veg,
     nveg,
     snveg
   }=this.state
//all the caterers
   let tempCaterer=[...Caterer];
//transform value
capacity=parseInt(capacity)
price=parseInt(price)

//filter by location
   if(location!=='all')
   {
     tempCaterer =tempCaterer.filter(caterer =>caterer.location===location)
   }
//filter by capacity
if(capacity!==100){
  tempCaterer=tempCaterer.filter(caterer =>caterer.capacity>=capacity)
}

//filter by price
tempCaterer=tempCaterer.filter(caterer=>caterer.price <=price);
//filter by food type
if(veg){
  tempCaterer=tempCaterer.filter(caterer=>caterer.veg===true)
}
if(nveg){
  tempCaterer=tempCaterer.filter(caterer=>caterer.nveg===true)
}
if(snveg){
  tempCaterer=tempCaterer.filter(caterer=>caterer.snveg===true)
}
//filter by bevarages
if(alc){
  tempCaterer=tempCaterer.filter(caterer=>caterer.alc===true)
}
if(nalc){
  tempCaterer=tempCaterer.filter(caterer=>caterer.nalc===true)
}

//change state
   this.setState({
     sortedCaterer:tempCaterer
   })
  };
  
  getCaterer = (name) => {
    let tempCaterer = [...this.state.Caterer];
    const caterer = tempCaterer.find(caterer => caterer.name === name);
    return caterer;
  }
  
  render() {
     
    return (
      <CatererContext.Provider 
      value={{
        ...this.state,
        getCaterer: this.getCaterer, handleChange:this.handleChange}}>
        {this.props.children}
      </CatererContext.Provider>
      
    );
  }
}
// console.log(getVenue);
const CatererConsumer= CatererContext.Consumer;

export function withCatererConsumer(Component){
  return function ConsumerWrapper(props){
    return(
      <CatererConsumer>
        {value=> <Component {...props} context={value}/>}
      </CatererConsumer>
    )
  }
}
export{CatererProvider,CatererConsumer,CatererContext};
import React from "react";
// import { GlobalCotext } from "../App";
import '../App.css';


import { Card } from "../card";
import { withGlobalState} from "../hocs/withGlobalState";




// export const CardList = () => {
//   const {state:{citiesList}} = useContext(GlobalCotext)
//   return (
//     <div className="card_list">
//     {
//       citiesList.map(city => <Card key={city} city = {city}/>)
//     }
//   </div>
//   )
// }


export class CardListNoState extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      orderBy: 'desc'
    }
    this.handleOnChange = this.handleOnChange.bind(this)
  }

  handleOnChange(event) {
    this.setState({
      orderBy: event.target.value
    })
  }

  render() {
    const {orderBy} = this.state
    const {citiesList} = this.props.state
    let sortedCitiesList = citiesList.sort()
    if(orderBy === 'desc'){
      sortedCitiesList.reverse()
    }
    if(sortedCitiesList.length === 3) {
      throw new Error('i crashed!')
    }
    return(
      <>
        <select className="select" value={orderBy} onChange={this.handleOnChange}>
          <option value='asc'>By name asc</option>
          <option value='desc'>By name desc</option>
        </select>
        <div className="card_list">
          {
            sortedCitiesList.map(city => <Card key={city} city = {city}/>)
          }
        </div>
    </>
    )
  }
}


export const CardList = withGlobalState(CardListNoState)

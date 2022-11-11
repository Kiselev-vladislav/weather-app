import React from "react";
// import { GlobalCotext } from "../App";
import "../App.css";

import { Card } from "../card";
import { withGlobalState } from "../hocs/withGlobalState";

export class CardListNoState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderBy: "desc",
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
    this.setState({
      orderBy: event.target.value,
    });
  }

  render() {
    const { orderBy } = this.state;
    const { citiesList } = this.props.state;
    let sortedCitiesList = citiesList.sort();
    if (orderBy === "desc") {
      sortedCitiesList.reverse();
    }
    return (
      <>
        <select
          className="select"
          value={orderBy}
          onChange={this.handleOnChange}
        >
          <option value="asc">By name asc</option>
          <option value="desc">By name desc</option>
        </select>
        <div className="card_list">
          {sortedCitiesList.map((city, index) => (
            <Card key={index} city={city} />
          ))}
        </div>
      </>
    );
  }
}

export const CardList = withGlobalState(CardListNoState);

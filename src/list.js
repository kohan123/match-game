import React from "react";
import PropTypes from "prop-types";

const List = ({elements}) =>  {
  return <ul className="list">
   {elements.map((el) => <li>{el}</li>)}
  </ul>
};

List.defaultProps = {
  elements: []
}

List.propTypes = {
  elements: PropTypes.array
}

export default List;
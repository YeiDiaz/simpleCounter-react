import React from "react";
import PropTypes from "prop-types";
//import { CounterMaker } from "./CounterMaker";
//include images into your bundle

//create your first component
export function Home(props) {
	return (
		<div className="container">
			<i className="far fa-clock fa-4x  p-2" />
			<div className="card1 p-2">{props.prop1}</div>
			<div className="card2 p-2">{props.prop2}</div>
			<div className="card3 p-2">{props.prop3}</div>
			<div className="card4 p-2">{props.prop4}</div>
			<div className="card5 p-2">{props.prop5}</div>
			<div className="card6 p-2">{props.prop6}</div>
		</div>
	);
}
Home.propTypes = {
	prop0: PropTypes.string,
	prop1: PropTypes.string,
	prop2: PropTypes.string,
	prop3: PropTypes.string,
	prop4: PropTypes.string,
	prop5: PropTypes.string,
	prop6: PropTypes.string
};

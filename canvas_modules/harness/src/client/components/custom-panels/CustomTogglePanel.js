/*******************************************************************************
 * Licensed Materials - Property of IBM
 * (c) Copyright IBM Corporation 2017. All Rights Reserved.
 *
 * Note to U.S. Government Users Restricted Rights:
 * Use, duplication or disclosure restricted by GSA ADP Schedule
 * Contract with IBM Corp.
 *******************************************************************************/

/* eslint-disable no-empty-function */
import React from "react";
import CustomCtrlToggle from "./CustomCtrlToggle";

class CustomTogglePanel {
	static id() {
		return "custom-toggle-panel";
	}
	constructor(parameters, valueAccessor, updateControlValue, datarecordMetadata) {
		this.parameters = parameters;
		this.valueAccessor = valueAccessor;
		this.updateControlValue = updateControlValue;
		this.datarecordMetadata = datarecordMetadata;
	}

	renderPanel() {
		const controlId = this.parameters[0];
		return (
			<CustomCtrlToggle
				key={controlId}
				ref={controlId}
				parameter={controlId}
				value={this.valueAccessor(controlId)}
				updateControlValue={this.updateControlValue}
			/>
		);
	}
}

export default CustomTogglePanel;
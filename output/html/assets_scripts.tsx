import * as React from "react";
import Assets from '../assets';
import { Tabular, iPanelProps } from 'qmi';
import { __, _x, _n, sprintf } from '@wordpress/i18n';

class Scripts extends React.Component<iPanelProps, {}> {

	render() {
		const { data } = this.props;

		return (
			<Tabular id={this.props.id}>
				<Assets data={data}/>
			</Tabular>
		);
	}

}

export default Scripts;

import React from 'react';
import { ListGroup } from 'react-bootstrap';

class DishComments extends React.Component {
	state = {};
	render() {
		return (
			<>
				<div className={`mt-${this.props.marginTop}`}>
					<h2>Comments for {this.props.dish.name}</h2>
					{this.props.dish.comments.length > 0 ? (
						<ListGroup>
							{this.props.dish.comments.map((c) => (
								<ListGroup.Item key={c.id}>
									"{c.comment}" from {c.author}
								</ListGroup.Item>
							))}
						</ListGroup>
					) : (
						<span>No Heads Up so far...</span>
					)}
				</div>
			</>
		);
	}
}

// props.dish is the whole object

export default DishComments;

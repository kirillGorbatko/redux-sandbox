import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

const Counter = ({counter, inc, dec, rndp, rndm}) => {
	return (
		<div className='content'>
			<h2 id='counter'>{ counter }</h2>
			<div className='container'>
				<button
					onClick={dec}
					type='button'>DEC</button>
				<button 
					onClick={inc}
					type='button'>INC</button>
				<button 
					onClick={rndm}
					type='button'>RND-</button>
				<button
					onClick={rndp}
					type='button'>RND+</button>
			</div>
		</div> 
	);
};

const mapStateToProps = (state) => {
	return {
		counter: state
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

import './EmptyList.css';
import React from 'react';
import Button from '../shared/Button';
import { Link } from 'react-router-dom';

const EmptyList = () => {
	return (
		<div className="empty-list">
			<h1 className="emptyList-title"> Be the first to add your products!</h1>
			<Button
				className="emptyList-button"
				as={Link}
				to="/advert/new"
				variant="primary"
			>
				Add
			</Button>
		</div>
	);
};

export default EmptyList;

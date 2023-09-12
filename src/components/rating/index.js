import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import {useDispatch} from "react-redux";
import {editRating} from "../../redux/action/productAction";

export default function BasicRating(props) {
	
	const dispatch = useDispatch()
	
	const handleEditRating = (object, new_rating) => {
		const new_value = {...object, rating: new_rating}
		dispatch(editRating(new_value))
	}
	
	
	return (
		<Box
			sx={{
				'& > legend': { mt: 2 },
			}}
		>
			{
				props.rating === 'read' ?
					<Rating name="read-only" value={props.value} readOnly />
					:
					<Rating
						defaultValue={props.value}
						// value={props.value}
						onChange={(event, newValue) => {
							handleEditRating(props.product, newValue)
							;
						}}
					/>
			}
		</Box>
	);
}

import React, {useMemo} from 'react';
import {Typography} from "@mui/material";

const Price = (props) => {
	
	const discount_price = useMemo(() => {
		return Number(props.old_price) - (Number(props.old_price) / 100 * Number(props.discount))
	}, [props.old_price, props.discount])
	
	return (
		<>
			<Typography variant='h6' sx={cardDiscountPrice}>
				$ {discount_price}
				<span
					style={{
						color: '#030D15',
						fontSize:' 14px',
						padding: '0 5px'
					}}
				>
					/
				</span>
				<span
					className={'card-price'}>
					 $ {props.old_price}
				</span>
			</Typography>
		</>
	);
};

const cardDiscountPrice = {
	fontWeight: "500",
	fontSize: "16px",
	lineHeight: "27px",
	color: "#030D15",
	padding: '10px 0 '
}

export default Price;
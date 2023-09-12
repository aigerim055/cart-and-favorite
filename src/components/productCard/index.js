import React from 'react';
import BasicRating from "../rating";
import Price from "../productPrice";
import ProductIcons from "../productIcons";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";

const ProductCard = ({product}) => {
	return (
		<Box>
			<Box sx={card}>
				<Box sx={{
					padding: '35px'
				}}
					className={'cardDesc'}
				>
					<Box>
						{
							product.discount ?
								<Typography className={'card-discount'}>Get up to {product.discount}% off Today Only!</Typography>
								:
								null
						}
						<img
							src={product.img}
							alt=""
							style={{
								width: '100%',
								height: '370px',
								marginBottom: '35px',
								objectFit: 'contain'
							}}
						/>
					</Box>
					<div className="card-desc">
						<Typography variant='h6'>{product.title}</Typography>
						{
							product.discount ?
								<Price discount={product.discount} old_price={product.price}/>
								:
								<Typography sx={cardDiscountPrice} variant='h6'>$ {product.price}</Typography>
						}
						<BasicRating rating={'read'} value={product.rating}/>
					</div>
				</Box>
				
				<Box sx={cardOverlay}>
					<ProductIcons product={product}/>
					{
						product.discount ?
							<Price discount={product.discount} old_price={product.price}/>
							:
							<Typography sx={cardDiscountPrice} variant='h6'>$ {product.price}</Typography>
					}
					<BasicRating rating={''} value={product.rating} product={product}/>
				</Box>
			</Box>
		</Box>
	);
};

const cardOverlay = {
	width: '100%',
	fontStyle: 'normal',
	fontWeight: '400',
	fontSize: '30px',
	lineHeight: '37px',
	color: '#000',
	background: '#FAFAFA',
	position: 'absolute',
	padding: '35px',
	marginTop: '460px',
	bottom: '-250px',
}

const card = {
	position: "relative",
	overflow: "hidden",
	border: "1px solid rgba(0, 0, 0, 0.1)",
	height: "100%",
	
	'&:hover .MuiBox-root':{
		bottom: '0',
		transition: '1.6s',
	},
}


const cardDiscountPrice = {
	fontWeight: "500",
	fontSize: "16px",
	lineHeight: "27px",
	color: "#030D15",
	padding: '20px 0 '
}

export default ProductCard;
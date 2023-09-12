import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import {Button, Box} from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {useDispatch, useSelector} from "react-redux";
import {addToCart, editFavorite, increaseAmount} from "../../redux/action/productAction";
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';


const ProductIcons = ({product}) => {
	
	const carts = useSelector(state => state.carts)
	const dispatch = useDispatch()
	
	const handleAddToCart = () => {
		if (carts.find(cart => cart.id === product.id)){
			return dispatch(increaseAmount(product.id))
		} else {
			const newValue = {...product, amountInCart: 1}
			dispatch(addToCart(newValue))
		}
	}
	
	const handleEditFavorite = (object) => {
		if (object.is_favorite) {
			const new_value = {...object, is_favorite: false}
			dispatch(editFavorite(new_value))
		} else {
			const new_value = {...object, is_favorite: true}
			dispatch(editFavorite(new_value))
		}
	}
	
	
	return (
		<Box
			sx={productButtons}
		>
			<Button onClick={handleAddToCart}>
				<ShoppingCartOutlinedIcon sx={icon}/>
			</Button>
			<Button>
				{/*хз что надо делать при нажатии на лупу, так что пусть будет так*/}
				<a href={product.img} target={"_blank"}>
					<ZoomInIcon sx={icon} />
				</a>
			</Button>
			<Button onClick={() => handleEditFavorite(product)}>
				{
					product.is_favorite ?
						<FavoriteOutlinedIcon sx={{color: 'red', fontSize: 30}} />
						 :
						<FavoriteBorderIcon  sx={icon} />
				}
			</Button>
		</Box>
	);
};

const productButtons = {
	display: "flex",
	alignItems: 'center',
	justifyContent: 'space-between',
	marginBottom: '20px'
}

const icon = {
	color: '#000',
	fontSize: 30
}

export default ProductIcons;




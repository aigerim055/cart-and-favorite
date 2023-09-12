import Header from "../components/header";
import Box from "@mui/material/Box";

import {useSelector} from "react-redux";
import CardItem from "../components/cartItem";
import {Typography} from "@mui/material";


const CartPage = () => {
	
	
	const carts = useSelector(state => state.carts)
	
	const total_sum = carts.reduce((acc, product) => {
		return ((Number(product.price) - (Number(product.price) / 100 * Number(product.discount))) * product.amountInCart) + acc
	}, 0)
	
	return (
		<>
			<Header/>
			<Box className={'container'}>
				{/*<h4>Shopping Card</h4>*/}
				{
					carts.map(product => (
						<Box key={product.id} >
							<CardItem product={product}/>
						</Box>
					))
				}
				{
					carts.length ?
						<Typography className={'totalSum'} variant={'h4'}>Total sum: $ {total_sum}</Typography>
						:
						<span>tut poka niche net</span>
				}
			</Box>
		</>
	);
};

export default CartPage;
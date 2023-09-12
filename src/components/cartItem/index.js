import React, {useMemo} from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {decreaseAmount, deleteInCart, increaseAmount} from "../../redux/action/productAction";
import {useDispatch} from "react-redux";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';


const CardItem = ({product}) => {
	
	const dispatch = useDispatch()
	
	
	const discount_price = useMemo(() => {
		return Number(product.price) - (Number(product.price) / 100 * Number(product.discount))
	}, [product.price, product.discount])
	
	
	
	
	return (
		<>
			<Box className={'cart-item'}>
				<Box>
					<img src={product.img} alt=""/>
				</Box>
				<Box>
					<Typography variant={'h5'}>{product.title}</Typography>
				</Box>
				<Box className={'cartButton'}>
					<Button
						disabled={product.amountInCart === product.amount}
						onClick={() => dispatch(increaseAmount(product.id))}>
						+
					</Button>
					<span>{product.amountInCart}</span>
					<Button
						disabled={product.amountInCart === 0}
						onClick={() => dispatch(decreaseAmount(product.id))}
					>
						-
					</Button>
				</Box>
				<Box>
					<Typography
						variant={'h6'}>
						$ {discount_price}
					</Typography>
				</Box>
				<Box>
					<Button
						onClick={() => dispatch(deleteInCart(product.id))}
					>
						<DeleteOutlinedIcon sx={{color: 'red', fontSize: '40px'}}/>
					</Button>
				</Box>
			</Box>
		</>
	);
};

export default CardItem;
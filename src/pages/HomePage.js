import React from 'react';
import Header from "../components/header";
import ProductCard from "../components/productCard";
import {useSelector} from "react-redux";
import Img from '../images/img.png'

const HomePage = () => {
	
	const products = useSelector(state => state.products)
	
	
	
	return (
		<>
			<Header/>
			{/*<section>*/}
			{/*	<div className="container">*/}
			{/*		<div className="row">*/}
			{/*			<div className="col-6">*/}
			{/*				<h1>*/}
			{/*					An exciting place*/}
			{/*					<span>for the whole family to shop.</span>*/}
			{/*				</h1>*/}
			{/*				<p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>*/}
			{/*				<div>*/}
			{/*					<button>shop now</button>*/}
			{/*					<h6>$ 249.99</h6>*/}
			{/*					<h6>$ 249.99</h6>*/}
			{/*				</div>*/}
			{/*			</div>*/}
			{/*			<div className="col-6">*/}
			{/*				<img src={Img} alt=""/>*/}
			{/*			</div>*/}
			{/*		</div>*/}
			{/*	</div>*/}
			{/*</section>*/}
			<div className={'container'}>
				<div className="row">
					{
						products.map(product => (
							<div key={product.id} className="col-4">
								<ProductCard product={product}/>
							</div>
						))
					}
				</div>
			</div>
		</>
	);
};

export default HomePage;
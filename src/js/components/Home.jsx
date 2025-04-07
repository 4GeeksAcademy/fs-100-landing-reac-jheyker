import React from "react";
import { Navbar } from './Navbar';
import { Jumbotron } from './Jumbotron';
import { Card } from './Card';
import { Footer } from './Footer'
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container d-flex justify-content-center flex-column">
				<Jumbotron />
				<div className="container mb-5">
					<div className="row">
						<Card />
						<Card />
						<Card />
						<Card />
					</div>
				</div>
			</div >
			<Footer />
		</div>
	);
};

export default Home;
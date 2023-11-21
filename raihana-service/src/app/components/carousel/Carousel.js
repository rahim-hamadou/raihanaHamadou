"use client";
import Image from "next/image";

import React, { useEffect } from "react";
import helpdesk from "../../assets/img/helpdesk.jpg";

export default function Carousel() {
	return (
		<div>
			{/* <div className="background"></div>
			<div className="background-texture"></div> */}

			<section className="carousel">
				<h2 className="categories__title">My List</h2>
				<div className="carousel__container">
					<div className="carousel-item">
						<Image className="carousel-item__img" src="/me" width={800} height={500} alt="people" />
						<div className="carousel-item__details">
							<div className="controls">
								<span className="fas fa-play-circle"></span>
								<span className="fas fa-plus-circle"></span>
							</div>
							<h5 className="carousel-item__details--title">Descriptive Title</h5>
							<h6 className="carousel-item__details--subtitle">Date and Duration</h6>
						</div>
					</div>
					<div className="carousel-item">
						<Image className="carousel-item__img" src={helpdesk} width={800} height={500} alt="people" />
						<div className="carousel-item__details">
							<div className="controls">
								<span className="fas fa-play-circle"></span>
								<span className="fas fa-plus-circle"></span>
							</div>
							<h5 className="carousel-item__details--title">Descriptive Title</h5>
							<h6 className="carousel-item__details--subtitle">Date and Duration</h6>
						</div>
					</div>
					<div className="carousel-item">
						<Image className="carousel-item__img" src={helpdesk} width={800} height={500} alt="people" />
						<div className="carousel-item__details">
							<div className="controls">
								<span className="fas fa-play-circle"></span>
								<span className="fas fa-plus-circle"></span>
							</div>
							<h5 className="carousel-item__details--title">Descriptive Title</h5>
							<h6 className="carousel-item__details--subtitle">Date and Duration</h6>
						</div>
					</div>
					<div className="carousel-item">
						<Image className="carousel-item__img" src={helpdesk} width={800} height={500} alt="people" />
						<div className="carousel-item__details">
							<div className="controls">
								<span className="fas fa-play-circle"></span>
								<span className="fas fa-plus-circle"></span>
							</div>
							<h5 className="carousel-item__details--title">Descriptive Title</h5>
							<h6 className="carousel-item__details--subtitle">Date and Duration</h6>
						</div>
					</div>
					<div className="carousel-item">
						<Image className="carousel-item__img" src={helpdesk} width={800} height={500} alt="people" />
						<div className="carousel-item__details">
							<div className="controls">
								<span className="fas fa-play-circle"></span>
								<span className="fas fa-plus-circle"></span>
							</div>
							<h5 className="carousel-item__details--title">Descriptive Title</h5>
							<h6 className="carousel-item__details--subtitle">Date and Duration</h6>
						</div>
					</div>
					<div className="carousel-item">
						<Image className="carousel-item__img" src={helpdesk} width={800} height={500} alt="people" />
						<div className="carousel-item__details">
							<div className="controls">
								<span className="fas fa-play-circle"></span>
								<span className="fas fa-plus-circle"></span>
							</div>
							<h5 className="carousel-item__details--title">Descriptive Title</h5>
							<h6 className="carousel-item__details--subtitle">Date and Duration</h6>
						</div>
					</div>

					<div className="carousel-item">
						<Image className="carousel-item__img" src={helpdesk} width={800} height={500} alt="people" />
						<div className="carousel-item__details">
							<div className="controls">
								<span className="fas fa-play-circle"></span>
								<span className="fas fa-plus-circle"></span>
							</div>
							<h5 className="carousel-item__details--title">Descriptive Title</h5>
							<h6 className="carousel-item__details--subtitle">Date and Duration</h6>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

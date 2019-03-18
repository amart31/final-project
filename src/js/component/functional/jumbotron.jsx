import React from "react";
import "../../../styles/jumbostyle.css";
import PropTypes from "prop-types";
import {
	Carousel,
	CarouselItem,
	CarouselControl,
	CarouselIndicators,
	CarouselCaption
} from "reactstrap";

const items = [
	{
		src: "http://via.placeholder.com/640x360",
		altText: "Slide 1",
		caption: "Slide 1"
	},
	{
		src:
			"http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder-350x350.png",
		altText: "Slide 2",
		caption: "Slide 2"
	},
	{
		src: "https://designshack.net/wp-content/uploads/placehold.jpg",
		altText: "Slide 3",
		caption: "Slide 3"
	}
];

export default class Example extends React.Component {
	constructor(props) {
		super(props);
		this.state = { activeIndex: 0 };
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
		this.goToIndex = this.goToIndex.bind(this);
		this.onExiting = this.onExiting.bind(this);
		this.onExited = this.onExited.bind(this);
	}

	onExiting() {
		this.animating = true;
	}

	onExited() {
		this.animating = false;
	}

	next() {
		if (this.animating) return;
		const nextIndex =
			this.state.activeIndex === items.length - 1
				? 0
				: this.state.activeIndex + 1;
		this.setState({ activeIndex: nextIndex });
	}

	previous() {
		if (this.animating) return;
		const nextIndex =
			this.state.activeIndex === 0
				? items.length - 1
				: this.state.activeIndex - 1;
		this.setState({ activeIndex: nextIndex });
	}

	goToIndex(newIndex) {
		if (this.animating) return;
		this.setState({ activeIndex: newIndex });
	}

	render() {
		const { activeIndex } = this.state;

		const slides = items.map(item => {
			return (
				<CarouselItem
					onExiting={this.onExiting}
					onExited={this.onExited}
					key={item.src}>
					<img
						src={item.src}
						alt={item.altText}
						width="1200"
						height="500"
					/>
					<CarouselCaption
						captionText={item.caption}
						captionHeader={item.caption}
					/>
				</CarouselItem>
			);
		});

		return (
			<Carousel
				activeIndex={activeIndex}
				next={this.next}
				previous={this.previous}
				className="carrosem container">
				<CarouselIndicators
					items={items}
					activeIndex={activeIndex}
					onClickHandler={this.goToIndex}
				/>
				{slides}
				<CarouselControl
					direction="prev"
					directionText="Previous"
					onClickHandler={this.previous}
				/>
				<CarouselControl
					direction="next"
					directionText="Next"
					onClickHandler={this.next}
				/>
			</Carousel>
		);
	}
}

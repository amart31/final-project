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
					<img src={item.src} alt={item.altText} />
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
Carousel.propTypes = {
	// the current active slide of the carousel
	activeIndex: PropTypes.number,
	// a function which should advance the carousel to the next slide (via activeIndex)
	next: PropTypes.func.isRequired,
	// a function which should advance the carousel to the previous slide (via activeIndex)
	previous: PropTypes.func.isRequired,
	// controls if the left and right arrow keys should control the carousel
	keyboard: PropTypes.bool,
	/* If set to "hover", pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on
   * mouseleave. If set to false, hovering over the carousel won't pause it. (default: "hover")
   */
	pause: PropTypes.oneOf(["hover", false]),
	// Autoplays the carousel after the user manually cycles the first item. If "carousel", autoplays the carousel on load.
	// This is how bootstrap defines it... I would prefer a bool named autoplay or something...
	ride: PropTypes.oneOf(["carousel"]),
	// the interval at which the carousel automatically cycles (default: 5000)
	interval: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
		PropTypes.bool
	]),
	children: PropTypes.array,
	// called when the mouse enters the Carousel
	mouseEnter: PropTypes.func,
	// called when the mouse exits the Carousel
	mouseLeave: PropTypes.func,
	// controls whether the slide animation on the Carousel works or not
	slide: PropTypes.bool,
	cssModule: PropTypes.object
};
CarouselControl.propTypes = {
	direction: PropTypes.oneOf(["prev", "next"]).isRequired,
	onClickHandler: PropTypes.func.isRequired,
	cssModule: PropTypes.object,
	directionText: PropTypes.string
};
CarouselIndicators.propTypes = {
	items: PropTypes.array.isRequired,
	activeIndex: PropTypes.number.isRequired,
	cssModule: PropTypes.object,
	onClickHandler: PropTypes.func.isRequired
};
CarouselCaption.propTypes = {
	captionHeader: PropTypes.string,
	captionText: PropTypes.string.isRequired,
	cssModule: PropTypes.object
};

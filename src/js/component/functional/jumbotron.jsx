import React from "react";
import "../../../styles/jumbostyle.css";

export default class JumboCarr extends React.Component {
	constructor() {
		super();
		this.state = {
			activeIndex: 0
		};
		this.onNextClick = this.onNextClick.bind(this);
		this.onPrevClick = this.onPrevClick.bind(this);
	}
	onNextClick() {
		if (this.state.activeIndex < 2) {
			this.setState({ activeIndex: this.state.activeIndex + 1 });
		} else {
			this.setState({ activeIndex: 0 });
		}
	}

	onPrevClick() {
		if (this.state.activeIndex > 0) {
			this.setState({ activeIndex: this.state.activeIndex - 1 });
		} else {
			this.setState({ activeIndex: 2 });
		}
	}
	render() {
		let sliderStyle = {
			transform: `translateX(${this.state.activeIndex * -100}%)`,
			transition: "0.2s"
		};
		let imgArray = [
			{ backgroundImage: `url(${"https://fakeimg.pl/640x360"})` },
			{ backgroundImage: `url(${"https://via.placeholder.com/300"})` },
			{ backgroundImage: `url(${"https://via.placeholder.com/350x150"})` }
		];
		return (
			<div className="container">
				<div className="buttons">
					<button onClick={this.onPrevClick}>◀</button>
					<button onClick={this.onNextClick}>▶</button>
				</div>
				<ul className="slide-container">
					{imgArray.map((item, index) => {
						let computedClass =
							index === this.state.activeIndex
								? "slide active"
								: "slide";
						return (
							<li
								className={computedClass}
								key={index}
								style={item}>
								Testi
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

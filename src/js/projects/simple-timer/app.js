const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const circle = document.querySelector("circle");
// if we take a circle and measure it's radius, so it's center point to the circle's outside edge, we can calculate the entire perimeter of the circle. We do this by using the formula: 2 * PI * r.
const perimeter = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", perimeter);

const timer = new Timer(durationInput, startButton, pauseButton, {
	onStart(totalDuration) {
		console.log("Timer Started!");
		this.totalDuration = totalDuration;
		console.log(`this.totalDuration is: ${this.totalDuration}`);
		let currentOffset = -(perimeter / (totalDuration * 20));
		// The value 20 is a result of 1000ms divided by 50ms used in the setInterval
		this.currentOffset = currentOffset;
	},
	onTick() {
		circle.setAttribute("stroke-dashoffset", this.currentOffset);
		this.currentOffset =
			this.currentOffset - perimeter / (this.totalDuration * 20);
	},
	onComplete() {
		console.log("Timer completed!");
	}
});

/**
Better to think about it logically than depend on code to understand.

You want the visible perimeter remaining to be proportional to the time remaining. If 50% of the time is up, then you expect 50% of the perimeter to have disappeared.

This proportion is easy to get by dividing the time remaining by total time. It's like getting a test back out of 30 and you say "what percent did i get?" so you divide your mark by 30.


The reason you subtract the perimeter is because you need the offset to go clockwise. So say the perimeter was 100. Half the time went up so the offset is 50. We need -50 though. 50 - 100 = -50.
 */

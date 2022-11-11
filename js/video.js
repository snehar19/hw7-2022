var video;
// Initialize the video element and turn off autoplay and turn off looping.
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to " + video.autoplay);
	console.log("Loop is set to " + video.loop);
});

// Play the video and update the volume information.  
document.getElementById("play").addEventListener("click", function() {
	video.play();
	document.getElementById("volume").innerHTML = video.volume * 100 + "%";
});

// Pause the video.
document.getElementById("pause").addEventListener("click", function() {
	video.pause();
});

// Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.  
document.getElementById("slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("Speed is " + video.playbackRate);
});

// Increase the current video speed each time the button is clicked and log the new speed to the console.  Change it by an amount proportional to the slow down. CHECK THIS!!  If you slow down three times and then speed up three times you should be within 5 digits of 100% again.
document.getElementById("faster").addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log("Speed is " + video.playbackRate);
});

// Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther.   Log the current location of the video.
document.getElementById("skip").addEventListener("click", function() {
	if (video.currentTime + 10 <= video.duration) {
		video.currentTime += 10;
	} else {
		video.currentTime = 0;
	}
	console.log("Video current time is " + video.currentTime);
});

// Mute/unmute the video and update the text in the button.
document.getElementById("mute").addEventListener("click", function() {
	if (video.muted == false) {
		video.muted = true;
		this.innerHTML = "Unmute";
		console.log("Unmute");
	} else {
		video.muted = false;
		this.innerHTML = "Mute";
		console.log("Mute");
	}
});

// Change the volume based on the slider and update the volume information.
document.querySelector("#slider").addEventListener("click", function() {
	console.log("inside volume fxn");
	video.volume = this.value / 100;
	this.innerHTML = video.volume;
	document.getElementById("volume").innerHTML = video.volume * 100 + "%";
});

// Utilize the existing oldSchool class on the video element
document.querySelector('#vintage').addEventListener("click", function() {
	document.querySelector('#player1').classList.add("oldSchool");
});

// Remove the oldSchool class from the video.
document.querySelector('#orig').addEventListener("click", function() {
	document.querySelector("#player1").classList.remove("oldSchool");
});
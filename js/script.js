var controller = new ScrollMagic.Controller();

/***********TimeLine Animations***********/
let progress = document.getElementById("scrollbar");
let scrol = document.getElementById("scroll");
let icn1 = document.getElementById("icn1");
let icn2 = document.getElementById("icn2");
let icn3 = document.getElementById("icn3");

//var  =  document.getElementById('timeline').getBoundingClientRect().top+window.pageYOffset;

let devWidth;
window.onscroll = function () {
	let imgs = document.getElementsByClassName("award-img");
	for (var i = 0; i < imgs.length; i++) {
		imgs[i].style.height = imgs[i].clientWidth + "px";
	}
	let uokimgs = document.getElementsByClassName("uok-img");
	for (var i = 0; i < uokimgs.length; i++) {
		uokimgs[i].style.height = uokimgs[i].clientWidth + "px";
	}
	let DistanceToTop = icn1.getBoundingClientRect().top + window.pageYOffset;
	let LastIconToTop = icn3.getBoundingClientRect().top + window.pageYOffset;
	let DevHeight = window.innerHeight;
	var maxHeight = LastIconToTop - DistanceToTop;
	scrol.style.maxHeight = maxHeight + "px";
	progress.style.height = 1 + "px";
	let progressHeight =
		window.pageYOffset - DistanceToTop + (DevHeight * 4) / 5;
	if (maxHeight >= progressHeight) {
		progress.style.height = progressHeight + "px";
	} else {
		progress.style.height = maxHeight + "px";
	}
};

var tl = new TimelineMax();
var tl2 = new TimelineMax();
var tl3 = new TimelineMax();

tl.from("#box1", 0.5, { right: 15, opacity: 0 }, 0).from(
	"#D1",
	0.5,
	{ x: 20, opacity: 0 },
	0
);
tl2.from("#box2", 0.5, { left: 15, opacity: 0 }, 0).from(
	"#D2",
	0.5,
	{ x: -20, opacity: 0 },
	0
);
tl3.from("#box3", 0.5, { right: 15, opacity: 0 }, 0).from(
	"#D3",
	0.5,
	{ x: 20, opacity: 0 },
	0
);

var scene1 = new ScrollMagic.Scene({
	triggerElement: "#icn1",
	triggerHook: 0.8,
})
	.setClassToggle("#icn1", "active")
	.setTween(tl)
	.addTo(controller);
var scene2 = new ScrollMagic.Scene({
	triggerElement: "#icn2",
	triggerHook: 0.8,
})
	.setClassToggle("#icn2", "active")
	.setTween(tl2)
	.addTo(controller);
var scene3 = new ScrollMagic.Scene({
	triggerElement: "#icn3",
	triggerHook: 0.8,
})
	.setClassToggle("#icn3", "active")
	.setTween(tl3)
	.addTo(controller);

/******end of timeline animations************/

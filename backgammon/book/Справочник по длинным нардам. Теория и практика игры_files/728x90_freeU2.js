(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"logo.png", id:"logo"}
	]
};



lib.ssMetadata = [];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,42);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA5DDIg5g6Ig4A6QgJAJgNAAQgNAAgJgJQgJgKAAgMQAAgNAJgJIA7g7QgggHgdgSQgLgHgDgNQgDgMAHgLQAHgLAMgCQANgDAKAGQAhAVAlAAQAmAAAggVQALgGANADQAMACAHALQAHALgDAMQgDANgLAHQgdASggAHIA7A7QAJAJAAANQAAAMgJAKQgJAJgNAAQgMAAgKgJgAhJgXQgfgfAAgrQAAgsAfgfQAfgfAqAAQArAAAfAfQAfAfAAAsQAAArgfAfQgfAdgrAAQgqAAgfgdgAgdiAQgNANAAASQAAASANANQANAMAQAAQARAAANgMQANgNAAgSQAAgSgNgNQgNgNgRAAQgQAAgNANg");
	this.shape.setTransform(31.3,31.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EE8208").s().p("EgWaAgaQkJAAi7i7Qi7i7AAkJMAAAgs1QAAkJC7i7QC7i7EJgBMAs1AAAQEJABC7C7QC7C7ABEJMAAAAs1QgBEJi7C7Qi7C7kJAAg");
	this.shape_1.setTransform(31.1,31.1,0.15,0.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62.3,62.3);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AOuMcQgpAAgfgQQgagPgjgkQhjhzhphlQh1hzhRgrQgzgdguAAQgeAAgQAWQgRAZgBAwIAAEKQAAA9gtAXQgyAZiHAAQjmAAjqiJQjyiNi9kAQj6lOiGk9QhgjlAAhlQAAgiAWgVQAWgVAiAAIE4AAQA8AAAdAWQAdAXAVBAQBoEvCiD3QCaDqBUAAQAdAAAIgbQAIgXAAhDIAAmpQAAh3g6hPQgegjgLgQQgSgaAAgYQAAgXARgOQARgPAcAAIHxAAQAxAAAOAWQANAUAAA+IAAJCQAAAwAKAVQAKAUAXABQAcAAAcgVQAfgUAwg2QCAiNCHjsQBEh2AqhaQASgmAXgRQAcgVAxABIE3AAQAvAAATAXQAUAYgKAtQgWBoi8EmQheCUhZB+QgdAqgCAWQgDAeAiAiQAMAQBNBPQBMBOAkAxQEDESAABuQAABMhFAAg");
	this.shape.setTransform(31.3,31.2,0.158,0.158);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4D75A3").s().p("EgWaAgaQkJAAi7i7Qi7i7AAkJMAAAgs1QAAkJC7i7QC7i7EJgBMAs1AAAQEJABC7C7QC7C7ABEJMAAAAs1QgBEJi7C7Qi7C7kJAAg");
	this.shape_1.setTransform(31.1,31.1,0.15,0.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62.3,62.3);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().dr(-41.75,-34.75,83.5,69.5);
	this.shape.setTransform(41.8,34.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,83.5,69.5);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.486,1],-39.2,0,39.3,0).s().p("AmHLzIAA3lIMPAAIAAXlg");
	this.shape.setTransform(39.3,75.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,78.5,151);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD501").s().p("A1UNUIAA6nMAqoAAAIAAang");
	this.shape.setTransform(136.5,85.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,273,170.5);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1663DC").s().p("A1UNUIAA6nMAqoAAAIAAang");
	this.shape.setTransform(136.5,85.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,273,170.5);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAqBFIAAhhIABgbIhQB8IgQAAIAAiJIAMAAIAABiIgBAaIBQh8IARAAIAACJg");
	this.shape.setTransform(273.3,51.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAeBFIg/hFIAABFIgNAAIAAiJIANAAIAABEIA8hEIAPAAIg7BEIBABFg");
	this.shape_1.setTransform(260.6,51.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAqBFIAAhhIABgbIhQB8IgRAAIAAiJIANAAIAABiIgBAaIBQh8IARAAIAACJg");
	this.shape_2.setTransform(245.8,51.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAsBFIAAhDIhWAAIAABDIgNAAIAAiJIANAAIAAA9IBWAAIAAg9IAMAAIAACJg");
	this.shape_3.setTransform(230,51.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgfA1QgRgUAAghQAAggARgTQASgTAcAAQASAAAQAGIgDALQgSgGgNAAQgYAAgNAQQgNAPAAAcQAAAcANAQQANAQAWAAQASAAARgHIAAALQgOAHgVAAQgcAAgQgSg");
	this.shape_4.setTransform(216.2,51.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgfA1QgRgUAAghQAAggARgTQASgTAcAAQASAAAQAGIgDALQgSgGgNAAQgYAAgNAQQgNAPAAAcQAAAcANAQQANAQAWAAQASAAARgHIAAALQgOAHgVAAQgcAAgQgSg");
	this.shape_5.setTransform(203.8,51.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgnA9QgLgLAAgSQAAgUARgMQAQgJAeAAIAagBIAAgJQAAgUgIgKQgIgKgRAAQgRAAgVAKIgFgKQAXgLAUAAQAXAAALAMQALAMAAAYIAABbIgJAAIgDgXIgBAAQgKAOgLAFQgLAGgNAAQgVAAgLgKgAAPAAQgbAAgNAJQgMAHAAARQAAAMAIAIQAIAGAOABQAUAAANgNQANgMAAgXIAAgMg");
	this.shape_6.setTransform(190,51.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag4BEIAAgLIAGAAQAOAAAKgeQAJgcAEhDIBGAAIAACIIgMAAIAAh9IguAAQgEAzgGAYQgGAagIANQgJAMgOAAIgIgBg");
	this.shape_7.setTransform(175.5,51.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAeBFIg/hFIAABFIgNAAIAAiJIANAAIAABEIA8hEIAPAAIg7BEIBABFg");
	this.shape_8.setTransform(164.6,51.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgfA+QgOgJgHgQQgIgQAAgVQAAghARgSQAQgTAbAAQAdAAAPATQAQATABAgQgBAhgQATQgQATgcAAQgRAAgOgJgAgigrQgMAQAAAbQAAAcAMAQQANAQAVAAQAXAAAMgQQAMgQAAgcQAAgbgMgQQgMgQgXAAQgWAAgMAQg");
	this.shape_9.setTransform(149.9,51.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAsBFIAAhDIhWAAIAABDIgNAAIAAiJIANAAIAAA9IBWAAIAAg9IAMAAIAACJg");
	this.shape_10.setTransform(134.3,51.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AA1BcIAAgvIhoAAIAAAvIgNAAIAAg7IAKAAQARgYAJgeQAKggAAgmIBBAAIAAB8IASAAIAAA7gAgoAhIBKAAIAAhxIgpAAQgDBFgeAsg");
	this.shape_11.setTransform(119.2,53.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ag8BFQgWgaABgrQgBgrAWgZQAXgaAlAAQAnAAAWAaQAVAZAAArQABAsgXAZQgWAagmAAQglAAgXgagAgyg8QgRAWgBAmQAAAnASAWQASAWAgAAQAhAAASgWQARgVAAgoQAAgmgRgWQgSgWghAAQgfAAgTAWg");
	this.shape_12.setTransform(102.5,48.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAqBFIAAhhIABgbIhQB8IgQAAIAAiJIAMAAIAABiIgBAaIBQh8IARAAIAACJg");
	this.shape_13.setTransform(78,51.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAuBcIhFhgIgZAUIAABMIgNAAIAAi3IANAAIAABeIAVgSIBGhMIARAAIhKBOIBMBpg");
	this.shape_14.setTransform(57.2,48.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgFBcIhEi3IANAAIAvB8IANArIAJgeIA0iJIANAAIhFC3g");
	this.shape_15.setTransform(40.9,48.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("Ag1BFIAAiJIA4AAQAYAAALAJQANAIAAARQAAANgHAHQgGAIgPACIAAACQAQACAIAFQAHAIAAAOQABAUgNALQgOALgZAAgAgpA4IAtAAQAlAAAAgdQAAgZgngBIgrAAgAgpgIIAqAAQATAAAJgHQAIgFAAgNQAAgMgJgGQgIgEgSAAIgrAAg");
	this.shape_16.setTransform(19.7,51.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AA0BEIAAh5IgGARIgpBoIgJAAIgnhfIgEgMIgFgOIAAB5IgLAAIAAiHIAQAAIAoBjIAHAXIAHgWIAohkIARAAIAACHg");
	this.shape_17.setTransform(256.6,22.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgfA+QgNgIgIgRQgHgQgBgVQAAghARgSQARgTAaAAQAdAAAQATQAQATAAAgQAAAhgQATQgRATgcAAQgRAAgOgJgAgigrQgMAPAAAcQAAAcAMAPQANARAVgBQAXABAMgRQAMgPAAgcQAAgcgMgPQgMgPgXAAQgWAAgMAPg");
	this.shape_18.setTransform(240.2,22.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAqBEIAAh8IhTAAIAAB8IgNAAIAAiHIBsAAIAACHg");
	this.shape_19.setTransform(224.8,22.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("Ag6BhIAAgLQAIACAIAAQAHAAAFgDQAFgDAEgGQAEgHAFgOIAHgSIg1iIIANAAIAdBOQANAhADANIAAAAIARgvIAdhNIANAAIg8CfQgHATgFAHQgFAHgHADQgHAEgKAAQgHAAgJgDg");
	this.shape_20.setTransform(211,26);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgEBEIAAh8IgvAAIAAgLIBnAAIAAALIguAAIAAB8g");
	this.shape_21.setTransform(199.2,22.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgfA0QgRgSAAghQAAghARgTQASgTAcAAQASAAAQAGIgDALQgSgGgNABQgYAAgNAPQgNAQAAAbQAAAcANAQQANAPAWAAQASAAARgGIAAAMQgOAGgVAAQgcAAgQgTg");
	this.shape_22.setTransform(187.5,22.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgfA+QgNgIgIgRQgHgQAAgVQAAghAQgSQAQgTAbAAQAcAAARATQAPATAAAgQAAAhgPATQgRATgcAAQgRAAgOgJgAghgrQgNAPAAAcQAAAcANAPQAMARAVgBQAWABANgRQAMgPAAgcQAAgcgMgPQgNgPgWAAQgVAAgMAPg");
	this.shape_23.setTransform(173.4,22.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AA1BcIAAgvIhoAAIAAAvIgNAAIAAg7IAKAAQARgYAJgeQAKggAAgmIBBAAIAAB8IASAAIAAA7gAgoAhIBKAAIAAhwIgpAAQgDBEgeAsg");
	this.shape_24.setTransform(158.6,25.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgfA0QgRgSAAghQAAghARgTQASgTAcAAQASAAAQAGIgDALQgSgGgNABQgYAAgNAPQgNAQAAAbQAAAcANAQQANAPAWAAQASAAARgGIAAAMQgOAGgVAAQgcAAgQgTg");
	this.shape_25.setTransform(139,22.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("Ag5BlIAAjGIALAAIACATIABAAQAOgWAeAAQAcAAAOASQAPASAAAjQAAAhgPASQgQATgbAAQgdAAgPgYIgBAAIAAALIABAUIAAA1gAghhMQgLAOAAAeIAAAEQAAAeALAOQALAOAWAAQAVAAAMgQQAMgOAAgcQAAg8gsAAQgWgBgMANg");
	this.shape_26.setTransform(118.4,25.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgmA0QgRgSAAghQAAgfARgUQAQgUAZAAQAZAAAOARQAOARAAAdIAAAIIhhAAQAAAcANAPQANAQAWgBQAMABAJgCQAJgCAOgFIAAALQgMAGgKABQgKACgMAAQgcAAgRgTgAgbguQgMAOgCAYIBUAAQAAgYgLgOQgKgNgTAAQgSAAgMANg");
	this.shape_27.setTransform(103.1,22.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgcBEQgLgCgHgFIAAgMQANAGAJADQAKABAKAAQASABAKgJQALgHAAgPQgBgPgJgGQgLgHgSAAIgTAAIAAgJIARAAQAjAAAAgZQAAgNgIgHQgJgGgNAAQgLAAgJADQgIACgLAEIgEgKQAWgKAVAAQAVAAALAJQAMAKAAAQQAAAZgZAGIAAABQAQADAGAHQAIAJgBAOQABATgOALQgOALgYAAQgNAAgLgDg");
	this.shape_28.setTransform(89.9,22.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("Ag6BhIAAgLQAIACAIAAQAHAAAFgDQAFgDAEgGQAEgHAFgOIAHgSIg1iIIANAAIAdBOQANAhADANIAAAAIARgvIAdhNIANAAIg8CfQgHATgFAHQgFAHgHADQgHAEgKAAQgHAAgJgDg");
	this.shape_29.setTransform(78.3,26);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgnA8QgLgKAAgSQAAgVARgKQAQgKAegBIAaAAIAAgKQAAgTgIgKQgIgKgRAAQgRAAgVALIgFgLQAXgLAUAAQAXAAALAMQALALAAAaIAABZIgJAAIgDgVIgBAAQgKANgLAGQgLAFgNAAQgVAAgLgLgAAPAAQgbABgNAHQgMAIAAAQQAAAOAIAGQAIAIAOgBQAUAAANgMQANgNAAgWIAAgMg");
	this.shape_30.setTransform(65,22.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("Ag5BlIAAjGIALAAIACATIABAAQAOgWAeAAQAcAAAOASQAPASAAAjQAAAhgPASQgQATgbAAQgdAAgPgYIgBAAIAAALIABAUIAAA1gAghhMQgLAOAAAeIAAAEQAAAeALAOQALAOAWAAQAVAAAMgQQAMgOAAgcQAAg8gsAAQgWgBgMANg");
	this.shape_31.setTransform(51.2,25.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("Ag3BcIAAi3IBlAAIAAAMIhZAAIAABGIAlAAQAeAAAQAKQARAMgBAaQABAagRANQgPAOgcAAgAgrBRIAmAAQAXAAAMgKQANgKAAgWQAAgVgNgJQgMgJgZAAIgkAAg");
	this.shape_32.setTransform(35.9,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,293,67.8);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOAbQgFgEgEgHQgDgHAAgJQgBgNAIgIQAHgIAMAAQANAAAHAIQAIAIAAANQAAAOgIAIQgHAIgNAAQgHAAgHgDgAgKgOQgDAGgBAIQABAUANAAQAOAAAAgUQAAgTgOAAQgHAAgDAFg");
	this.shape.setTransform(56.9,10.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AANAdIAAgZIgaAAIAAAZIgMAAIAAg5IAMAAIAAAYIAaAAIAAgYIANAAIAAA5g");
	this.shape_1.setTransform(49.9,10.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgFAdIAAgvIgTAAIAAgKIAxAAIAAAKIgTAAIAAAvg");
	this.shape_2.setTransform(43.6,10.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgTAaQgEgFAAgJQAAgJAGgDQAHgEAMgBIAKAAIAAgDQAAgGgCgDQgDgDgFAAQgEAAgDACIgIADIgFgJQAFgDAGgBIAJgBQALAAAGAFQAGAFgBAKIAAAmIgJAAIgCgIIAAAAQgEAFgFACQgEACgFAAQgJAAgFgEgAAEABQgHABgDACQgFADAAAFQABAEACADQACACAFAAQAFAAAEgEQAEgEAAgHIAAgFg");
	this.shape_3.setTransform(37.4,10.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgbAdIAAgKIAEAAQAFAAADgMQADgKACgaIAmAAIAAA6IgNAAIAAgwIgPAAQgBATgCAJQgDALgEAFQgEAFgGAAIgHgBg");
	this.shape_4.setTransform(30.6,10.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AANAdIAAgvIgZAAIAAAvIgMAAIAAg5IAyAAIAAA5g");
	this.shape_5.setTransform(24.2,10.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgOAWQgHgHAAgPQAAgNAHgIQAHgIAMAAQAKAAAHADIgEAKQgIgDgFAAQgNAAAAATQAAAKAEAFQADAFAGAAQAIAAAIgEIAAALIgHACIgKABQgLAAgHgIg");
	this.shape_6.setTransform(18.1,10.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgRAWQgIgIAAgOQAAgNAHgIQAIgIAKAAQAMAAAHAHQAHAHAAANIAAAEIgmAAQAAAJAFAFQAEAEAGAAIAKgBIAKgDIAAAKIgJADIgLABQgMAAgIgIgAgHgQQgEAEgBAHIAZAAQAAgHgDgEQgEgEgGAAQgEAAgDAEg");
	this.shape_7.setTransform(12.1,10.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgZAnIAAhNIAuAAIAAALIghAAIAAAVIAJAAQAdAAAAAVQAAAYgcAAgAgMAcIAJAAQAHAAAEgDQAFgDAAgHQAAgGgFgDQgEgDgIAAIgIAAg");
	this.shape_8.setTransform(5.7,9.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62.4,19);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgBAiIAAgfIggAAIAAgFIAgAAIAAgfIAEAAIAAAfIAfAAIAAAFIgfAAIAAAfg");
	this.shape.setTransform(14.8,12.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgZApQgIgOAAgbQAAgbAIgNQAJgOAQAAQAQAAAJAOQAJAOAAAaQAAAcgJANQgIAOgRAAQgPAAgKgOgAgTgjQgGANAAAWQAAAYAHAMQAGAMAMAAQANAAAGgMQAHgMAAgYQAAgWgHgNQgGgMgNAAQgMAAgHAMg");
	this.shape_1.setTransform(6.3,12.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21.3,24.5);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo();
	this.instance.setTransform(20,18,0.826,0.826);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(20,18,34.7,34.7);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgXbAu4MAAAhdvMAu2AAAMAAABdvg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol22();
	this.instance.setTransform(31.1,31.1,1,1,0,0,0,31.1,31.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({scaleX:1.27,scaleY:1.27,x:31.2,y:31.2},5).to({scaleX:1,scaleY:1,x:31.1,y:31.1},5).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62.3,62.3);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol23();
	this.instance.setTransform(31.1,31.1,1,1,0,0,0,31.1,31.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({scaleX:1.29,scaleY:1.29,x:31.2,y:31.2},5).to({scaleX:1,scaleY:1,x:31.1,y:31.1},5).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62.3,62.3);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol18();
	this.instance.setTransform(70.1,34.8,0.19,1.24,0,36.3,0,42.6,34.8);
	this.instance.alpha = 0.398;

	this.instance_1 = new lib.Symbol18();
	this.instance_1.setTransform(55.3,34.8,0.065,1.24,0,36.3,0,43,34.8);
	this.instance_1.alpha = 0.398;

	this.instance_2 = new lib.Symbol18();
	this.instance_2.setTransform(36.3,34.8,0.258,1.24,0,36.3,0,42.1,34.8);
	this.instance_2.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,103.5,69.5);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol21();
	this.instance.setTransform(86.3,62.3,1,1,0,0,0,31.1,31.1);

	this.instance_1 = new lib.Symbol20();
	this.instance_1.setTransform(163.6,62.3,1,1,0,0,0,31.1,31.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("At4IHIAAwNIbxAAIAAQNg");
	this.shape.setTransform(125.5,62.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#34495E").s().p("AyZDbQggABgWgXQgWgWAAggQAAgcAQgUIDnkdQAXgdAkAAIdmAAQAlAAAXAdIDmEdQARAVAAAbQAAAggWAWQgXAXgfgBg");
	this.shape_1.setTransform(125.5,155);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#34495E").s().p("AtkJwQgwABgigiQghgigBgvIAAv7QABgwAhghQAigiAwABIbJAAQAwgBAiAiQAhAhABAwIAAP7QgBAvghAiQgiAigwgBg");
	this.shape_2.setTransform(125.5,62.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,251,177);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol12();
	this.instance.setTransform(31.2,49.5,1,1,0,0,0,31.2,9.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:16.5,alpha:1},5,cjs.Ease.get(1)).to({y:9.5},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,40,62.4,19);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol15();
	this.instance.setTransform(2,255.8,0.015,1,0,0,0,136.6,85.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:136.5,scaleX:0.89,x:121.5},6,cjs.Ease.get(1)).to({scaleX:1,x:136.5},13,cjs.Ease.get(1)).wait(56));

	// Layer 1
	this.instance_1 = new lib.Symbol14();
	this.instance_1.setTransform(271.1,85.3,0.015,1,0,0,0,136.6,85.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.87,x:154.6},6,cjs.Ease.get(1)).to({regX:136.5,scaleX:1,x:136.5},13,cjs.Ease.get(1)).wait(56));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,273.1,341);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol13();
	this.instance.setTransform(146.5,166.4,1,1,0,0,0,146.5,36.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:46.4,alpha:1},5,cjs.Ease.get(1)).to({y:36.4},11,cjs.Ease.get(1)).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,130,293,67.8);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhqBrQgtgtAAg+QAAg+AtgsQAsgtA+AAQA/AAAsAtQAtAsAAA+QAAA+gtAtQgsAtg/AAQg+AAgsgtg");
	mask.setTransform(28.8,28.9);

	// Layer 3
	this.instance = new lib.Symbol17();
	this.instance.setTransform(-24.2,20.5,0.592,1.252,0,40.7,0,39.3,75.4);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({_off:false},0).to({x:80.8},16).wait(51));

	// Layer 1
	this.instance_1 = new lib.Symbol2();
	this.instance_1.setTransform(88.6,90.9,0.957,0.957,0,0,0,100.1,100.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(85));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11.9,12.3,114.4,33.2);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.Symbol16();
	this.instance.setTransform(125.6,88.6,0.068,0.068,0,0,0,125.5,88.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:125.4,regY:88.5,scaleX:1.17,scaleY:1.17,x:125.5},5,cjs.Ease.get(-1)).to({regX:125.5,scaleX:1,scaleY:1,x:125.6},5,cjs.Ease.get(1)).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(117.1,82.6,17,12);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.Symbol3();
	this.instance.setTransform(-7.8,-7.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvODSQhWAAg+g+Qg9g9gBhXQABhVA9g+QA+g9BWgBIedAAQBWABA+A9QA+A+gBBVQABBXg+A9Qg+A+hWAAg");
	mask.setTransform(118.5,21);

	// Layer 3
	this.instance_1 = new lib.Symbol19();
	this.instance_1.setTransform(-42.8,16.3,1,1,0,0,0,51.7,34.8);
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({_off:false},0).to({x:279.6,y:25.3},26).wait(51));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgxBHIAAiNIAeAAIAAA3IAMAAQAaAAAQALQAPAJAAAWQAAAsg5AAgAgTAuIALAAQANAAAHgFQAHgFAAgJQAAgLgHgEQgHgEgQAAIgIAAg");
	this.shape.setTransform(198.3,21.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNBHIAAhzIgnAAIAAgaIBqAAIAAAaIgoAAIAABzg");
	this.shape_1.setTransform(183.7,21.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAlBHIAAhFIACgnIgBAAIhABsIglAAIAAiNIAbAAIAABFIAAAQIgBAWIABAAIBAhrIAkAAIAACNg");
	this.shape_2.setTransform(167.6,21.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag0BHIAAiNIAtAAQAcAAAOAJQAOAIAAAUQgBAMgFAIQgHAJgKABIAAABQAOACAHAIQAFAIAAAOQABATgOALQgPALgYAAgAgVAuIATAAQALAAAGgFQAGgFAAgJQAAgSgXAAIgTAAgAgVgNIASAAQAKAAAFgEQAGgEgBgJQAAgIgFgDQgHgEgKAAIgQAAg");
	this.shape_3.setTransform(151.1,21.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgxA2QgSgTAAgjQAAgjASgSQASgTAfAAQAhAAARATQARATAAAiQAAAjgRATQgSATggAAQgfAAgSgTgAgZgiQgKAMABAWQgBAXAKANQAJAMAQgBQAkAAAAgvQAAgvgkAAQgQAAgJANg");
	this.shape_4.setTransform(134,21.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAcBHIAAg9Ig3AAIAAA9IgeAAIAAiNIAeAAIAAA4IA3AAIAAg4IAeAAIAACNg");
	this.shape_5.setTransform(116.4,21.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAkBHIgLgiIgxAAIgLAiIggAAIAyiNIAjAAIAyCNgAgRAMIAkAAIgRgyIgCgKIgRA8g");
	this.shape_6.setTransform(99.9,21.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgOBHIAAhzIgmAAIAAgaIBqAAIAAAaIgoAAIAABzg");
	this.shape_7.setTransform(86.6,21.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AglA2QgQgTAAgjQAAgUAIgRQAJgRAOgJQAPgJATAAQAVAAAVAKIgKAZIgQgHQgIgDgIAAQgPAAgKAOQgJAMAAAVQAAAwAiAAQAPAAAVgIIAAAaQgRAHgVAAQgeAAgRgTg");
	this.shape_8.setTransform(72.6,21.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag5BFIAAgaQAIADANAAQAIAAAFgDQAFgEAEgJIgyhlIAgAAIAhBOIABAAIACgFIAehJIAfAAIgsBjQgJATgHAIQgFAJgKAEQgKAEgOAAQgNAAgKgDg");
	this.shape_9.setTransform(57.7,21.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF533C").s().p("AvODRQhWABg+g+Qg9g9gBhXQABhVA9g+QA+g9BWAAIecAAQBYAAA9A9QA+A+gBBVQABBXg+A9Qg9A+hYgBg");
	this.shape_10.setTransform(118.5,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,237,42);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol6();
	this.instance.setTransform(118.6,21,0.105,0.105,0,0,0,118.5,20.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.16,scaleY:1.16,x:118.5,y:20.9},5,cjs.Ease.get(-1)).to({regY:21,scaleX:1,scaleY:1,y:21},6,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(106.1,18.8,25,4.4);


// stage content:



(lib._728x90_freeU2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_73 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(73).call(this.frame_73).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(74));

	// Layer 9
	this.instance = new lib.Symbol8();
	this.instance.setTransform(714.9,76.6,0.877,0.877,0,0,0,10.8,12.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(74));

	// Layer 8
	this.instance_1 = new lib.Symbol11("synched",0,false);
	this.instance_1.setTransform(618.6,43.7,0.714,0.714,0,0,0,118.7,21.2);

	this.instance_2 = new lib.Symbol7("synched",0,false);
	this.instance_2.setTransform(618.6,68.3,0.971,0.971,0,0,0,31.3,9.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},23).wait(51));

	// Layer 7
	this.instance_3 = new lib.Symbol4("synched",0,false);
	this.instance_3.setTransform(361.7,44.1,0.88,0.88,0,0,0,146.7,36.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).wait(65));

	// Layer 1
	this.instance_4 = new lib.ClipGroup("synched",0,false);
	this.instance_4.setTransform(105.3,43.6,0.373,0.373,0,0,0,125.9,89);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).wait(59));

	// Layer 6
	this.instance_5 = new lib.Symbol5("synched",0,false);
	this.instance_5.setTransform(103.8,45,0.709,0.224,0,0,0,136.8,170.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(74));

	// Layer 1
	this.instance_6 = new lib.Symbol1();
	this.instance_6.setTransform(364,45,2.427,0.15,0,0,0,150,300.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(74));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(363,44,730,92);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
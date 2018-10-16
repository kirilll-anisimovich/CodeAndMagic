window.renderStatistics = function(ctx, names, times) {
	var CANVAS_WIDTH = 420;
	var CANVAS_HEIGHT = 270;
	var CANVAS_X = 100;
	var CANVAS_Y = 10;
	var CANVAS_SHADOW = 10;
	var CANVAS_SHADOW_X = CANVAS_X + CANVAS_SHADOW;
	var CANVAS_SHADOW_Y = CANVAS_Y + CANVAS_SHADOW;
	var CANVAS_PADDING = 20;
	var CANVAS_PADDING_X = CANVAS_X + CANVAS_PADDING;
	var CANVAS_PADDING_Y = CANVAS_Y + CANVAS_PADDING;

	//canvas shadow
	ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
	ctx.fillRect(CANVAS_SHADOW_X, CANVAS_SHADOW_Y, CANVAS_WIDTH, CANVAS_HEIGHT);

	//canvas background
	ctx.fillStyle = 'white';
	ctx.strokeRect(CANVAS_X, CANVAS_Y, CANVAS_WIDTH, CANVAS_HEIGHT);
	ctx.fillRect(CANVAS_X, CANVAS_Y, CANVAS_WIDTH, CANVAS_HEIGHT);

	//text render
	ctx.fillStyle = '#000';
	ctx.font = '16px PT Mono';
	ctx.fillText('Ура вы подедили!', CANVAS_PADDING_X, CANVAS_PADDING_Y);
	ctx.fillText('Список результатов!', CANVAS_PADDING_X, CANVAS_PADDING_Y + 20);

	//getting some max values from times array
	max = getMaxElement(times);
	maxIndex = getMaxElementIndex(times);

	//histogram params
	var histogramHeight = 150;
	var histogramBarWidth = 40;
	var histogramX = 50;
	var histogramY = 80;
	var histogramGutter = 50;

	for(var i = 0; i < times.length; i++) {
		//Finding bar height through proportion
		var histogramBarHeight = histogramHeight * times[i] / max;

		if (names[i] == 'Вы') {
			ctx.fillStyle = "rgb(255, 0, 0)";
		} else {
			ctx.fillStyle = "rgb(0, 0, 255)";
		}

		//rendering histogram bars
		ctx.fillRect(histogramX + histogramBarWidth + histogramGutter, histogramY + histogramHeight - histogramBarHeight, histogramBarWidth, histogramBarHeight);
		//rendering names and time
		ctx.fillStyle = 'black';
		ctx.fillText(names[i], histogramX + histogramBarWidth + histogramGutter, histogramY + histogramHeight + CANVAS_PADDING);
		ctx.fillText(Math.round(times[i]) + "ms", histogramX + histogramBarWidth + histogramGutter, histogramY + histogramHeight + CANVAS_PADDING * 2 );

		//calculate gutter
		histogramX += histogramBarWidth + histogramGutter;
	}

	function getMaxElement(arr) {
		var max = 0;
		for(var i = 0; i < arr.length; i++ ) {
			if ( arr[i] > max ) {
				max = arr[i];
			};
		};
		return max;
	};

	function getMaxElementIndex(arr) {
		var max = 0;
		var maxElementIndex = 0;
		for(var i = 0; i < arr.length; i++ ) {
			if ( arr[i] > max ) {
				max = arr[i];
				maxElementIndex = i;
			};
		};
		return maxElementIndex;
	};

};
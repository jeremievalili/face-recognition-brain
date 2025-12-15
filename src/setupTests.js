// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Mock canvas getContext to avoid jsdom "Not implemented" errors
// used by particle/canvas libraries during tests
HTMLCanvasElement.prototype.getContext = function () {
	return {
		fillRect: () => {},
		clearRect: () => {},
		getImageData: (x, y, w, h) => ({ data: new Array(w * h * 4) }),
		putImageData: () => {},
		createImageData: () => [],
		setTransform: () => {},
		drawImage: () => {},
		save: () => {},
		restore: () => {},
		beginPath: () => {},
		moveTo: () => {},
		lineTo: () => {},
		closePath: () => {},
		stroke: () => {},
		translate: () => {},
		scale: () => {},
		rotate: () => {},
		arc: () => {},
		fill: () => {},
		measureText: () => ({ width: 0 }),
	};
};

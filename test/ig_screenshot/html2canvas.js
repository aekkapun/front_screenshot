(function (QUnit) {

	QUnit.module("html2canvas methods");

	QUnit.test('screenShooter.html2canvas should be a valid method', function (assert) {
		assert.equal(typeof screenShooter.html2canvas, 'function', 'screenShooter.html2canvas should be a valid method');
	});

	QUnit.test('screenShooter.html2canvas should render a container as a canvas with the expected contents', function (assert) {

		var done = assert.async();

		screenShooter.html2canvas(document.getElementById('text_container'), {
			useCORS: true,
			allowTaint: false,
			logging: false
		}).then(function (canvas) {

			var dataurl = canvas.toDataURL("image/png");
			var expected =
				'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAOCAYAAAAbvf3sAAAACXBIWXMAAAsTAAALEwEAmpwYAAACuUlEQVQoFQGuAlH9AQAA/54AAAAiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3gEAAP/4AAAASAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALgAAAD//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AgAAAAAAAAAAAAAAAAAA/w4AAP/0AAD/NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAABaAAAAsQAAAGYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//wAAAAAAAAAAAAD/kAAA/xQAAP/tAAD/DgAAAAAAAAAAAAAAAAAAAAAAAP//AgAAAAAAAAAAAAD/NQAAAMUAAAHsAAAAswAAAFwAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAP//AAABAQAA/4wAAAD4AAAA/AAAABsAAAA1AAABMAAAAAAAAAAAAAAAAAAA//8AAAD//wAA/w0AAP+AAAAAAAAAAAAAAAAAAAD/2QAA/zcAAAAAAAAAAAAAAAAAAP//AgAAAAAAAACXAAAAIgAA/wEAAAAAAAD/JgAAAPAAAACJAAD/KAAAAAAAAAAAAAAAAAAAAP//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAP/MAAAA9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyb/zqsLWcLewAAAABJRU5ErkJggg==';

			assert.equal(dataurl, expected, 'captured dataurl matches expected');
			done();

		});
	});

})(QUnit);

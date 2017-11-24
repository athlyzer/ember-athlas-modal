import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		okPressed() {
			console.log('okPressed');
		},

		cancelPressed() {
			console.log('cancelPressed');
		},

		submit() {
			console.log('submitted');
		},

		cancel() {
			console.log('cancelled');
		},

		prompted(value) {
			console.log('prompted:', value);
		}
	}
});

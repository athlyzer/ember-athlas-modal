import { computed } from '@ember/object';
import ModalDialog from './modal-dialog';

export default ModalDialog.extend({
	cancelClass: 'btn-secondary',
	cancelLabel: 'Cancel',

	okClass: 'btn-primary',
	okLabel: 'Ok',

	buttons: computed(function () {
		return [
			{
				class: this.get('cancelClass'),
				label: this.get('cancelLabel')
			}, {
				type: 'submit',
				class: this.get('okClass'),
				label: this.get('okLabel')
			}
		];
	}),

	init() {
		this._super(...arguments);

		this.on('buttonPressed', btn => {
			if (btn.type === 'submit') {
				this.trigger('okPressed');
			} else {
				this.trigger('cancelPressed');
			}
		});
	}
});

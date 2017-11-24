import { computed } from '@ember/object';
import ModalDialog from './modal-dialog';

export default ModalDialog.extend({
	okClass: 'btn-primary',
	okLabel: 'Ok',

	buttons: computed(function () {
		return [
			{
				class: this.get('okClass'),
				label: this.get('okLabel')
			}
		];
	}),
});

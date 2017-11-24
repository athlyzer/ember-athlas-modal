import { set, observer } from '@ember/object';
import ConfirmDialog from './confirm-dialog';

export default ConfirmDialog.extend({
	contentComponent: 'form-dialog/content',

	okClass: 'btn-success',
	okLabel: 'Save',

	canSubmit: true,
	hasSuccess: false,
	validate: null,

	init() {
		this._super(...arguments);

		// set 'submit' button to not dismissable
		let buttons = this.get('buttons');
		buttons.forEach((btn) => {
			if ((btn.type && btn.type === 'submit')) {
				btn.dismiss = false;
			}
		});
		this.set('buttons', buttons);

		this.on('okPressed', () => {
			if (this.canValidate()) {
				if (this.isValid()) {
					this.triggerSuccess();
				}
			} else {
				this.triggerSuccess();
			}
		});

		this.on('success', () => {
			this.set('hasSuccess', true);
			this.close();
		});

		this.on('opened', () => {
			this.set('hasSuccess', false);
		});

		this.on('closed', () => {
			if (!this.get('hasSuccess')) {
				this.trigger('cancel');
			}
		});
	},

	didReceiveAttrs() {
		this._super(...arguments);

		let buttons = this.get('buttons');
		set(buttons[1], 'enabled', this.get('canSubmit'));
		this.set('buttons', buttons);
	},

	canSubmitObserver: observer('canSubmit', function () {
		let buttons = this.get('buttons');
		set(buttons[1], 'enabled', this.get('canSubmit'));
		this.set('buttons', buttons);
	}),

	canValidate() {
		return this.validate || this.get('validate');
	},

	isValid() {
		if (this.validate) {
			return this.validate();
		}

		if (this.get('validate')) {
			return this.get('validate')();
		}

		return true;
	},

	triggerSuccess() {
		this.trigger('success');
	}
});

import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
	athlas: service('athlas-modal'),

	beforeModel() {
		this.get('athlas').set('alertOkLabel', 'pups');
	}
});

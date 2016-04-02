//import {computedFrom} from 'aurelia-framework';
import {I18N} from 'aurelia-i18n';
import {EventAggregator} from 'aurelia-event-aggregator';
import {inject} from 'aurelia-framework';

@inject(I18N, Element, EventAggregator)
export class Welcome {
    constructor(i18n, element, ea) {
        this.i18n = i18n;
        this.element = element;

        ea.subscribe('i18n:locale:changed', payload => {
            this.i18n.updateTranslations(this.element)
                .then(() => {
                    this.heading = `${this.i18n.tr('welcome.title')}!`;
                });
        });
    }

    attached() {
        this.i18n.updateTranslations(this.element)
            .then(() => {
                this.heading = `${this.i18n.tr('welcome.title')}!`;
            });
    }

    heading = '';
    firstName = 'John';
    lastName = 'Doe';
    previousValue = this.fullName;

    //Getters can't be directly observed, so they must be dirty checked.
    //However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
    //To optimize by declaring the properties that this getter is computed from, uncomment the line below
    //as well as the corresponding import above.
    //@computedFrom('firstName', 'lastName')
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    submit() {
        this.previousValue = this.fullName;
        alert(`${this.i18n.tr('welcome.welcome')}, ${this.fullName}!`);
    }

    canDeactivate() {
        if (this.fullName !== this.previousValue) {
            return confirm('Are you sure you want to leave?');
        }
    }
}

export class UpperValueConverter {
    toView(value) {
        return value && value.toUpperCase();
    }
}

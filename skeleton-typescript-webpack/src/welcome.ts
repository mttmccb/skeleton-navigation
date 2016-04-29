import {computedFrom} from 'aurelia-framework';
import {BaseI18N} from 'aurelia-i18n';

export class Welcome extends BaseI18N {
  heading: string = 'Welcome to the Aurelia Navigation App';
  firstName: string = 'John';
  lastName: string = 'Doe';
  previousValue: string = this.fullName;
  i18n: any;

  @computedFrom('firstName', 'lastName')
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  submit() {
    this.previousValue = this.fullName;
    alert(`${this.i18n.tr('welcome')}, ${this.fullName}!`);
  }

  canDeactivate(): boolean {
    if (this.fullName !== this.previousValue) {
      return confirm(`${this.i18n.tr('user_leaving_page')}?`);
    }
  }
}

export class UpperValueConverter {
  toView(value: string): string {
    return value && value.toUpperCase();
  }
}

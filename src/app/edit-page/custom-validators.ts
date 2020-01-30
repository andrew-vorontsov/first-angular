import { FormControl } from '@angular/forms';

export class CustomValidators {
  static correctDate(control: FormControl): { [key: string]: boolean } {
    const regexp = /^[0-3]\d\.[01][0-2]\.20[0-2]\d$/;
    const validDate = (num, dateType) => {
      switch (dateType) {
        case 'day': {
          return 0 < num && num < 32 ? true : false;
        }
        case 'month': {
          return 0 < num && num < 13 ? true : false;
        }
        case 'year': {
          return 1999 < num && num < 2021 ? true : false;
        }
      }
    };

    if (control.value.match(regexp)) {
      const day = control.value.match(/\d\d/g)[0];
      const month = control.value.match(/\d\d/g)[1];
      const year = control.value.match(/\d\d\d\d/)[0];
      if (
        validDate(day, 'day') &&
        validDate(month, 'month') &&
        validDate(year, 'year')
      ) {
        return null;
      } else {
        return { validDateNumbers: true };
      }
    } else {
      return { validDateFormat: true };
    }
  }
}

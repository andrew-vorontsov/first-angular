import { FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';
import { isExists } from 'date-fns';

@Injectable()
export class CustomValidators {
  correctDate(control: FormControl): { [key: string]: boolean } {
    const regexp = /^\d{1,2}\.\d{1,2}\.20[0-2]\d$/;
    if (control.value.match(regexp)) {
      const day = +control.value.match(/^\d{1,2}/)[0];
      const month = +control.value.match(/\d{1,2}/g)[1] - 1;
      const year = +control.value.match(/20[0-2]\d$/)[0];
      if (isExists(year, month, day)) {
        return null;
      } else {
        return { validDateNumbers: true };
      }
    }
    return { validDateFormat: true };
  }

  correctDuration(control: FormControl): { [key: string]: boolean } {
    return +control.value > 0 ? null : { validDuration: true };
  }

  correctAuthors(control: FormControl): { [key: string]: boolean } {
    return control.value.length ? null : { validAuthors: true };
  }
}

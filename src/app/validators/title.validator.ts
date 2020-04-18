import { AbstractControl, ValidatorFn } from '@angular/forms';

export function forbiddenTitleValidator(forbiddenTitle: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]:any} | null => {
        const forbidden = forbiddenTitle.test(control.value);
        return forbidden? {'forbiddenTitle': {value: control.value}} : null;
    }
}
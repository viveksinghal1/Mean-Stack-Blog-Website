import { AbstractControl, ValidatorFn } from "@angular/forms";

export function forbiddenNameValidator(forbiddenName: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]:any} | null => {
        const forbidden = forbiddenName.test(control.value);
        return forbidden? {'forbiddenName': {value: control.value}} : null;
    }
}

export function allowedNameValidator(allowedName: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]:any} | null => {
        const forbidden = allowedName.test(control.value);
        return forbidden? null: {'allowedName': {value: control.value}};
    }
}

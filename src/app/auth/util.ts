import { AbstractControl, ValidationErrors } from "@angular/forms";
import { __values } from "tslib";

export function customEmailValidator(control: AbstractControl): ValidationErrors | null {

    if (!control.value) {
        return null;
    }

    const pattern = /^.{6,}@gmail\.(com|bg)$/;
    if (!pattern.test(control.value)) {
        return {
            emailError: true
        }
    }
    return null;
}

export function passwordsMatch(password: AbstractControl) {
    return (rePassword: AbstractControl) => {
        if (rePassword.value !== password.value) {
            return {
                doesNotMatch: true
            }
        }
        return null;
    }
}
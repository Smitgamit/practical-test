import validator from "validator";

class FormValidator {
    constructor(validations) {
        this.validations = validations;
    }
    add(obj) {
        this.validations.map((element, index) => {
            if (element.field === obj.field && element.idAdd === true) {
                this.validations.splice(index, 1);
            }
            return "";
        });
        this.validations[this.validations.length] = obj;
    }

    validate(state) {
        let validation = this.valid();
        this.validations.forEach((rule) => {
            if (!validation[rule.field].isInvalid) {
                const field_value = state[rule.field]
                    ? state[rule.field].toString()
                    : "";
                const args = rule.args || [];
                const validation_method =
                    typeof rule.method === "string"
                        ? validator[rule.method]
                        : rule.method;
                if (rule.method === "isURL") {
                    if (field_value !== "") {
                        if (
                            validation_method(field_value, ...args, state) !== rule.validWhen
                        ) {
                            validation[rule.field] = {
                                isInvalid: true,
                                message: rule.message,
                            };
                            validation.isValid = false;
                        }
                    }
                } else {
                    if (
                        validation_method(field_value, ...args, state) !== rule.validWhen
                    ) {
                        validation[rule.field] = { isInvalid: true, message: rule.message };
                        validation.isValid = false;
                    }
                }
            }
        });

        return validation;
    }

    valid() {
        const validation = {};

        this.validations.map(
            (rule) => (validation[rule.field] = { isInvalid: false, message: "" })
        );

        return { isValid: true, ...validation };
    }
}

export default FormValidator;

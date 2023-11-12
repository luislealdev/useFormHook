"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useForm = void 0;
const react_1 = require("react");
const useForm = (initialForm = {}) => {
    const [formState, setFormState] = (0, react_1.useState)(initialForm);
    (0, react_1.useEffect)(() => {
        setFormState(initialForm);
    }, [initialForm]);
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };
    const onResetForm = () => {
        setFormState(initialForm);
    };
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        // isFormValid,
    };
};
exports.useForm = useForm;

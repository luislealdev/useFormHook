import { useEffect, useState } from "react";
interface Props {
    target: {
        name: string;
        value: string;
    };
}

export const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm);

    useEffect(() => {
        setFormState(initialForm);
    }, [initialForm]);

    const onInputChange = ({ target }: Props) => {
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
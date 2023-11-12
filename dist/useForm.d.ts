interface Props {
    target: {
        name: string;
        value: string;
    };
}
declare const useForm: (initialForm?: {}) => {
    formState: {};
    onInputChange: ({ target }: Props) => void;
    onResetForm: () => void;
};
export default useForm;

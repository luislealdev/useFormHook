interface Props {
    target: {
        name: string;
        value: string;
    };
}
export declare const useForm: (initialForm?: {}) => {
    formState: {};
    onInputChange: ({ target }: Props) => void;
    onResetForm: () => void;
};
export {};

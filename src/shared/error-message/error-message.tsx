import s from "./error-message.module.scss";

interface IErrorMessageProps {
    error: string | undefined
}

export const ErrorMessage = (props: IErrorMessageProps) => {
    const {error} = props;
    return (
        <>
            { error && <p className={s.error}>{error}</p> }
        </>
    )
}
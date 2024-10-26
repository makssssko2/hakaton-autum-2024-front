import './AuthForm.scss';
const AuthForm = ({children,...props}) => {
    const {
        title,
        submitText,
        onSubmit,
        serverResponse,
        footer
    } = props;
    return (
        <form className="AuthForm" onSubmit={onSubmit} method="POST">
            <div className="AuthForm__head">
                <h2 className="AuthForm__title">{title}</h2>
                <p className="AuthForm__response">{serverResponse}</p>
            </div>
            <div className="AuthForm__body">
                {children}
            </div>
            <div className="AuthForm__buttonBlock">
                <button className={"AuthForm__button"} type={'submit'}>{submitText}</button>
                {footer}
            </div>
        </form>
    )
}

export default AuthForm;
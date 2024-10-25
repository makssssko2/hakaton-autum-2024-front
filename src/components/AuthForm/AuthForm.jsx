const AuthForm = ({children,...props}) => {
    const {
        title,
        onSubmit
    } = props;
    return (
        <form className="AuthForm">
            <h2 className="AuthForm__title">{title}</h2>
            <div className="AuthForm__body">
                {children}
            </div>

        </form>
    )
}

export default AuthForm;
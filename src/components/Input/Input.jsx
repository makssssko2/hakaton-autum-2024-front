import { useState } from "react";
import closeEye from "../../assets/icons/Auth/CloseEye.jsx";
import openEye from "../../assets/icons/Auth/OpenEye.jsx";

export default function SmartInput({ children, ...props}) {
    const {
        className,
        type,
        name,
        input
    } = props;
    const [showPass, setShowPass] = useState(false);
    return (
        <div className="inputBlock">
            <input
                value={input.value}
                onChange={(e) => input.onChange(e)}
                onBlur={() => input.onBlur()}
                type={
                    type === "password"
                        ? showPass
                            ? "text"
                            : "password"
                        : type
                }
                className={
                    Object.values(input.errors).filter((err) => err).length &&
                    input.isDirty
                        ? `${className} ${className}_error`
                        : className
                }
                name={name}
                id={name}
                placeholder={children}
            />
            {type === "password" ? (
                showPass ? (
                    <button
                        onClick={() => setShowPass(!showPass)}
                        type="button"
                        className="eye"
                    >
                        {openEye}
                    </button>
                ) : (
                    <button
                        onClick={() => setShowPass(!showPass)}
                        type="button"
                        className="eye"
                    >
                        {closeEye}
                    </button>
                )
            ) : null}
            <div className="auth-form__errors">
                {input.isDirty
                    ? Object.values(input.errors)
                        .filter((err) => err)
                        .map((err, index) => {
                            return (
                                <p className="auth-form__error" key={index}>
                                    {err}
                                </p>
                            );
                        })
                    : null}
            </div>
        </div>
    );
}

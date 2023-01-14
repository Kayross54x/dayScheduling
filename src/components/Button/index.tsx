import React from "react";
import './style.scss';

interface IButton {
    text?: string,
    type?: "button" | "submit" | "reset" | undefined,
    children?: React.ReactNode,
    onClick?: () => void
};

function Button(props: IButton) {
    const { text, type = "button", children, onClick } = props;

    return (
        <button className="botao" type={type} onClick={onClick}>
            {text ?? children}
        </button>
    )
}

export default Button;
import "./Button.css";

function Button({children, id, onClick}) {
    return <button className="btn" id={id} onClick={onClick}>{children}</button>
}

export default Button;
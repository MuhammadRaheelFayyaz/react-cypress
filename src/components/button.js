
export const Button = ({ bgColor = "#000000", caption, onClick = () => { },...rest }) => {

    return <button className="btn" style={{
        backgroundColor: bgColor
    }}
        onClick={() => onClick()}
        {...rest}
    >{caption}</button>
}
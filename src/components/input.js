
export const Input = ({ label, onChange, ...rest }) => {
    return <div className="input-group">
        <span className="label">{label}:</span>
        <input {...rest} onChange={e => onChange(e.target.value)} />
    </div>
}
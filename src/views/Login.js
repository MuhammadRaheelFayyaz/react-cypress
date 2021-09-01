import { useState } from 'react'
import { Input } from '../components/input'
import { Button } from '../components/button'
import { useHistory } from 'react-router-dom'
const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error,setError]=useState('')
    const router = useHistory()
    const onLogin = () => {
        if(username==="admin" && password==="admin"){
            setError('')
            router.push('/home')
        }else{
            setError('Wrong username or password ')
        }
    }
    const onCancel = () => {
        setUsername('')
        setPassword('')
    }
    return <div className="login-container">
        <div className="login-heading">Login</div>
        <div style={{color:'#f2230c'}}>{error}</div>
        <Input label="Username" data-cy="username-input" placeholder="Username.." value={username} onChange={setUsername} />
        <Input label="Password" type="password" data-cy="password-input" placeholder="Password.." value={password} onChange={setPassword} />
        <div className="btn-group">
            <Button data-cy="login-btn" caption="Login" bgColor="#1adb2a" onClick={onLogin} />
            <Button data-cy="cancel-btn" caption="Cancel" bgColor="#f2230c" onClick={onCancel} />
        </div>
    </div>
}
export default Login
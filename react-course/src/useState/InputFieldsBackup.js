import { useState } from "react";

const InputFields = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {

        if (email.trim() === '' || password.trim() === '') {
            setLoginError('Please enter both email and password.');
            return;
        }

        console.log(`Login successful with email: ${email}`);

        setEmail('');
        setPassword('');
        setLoginError('');
    };

    return (
        <div>
            <h2>Login</h2>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={handleEmailChange} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={handlePasswordChange} />
            </div>
            {/* {loginError && <p style={{ color: 'red' }}>{loginError}</p>} */}
            {
                loginError ? <p style={{ color: 'red' }}>{loginError}</p> :""
            }
            <button onClick={handleLogin}>Login</button>
        </div>
    );

}

export default InputFields;
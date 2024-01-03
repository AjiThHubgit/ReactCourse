const InputFields = () => {

    const handleLoginBtn = (e) => {
        e.preventDefault();
        const data = {
            fname: e.target.fname.value,
            lname: e.target.lname.value
        }

        console.log(data, 'data');
    }

    return (
        <>
            <div>
                <h2>Login Form:</h2>

                <form onSubmit={(e) => handleLoginBtn(e)}>
                    <div>
                        <label>First Name</label>
                        <input type="text" name="fname" />
                    </div>
                    <div>
                        <label htmlFor="">Last Name</label>
                        <input type="text" name="lname" />
                    </div>
                    <button >Login</button>

                </form>

            </div>
        </>
    );

}

export default InputFields;



// Methode 2 (useState)

// import React, { useState } from 'react';

// const LoginForm = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });
//   const [loginError, setLoginError] = useState('');

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleLogin = () => {
//     const { email, password } = formData;

//     if (!email.trim() || !password.trim()) {
//       setLoginError('Please enter both email and password.');
//       return;
//     }

//     // Your actual login logic goes here
//     console.log(`Login successful with email: ${email}`);

//     // Reset input fields and error message after successful login
//     setFormData({ email: '', password: '' });
//     setLoginError('');
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <div>
//         <label>Email:</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleInputChange}
//         />
//       </div>
//       <div>
//         <label>Password:</label>
//         <input
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleInputChange}
//         />
//       </div>
//       {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default LoginForm;

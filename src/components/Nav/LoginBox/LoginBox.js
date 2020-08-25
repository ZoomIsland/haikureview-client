import React from 'react';

function LoginBox(props) {
  return (
    <div className="loginBox">
      <form className="flex-center-column" onSubmit={props.handleSubmit}>
        <label htmlFor="username" />
        <input onChange={props.handleChange} id="username" name="username" placeholder="Username" value={props.username} />
        <label htmlFor="password" />
        <input onChange={props.handleChange} id="password" name="password" placeholder="Password" value={props.password} />
        <button type="submit">Log in</button>
      </form>
    </div>
  )
}

export default LoginBox;
import React from 'react';

function LoginBox(props) {
  return (
    <div className="dropBox">
      <form onSubmit={props.handleSubmit}>
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
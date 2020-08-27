import React from 'react';

function SignupBox(props) {
  return (
    <div className="dropBox">
      <form onSubmit={props.handleSubmit}>
      <label htmlFor="signuser" />
      <input onChange={props.handleChange} id="signuser" name="username" placeholder="Username" value={props.username} />
      <label htmlFor="signemail" />
      <input onChange={props.handleChange} id="signemail" name="email" placeholder="Email" value={props.email} />
      <label htmlFor="signpass" />
      <input onChange={props.handleChange} id="signpass" name="password" placeholder="Password" value={props.password} />
      <button>Register</button>
    </form>
  </div>
  )
}

export default SignupBox;
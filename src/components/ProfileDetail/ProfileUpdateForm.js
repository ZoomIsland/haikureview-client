import React from 'react';
import './ProfileDetail.css'

function ProfileForm(props) {
  return (
    <div className="profileForm">
      <img src={props.data.profile.image} />
      <div className="displayNameForm">
        <label htmlFor="proFormName">Name: </label>
        <input 
          id="proFormName" 
          type="text" 
          name="display_name" 
          defaultValue={props.display_name}
          onChange={props.onInputChange}
          placeholder="Insert Name Here"></input>
      </div>
      <div className="bioForm">
        <label htmlFor="proFormBio">Bio: </label>
        <textarea 
          id="proFormBio" 
          name="bio" 
          defaultValue={props.bio} 
          onChange={props.onInputChange}
          placeholder="Insert bio here"></textarea>   
      </div>
    </div>
  )
}

export default ProfileForm;
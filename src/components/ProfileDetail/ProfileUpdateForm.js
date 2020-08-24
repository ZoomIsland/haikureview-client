import React from 'react';
import ImageUploader from 'react-images-upload';
import './ProfileDetail.css'

function ProfileForm(props) {
  return (
    <div className="profileForm">
      {/* <img src={props.data.profile.image} /> */}
      <ImageUploader 
        defaultImage={["https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"]}
        withIcon={false} 
        maxFileSize={1048576}
        withLabel={false}
        singleImage={true}
        withPreview={true}
        buttonText={"Choose Image"}
        onChange={props.onDrop} />
      <section className="formText">
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
      </section>
    </div>
  )
}

export default ProfileForm;
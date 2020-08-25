import React from 'react';
import './ProfileDetail.css'

function ProfileDetail(props) {
  console.log(props)
  return (
    <div className="profileDetail">
      {/* <img src={props.data.profile.image} /> */}
      <h2>{props.data.profile.display_name}</h2>
      <hr />
      <p className="bioP">{props.data.profile.bio.length ? props.data.profile.bio : "Add a bio!"}</p>
      <hr />
      <p>Member since {props.data.profile.join_date}</p>
      <p>{props.data.haikus.length} haikus written</p>
      <button className="updateProfileBtn flex-center" onClick={props.toggleUpdate}>Update Profile</button>
    </div>
  )
}

export default ProfileDetail;
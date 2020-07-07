
import React, {useState} from 'react';
import ProfileForm from './ProfileForm';
import ProfileTable from './ProfileTable';

function Profile() {
  const [profile,setProfile] = useState([
        {
          id:1,
          profile: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
       
        },
        {
          id:2,
          profile: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
       
        },   {
          id:3,
          profile: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
       
        },
  ]);

  const handleEdit = () =>{
    console.log("Edit clicked");   
  }

  const handleSave = (data) =>{
  
    console.log("Save clicked: " +  JSON.stringify(data));
    data.id = profile.length +1;
    setProfile(prevProfile => [...prevProfile, data]);
  }

  const handleDelete = (id) =>{
    console.log("Delete clicked:" +id);

    setProfile(prevProfile=>  prevProfile.filter((g) => g.id !== id))

  }

  return (
    <>
    <ProfileForm onSave={handleSave} />
    <ProfileTable profile ={profile} onEdit={handleEdit} onDelete={handleDelete}/>
    </>
  );
}

export default Profile;

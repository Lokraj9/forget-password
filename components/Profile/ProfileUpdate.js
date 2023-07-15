import React from 'react'
import Form from '../Global/Form'
import Button from '../Global/Button';
import { updateUser } from '@/action/authActions';

const ProfileUpdate = ({update}) => {
    async function handleUpdateProfile(formData){
        const name=formData.get('name');
        const image=formData.get('image');
        if(update){
          update({name,image})
        }
        const res=await updateUser({name,image})
        if(res?.msg)alert(res?.msg)
      }

  return (
    <div>
        <h2>Update profile</h2>
        <Form action={handleUpdateProfile} style={{margin:'20px 0'}}>
            <input type='text' name='name' placeholder='Name' required />
            <input type='text' name='image' placeholder='Image' required />
           <Button value="update profile"/>
            
        </Form>
    </div>
  )
}

export default ProfileUpdate
import {useSelector} from 'react-redux';
import { useRef, useState, useEffect } from 'react';
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  signOutUserStart,
} from '../redux/user/userSlice';
import { useDispatch } from 'react-redux';

export default function Profile() {
  const {currentUser} = useSelector((state) => state.user)
  const dispatch = useDispatch();
  const [updateSuccess, setUpdateSuccess] = useState(false);

  const handleSignOut = async () => {

    try {
      dispatch(signOutUserStart())
      const res = await fetch('/api/auth/signout');
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(data.message));
    }
  }
  
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
        <img src={currentUser.avatar} alt="profile" className='mx-auto my-2 rounded-full h-24 w-24' />
      <div>
        <h2 className='border p-3 rounded-lg text-center items-centre'>{currentUser.username}</h2>
        <h2 className='border p-3 rounded-lg text-center items-centre'>{currentUser.email}</h2>
      </div>
      
      <div className="mx-auto my-2 text-center">
        <span onClick={handleSignOut} className='text-red-700 cursor-pointer'>Sign out</span>
      </div>
    </div>
  )
}

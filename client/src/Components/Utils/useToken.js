import { useState } from 'react';

export default function useToken() {

  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken
  };
  const getUser = () => {
    const userString = localStorage.getItem('user');
    const userToken = JSON.parse(userString);
    return userToken
  };
  const getUseradmin = () => {
    const admin = localStorage.getItem('isAdmin');
    const userToken = JSON.parse(admin);
    return userToken
  };
  const getUserartist = () => {
    const userartist = localStorage.getItem('isArtist');
    const userToken = JSON.parse(userartist);
    return userToken
  };

  const [token, setToken] = useState(getToken());
  const [userName, setUserName] = useState(getUser());
  const [isAdmin, setisAdmin] = useState(getUseradmin());
  const [isArtist, setisArtist] = useState(getUserartist());



  const saveToken = userToken => {
    localStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken);
  };
  const saveUser = userName => {
    localStorage.setItem('user', JSON.stringify(userName));
    setUserName(userName);
  };
  const saveadmin = useradmin => {
    localStorage.setItem('isAdmin', useradmin);
    setisAdmin(useradmin);
  };
  const saveartist = userartist => {
    localStorage.setItem('isArtist', userartist);
    setisArtist(userartist);
  };



  return {
    setToken: saveToken,
    setUserName: saveUser,
    setisAdmin: saveadmin,
    setisArtist: saveartist,
    token,
    userName,
    isAdmin,
  isArtist
  }
}
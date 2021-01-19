import React from 'react'
import {getProfile} from "./../utils/auth";

const user = getProfile();
const UserContext = React.createContext('default');

export default UserContext;
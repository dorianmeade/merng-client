import React, {useContext} from 'react';

import { AuthContext } from '../context/auth'


import Posts from './Posts';
import Intro from './Intro';

function Home() {

    const { user } = useContext(AuthContext); //get context access
    return (
        <div>{user ? <Posts/> : <Intro/>} </div>
    );
}
export default Home;
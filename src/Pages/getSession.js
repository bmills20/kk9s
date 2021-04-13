import {useEffect} from 'react';
import { useLocation } from 'react-router-dom'

// This method uses localStorage on user's browser to check if the user
// had visited the page within the last hour. If they had, the animations
// defined in Home.js will not play

const getSession = () => {
    const storage = window.localStorage;
    const currTimestamp = Date.now();
    const timestamp = JSON.parse(storage.getItem('timestamp') || '1000');
    
    const timeLimit =  1 * 60 * 60 * 1000; // 1 hour time limit
    
    const hasTimePassed = currTimestamp - timestamp > timeLimit;
    
    useEffect(() => {
        hasTimePassed ? 
            storage.setItem('timestamp', currTimestamp.toString()) 
            : 
            storage.setItem('timestamp', timestamp.toString());
    }, []);
    console.log(hasTimePassed);
    return hasTimePassed;
};

export default getSession;
import {useEffect} from 'react';
import { useLocation } from 'react-router-dom'

// This method uses localStorage on user's browser to check if the user
// had visited the page within the last 30 min. If they had, the animations
// defined in Home.js will not play

const getSession = () => {
    const storage = window.localStorage;
    const currTimestamp = Date.now();
    const timestamp = JSON.parse(storage.getItem('timestamp') || '1000');
    
    const timeLimit =  0.5 * 60 * 60 * 1000; // 30 min time limit
    
    const hasTimePassed = currTimestamp - timestamp > timeLimit;
    
    useEffect(() => {
        hasTimePassed ? 
            storage.setItem('timestamp', currTimestamp.toString()) 
            : 
            storage.setItem('timestamp', timestamp.toString());
    }, []);
    return hasTimePassed;
};

export default getSession;
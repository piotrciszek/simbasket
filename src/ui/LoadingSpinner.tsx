import classes from './LoadingSpinner.module.css';
import {FC} from 'react';

const LoadingSpinner: FC = () => {
    return <div className={classes['spinner']}></div>;
}

export default LoadingSpinner;
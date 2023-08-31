import styles from './MenuTop.module.css';
import RostersMenu from '../components/RostersMenu';

const MenuTop = () => {

    return (
        <div className={styles['menu-top']}>
            { <RostersMenu/> }
        </div>);
        
}

export default MenuTop;
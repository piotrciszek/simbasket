import styles from './MenuTop.module.css';
import RostersMenu from '../components/RostersMenu';

const MenuTop = () => {

    return (
        <div className={styles['menu-top']}>
            {/* { <RostersMenu/> } */}
            <p>Test Menu top</p>
        </div>);
        
}

export default MenuTop;
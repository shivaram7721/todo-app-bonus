import styles from './Navbar.module.css';
import { useNavigate } from 'react-router-dom';

export function Navbar() {

    const navigate = useNavigate();


    return (
        <div className={styles.container}>
            <span onClick={()=>navigate('/')} className={styles.link}>Home</span>
            <span onClick={()=>navigate('contact')} className={styles.link}>Contact</span>
            <span onClick={()=>navigate('task')} className={styles.link}>Tasks</span>
        </div>
    );
}
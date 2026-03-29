import styles from './Navbar.module.css'
function Navbar () {
    return (
 <nav className={styles.navbar}>
    <div className={styles.logo}>
SkyLark
    </div>
    <div className={styles.links}>
        <a href="#studio" className={styles.link}>Studio</a>
        <a href="#services" className={styles.link}>Services</a>
        <a href="#join" className={styles.button}>Join</a>
 </div> 
 </nav>

    )
}
export default Navbar;
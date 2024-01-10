import styles from './Navigation.module.css'

const Navigation = () => {
  console.log(styles);

  return (
    <nav className={`${styles.navigation} container`}>
      <div className={`${styles.logo}`}>
        <img src="images/logos.png" alt="logo"/>
      </div>
      
      <ul>
        <li>Home</li>
        <li>Projects</li>
        <li>Resume</li>

      </ul>
    </nav>
  )
}

export default Navigation

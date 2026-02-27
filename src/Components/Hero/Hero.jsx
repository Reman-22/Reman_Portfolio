import styles from  "../Hero/Hero.module.css"

const Hero =({title, description , btn })=> {
  return (
    <div className={styles.Hero}>
      <div className={styles.Hero1}>
        <div className={styles.bg}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
      <button className={styles.btn}> <a href='/Reman Hamadah CV.pdf' download="Reman_CV">{btn}</a> </button>
      </div>
      </div>
      <div className={styles.image_container}>
        <div className={styles.Circle}>
        <img src="/Images/myImage.png" alt="my image" className={styles.Image} />
      </div>
      <div className={styles.Circle_purple}></div>
        <div className={styles.Circle_purple1}></div>
        <div className={styles.Circle_blue}></div>
        <div className={styles.Circle_blue1}></div>
      </div>
      </div>
  )
}

export default Hero
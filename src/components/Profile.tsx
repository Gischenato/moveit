import styles from "../styles/components/Profile.module.css";

export function Proflie() {
    return(
        <div className={styles.profileContainer}>
            <img src="http://github.com/gischenato.png" alt="Giovanni Schenato"/>
            <div>
                <strong>Giovanni Schenato</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level 1
                </p>
            </div>
        </div>
    )
}
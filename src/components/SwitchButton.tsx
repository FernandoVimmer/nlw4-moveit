import styles from '../styles/components/SwitchButton.module.css'

export function SwitchButton() {

    return (
        <div>
            <label className={styles.switch}>
            <input type="checkbox"></input>
                <span className={`${styles.slider} ${styles.round}`}></span>
            </label>
        </div>
    );
}
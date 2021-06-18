import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'

import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengesContext)

    return(
        <div className={styles.profileContainer} >
            <img src="https://github.com/snax10.png" alt="Carlos Santos" />

            <div>
                <strong>Carlos Santos</strong>
                <p>
                    <img src="https://img.icons8.com/small/452/level-up.png" alt="" />
                    Level {level}
                </p>
            </div>
        </div>
    )
}
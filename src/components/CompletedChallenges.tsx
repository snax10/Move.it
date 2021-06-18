import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'

import styles from '../styles/components/CompletedChallenge.module.css'

export function CompletedChallenge() {
    const { challengesCompleted } = useContext(ChallengesContext)

    return(
        <div className={styles.CompletedChallengeContainer}>
            <span>Desafios completados</span>
            <span>{challengesCompleted}</span>
        </div>
    )
}
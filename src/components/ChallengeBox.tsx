import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { CountdownContext } from '../contexts/CountdownContext'
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext)
    const { resetCountDown } = useContext(CountdownContext)

    function handleChallengeSucceded() {
        completeChallenge();
        resetCountDown();
    }

    function handleChallengeFailed() {
        resetChallenge();
        resetCountDown();
    }

    return(
        <div className={styles.challengeBoxContainer}>
           {activeChallenge ? (
               <div className={styles.challengeActive}>
                   <header>Ganhe {activeChallenge.amount} xp</header>

                   <main>
                       <img src="https://img.flaticon.com/icons/png/512/755/755298.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF"/>
                       <strong>Novo desafio</strong>
                       <p>{activeChallenge.description}</p>
                   </main>

                   <footer>
                       <button 
                       type="button"
                       className={styles.challengeFailButton}
                       onClick={handleChallengeFailed}
                       >
                           Falhei
                        </button>
                        <button 
                        type="button"
                        className={styles.challengeSucceededButton}
                        onClick={handleChallengeSucceded}
                       >
                            Completei
                        </button>
                   </footer>
               </div>
           ) : (
                <div className={styles.challengeNotActive}>
                <strong>Finalize um ciclo para receber desafios</strong>
                <p>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR9PS6PGeLzlJbROKMkKbkWwQYAtAGjMfuBg&usqp=CAU" alt="Subindo nivel" />
                    Avance de level completando desafios
                </p>
            </div>
           )}
        </div>
    )
}
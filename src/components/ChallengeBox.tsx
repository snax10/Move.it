import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
    const contextData = useContext(ChallengesContext)

    console.log(contextData)

    const hasActiveChallenge = true

    return(
        <div className={styles.challengeBoxContainer}>
           {hasActiveChallenge ? (
               <div className={styles.challengeActive}>
                   <header>Ganhe 400 xp</header>

                   <main>
                       <img src="https://img.flaticon.com/icons/png/512/755/755298.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF"/>
                       <strong>Novo desafio</strong>
                       <p>Levante e faça uma caminhada de 3 minutos.</p>
                   </main>

                   <footer>
                       <button 
                       type="button"
                       className={styles.challengeFailButton}
                       
                       >
                           Falhei
                        </button>
                        <button 
                        type="button"
                        className={styles.challengeSucceededButton}
                       >
                            Completei
                        </button>
                   </footer>
               </div>
           ) : (
                <div className={styles.cshallengeNotActive}>
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
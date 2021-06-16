import { createContext, useState, ReactNode } from 'react'

interface challengesContextData {
    level: number;
    currentExperience: number;
    challengesCompleted: number; 
    levelUp: () => void;
    startNewChallenge: () => void;
}

interface ChallengeProviderProps {
    children: ReactNode;
}

export const ChallengesContext = createContext({} as challengesContextData)


export function ChallengesProvider({ children }: ChallengeProviderProps) {
    const [level, setLevel] = useState(1)
    const [currentExperience, setCurrentExperience] = useState(0)
    const [challengesCompleted, setChallengesCompleted] = useState(0)


    function levelUp() {
        setLevel(level + 1);
    }

    function startNewChallenge() {
        console.log('New challenge')
    }

    return (
        <ChallengesContext.Provider 
        value={{ 
            level,
            currentExperience, 
            challengesCompleted, 
            levelUp,
            startNewChallenge,
           }}
        >
            {children}
        </ChallengesContext.Provider>
    )

}


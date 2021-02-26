import { useState, useEffect, useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/CountDown.module.css'
import { CountdownContext } from '../contexts/CountdownContex'


export function CountDown() {
    const { minutes, 
            seconds, 
            isActive,
            startCountdown, 
            resetCountdown,
            hasFinished
        } = useContext(CountdownContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

    

    return (
        <div>
            <div className={styles.countDownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            { hasFinished ? (
                <button disabled
                        className={styles.countdownButton}
                >
                    Ciclo Encerrado
                </button>
            ) : (
                <>
                    { isActive ? (
                        <button type="button" 
                                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                                onClick={resetCountdown}
                        >
                            Abandonar ciclo
                        </button>
                        ) : (            
                        <button type="button"
                                className={styles.countdownButton}
                                onClick={startCountdown}
                        >
                            Iniciar um ciclo
                        </button>)
                      }
                </>
            )}
        </div>
    )
}
import { CompletedChallenges } from '../components/CompletedChallenges';
import { CountDown } from '../components/CountDown';
import { ExperienceBar } from "../components/ExperienceBar";
import { Proflie } from '../components/Profile';

import Head from 'next/head'

import styles from "../styles/pages/Home.module.css"
import { ChallengeBox } from '../components/ChallengeBox';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | MoveIt</title>
      </Head>

      <ExperienceBar/>

      <section>
        <div>
          <Proflie />
          <CompletedChallenges />
          <CountDown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>
  )
}

import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import Image from 'next/image'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL

interface IHomeProps {
  name: string
  appName?: string
  message?: string
}

const Home: React.FC<IHomeProps | NextPage> = ({ message }: IHomeProps) => {
  return (
    <div className={styles.container}>
      <Image src="/dibre-logo.svg" width={200} height={40}/>
      <p>{message}</p>
    </div>
  )
}

export async function getStaticProps () {
  const res = await fetch(`${APP_URL}/api/hello`)
  const hello = await res.json()
  
  return {
    props: {
      message: hello.message || 'Hello World'
    }
  }
}

export default Home

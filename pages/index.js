import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faBell } from '@fortawesome/free-solid-svg-icons'


export default function Home({ users }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>ConWorld</title>
        <meta name="description" content="The best social media over the net!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <br />
      {users.map((user) => (
        <p key={user.id}>{user.userName}</p>
      ))}
    </div>
  )
}

export async function getServerSideProps() {
  const users = [1, 2]
  return {
    props: {
      users
    }
  }
}
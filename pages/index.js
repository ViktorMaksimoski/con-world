import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { PrismaClient } from '@prisma/client'
import { useState } from 'react'
import axios from 'axios'

export default function Home({ initUsers }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>ConWorld</title>
        <meta name="description" content="The best social media over the net!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p className='font-bold text-3xl'>Hello world</p>
      <br />
      {initUsers.map((user) => (
        <p key={user.id}>{user.userName}</p>
      ))}
    </div>
  )
}

export async function getServerSideProps() {
  let users;
  fetch('https://localhost:3000/api/user')
  .then(res => users = res.json())
  return {
    props: {
      initUsers: users
    }
  }
}
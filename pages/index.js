import orangeCar from '../sprites/car-orange.png'
import whiteCar from '../sprites/car-white.png'
import blueCar from '../sprites/car-blue.png'
import yellowCar from '../sprites/car-yellow.png'
import { useState } from 'react'
import Head from 'next/head'
import styles from "./index.module.css";
import Image from 'next/image'

function getCar(color) {
  switch (color) {
    case 'orange':
      return orangeCar
    case 'blue':
      return blueCar
    case 'yellow':
      return yellowCar
    default:
      return whiteCar
  }
}

export default function Race() {
  const [color, setColor] = useState('white')
  const image = getCar(color)

  return (
    <>
    <Head>
      <title>API Demo</title>
      <link rel="icon" href="/dog.png" />
    </Head>
    <main className={styles.main}>
      <h3>Pick a color</h3>
      <div className={styles.colorPickerContainer}>
        <button 
          className={styles.colorPicker}
          style={{ backgroundColor: 'white'}}
          value="white"
          onClick={e => setColor(e.target.value)}
        ></button>
        <button 
          className={styles.colorPicker}
          style={{ backgroundColor: 'orange'}}
          value="orange"
          onClick={e => setColor(e.target.value)}
        ></button>
        <button 
          className={styles.colorPicker}
          style={{ backgroundColor: 'blue'}}
          value="blue"
          onClick={e => setColor(e.target.value)}
        ></button>
        <button 
          className={styles.colorPicker}
          style={{ backgroundColor: 'yellow'}}
          value="yellow"
          onClick={e => setColor(e.target.value)}
        ></button>
      </div>
      <div style={{ marginTop: '16px' }}>
        <Image src={image} width={640} height={320} />
      </div>
    </main>
    </>
  )
}
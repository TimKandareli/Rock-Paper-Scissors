import './main.sass'
import { useRef } from 'react'

const Main = () => {
  const imagePlayer = useRef(null)
  const imageComputer = useRef(null)

  const playHandler = (gesture) => {
    imagePlayer.current.childNodes[0].src = `/rock.png`
    imageComputer.current.childNodes[0].src = `/rock.png`
    const arrayGesture = ['rock', 'paper', 'scissors']
    const index = Math.floor(Math.random() * (2 + 1))
    setTimeout(() => {
      imagePlayer.current.childNodes[0].src = `/${ gesture }.png`
      imageComputer.current.childNodes[0].src = `/${ arrayGesture[index] }.png`
      imagePlayer.current.style.animation = ''
      imageComputer.current.style.animation = ''
    }, 2000)
    imagePlayer.current.style.animation = 'shakePlayer 2s ease'
    imageComputer.current.style.animation = 'shakeComputer 2s ease'
  }
  return (
    <div className='interface'>
      <div className='players'>
        <div className='players__one'>Login: 4</div>
        <div className='players__one'>Computer: 2</div>
      </div>
      <div className='images'>
        <div ref={ imagePlayer } className='images__gesture images__gesture_reverse'>
          <img src="/rock.png" alt="rock"/>
        </div>
        <div ref={ imageComputer } className='images__gesture'>
          <img src="/rock.png" alt="rock"/>
        </div>
      </div>
      <div className='options'>
        <p className='options__title'>Chose an options</p>
        <div className="options__buttons">
          <button onClick={ () => playHandler('rock') }>ROCK</button>
          <button onClick={ () => playHandler('paper') }>PAPER</button>
          <button onClick={ () => playHandler('scissors') }>SCISSORS</button>
        </div>
      </div>
    </div>
  )
}

export default Main

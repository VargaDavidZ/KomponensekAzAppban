import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './karakterformazas.css'




function HeaderFirst ()
{
  return <h1>Első szintű címsor</h1>
}


function HeaderSecond(){
    return <h2>Második szintű címsor</h2>
}

function ParagraphLorem(){
  return <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus commodi molestiae suscipit nam autem vero delectus rerum, aspernatur quis corporis, deleniti necessitatibus? Possimus laborum sit veritatis quisquam similique sint eos. </p>
}

function RandomNumber()
{
  let myNum = Math. floor(Math. random()*10) + 1;
  return <p> {myNum} </p>
}

function ParagraphWithStyle()
{
 return  <p className='piros' >Tantárgy amit nagyon szeretek</p>
}

function ParagraphWithLocalStyle(){


  return <p style={{color: "green"}}><b><i><u> Kedvenc idézetem </u></i></b></p>
}

interface Card{
  name: string;
  phoneMum: string;
  email: string;

}

function ComponentWithProps(props:Card){
    return( <div><p> {props.name} </p> <p>{props.phoneMum}</p> <p>{props.email}</p> </div>   )
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       {HeaderFirst()}
       {HeaderSecond()}
       {ParagraphLorem()}
       {RandomNumber()}
       {RandomNumber()}
       {RandomNumber()}
       {ParagraphWithStyle()}
       {ParagraphWithLocalStyle()}
    </>
  )
}

export default App

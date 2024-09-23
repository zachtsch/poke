import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Pokemon({id}){
    const [url,setUrl] = useState('');
    const [[x,y],setXY] = useState([Math.random()*600,Math.random()*600])
    useEffect(()=>{
        async function load(){
            try{
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
                const json = await res.json()
                setUrl(json.sprites.front_default);
            }catch(e){
                console.error(e)
            }
        }
        load()
    },[id,url])
    useEffect(()=>{
        setTimeout(()=>{
            setXY([Math.random()*10-5+x,Math.random()*10-5+y])
        },10)
    },[x,y])
    return (
        <img src={url} style={{position:'absolute',left:x,top:y}}/>
    )
}

function App() {
//   const [count, setCount] = useState(0)
//     return ( <><Pokemon id={1} /> 
//     <Pokemon id={2} /> 
//     <Pokemon id={3} /> </>)
    return (
        [...Array(300)].map((_,i)=><Pokemon id={i} key={i} />)
    )
}

export default App

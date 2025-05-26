import {useEffect} from 'react'
import {useState} from 'react'
import React from 'react'
import './Task.css'
const Task = () => {
    let prime="http://20.244.56.144/evaluation-service/primes"
    let [prim,setprime]=useState([])
    const p=()=>{
    useEffect(()=>{
        async function getele(){
        let response=await fetch(prime)
        let data=await response.json();
        setprime(data);
        }
        getele()
    },[]);
}
    return (
    <>
    <div className="Hello">
        <h1>
            Average Calculator HTTP Microservice
        </h1>
    </div>
        <div className="Section">
                <h1>Select :</h1>
                 <button onClcik={p}>primes</button>
                  <button >fibo</button>
                   <button >even</button>
                    <button>rand</button>
        </div>
        <div>
            <p>"WindowPrevState": []</p>
            <p>"WindowCurrState": [1,3,5,7]</p>
            <p>"numbers": [1,3,5,7]</p>
            <p>"avg": 4.00</p>
        </div>
    </>
  )
}
export default Task

import React, {useReducer} from 'react';
import {reducer} from './../Context/AppReducer';


export const People = ()=> {
    const people = [
        {name: 'Jay', alive: true},
        {name: 'Kailee', alive: true},
        {name: 'John', alive: true},
        {name: 'Mia', alive: true}
      ]
    
    const[state, dispatch] = useReducer(reducer, people);

    return(
        <div>
            {
                state.map((p, ind)=>{
                return(
                    <div>
                    <div>{p.name}</div>
                    {p.alive ?
                    <div> ✨✨ ALIVE! ✨✨<button onClick={()=>dispatch({type: 'chomp', payload: p.name})}>Alive</button></div> :
                    <div> ☠ ☠ DEAD ☠ ☠ <button onClick={()=>dispatch({type: 'revive', payload: p.name})}>Dead</button></div>}
                    </div>
                )
                })
            }
        </div>
    );
}
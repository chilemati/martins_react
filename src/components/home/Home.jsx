import React from 'react'
import { useRecoilState } from 'recoil';
import { likes } from '../global/likes';
import Hooks from '../hooks/Hooks'

const Home = () => {
  let [love, setLove] = useRecoilState(likes); //! atom step: 3

  function sum(a,b) {
    return `${a} +  ${b} = ${a+b}`;
  }

  function htm(str) {
    let result = [];
    let tags = ['<p>', '</p>', '<h3>', '</h3>', '<a>', '</a>'];
    for (let i = 0; i < tags.length;) {
      if (str.indexOf(tags[i]) != -1) {
          let otp= str.indexOf(tags[i]);
        let ctp = str.indexOf(tags[i + 1]);
        let L = tags[i].length + 1;
        let sliced = str.slice(otp, ctp+ L);
        //  delete the sliced from the original
        let txt = str.slice(otp + L, ctp);
        let remain =str.replace(sliced,' ');
        i++;
        result.push(tags[i]);
        result.push(txt);
      }
      i++;
    }
    return result;
  }
 setTimeout(() => {
  console.log( htm('<p> paragraph </p> <h3> heading 3 </h3> <a> address tag </a>'));
  
 }, 1000);

  return (
    <div>
      <h1>Home Page {sum(5, 8)}</h1>
      {/* //? All data types in Javacript can be passed as a prop
          //? such as: String,Number,Array,Object,null,undefined,NAN etc
          //? even functions can also be passed
       */}
      <hr />
      {/* //! atom step: 4 */}
      <h2>Love Score: {love} </h2>
      <button onClick={()=> setLove(love = love + 1)}>Add Love</button>
      <Hooks clause={' Aways'} plus={sum} />
    </div>
  )
}

export default Home
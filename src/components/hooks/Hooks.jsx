import React, { useState,useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { likes } from '../global/likes';
import './hooks.scss';

const Hooks = ({clause,plus}) => {
    let [count, setCount] = useState(0); //! declearing a useState variable
    // ? count is the initia value entered in the perentasis
    //? setCount is a function that useState return to update count at any time
//     let count = 0;
//   function add() {
//     count++;
//       console.log(count);
//   }
    let [styles, setStyles] = useState('');
    let love = useRecoilValue(likes);
    
    function add() {
        setCount(count = count + 1);
    }
    function subt() {
        setCount(count = count - 1);
    }
    let c = 0;
    useEffect(() => {
        c++;
        setTimeout(() => {
            setCount(count += count);
            
        }, 2000);
        console.log('first', c);
    },[]);
    
   
    
    
    

   
  return (
      <div>
          <hr />
          <h3>Hookes Page</h3>
          <h4>Count: {count} </h4>
          <button onClick={()=> add()}>Add One</button>
          <button onClick={() => subt()}>Subtract One</button>
          <hr />

          <div className={styles}>
              <h1>Changing Themes: {styles} </h1>
                  <h5>Likes: {love }</h5>
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sequi suscipit cumque culpa porro autem! Quam ullam fugit eaque qui. Culpa quia eum illum totam dolore unde mollitia, fugiat architecto odit ducimus nobis amet, impedit quasi ut suscipit assumenda accusantium similique. Veniam hic voluptas expedita corporis mollitia at qui tempore, minus perferendis quam dolor tenetur officiis delectus fuga culpa inventore exercitationem, cupiditate tempora sequi. Esse, rem amet a doloribus quis adipisci sapiente, dolores consequuntur quasi officiis dolor ab ad repudiandae!</p>
              <h2>I love Coding {clause} </h2>
              <h3> {plus(5,17)} </h3>
              <button onClick={()=> setStyles('')}>Default</button>
              <button onClick={()=> setStyles('red')}>Red</button>
              <button onClick={()=> setStyles('blue')}>Blue</button>
            </div>
      </div>
  )
}

export default Hooks
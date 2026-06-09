// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App






// ---------------------------------------------MY STUFF------------------------------------
import './App.css'
import { getImageUrl } from './utils';
import { useState } from 'react';
import { Game } from './tictactoe'
import { Button } from 'flowbite-react';

type person = {
    imageId: string;
    name: string;
};

type props = {
  person: person;
  size: number;

}

export default function MyApp(){
  //Make buttons update together
  const [count, setCount] = useState(0)
  function handleClick(){
    // alert('You clicked me!');
    setCount(count+1);
  }
  
  return(
    <div>
      <h1>
        Welcome to my page! Actual content coming soon ish
      </h1>
      <Game />
      <hr/>
      <Gallery />
      <h2>Synced buttons</h2>
      <MyButton count={count} onClick={handleClick}/>
      <MyButton count={count} onClick={handleClick}/>
      <Button color="green" size="sm">Looks good → does nothing </Button>
      <div className='about-page'>
        <AboutPage/>
      </div>
    </div>
  );
}

function Gallery() {
  return (
    <section>
      <h2>Amazing scientists</h2>
        <Profile />
        <Profile />
        <Profile />
    </section>
  );
}

function Avatar(props:props) {
  const person = props.person;
  const size = props.size;
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export function Profile() {
  return (
    <Avatar 
        person={{ name: 'Lin Lanying', imageId: '1bX5QH6'}}
        size={100}
    />
  );
}

type MyButtonProps={
  count:number;
  onClick: () => void;
};

function MyButton({count, onClick}:MyButtonProps){
  return(
    <button className= "btn-default" onClick={onClick}>Clicked {count} times</button>
  )
}

function AboutPage(){
  return(
    <>
      <h1>About</h1>
      <p>
        Hello there. <br/> How are you?
      </p>
    </>
  );
}
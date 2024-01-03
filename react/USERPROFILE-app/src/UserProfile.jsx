import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './UserProfile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';


let obj={
  name:'harshit kumar sharma',
  title:'shoftware engineer',
  URL:'https://media.gettyimages.com/id/1421479579/photo/beverly-hills-california-sundar-pichai-speaks-onstage-vox-medias-2022-code-conference-day-1.jpg?s=612x612&w=0&k=20&c=YXPAR93nlklqUryBYt8Anf3pwdOS80ynufWRDlN8nRM=',
 
  skillsets:[{html:'html'},{css:'css'},{js:'javascript'},{node:'node.js'},{react:'react.js'}],
  icon:[fab.faHtml5,fab.faCss3,fab.faJs,fab.faNode,fab.faReact ],
}

function App({obj}){
  return (<div className='container'>
<section className='information'>
<div className='name'>
  {obj.name}
  <button>follow</button>
</div>
<div className='title'>
{obj.title}
</div>
<div className='icons'>
    <span><FontAwesomeIcon icon={obj.icon[0]} className='html'/> HTML</span>
    <span><FontAwesomeIcon icon={obj.icon[1]} className='css'/>CSS </span>
    <span><FontAwesomeIcon icon={obj.icon[2]} className='js'/> JAVA SCRIPT</span>
    <span><FontAwesomeIcon icon={obj.icon[3]} className='node'/>NODE.JS</span>
    <span><FontAwesomeIcon icon={obj.icon[4]} className='react'/>React</span>

</div>

</section>
<section className='pics'>
  <img src={obj.URL} />
</section>
  </div>)
}

function UserProfile() {
  return (
  <>
 <App obj={obj}  />
  </>
  )
   
}

export default UserProfile

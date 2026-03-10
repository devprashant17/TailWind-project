import bg from './assets/bg.jpeg'
import React from "react";
import { SideCard } from './components/sidecard';
import { MainCard } from './components/maincard';

function App(){
  return <div style={{ backgroundImage: `url(${bg})` }} className="flex flex-col justify-end h-screen bg-cover bg-center">
    <div className="flex items-end grid grid-cols-20 h-200 ">
      <SideCard />
      <MainCard />
    </div>
    

     
    {/*<Schedule />
     */}

  </div>
}

export default App;
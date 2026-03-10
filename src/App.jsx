import bg from './assets/bg.jpeg'
import React from "react";
import { SideCard } from './components/sidecard';
import { ProfileCard } from './components/profilecard';
import { MainCard } from './components/maincard';
import { WebinarOptions } from './components/webinaroptions';
import { Schedule } from './components/schedule';

function App(){
  return <div style={{ backgroundImage: `url(${bg})` }} className="flex flex-col justify-end h-screen bg-cover bg-center">
    <div className="flex items-end grid grid-cols-16 h-200 ">
      <SideCard />
      <MainCard />
    </div>


    {/* <ProfileCard />
    <Schedule />
    <WebinarOptions /> */}

  </div>
}

export default App;
import React from "react";
import { ProfileCard } from './profilecard';

export function MainCard(){
    return <div className="flex col-span-17 bg-white h-170">
        <ProfileCard className=""/>
        <div className="mt-10 mb-10">
            <div>Wednesday, 10 March </div>
            <div className="text-2xl text-purple-900"><b>Good Morning, Prashant !</b></div>
        </div>
    </div>
}

import React from "react"
import threebar from '../assets/threebars.png'
import { useState } from "react";
import { ProfileCard } from './profilecard';
import { WebinarOptions } from "./webinaroptions";
import { Schedule } from "./schedule";
import { TiHome } from "react-icons/ti";
import { BsCameraReelsFill } from "react-icons/bs";
import { GrDocumentText } from "react-icons/gr";
import { FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

export function Cards(){
    const [sideCardOn,setSideCardOn] = useState(true);
    const [selected,setSelected] = useState("home");
    return <div className="flex items-end h-screen">
        <div className={`border border-gray-900 transition-all w-0 pb-112 ${sideCardOn ? "md:w-64" : "md:w-16"} h-screen`}>  
            {sideCardOn && <div className="p-5">
                <div className="flex justify-between">
                    <div  className="flex items-center h-10 p-5 cursor-pointer"><p className="text-cyan-500 ">Webinar.</p>gg</div>
                    <img onClick={()=>{
                        setSideCardOn(s=>!s);
                    }} src={threebar} className="h-[30px] w-[30px]"/>
                </div>
                <br />
                 <div onClick={()=>{
                    setSelected("home");
                 }} className={`flex justify-between items-center rounded-md h-15 p-5 cursor-pointer text-gray-600  ${selected==="home"? "bg-blue-800 text-white" : "hover:bg-blue-100"}`}><p>Home</p><TiHome className="size-6"/>
                </div>
                <div onClick={()=>{
                    setSelected("webinars");
                 }} className={`flex justify-between items-center rounded-md h-15 p-5 $ cursor-pointer text-gray-600 ${selected==="webinars"? "bg-blue-800 text-white" : "hover:bg-blue-100"} `}><p>Webinars</p><BsCameraReelsFill className="size-5" /></div>
                <div onClick={()=>{
                    setSelected("billing");
                 }} className={`flex justify-between items-center rounded-md h-15 p-5  cursor-pointer text-gray-600 ${selected==="billing"? "bg-blue-800 text-white" : "hover:bg-blue-100"}`}><p>Billing</p><GrDocumentText className="size-5" /></div>
                <div onClick={()=>{
                    setSelected("user");
                 }} className={`flex justify-between items-center rounded-md h-15 p-5 cursor-pointer text-gray-600 ${selected==="user"? "bg-blue-800 text-white" : "hover:bg-blue-100"} `}><p>User Management</p><FaUser className="size-5" /></div>
                <div onClick={()=>{
                    setSelected("settings");
                 }} className={`flex justify-between items-center rounded-md h-15 p-5 cursor-pointer text-gray-600 ${selected==="settings"? "bg-blue-800 text-white" : "hover:bg-blue-100"}`}><p>Settings</p><IoMdSettings className="size-6" /></div>
            </div>}
            {!sideCardOn && <div className="p-2">
                    <img onClick={()=>{
                        setSideCardOn(s=>!s);
                    }} src={threebar} className="translate-x-2 h-[30px] w-[30px]"/>
                <br />
                <div onClick={()=>{
                    setSideCardOn(true);
                    setSelected("home");  
                 }} className={`flex justify-center items-center rounded-md h-15 cursor-pointer text-gray-600 ${selected==="home"? "bg-blue-800 text-white" : "hover:bg-blue-100"}`}><TiHome className="size-8"/></div>
                <div onClick={()=>{
                    setSideCardOn(true);
                    setSelected("webinars");
                 }} className={`flex justify-center items-center rounded-md h-15 cursor-pointer text-gray-600 ${selected==="webinars"? "bg-blue-800 text-white" : "hover:bg-blue-100"}`}><BsCameraReelsFill className="size-5" /></div>
                <div onClick={()=>{
                    setSideCardOn(true);
                    setSelected("billing");
                 }} className={`flex justify-center items-center rounded-md h-15 cursor-pointer text-gray-600 ${selected==="billing"? "bg-blue-800 text-white" : "hover:bg-blue-100"}`}><GrDocumentText className="size-5" /></div>
                <div onClick={()=>{
                    setSideCardOn(true);
                    setSelected("user");
                 }} className={`flex justify-center items-center rounded-md h-15 cursor-pointer text-gray-600 ${selected==="user"? "bg-blue-800 text-white" : "hover:bg-blue-100"}`}><FaUser className="size-5" /></div>
                <div onClick={()=>{
                    setSideCardOn(true);
                    setSelected("settings");
                 }} className={`flex justify-center items-center rounded-md h-15  cursor-pointer text-gray-600 ${selected==="settings"? "bg-blue-800 text-white" : "hover:bg-blue-100"}`}><IoMdSettings className="size-6" /></div>
            </div>}
        </div>


        <div className=" border border-gray-600 border-l-0 flex-1 h-200 flex col-span-17 bg-white">
            <ProfileCard />
            <div className="flex flex-col">
                <div className="mt-10 mb-10">
                    <div>Wednesday, 10 March </div>
                    <div className="text-2xl text-purple-900"><b>Good Morning, Prashant !</b></div>
                </div>
                <div className="flex">
                    <Schedule />
                    <WebinarOptions />
                </div>

            </div>

        </div>
    </div>
}
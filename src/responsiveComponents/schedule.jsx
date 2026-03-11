import React from "react";

export function Schedule(){
    return <div className="shadow-md pl-10 pt-5 border border-gray-300 rounded-xl bg-white h-[420px] w-[750px]">
        <div>Wednesday, 10 March 2026</div>
        <div className="flex mt-5 mb-5 mr-10 rounded-lg hover:bg-blue-100">
            <span className="p-3 text-xl border-r-3 border-r-[#a855f7] w-[120px]"><b>11:30 AM</b></span>
            <div className="ml-5 flex flex-col">
                <span className="text-red-600">Live</span>
                <span className="text-l">UX Webinar</span>
            </div>   
        </div>
        <hr className="text-gray-500 w-[660px]"/>
        <div className="flex mb-5 mt-5 mr-10 rounded-lg hover:bg-blue-100">
            <span className="p-3 text-xl border-r-3 border-r-[#a855f7] w-[120px]"><b>2:30 PM</b></span>
            <div className="ml-5 flex flex-col">
                <span className="text-blue-500">Upcoming</span>
                <span className="text-l">Meeting with Ti:Ki Members</span>
            </div>  
        </div>
        <hr className="text-gray-500 w-[660px]"/>
        <div className="flex mb-5 mt-5 mr-10 rounded-lg hover:bg-blue-100">
            <span className="p-3 text-xl border-r-3 border-r-[#a855f7] w-[120px]"><b>4:30 PM</b></span>
            <div className="ml-5 flex flex-col">
                <span className="text-blue-500">Upcoming</span>
                <span className="text-l">Class</span>
            </div>  
        </div>
        <hr className="text-gray-500 w-[660px]"/>
        <div className="flex mb-5 mt-5 mr-10 rounded-lg hover:bg-blue-100">
            <span className="p-3 text-xl border-r-3 border-r-[#a855f7] w-[120px]"><b>7:00 PM</b></span>
            <div className="ml-5 flex flex-col">
                <span className="text-blue-500">Upcoming</span>
                <span className="text-l">Online Presentation</span>
            </div>  
        </div>


    </div>
}

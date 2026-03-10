import React from "react";

export function SideCard(){
    return <div className="shadow-md border border-gray-200 col-span-3 bg-white h-200">
        <div className="p-5">
            <div  className="flex items-center h-10 p-5 cursor-pointer"><p className="text-cyan-500 ">Webinar.</p>gg</div>
            <br />
            <div className="flex items-center rounded-md h-10 p-5 hover:bg-blue-100 cursor-pointer">Home</div>
            <div className="flex items-center rounded-md h-10 p-5 hover:bg-blue-100 cursor-pointer">Webinars</div>
            <div className="flex items-center rounded-md h-10 p-5 hover:bg-blue-100 cursor-pointer">Billing</div>
            <div className="flex items-center rounded-md h-10 p-5 hover:bg-blue-100 cursor-pointer">User Management</div>
            <div className="flex items-center rounded-md h-10 p-5 hover:bg-blue-100 cursor-pointer">Settings</div>
        </div>
    </div>
}


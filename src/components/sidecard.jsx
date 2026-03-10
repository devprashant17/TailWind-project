import React from "react";

export function SideCard(){
    return <div className="border border-gray-200 col-span-3 bg-white h-200">
        <div className="p-5">
            <div className="flex items-center h-10 p-5"><p className="text-cyan-500">Webinar.</p>gg</div>
            <br />
            <div className="flex items-center border border-red rounded-md h-10 p-5">Home</div>
            <div className="flex items-center border border-red rounded-md h-10 p-5">Webinars</div>
            <div className="flex items-center border border-red rounded-md h-10 p-5">Billing</div>
            <div className="flex items-center border border-red rounded-md h-10 p-5">User Management</div>
            <div className="flex items-center border border-red rounded-md h-10 p-5">Settings</div>
        </div>
    </div>
}


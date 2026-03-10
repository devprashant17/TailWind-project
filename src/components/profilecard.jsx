import React from "react";

export function ProfileCard(){
    return <div className="-translate-y-10 ml-10 mr-10 flex flex-col items-center justify-around rounded-xl border border-gray-200 bg-white h-[380px] w-[300px] pt-10 pb-10 shadow-md ">
        <img className="size-45 rounded-md" src="https://scontent.fktm7-1.fna.fbcdn.net/v/t39.30808-1/640336414_1795058551165733_8465203750568219670_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_ohc=H1zf1pWzvr0Q7kNvwGq8q8S&_nc_oc=AdlZY3m9Qt4892GghG97h2y7-K4ZGYoSzBKMyn2F9qPcU8s_lPhkJTLXyLJWHhQqtjE&_nc_zt=24&_nc_ht=scontent.fktm7-1.fna&_nc_gid=chsnYfRwn7UF4TLvrRA-Xg&_nc_ss=8&oh=00_AfwoAf0PlBoM04U7dHL_r9UaAZkMYx9NvhaMRxO9MgA1WA&oe=69B61146"></img>
        <p className="mt-5"><b>Prashant Karki</b></p>
        <p>prashantkarki0617@gmail.com</p>
        <p>+977 9761156703</p>
        <p className="mt-5">Kathmandu, Nepal</p>
    </div>
}

import React, { useState } from "react";
import { toast } from "react-toastify";

const Cards = ({ info, setProgress, progress}) => {
  // console.log(info)
  const [supportStatus,setSupportStatus] = useState(true)
  let priority = ''
  let statusOption = ''

  if (supportStatus){
    statusOption = <div className="flex justify-center items-center gap-1 py-1 px-3 bg-[#B9F8CF] rounded-full"><div className="bg-[#02A53B] w-4 h-4 rounded-full"></div><p className=" text-[#0B5E06] text-base font-medium">Open</p></div>
  } else{
    statusOption = <div className="flex justify-center items-center gap-1 py-1 px-3 bg-[#F8F3B9] rounded-full"><div className="bg-[#FEBB0C] w-4 h-4 rounded-full"></div><p className=" text-[#9C7700] text-base font-medium">In- Progress</p></div>
  }

  if (info.priority === 'Low Priority') {
    priority = <p className="text-[14px] font-medium text-[#02A53B] ">{info.priority}</p>
  } else if (info.priority === 'Medium Priority') {
    priority = <p className="text-[14px] font-medium text-[#FEBB0C] ">{info.priority}</p>
  } else {
    priority = <p className="text-[14px] font-medium text-[#F83044] ">{info.priority}</p>
  }
  const cardClick = (info)=>{
    
    setProgress([...progress , info])

    
    setSupportStatus(false)
    toast("In Progress")
 
  }
  return (
    <div onClick={()=> cardClick(info)}>

      <div className="card bg-base-100 card-sm shadow-sm">
        <div className="card-body">
          <div className="flex justify-between items-center">
            <h2 className="card-title">{info.title}</h2>
            {statusOption}
            
          </div>
          <p className=" text-[#627382] font-normal text-base">{info.description}</p>
          <div className="flex justify-between items-center">
            <div className="flex justify-between items-center gap-2">
              <p className=" text-[#627382] font-medium text-[14px]">#{info.id}</p>
              {priority}
            </div>
            <div className="flex justify-between items-center gap-2">
              <p className=" text-[#627382] font-medium text-[14px]">{info.customer}</p>
              <p className=" text-[#627382] font-medium text-[14px]"><i className="fa-regular fa-calendar mr-1"></i>{info.createdAt}</p>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Cards;

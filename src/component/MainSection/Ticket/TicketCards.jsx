import { Suspense } from "react";
import Cards from "./Cards";
import TaskStatus from "../TaskStatus/TaskStatus";
import Resolved from "../Resolved/Resolved";




const TicketCards = ({ setProgress, progress, setSupportInfo, supportInfo, handleComplete, resolved }) => {



  return (
    <div className=" grid grid-cols-1 md:grid-cols-12 gap-8">
      <div className=" md:col-span-9">
        <p className=" mt-20 mb-4 font-semibold text-2xl text-[#34485A]">Customer Tickets</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          

          {supportInfo.map((info) => (
            <Cards  key={info.id} info={info} setProgress = {setProgress} progress = {progress} setSupportInfo={setSupportInfo} supportInfo={supportInfo}></Cards>
            
          ))}
        </div>
      </div>
      <div className=" md:col-span-3">
        <TaskStatus handleComplete={handleComplete} setProgress={setProgress} progress={progress} ></TaskStatus>
        
        <div>
          <Resolved resolved={resolved}></Resolved>
          
        </div>
      </div>
    </div>
  );
};

export default TicketCards;

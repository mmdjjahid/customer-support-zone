import React from 'react';



const TaskStatus = ({ progress, handleComplete }) => {
    
    console.log(progress)
    return (
        <div>
            <div>
                <p className=" mt-20 mb-4 font-semibold text-2xl text-[#34485A]">Task Status</p>
                <div>
                    {progress.map((selectItem) => (
                        <div className="card bg-base-100 shadow-sm mt-2">
                            <div className="card-body">

                                <div className="flex justify-between">
                                    <h2 className="text-[#001931] font-medium text-[18px]">{selectItem.title}</h2>

                                </div>

                                <div className="mt-6">
                                    <button onClick={()=> handleComplete(selectItem)} className="bg-[#02A53B] border-none text-white btn btn-primary btn-block">Complete</button>
                                </div>
                            </div>
                        </div>
                    ))}
                    {progress.length == 0 && <p className="text-base font-normal text-[#627382]">Select a ticket to add to Task Status</p>}

                </div>
            </div>
        </div>
    );
};

export default TaskStatus;
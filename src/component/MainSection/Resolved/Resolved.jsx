import React from 'react';

const Resolved = ({resolved}) => {
    return (
        <div>
           <p className="mb-4 font-semibold text-2xl text-[#34485A] mt-10">Resolved Task</p>
           <div>

            {resolved.map((selectItem) => (
                        <div className="card bg-[#E0E7FF] shadow-sm mt-2">
                            <div className="card-body">

                                <div className="flex justify-between">
                                    <h2 className="text-[#001931] font-medium text-[18px]">{selectItem.title}</h2>

                                </div>
                            </div>
                        </div>
                    ))}




            {resolved.length == 0 && <p className="text-base font-normal text-[#627382]">Select a ticket to add to Task Status</p>}
            
            </div> 
        </div>
    );
};

export default Resolved;
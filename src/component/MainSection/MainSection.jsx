import React, { Suspense, useEffect, useState } from "react";
import CountCard from "./CountCard";
import TicketCards from "./Ticket/TicketCards";
import { toast } from "react-toastify";

const MainSection = () => {
  const [resolved, setResolved] = useState([]);
  const [progress, setProgress] = useState([]);
  const [supportInfo, setSupportInfo] = useState([]);

  const handleComplete = (selectItemId) => {
    console.log(selectItemId);
    const filterInfos = supportInfo.filter(
      (filterInfo) => filterInfo.id !== selectItemId.id
    );
    setSupportInfo(filterInfos);
    const filterProgress = progress.filter(
      (filterProgresss) => filterProgresss.id !== selectItemId.id
    );
    setProgress(filterProgress);
    setResolved([...resolved, selectItemId]);
    toast('Complete')
  };

  useEffect(() => {
    const SupportInfos = async () => {
      const SupportInfo = await fetch("./JSON_Data.json");
      const SupportInfoRes = await SupportInfo.json();

      setSupportInfo(SupportInfoRes);
    };
    SupportInfos();
  }, []);

  return (
    <div className="max-w-6xl my-20 mx-3 md:mx-auto">
      <div className=" flex flex-col md:flex-row gap-3">
        <CountCard
          text="In-Progress"
          countStatus={progress.length}
          bgGre="bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"
        ></CountCard>
        <CountCard
          text="Resolved"
          countStatus={resolved.length}
          bgGre="bg-gradient-to-r from-[#54CF68] to-[#00827A]"
        ></CountCard>
      </div>

      <Suspense>
        <TicketCards
          resolved={resolved}
          handleComplete={handleComplete}
          setProgress={setProgress}
          progress={progress}
          setSupportInfo={setSupportInfo}
          supportInfo={supportInfo}
        ></TicketCards>
      </Suspense>
    </div>
  );
};

export default MainSection;

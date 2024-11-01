import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Experience" icon={<MdWork />} />
        <ResumeCard
          badge=""
          title="Software Engineer"
          subTitle="Ambit Software"
          des="Developed Mobile apps using Ionic and Angular Framework and worked on other CRM apps as well."
        />
        <ResumeCard
          badge="2020 - 2022"
          title="React Developer"
          subTitle="DatorTech"
          des="Worked as a react developer and built web and mobile apps using React.js and React Native."
        />
        <ResumeCard
          badge="2009 - 2010"
          title="Mobile App Developer Intern"
          subTitle="ModernI"
          des="Training & understanding of Ionic and Cordova and Android apps"
        />
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2012 - 2014"
          title="Vision Institute of Management and Technology"
          subTitle="Distance Learning, Delhi"
          des="Completed my associate's degree here"
        />
        <ResumeCard
          badge="2015 - 2016"
          title="Diploma in Information Technology"
          subTitle="K.K. Wagh Polytechnic, Nashik"
          des="Diploma holder from MSBTE board"
        />
        <ResumeCard
          badge="2005 - 2015"
          title="M.S.B Educational Institute"
          subTitle="Nashik"
          des="Completed my school here"
        />
      </div>
    </div>
  );
};

export default Education;

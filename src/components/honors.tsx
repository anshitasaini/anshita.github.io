import React from 'react';
import TextDesc from './TextDesc';

export default function Honors() {
  return (
    <main className="flex min-h-screen flex-col relative px-32 md:px-48 xl:px-64 py-8 md:py-12 xl:py-16">
      <div className="flex flex-col mb-6">
        <h1 className="text-5xl font-bold">
          honors
        </h1>
      </div>
    <TextDesc 
        time={"aug 2022 - now"}
        location={"UT Austin Machine Learning Lab"}
        adviser={"Professor Sujay Sanghavi"}
        title={"Turing Scholar Honors Thesis - multimodal dense retrieval."}
        desc={"ColBERT-style dense retrieval using OpenAI CLIP"}
    />
    <TextDesc 
        time={"jun 2020 - jun 2021"}
        location={"UW Ubiquitous Computing Lab"}
        adviser={"Professor Shwetak Patel"}
        title={"Smartphone-Based Ischemic Stroke Screening"}
        desc={"Diagnosed stroke risk by detecting carotid artery blockage through facial videos."}
    />
    <TextDesc
        time={"dec 2020 - mar 2021"}
        location={""}
        adviser={""}
        title={"Stellar Photometry"}
        desc={"Published our findings regarding period and classification analysis of Miras and variable stars in the Journal of the AAVSO."}
    />
    <TextDesc 
        time={"jun 2020 - aug 2020"}
        location={"Summer Science Program in Astrophysics"}
        adviser={"Professor Adam Rengstorf"}
        title={"Asteroid Orbit Determination"}
        desc={"Calculated asteroid's six orbital elements and published data in Minor Planet Center (M.P.C.) Report."}
    />
    <TextDesc 
        time={"jun 2019 - jun 2020"}
        location={"UW Ubiquitous Computing Lab"}
        adviser={"Professor Shwetak Patel"}
        title={"Mobile Ultrasonic Sonar Exercise Sensing"}
        desc={"Classified and counted repetitions of 14 upper-body activities using a phone's microphone."}
    />
    </main>
  );
}
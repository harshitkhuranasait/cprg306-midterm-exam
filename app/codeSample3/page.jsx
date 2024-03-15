"use client"
import { useState } from "react";

import APICallExam from "@/components/apiCallExam";

const CodeSample3 = () => {
  const [secretCode, setSecretCode] = useState("");
  const passcode = "ehen2rfow";

  const handleAPICall = async () => {
    try {
      const response = await fetch(`https://webdev2-class-demo.vercel.app/api/sampleReqs/${passcode}`);
      const data = await response.json();
      setSecretCode(data.secretCode);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="h-screen bg-white p-2 text-black">
      <h1 className="pb-2 text-blue-600">Code sample 3: Making an API Call</h1>
      <div className="p-2 text-sm text-gray-600">
        <p className="pb-2">
          Create an function that calls the following URL
          https://webdev2-class-demo.vercel.app/api/sampleReqs/. The function
          should be called on the click of the button below. This call is a GET
          request and it requires a passcode as part of the url for it to work.
        </p>
        <p>
          This passcode is: "ehen2rfow". It is to be appended to the URL. The
          response from this call will contain a json with a single field called
          "secretCode". This is the answer to your question.{" "}
        </p>
      </div>

      <div className="p-4">
        <button onClick={handleAPICall} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Call API
        </button>
        {secretCode && <p className="mt-4">Secret Code: {secretCode}</p>}
      </div>
    </div>
  );
};

export default CodeSample3;

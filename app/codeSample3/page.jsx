"use client";

import APICallExam from "@/components/apiCallExam";

const CodeSample3 = () => {
  const myList = ["Cat", "Dog", "Chicken", "Cow"];

  return (
    <div className="h-screen bg-white p-2">
      <h1 className="pb-2 text-blue-600">Code section 3: Making an API Call</h1>
      <div className="p-2 text-sm text-gray-600">
        <p className="pb-2">
          Create an function that calls the following URL
          https://webdev2-class-demo.vercel.app/api/sampleReqs/. The function
          should be called on the click of the button below. This call is a GET
          request and it requires a passcode to be appended to it to work.
        </p>
        <p>
          Append this passcode to end of the url: "ehen2rfow". The response from
          this call will contain a json with a single field called "secretCode".
          This is the answer to one of your questions.{" "}
        </p>
      </div>

      <div className="p-4">
        <APICallExam list={myList} />
      </div>
    </div>
  );
};

export default CodeSample3;

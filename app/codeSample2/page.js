"use client";

import Portfolio from "@/components/portfolio";
import ListComponent from "@/components/listComponent";
import FormExam from "@/components/formExam";

const CodeSample2 = () => {
  const myList = ["Cat", "Dog", "Chicken", "Cow"];

  return (
    <div className="h-screen bg-white p-2">
      <h1>Question 2</h1>
      <FormExam list={myList} />
    </div>
  );
};

export default CodeSample2;

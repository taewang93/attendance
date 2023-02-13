import React, { useState } from "react";

const TestInput = () => {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });

  const { name, nickname } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    console.log(e.target);
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <>
      <input placeholder="name" onChange={onChange} name="name" value={name} />
      <input
        placeholder="nickname"
        onChange={onChange}
        name="nickname"
        value={nickname}
      />
      <p>
        {name}({nickname})
      </p>
    </>
  );
};

export default TestInput;

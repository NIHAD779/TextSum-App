import { Textarea } from "@mantine/core";
import { useState } from "react";
import axios from "axios";
const InputDiv = () => {
  const [data, setData] = useState("");
  const [output, setOutput] = useState("");
  const requestAPI = async () => {
    try {
      const res = await axios.post(
        `https://api.nlpcloud.io/v1/gpu/fast-gpt-j/intent-classification`,
        {
          text: data,
        }
      );
      setOutput(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" flex gap-[10vw] p-3 h-">
      <Textarea
        placeholder="Write the text to be summarized"
        classNames={{ root: "w-[40vw]", description: "" }}
        onChange={(e) => {
          console.log(data);
          setData(e.target.value);
        }}
      />
      <button onClick={requestAPI}>click</button>
      <div className="border border-red-500 w-24">
        <p>{output}</p>
      </div>
    </div>
  );
};

export default InputDiv;

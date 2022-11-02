import axios from "axios";
const requestAPI = async (v) => {
  try {
    const res = await axios.post(
      `https://api.nlpcloud.io/v1/gpu/fast-gpt-j/intent-classification`,
      {
        text: v,
      }
    );
  } catch (err) {
    console.log(err);
  }
};

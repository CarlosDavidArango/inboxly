
import axios from "axios";

const openaiApiKey = "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"; 



const  getChatGPTResponse = async (prompt) => {
  const response = await axios.post(
    "https://api.openai.com/v1/completions",
    {
      prompt: prompt,
      model: 'text-davinci-003',
      max_tokens: 200,
      n: 1,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${openaiApiKey}`,
      },
    }
  );
  return response.data.choices[0].text;
};

export { getChatGPTResponse };


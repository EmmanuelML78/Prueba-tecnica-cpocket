import axios from 'axios';

type OpenAIResponse = {
  choices: {
    message: {
      content: string;
    };
  }[];
};

export const getOpenAIResponse = async (input: string): Promise<string> => {
  const url = 'http://pocki-api-env-1.eba-pprtwpab.us-east-1.elasticbeanstalk.com/api/getOpenaiResponse';

  const response = await axios.post(url, { input });

  const data = response.data as OpenAIResponse;

  return data.choices[0].message.content;
};

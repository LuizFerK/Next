import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
  response.statusCode = 200;
  response.json({ name: 'John Doe' });
};

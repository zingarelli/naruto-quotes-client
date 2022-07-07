//mock that handles server requisitions
import { rest } from 'msw'; 
import { setupServer } from 'msw/node';

import { getQuote } from './quotesService';

const response = {test: 'testing'};

//we're intercepting server requisition and mocking our own response, as this is just an unit test
const server = setupServer(
  rest.get(process.env.REACT_APP_API, (req, res, ctx) => {
    return res(ctx.json(response)); 
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('receives a JSON response and transforms it into an JS Object', async () => {
  const quote = await getQuote();

  expect(quote).toStrictEqual(response);
});

// import { rest } from 'msw';
// import { setupServer } from 'msw/node';

// import { getQuote } from './quotesService';

// const response = { test: 'testing' };

// const server = setupServer(
//   rest.get(process.env.REACT_APP_API, (req, res, ctx) => {
//     return res(ctx.json(response));
//   })
// );

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

// test('transforms json response into object', async () => {
//   const quote = await getQuote();

//   expect(quote).toStrictEqual(response);
// });

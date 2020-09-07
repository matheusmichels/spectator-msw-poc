import { rest } from 'msw';

export const userHandlers = [
  rest.get('https://jsonplaceholder.typicode.com/users', (_req, res, ctx) => {
    console.log('mocking users request');
    return res(
      ctx.json([
        { name: 'John Doe' },
        { name: 'Jane Doe' }
      ])
    );
  }),
];

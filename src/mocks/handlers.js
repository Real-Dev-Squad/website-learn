import { rest } from 'msw';

const handlers = [
  rest.get('/learn/feeds', (req, res, ctx) => res(
    ctx.json([{
      title: 'First title',
      type: 'video',
      url: 'https://youtube.com',
      author: 'Larry',
      likes: 23,
      bookmarkedBy: 'admin',
      bookmarkedOn: '20211017',
    }]),
  )),
];

export default handlers;

import { create, defaults } from 'json-server';
const server = create();
const middlewares = defaults();
const port = 4000;

server.use(middlewares);
server.use((req, res) => {
  res.status(500).jsonp({
    errorMessage: '문제가 발생했습니다',
  });
});
server.listen(port);

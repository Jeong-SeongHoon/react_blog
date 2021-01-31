require('dotenv').config();
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';
import api from './api/index';
import createFakeData from './createFakeData';
import jwtMiddleware from './lib/jwtMiddleware';
import serve from 'koa-static';
import path from 'path';
import send from 'koa-send';

// eslint-disable-next-line no-undef
const { PORT, MONGO_URI } = process.env;

// mongo db 연결
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('connected mongodb');
    // 가짜 데이터 생성 함수 (테스트용)
    // createFakeData();
  })
  .catch((err) => {
    console.error(err);
  });

const app = new Koa();
const router = new Router();

router.use('/api', api.routes());
// router.get('/', (ctx) => {
//   ctx.body = '홈';
// });
// router.get('/about/:name?', (ctx) => {
//   const { name } = ctx.params;
//   ctx.body = name ? `${name}의 소개` : '소개';
// });
// router.get('/posts', (ctx) => {
//   const { id } = ctx.query;
//   ctx.body = id ? `${id}의 포스트` : '포스트id가 없습니다.';
// });

app.use(bodyParser());
app.use(jwtMiddleware);

app.use(router.routes()).use(router.allowedMethods());

const buildDirectory = path.resolve(__dirname, '../../blog-frontend/build');
app.use(serve(buildDirectory));
app.use(async (ctx) => {
  //not fount이고, 주소가 /api로 시작하지 않는 경우
  if (ctx.status === 404 && ctx.path.indexOf('/api') !== 0) {
    // index.html 반환
    await send(ctx, 'index.html', { root: buildDirectory });
  }
});

// app.use(async (ctx, next) => {
//   console.log(ctx.url);
//   console.log(1);
//   if (ctx.query.authorized !== '1') {
//     ctx.status = 401;
//     return;
//   }
//   await next();
//   console.log('END!!!!');
// });
// app.use((ctx) => {
//   ctx.body = 'hello koa';
// });
const port = PORT || 4000;
app.listen(port, () => {
  console.log(`listening port ${port}`);
});

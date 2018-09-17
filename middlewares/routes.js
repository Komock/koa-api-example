const KoaRouter = require('koa-router');
const Router = new KoaRouter({ prefix: '/api' });

exports.init = App => {

    Router.get('/', (ctx, next) => {
        ctx.body = `<ul>
            <li><a href="/api/hello">Hello</a></li>
            <li><a href="/api/buy">Buy</a></li>
        </ul>`;
    });
    Router.get('/hello', (ctx, next) => {
        ctx.body = `<h1>Hello World!</h1>`;
    });
    Router.get('/buy', (ctx, next) => {
        ctx.body = `<h1>Buy World!</h1>`;
    });

    //==== Add MDW
    App.use(Router.routes()).use(Router.allowedMethods());
};
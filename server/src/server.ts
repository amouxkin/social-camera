import Express from 'express';
import { json } from 'body-parser';

import getPresignedUrl from 'routes/getPresignedUrl';
import login from 'routes/login';
import signup from 'routes/signup';
import { authenticationMiddleware } from 'src/utility/authentication';
import updateLatestUrl from "routes/updateLatestImageUrl";

const app = Express();
const jsonMiddleWare = json();

app.get('/get-presigned-url', authenticationMiddleware, getPresignedUrl);
app.post('/update-latest-url', authenticationMiddleware, updateLatestUrl);
app.post('/login', login);
app.post('/signup', jsonMiddleWare, signup);

export default app;

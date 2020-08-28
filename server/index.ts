import { createServer } from 'http';
import getPresignedUrl from "routes/getPresignedUrl";
import app from 'src/server';

const index = createServer(app);

app.get('/get-presigned-url', getPresignedUrl);
app.post('/login');

const port = process.env.PORT;

index.listen(port);

index.on('listening', () => {
  console.info(`🚀server is running on port ${port}  ✊🏾✊🏾✊🏾`);
});

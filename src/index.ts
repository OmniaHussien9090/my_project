import express from 'express';
import routes from './routes/API/ImgR';

const app =express();
const port :string | number=process.env.port ||5000;
app.use('/project/API',routes)
app.listen(port,():void=>{
    console.log(`Server start at localhost:${port}`)
});
export default app;

import express ,{Router,Request,Response} from 'express';
import ImgR from '../index';

const routes:Router=express.Router();
routes.get('/',(req:Request,res:Response)=>{
    res.send('Hello API')
});
routes.use('/resize',ImgR)
routes.use('/',express.static('/assets'))
import sharp from 'sharp';
import path from 'path';
import { ImgPath,ResizedImgPath } from '../routes/API/ImgR';
import { response } from 'express';
const ImgPro=async(
    imageName:string,width:number,height:number
):Promise<boolean|void> =>{
    const ImgPath:string =path.join(`${ResizedImgPath}`,`${imageName}w${width}H${height}.jpg`);
    try{
        await sharp(ImgPath).resize(width,height).toFile(ResizedImgPath);
        return true;
    }
    catch(error){
        console.log(error)
        response.send(error)
    }
};
export default ImgPro;
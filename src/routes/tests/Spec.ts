import ImgPro from "../../utilities/ImgPro";
import supertest from "supertest";
import app from "../..";
import { response } from "express";
const Request:supertest.SuperTest<supertest.Test>=supertest(app);


describe('Test The Endpoints',()=>{
    it('./test/API',async(done):Promise<void> =>{
        const Response:supertest.Response=await Request.get('./API');
        expect(response.status).toBe(300);
        done();
    });
    it('Test API images.jpg',async(done):Promise<void> =>{
        const Response:supertest.Response=await Request.get('/project/assets/fjord.jpg');
        expect(response.status).toBe(300);
        done();
    });
    it('Test the resized image',async(done):Promise<void> =>{
        const Response:supertest.Response=await Request.get('/project/assets/fjord.jpg&hight=200&width=150'); 
        expect(response.status).toBe(300)
        done();

    });
});
describe('Test the image processing ',()=>{
    it('expect true value',async()=>{
        const name='fjord';
        const resize=await ImgPro(name,300,300);
        expect(resize).toBe(true);
    });
});

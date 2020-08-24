import { NowRequest, NowResponse } from '@vercel/node'
import { getDatabase } from '../src/database';
import { Cafe} from '../src/database/models';
import sequelize from 'sequelize';
import { like } from 'sequelize/types/lib/operators';
import { Op } from 'sequelize';

export default (request: NowRequest, response: NowResponse) => {
    if(!request.body) {
        response.status(500).send("Body not found");
        return
    }        

    const { search } = request.body
    getDatabase().then(async db => { 
        const cafe = await Cafe.findAll({where: {name: {[Op.like]: '%' + search + '%'}}})
        response.status(200).send(JSON.stringify(cafe));
    });       
}
import { NowRequest, NowResponse } from '@vercel/node'
import { Cafe } from '../database/models'

export default (request: NowRequest, response: NowResponse) => {
    const cafes = Cafe.findAll({});
    response.status(200).send({cafes});
}
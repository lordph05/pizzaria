import { Request, Response } from "express";
import { AddItemService } from "../../services/AddItemService";

class AddItemContoller{
    async handle(req: Request, res: Response){
        const {order_id, product_id, amount} = req.body; // esperando esses dados do front

        const addItem = new AddItemService();

        const order = await addItem.execute({
            order_id,
            product_id,
            amount
        })

        return res.json(order)

    }
}

export {AddItemContoller}
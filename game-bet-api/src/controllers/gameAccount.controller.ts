import GameAccountModel from "@models/gameAccount.model"
import {Request, Response} from "express";
import {StatusCodes} from "http-status-codes";


class GameAccountController {
    gameAccountModel = new GameAccountModel();

    public insert = (req: Request, res: Response) => {
        this.gameAccountModel.create(req.body)
            .then((result) => {
                res.status(StatusCodes.CREATED).send({id: result._id});
            });
    };

    public findById = (req: Request, res: Response) => {
        this.gameAccountModel.findById(req.params.gameAccountId)
            .then((result) => {
                res.status(StatusCodes.OK).send(result);
            });
    }

    public findByUserId = (req: Request, res: Response) => {
        this.gameAccountModel.findByUserId(req.params.userId)
            .then((result) => {
                res.status(StatusCodes.OK).send(result);
            });
    }

    public findAll = (req: Request, res: Response) => {
        this.gameAccountModel.all()
            .then((result) => {
                res.status(StatusCodes.OK).send(result);
            });
    }

    public remove = (req: Request, res: Response) => {
        this.gameAccountModel.removeById(req.params.gameAccountId)
            .then((result) => {
                res.status(StatusCodes.NO_CONTENT).send({});
            });
    }

    public patchById = (req: Request, res: Response) => {
        this.gameAccountModel.patch(req.params.gameAccountId, req.body)
            .then((result) => {
                res.status(StatusCodes.NO_CONTENT).send({});
            });
    }
}

export default GameAccountController

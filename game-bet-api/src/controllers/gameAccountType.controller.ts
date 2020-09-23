import GameAccountTypeModel from "@models/gameAccountType.model"
import {Request, Response} from "express";
import {StatusCodes} from "http-status-codes";


class GameAccountTypeController {
    gameAccountTypeModel = new GameAccountTypeModel();

    public insert = (req: Request, res: Response) => {
        this.gameAccountTypeModel.create(req.body)
            .then((result) => {
                res.status(StatusCodes.CREATED).send({id: result._id});
            });
    };

    public findById = (req: Request, res: Response) => {
        this.gameAccountTypeModel.findById(req.params.gameAccountTypeId)
            .then((result) => {
                res.status(StatusCodes.OK).send(result);
            });
    }

    public findAll = (req: Request, res: Response) => {
        this.gameAccountTypeModel.all()
            .then((result) => {
                res.status(StatusCodes.OK).send(result);
            });
    }

    public remove = (req: Request, res: Response) => {
        this.gameAccountTypeModel.removeById(req.params.gameAccountTypeId)
            .then((result) => {
                res.status(StatusCodes.NO_CONTENT).send({});
            });
    }

    public patchById = (req: Request, res: Response) => {
        this.gameAccountTypeModel.patch(req.params.gameAccountTypeId, req.body)
            .then((result) => {
                res.status(StatusCodes.NO_CONTENT).send({});
            });
    }

    public list = (req: Request, res: Response) => {
        let limit = 0;
        let page = 0;
        if (req.query) {
            if (req.query.page) {
                const parsedPage = parseInt(req.query.page as string, 10)
                page = parsedPage >= 0 ? parsedPage : 0;
            }
            if (req.query.limit) {
                const parsedLimit = parseInt(req.query.limit as string, 10)
                limit = parsedLimit >= 0 ? parsedLimit : 0;
            }
        }
        this.gameAccountTypeModel.list(limit, page)
            .then((result) => {
                res.status(StatusCodes.OK).send(result);
            })
    }
}

export default GameAccountTypeController

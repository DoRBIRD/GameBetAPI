import LobbyModel from "@models/lobby.model"
import {Request, Response} from "express";
import {StatusCodes} from "http-status-codes";


class LobbyController {
    lobbyModel = new LobbyModel();

    public insert = (req: Request, res: Response) => {
        this.lobbyModel.create(req.body)
            .then(
                (result: any) => {
                    res.status(StatusCodes.CREATED).send({id: result._id});
                });
    };

    public findById = (req: Request, res: Response) => {
        this.lobbyModel.findById(req.params.lobbyId)
            .then(result => {
                res.status(StatusCodes.OK).send(result);
            });
    }

    public findByUserId = (req: Request, res: Response) => {
        this.lobbyModel.findByUserId(req.params.userId)
            .then(result => {
                res.status(StatusCodes.OK).send(result);
            });
    }

    public findByGameId = (req: Request, res: Response) => {
        this.lobbyModel.findByGameId(req.params.gameId)
            .then(result => {
                res.status(StatusCodes.OK).send(result);
            });
    }

    public findAll = (req: Request, res: Response) => {
        this.lobbyModel.all()
            .then(result => {
                res.status(StatusCodes.OK).send(result);
            });
    }

    public remove = (req: Request, res: Response) => {
        this.lobbyModel.removeById(req.params.lobbyId)
            .then((result) => {
                res.status(StatusCodes.NO_CONTENT).send({});
            });
    }

    public patchById = (req: Request, res: Response) => {
        this.lobbyModel.patch(req.params.lobbyId, req.body)
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
        this.lobbyModel.list(limit, page)
            .then((result) => {
                res.status(StatusCodes.OK).send(result);
            })
    }
}

export default LobbyController

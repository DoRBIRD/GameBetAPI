import GameModel from "@models/game.model"
import {Request, Response} from "express";
import {StatusCodes} from "http-status-codes";
import {hashPassword} from "@shared/functions";


class GameController {
    gameModel = new GameModel();

    public insert = (req: Request, res: Response) => {
        this.gameModel.create(req.body)
            .then(
                (result: any) => {
                    res.status(StatusCodes.CREATED).send({id: result._id});
                });
    }

    public findById = (req: Request, res: Response) => {
        this.gameModel.findById(req.params.gameId)
            .then(result => {
                res.status(StatusCodes.OK).send(result);
            });
    }

    public findByGenre = (req: Request, res: Response) => {
        this.gameModel.findGenre(req.params.genre)
            .then(result => {
                res.status(StatusCodes.OK).send(result);
            });
    }

    public findAll = (req: Request, res: Response) => {
        this.gameModel.all()
            .then(result => {
                res.status(StatusCodes.OK).send(result);
            });
    }

    public remove = (req: Request, res: Response) => {
        this.gameModel.removeById(req.params.gameId)
            .then((result) => {
                res.status(StatusCodes.NO_CONTENT).send({});
            });
    }

    public patchById = (req: Request, res: Response) => {
        if (req.body.password)
            req.body.password = hashPassword(req.body.password);

        this.gameModel.patch(req.params.gameId, req.body)
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
        this.gameModel.list(limit, page)
            .then((result) => {
                res.status(StatusCodes.OK).send(result);
            })
    }
}

export default GameController

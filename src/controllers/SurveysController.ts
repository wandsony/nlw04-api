import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SurveysRepository } from "../repositories/SurveysRepository";

class SurveysController {
    async create(request: Request, response: Response) {
        const { title, descripition } = request.body;

        const surveysRepository = getCustomRepository(SurveysRepository);

        const survey = surveysRepository.create({
            title,
            descripition
        });

        await surveysRepository.save(survey);

        return response.status(201).json(survey);
    }
    async show(request: Request, response: Response){
        const surveysRepository = getCustomRepository(SurveysRepository);

        const all = await surveysRepository.find();

        return response.json(all);
    }
}

export { SurveysController };
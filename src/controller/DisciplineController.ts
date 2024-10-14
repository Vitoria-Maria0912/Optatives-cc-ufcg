import { Request, Response } from 'express';
import { DisciplineService, DisciplineServiceInterface } from '../service/DisciplineService';

export class DisciplineController {

    private disciplineService: DisciplineServiceInterface = new DisciplineService();

    async createDisciplines(request: Request, response: Response): Promise<Response>  {
        var codeResponse: number = 400;
        var responseBody: object;
        try {
            const discipline = request.body;
            await this.disciplineService.createDiscipline(discipline);
            codeResponse = 201;
            responseBody = { mensage: "Discipline created successfully!", discipline};
        } catch (error) {
            responseBody = { error: "Error trying to create a discipline!"};
        }
        return response.status(codeResponse).json(responseBody)
    }

    async deleteDiscipline(request: Request, response: Response): Promise<Response> {
        var codeResponse: number = 400;
        var responseBody: object;
        try {
            const { id } = request.params;
            await this.disciplineService.deleteDiscipline(Number(id));
            codeResponse = 200;
            responseBody = { mensage: "Discipline deleted successfully!"};
        } catch (error) {
            responseBody = { error: "Error trying to deleted a discipline!"};
        }
        return response.status(codeResponse).json(responseBody)
    }

    async deleteAllDisciplines(request: Request, response: Response): Promise<Response> {
        var codeResponse: number = 400;
        var responseBody: object;
        try {
            await this.disciplineService.deleteAllDisciplines();
            codeResponse = 200;
            responseBody = { mensage: "All disciplines deleted successfully!"};
        } catch (error) {
            responseBody = { error: "Error trying to deleted all disciplines!"};
        }
        return response.status(codeResponse).json(responseBody)
    }

    async updateDiscipline(request: Request, response: Response): Promise<Response>  {
        var codeResponse: number = 400;
        var responseBody: object;
        try {
            const { id } = request.params;
            const discipline = request.body;
            await this.disciplineService.updateDiscipline(Number(id), discipline);
            codeResponse = 200;
            responseBody = { mensage: "Discipline updated successfully!"};
        } catch (error) {
            responseBody = { error: "Error trying to update a discipline!"};
        }
        return response.status(codeResponse).json(responseBody)
    }

    async patchDiscipline(request: Request, response: Response): Promise<Response>  {
        var codeResponse: number = 400;
        var responseBody: object;
        try {
            const { id } = request.params;
            const updates = request.body;
            await this.disciplineService.patchDiscipline(Number(id), updates);
            codeResponse = 200;
            responseBody = { mensage: "Discipline's field updated successfully!"};
        } catch (error) {
            responseBody = { error: "Error trying to update a discipline's field!"};
        }
        return response.status(codeResponse).json(responseBody)
    }

    async getAllDisciplines(request: Request, response: Response): Promise<Response>  {
        var codeResponse: number = 400;
        var responseBody: object;
        try {
            const { id } = request.body;
            const discipline = await this.disciplineService.getOneDiscipline(id);
            codeResponse = 200;
            responseBody = { mensage: "Discipline was found successfully!", discipline};
        } catch (error) {
            responseBody = { error: "Discipline wasn't found!"};
        }
        return response.status(codeResponse).json(responseBody)
    }

    async getOneDiscipline(request: Request, response: Response): Promise<Response>  {
        var codeResponse: number = 400;
        var responseBody: object;
        try {
            const disciplines = await this.disciplineService.getAllDisciplines();;
            codeResponse = 200;
            responseBody = { mensage: "Discipline was found successfully!", disciplines};
        } catch (error) {
            responseBody = { error: "No disciplines found!"};
        }
        return response.status(codeResponse).json(responseBody)
    }
}
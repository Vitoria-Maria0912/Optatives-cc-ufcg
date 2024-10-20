import { DisciplineRepository, DisciplineRepositoryInterface } from "../repository/DisciplineRepository";
import { DisciplineDTO } from "../dtos/DisciplineDTO";
import { Discipline } from "../model/Discipline";
import { NotFoundError } from "../errorHandler/NotFoundError";
import { InvalidFieldError } from "../errorHandler/InvalidFieldError";

export interface DisciplineServiceInterface {
    createDiscipline(disciplineDTO:  DisciplineDTO): Promise<DisciplineDTO>;
    deleteDiscipline(idDiscipline: number): Promise<void>;
    deleteAllDisciplines(): Promise<void>;
    patchDiscipline(idDiscipline: number, updates: Partial<Omit<Discipline, 'id'>>): Promise<void>;
    updateDiscipline(idDiscipline: number, disciplineDTO:  DisciplineDTO): Promise<void>;
    getOneDiscipline(idDiscipline: number): Promise<DisciplineDTO>;
    getAllDisciplines(): Promise<DisciplineDTO[]>;
} 

export class DisciplineService implements DisciplineServiceInterface {

    private disciplineRepository: DisciplineRepositoryInterface = new DisciplineRepository; 

    async createDiscipline(disciplineDTO: DisciplineDTO): Promise<DisciplineDTO> {
        let discipline = new Discipline(disciplineDTO);  
        this.validate(discipline);
        return await this.disciplineRepository.createDiscipline(discipline);
    }

    async deleteDiscipline(idDiscipline: number): Promise<void> {
        if ((await this.getAllDisciplines()).length === 0) {
            throw new NotFoundError('No disciplines found!');
        }
        const discipline = await this.disciplineRepository.getOneDiscipline(idDiscipline);
        if (!discipline) {
            throw new NotFoundError(`Discipline not found!`);
        }
        await this.disciplineRepository.deleteDiscipline(idDiscipline);
    }

    async deleteAllDisciplines(): Promise<void> {
        if ((await this.getAllDisciplines()).length === 0) {
            throw new NotFoundError('No disciplines found!');
        }
        await this.disciplineRepository.deleteAllDisciplines();
    }

    async updateDiscipline(idDiscipline: number, disciplineDTO: DisciplineDTO): Promise<void> {
        if ((await this.getAllDisciplines()).length === 0) {
            throw new NotFoundError('No disciplines found!');
        }
        const discipline = await this.disciplineRepository.getOneDiscipline(idDiscipline)            
        if(this.validate(discipline)){
            await this.disciplineRepository.updateDiscipline(discipline, disciplineDTO);
        } else {
            throw new NotFoundError(`Discipline not found!`);
        }
    }
    
    async patchDiscipline(idDiscipline: number, updates: Partial<Omit<Discipline, 'id'>>): Promise<void> {
        if ((await this.getAllDisciplines()).length === 0) {
            throw new NotFoundError('No disciplines found!');
        }
        const discipline = await this.disciplineRepository.getOneDiscipline(idDiscipline);
        if(this.validate(discipline)){
            await this.disciplineRepository.patchDiscipline(idDiscipline, updates);
        } else {
            throw new NotFoundError(`Discipline not found!`);
        }
    }

    async getOneDiscipline(idDiscipline: number): Promise<DisciplineDTO> {
        if ((await this.getAllDisciplines()).length === 0) {
            throw new NotFoundError('No disciplines found!');
        }
        const discipline = await this.disciplineRepository.getOneDiscipline(idDiscipline);
        if (!discipline) {
            throw new NotFoundError(`Discipline not found!`);
        }
        return discipline;
    }

    async getAllDisciplines(): Promise<DisciplineDTO[]> {
        const disciplines = await this.disciplineRepository.getAllDisciplines();
        if (disciplines.length === 0) {
            throw new NotFoundError('No disciplines found!');
        }
        return disciplines;
    }

    private validate(discipline: Discipline): boolean {
        
        if(!discipline.available) { throw new InvalidFieldError(`Availability of discipline cannot be empty!`); }

        const stringProperties = [
            { name: 'name', value: discipline.name },
            { name: 'acronym', value: discipline.acronym },
            { name: 'frequency', value: discipline.frequency },
            { name: 'description', value: discipline.description },
            { name: 'teacher', value: discipline.teacher },
            { name: 'schedule', value: discipline.schedule }
        ];    

        stringProperties.forEach(property => {
            if(!property.value || (typeof property.value === 'string' && property.value.trim() === '')) {
                throw new InvalidFieldError(`Discipline's ${property.name} cannot be empty!`);
            }
        });
        
        return true;
    }
}


import { DisciplineAlreadyRegisteredError, InvalidFieldError, NotFoundError } from "../errorHandler/ErrorHandler";
import { DisciplineRepository, DisciplineRepositoryInterface } from "../repository/DisciplineRepository";
import { DisciplineDTO } from "../dtos/DisciplineDTO";
import { Discipline } from "../model/Discipline";

export interface DisciplineServiceInterface {
    createDiscipline(disciplineDTO:  DisciplineDTO): Promise<DisciplineDTO>;
    createManyDisciplines(disciplines: DisciplineDTO[]): Promise<void>;
    deleteDiscipline(idDiscipline: number): Promise<void>;
    deleteAllDisciplines(): Promise<void>;
    patchDiscipline(idDiscipline: number, updates: Partial<Omit<Discipline, 'id'>>): Promise<void>;
    updateDiscipline(idDiscipline: number, disciplineDTO:  DisciplineDTO): Promise<void>;
    getOneDisciplineByID(idDiscipline: number): Promise<DisciplineDTO>;
    getOneDisciplineByName(disciplineName: string): Promise<DisciplineDTO>;
    getAllDisciplines(): Promise<DisciplineDTO[]>;
} 

export class DisciplineService implements DisciplineServiceInterface {
    
    private disciplineRepository: DisciplineRepositoryInterface = new DisciplineRepository; 
    
    async createDiscipline(disciplineDTO: DisciplineDTO): Promise<DisciplineDTO> {
        try{await this.getOneDisciplineByName(disciplineDTO.name) } 
        catch (error) {
            if (error instanceof NotFoundError && error.message === `Discipline not found!`) {
                throw new DisciplineAlreadyRegisteredError('Discipline already exists!'); }
        }
        let discipline = new Discipline(disciplineDTO);  
        this.validate(discipline);
        return await this.disciplineRepository.createDiscipline(discipline);
    }

    async createManyDisciplines(disciplinesDTO: DisciplineDTO[]): Promise<void> {
        disciplinesDTO.forEach((discipline: Discipline) => this.validate(discipline));
        const disciplines: Discipline[] = disciplinesDTO.map((discipline: Discipline) => (new Discipline(discipline)))
        await this.disciplineRepository.createManyDisciplines(disciplines);
    }
    
    async deleteDiscipline(idDiscipline: number): Promise<void> {
        if ((await this.getAllDisciplines()).length === 0) {
            throw new NotFoundError('No disciplines found!');
        }
        const discipline = await this.disciplineRepository.getOneDisciplineByID(idDiscipline);
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
        const discipline = await this.disciplineRepository.getOneDisciplineByID(idDiscipline)            
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
        const discipline = await this.disciplineRepository.getOneDisciplineByID(idDiscipline);
        if(this.validate(discipline)){
            await this.disciplineRepository.patchDiscipline(idDiscipline, updates);
        } else {
            throw new NotFoundError(`Discipline not found!`);
        }
    }
    
    async getOneDisciplineByID(idDiscipline: number): Promise<DisciplineDTO> {
        if ((await this.getAllDisciplines()).length === 0) {
            throw new NotFoundError('No disciplines found!');
        }
        const discipline = await this.disciplineRepository.getOneDisciplineByID(idDiscipline);
        if (!discipline) {
            throw new NotFoundError(`Discipline not found!`);
        }
        return discipline;
    }
    
    async getOneDisciplineByName(disciplineName: string): Promise<DisciplineDTO> {
        if ((await this.getAllDisciplines()).length === 0) {
            throw new NotFoundError('No disciplines found!');
        }
        const discipline = await this.disciplineRepository.getOneDisciplineByName(disciplineName);
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

        const stringProperties = [
            { name: 'name', value: discipline.name },
            { name: 'acronym', value: discipline.acronym },
        ];    

        stringProperties.forEach(property => {
            if(!property.value || (typeof property.value === 'string' && property.value.trim() === '')) {
                throw new InvalidFieldError(`Discipline's ${property.name} cannot be empty!`);
            }
        });
        
        return true;
    }
}


import { DisciplineRepository, DisciplineRepositoryInterface } from "../repository/DisciplineRepository";
import { DisciplineDTO } from "../dtos/DisciplineDTO";
import { Discipline } from "../model/Discipline";

export interface DisciplineServiceInterface {
    createDiscipline(disciplineDTO:  DisciplineDTO): Promise<DisciplineDTO>;
    deleteDiscipline(idDiscipline: number): Promise<void>;
    deleteAllDisciplines(): Promise<void>;
    patchDiscipline(idDiscipline: number, updates: Partial<Omit<Discipline, 'id'>>): Promise<void>;
    updateDiscipline(idDiscipline: number, disciplineDTO:  DisciplineDTO): Promise<void>;
    getOneDiscipline(idDiscipline: number): Promise<DisciplineDTO | void>;
    getAllDisciplines(): Promise<DisciplineDTO[]>;
} 

export class DisciplineService implements DisciplineServiceInterface {

    private disciplineRepository: DisciplineRepositoryInterface = new DisciplineRepository; 

    async createDiscipline(disciplineDTO: DisciplineDTO): Promise<DisciplineDTO> {
        this.validate(disciplineDTO.id);
        let discipline = new Discipline(disciplineDTO);  
        return await this.disciplineRepository.createDiscipline(discipline);;
    }

    async deleteDiscipline(idDiscipline: number): Promise<void> {
        if(!idDiscipline) { throw new Error(`Invalid ID!`); }
        await this.disciplineRepository.deleteDiscipline(idDiscipline);
    }

    async deleteAllDisciplines(): Promise<void> {
        await this.disciplineRepository.deleteAllDisciplines();
    }

    async updateDiscipline(idDiscipline: number, disciplineDTO: DisciplineDTO): Promise<void> {
        if(!idDiscipline) { throw new Error(`Invalid ID!`); }
        if(!this.validate(idDiscipline)){
            const discipline = await this.disciplineRepository.getOneDiscipline(idDiscipline)            
            await this.disciplineRepository.updateDiscipline(discipline, disciplineDTO);
        }
    }
    
    async patchDiscipline(idDiscipline: number, updates: Partial<Omit<Discipline, 'id'>>): Promise<void> {
        if(!idDiscipline) { throw new Error(`Invalid ID!`); }
        if(!this.validate(idDiscipline)){
            const discipline = await this.disciplineRepository.getOneDiscipline(idDiscipline);
            await this.disciplineRepository.patchDiscipline(idDiscipline, updates);
        }
    }

    async getOneDiscipline(idDiscipline: number): Promise<DisciplineDTO | void> {
        if(!idDiscipline) { throw new Error(`Invalid ID!`); }
        return await this.disciplineRepository.getOneDiscipline(idDiscipline);
    }

    async getAllDisciplines(): Promise<DisciplineDTO[]> {
        return await this.disciplineRepository.getAllDisciplines();
    }

    private async validate(idDiscipline: number): Promise<void> {
        const discipline = await this.disciplineRepository.getOneDiscipline(idDiscipline);
        const stringProperties = [
            { name: 'name', value: discipline.name },
            { name: 'acronym', value: discipline.acronym },
            { name: 'frequency', value: discipline.frequency },
            { name: 'description', value: discipline.description },
            { name: 'teacher', value: discipline.teacher },
            { name: 'schedule', value: discipline.schedule }
        ];

        if(!discipline.available) { throw new Error(`Availability of discipline cannot be empty!`); }

        stringProperties.forEach(property => {
            if(!property.value || (typeof property.value === 'string' && property.value.trim() === '')) {
                throw new Error(`Discipline's ${property.name} cannot be empty!`);
            }
        });
    }
}


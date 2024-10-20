import { PrismaClient } from "@prisma/client";
import { Discipline } from "../model/Discipline";
import { DisciplineDTO } from "../dtos/DisciplineDTO";

export interface DisciplineRepositoryInterface {
    createDiscipline(discipline:  Discipline): Promise<Discipline>;
    deleteDiscipline(idDiscipline:  number): Promise<void>;
    deleteAllDisciplines(): Promise<void>;
    patchDiscipline(idDiscipline: number, updates: Partial<Omit<Discipline, 'id'>>): Promise<void>;
    updateDiscipline(discipline:  Discipline, disciplineDTO:  DisciplineDTO): Promise<void>;
    getOneDiscipline(idDiscipline: number): Promise<Discipline>;
    getAllDisciplines(): Promise<Discipline[]>;
} 

export class DisciplineRepository implements DisciplineRepositoryInterface {

    private prisma: PrismaClient = new PrismaClient();

    async createDiscipline(discipline: Discipline): Promise<Discipline> {
        return await this.prisma.discipline.create({
            data: {
                id: discipline.id,
                name: discipline.name,
                acronym: discipline.acronym,
                frequency: discipline.frequency,
                available: discipline.available,
                description: discipline.description,
                pre_requisites: discipline.pre_requisites,
                post_requisites: discipline.post_requisites,
                teacher: discipline.teacher,
                schedule: discipline.schedule,
            },
        });
    }

    async deleteDiscipline(idDiscipline: number): Promise<void> {
        await this.prisma.discipline.delete({where: {id: idDiscipline}})
    }

    async deleteAllDisciplines(): Promise<void> {
        await this.prisma.discipline.deleteMany();
    }

    async patchDiscipline(idDiscipline: number, updates: Partial<Omit<Discipline, 'id'>>): Promise<void> {
        await this.prisma.discipline.update({ where: { id: idDiscipline }, data: updates });
    }

    async updateDiscipline(discipline:  Discipline, disciplineDTO:  DisciplineDTO): Promise<void> {
        await this.prisma.discipline.update({ where: {id: discipline.id}, data: disciplineDTO });
    }
    
    async getOneDiscipline(idDiscipline: number): Promise<Discipline> {
        return await this.prisma.discipline.findUniqueOrThrow({ where: {id: idDiscipline }})
    }

    async getAllDisciplines(): Promise<Discipline[]> {
        return await this.prisma.discipline.findMany();
    }
}

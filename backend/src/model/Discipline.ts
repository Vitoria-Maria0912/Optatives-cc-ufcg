import { Available, Frequency } from '@prisma/client';

export interface DisciplineInterface {
    id: number;
    name: string;
    acronym: string;
    frequency: Frequency;
    available: Available;
    description: string;
    pre_requisites: string[];
    post_requisites: string[];
    teacher: string;
    schedule: string;
}

export class Discipline implements DisciplineInterface {

    public id: number;
    public name: string;
    public acronym: string;
    public frequency: Frequency;
    public available: Available;
    public description: string;
    public pre_requisites: string[];
    public post_requisites: string[];
    public teacher: string;
    public schedule: string;  

    constructor(discipline: DisciplineInterface) {
        this.id = discipline.id;
        this.name = discipline.name;
        this.acronym = discipline.acronym;
        this.frequency = discipline.frequency;
        this.available = discipline.available;
        this.description = discipline.description;
        this.pre_requisites = discipline.pre_requisites;
        this.post_requisites = discipline.post_requisites;
        this.teacher = discipline.teacher;
        this.schedule = discipline.schedule;
    }
}

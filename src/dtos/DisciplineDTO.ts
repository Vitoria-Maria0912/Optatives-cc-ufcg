import { Frequency } from "@prisma/client";
import { DisciplineInterface } from "../model/Discipline";
import { IsNotEmpty, IsString, IsEnum } from 'class-validator';

export class DisciplineDTO implements DisciplineInterface {

    @IsNotEmpty()
    @IsString()
    public name: string;

    @IsNotEmpty()
    @IsString()
    public acronym: string;

    @IsNotEmpty()
    @IsEnum(Frequency)
    public frequency: Frequency;

    @IsNotEmpty()
    public available: boolean;

    @IsNotEmpty()
    @IsString()
    public description: string;

    public pre_requisites: string[];

    public post_requisites: string[];

    @IsNotEmpty()
    @IsString()
    public teacher: string;

    @IsNotEmpty()
    @IsString()
    public schedule: string;     

    constructor(
        public id: number,
        name: string,
        acronym: string,
        frequency: Frequency,
        available: boolean,
        description: string,
        pre_requisites: string[],
        post_requisites: string[],
        teacher: string,
        schedule: string
    ) {
        this.name = name;
        this.acronym = acronym;
        this.frequency = frequency;
        this.available = available;
        this.description = description;
        this.pre_requisites = pre_requisites;
        this.post_requisites = post_requisites;
        this.teacher = teacher;
        this.schedule = schedule;
    }
}

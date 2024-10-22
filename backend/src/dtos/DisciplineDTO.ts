import { Available, Frequency } from "@prisma/client";
import { DisciplineInterface } from "../model/Discipline";
import { IsNotEmpty, IsString, IsEnum, IsArray, IsNumber } from 'class-validator';

export class DisciplineDTO implements DisciplineInterface {

    @IsNumber()
    public id: number;

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
    @IsEnum(Available)
    public available: Available;

    @IsNotEmpty()
    @IsString()
    public description: string;

    @IsArray()
    @IsString({ each: true })
    public pre_requisites: string[];

    @IsArray()
    @IsString({ each: true })
    public post_requisites: string[];

    @IsNotEmpty()
    @IsString()
    public teacher: string;

    @IsNotEmpty()
    @IsString()
    public schedule: string;     

    constructor(
        id: number,
        name: string,
        acronym: string,
        frequency: Frequency,
        available: Available,
        description: string,
        pre_requisites: string[],
        post_requisites: string[],
        teacher: string,
        schedule: string
    ) {
        this.id = id;
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

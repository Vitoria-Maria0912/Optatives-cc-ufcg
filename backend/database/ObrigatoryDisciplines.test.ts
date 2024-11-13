import { Available, Type, PrismaClient } from '@prisma/client';
import { app, closeServer } from '../src/express/server';
import request from 'supertest';

describe('Create all obrigatory disciplines P1', () => {

    afterAll(async () => { closeServer(); await (new PrismaClient).$disconnect(); });

    it("Create FMCC1 should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Fundamentos de Matemáticos para Ciências da Computação I',
            acronym: 'FMCC1',
            type: Type.OBRIGATORY,
            available: Available.YES,
            description: 'Introdução aos conceitos básicos de matemática para computação.',
            pre_requisites: [],
            post_requisites: ['Fundamentos de Matemáticos para Ciências da Computação II', 'Cálculo Diferencial e Integral I', 'Teoria dos Grafos'],
            teacher: 'Indefinido',
            schedule: 'Indefinido',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toBe('Discipline created successfully!');
    });
    
    it("Create `P1 e LP1` should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Programação I',
            acronym: 'P1',
            type: Type.OBRIGATORY,
            available: Available.YES,
            description: 'Curso introdutório de programação e práticas laboratoriais.',
            pre_requisites: [],
            post_requisites: ['Programação II', 'Laboratório de Programação II'],
            teacher: 'Dalton | Jorge | Wilkerson',
            schedule: 'Indefinido',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toBe('Discipline created successfully!');

        const disciplineData2 = {
            name: 'Laboratório de Programação I',
            acronym: 'LP1',
            type: Type.OBRIGATORY,
            available: Available.YES,
            description: 'Curso introdutório de programação e práticas laboratoriais.',
            pre_requisites: [],
            post_requisites: ['Programação II', 'Laboratório de Programação II'],
            teacher: 'Dalton | Jorge | Wilkerson',
            schedule: 'Indefinido',
        };
        const response2 = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData2);
        expect(response2.body.message).toBe('Discipline created successfully!');
    });
    
    it("Create `IC` should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Introdução à Computação',
            acronym: 'IC',
            type: Type.OBRIGATORY,
            available: Available.YES,
            description: 'Disciplina introdutória sobre conceitos básicos de computação.',
            pre_requisites: [],
            post_requisites: ['Organização e Arquitetura de Computadores', 'Redes de Computadores'],
            teacher: 'Carlos Pires | Maxwell | Joseana',
            schedule: 'Indefinido',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toBe('Discipline created successfully!');
    });
    
    it("Create `Direito e Cidadania` should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Direito e Cidadania',
            acronym: 'DC',
            type: Type.OBRIGATORY,
            available: Available.YES,
            description: 'Exploração dos direitos e deveres na sociedade.',
            pre_requisites: [],
            post_requisites: [],
            teacher: 'Indefinido',
            schedule: 'Indefinido',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toBe('Discipline created successfully!');
    });
});

describe('Create all obrigatory disciplines P2', () => {
    
    afterAll(async () => { closeServer(); await (new PrismaClient).$disconnect(); });

    it("Create `C1` should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Cálculo Diferencial e Integral I',
            acronym: 'C1',
            type: Type.OBRIGATORY,
            available: Available.YES,
            description: 'Introdução ao cálculo diferencial e integral.',
            pre_requisites: [],
            post_requisites: ['Cálculo Diferencial e Integral II', 'Introdução à Probabilidade'],
            teacher: 'Indefinido',
            schedule: 'Indefinido',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toBe('Discipline created successfully!');
    });

    it("Create `Economia` should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Economia',
            acronym: 'Economia',
            type: Type.OBRIGATORY,
            available: Available.YES,
            description: 'Estudo dos processos de produção e distribuição de bens.',
            pre_requisites: [],
            post_requisites: [],
            teacher: 'Indefinido',
            schedule: 'Indefinido',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toBe('Discipline created successfully!');
    });

    it("Create `P2` should return 'Discipline created successfully!'", async () => {
        const disciplineData1 = {
            name: 'Programação II',
            acronym: 'P2',
            type: Type.OBRIGATORY,
            available: Available.YES,
            description: 'Desenvolvimento avançado em programação com ênfase em POO.',
            pre_requisites: ['Programação I', 'Laboratório de Programação I'],
            post_requisites: ['Estruturas de Dados e Algoritmos', 'Laboratório de Estruturas de Dados e Algoritmos'],
            teacher: 'Lívia | Eliane | Melina',
            schedule: 'Indefinido',
        };
        const response1 = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData1);
        expect(response1.body.message).toBe('Discipline created successfully!');

        const disciplineData2 = {
            name: 'Laboratório de Programação II',
            acronym: 'P2',
            type: Type.OBRIGATORY,
            available: Available.YES,
            description: 'Desenvolvimento avançado em programação com ênfase em POO.',
            pre_requisites: ['Programação I', 'Laboratório de Programação I'],
            post_requisites: ['Estruturas de Dados e Algoritmos', 'Laboratório de Estruturas de Dados e Algoritmos'],
            teacher: 'Lívia | Eliane | Melina',
            schedule: 'Indefinido',
        };
        const response2 = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData2);
        expect(response2.body.message).toBe('Discipline created successfully!');
    });

    it("Create `FMCC2` should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Fundamentos Matemáticos para Ciência da Computação II',
            acronym: 'FMCC2',
            type: Type.OBRIGATORY,
            available: Available.YES,
            description: 'Estudo aprofundado de álgebra e lógica para computação.',
            pre_requisites: ['Fundamentos de Matemáticos para Ciências da Computação I', 'Cálculo Diferencial e Integral I'],
            post_requisites: [],
            teacher: 'Eanes | Tiago Massoni',
            schedule: 'Indefinido',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toBe('Discipline created successfully!');
    });
});

describe('Create all obrigatory disciplines P3', () => {
    
    afterAll(async () => { closeServer(); await (new PrismaClient).$disconnect(); });

    it("Create `Álgebra Linear` should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Álgebra Linear',
            acronym: 'Linear',
            type: Type.OBRIGATORY,
            available: Available.YES,
            description: 'Estudo de espaços vetoriais, transformações lineares e matrizes.',        
            pre_requisites: ['Cálculo Diferencial e Integral I'],
            post_requisites: [],
            teacher: 'Indefinido',
            schedule: 'Indefinido',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toBe('Discipline created successfully!');

    });

    it("Create `C2` should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Cálculo Diferencial e Integral II',
            acronym: 'C2',
            type: Type.OBRIGATORY,
            available: Available.YES,
            description: 'Continuação de Cálculo Diferencial e Integral I, abordando integrais múltiplas e séries.',
            pre_requisites: ['Cálculo Diferencial e Integral I'],
            post_requisites: ['Introdução àProbabilidade'],
            teacher: 'Indefinido',
            schedule: 'Indefinido',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toBe('Discipline created successfully!');

    });

    it("Create `EDA e LEDA` should return 'Discipline created successfully!'", async () => {
        const disciplineData1 = {
            name: 'Estruturas de Dados e Algoritmos',
            acronym: 'EDA',
            type: Type.OBRIGATORY,
            available: Available.YES,
            description: 'Implementação de estruturas de dados e algoritmos.',
            pre_requisites: ['Programação II', 'Laboratório de Programação II'],
            post_requisites: [],
            teacher: 'Adalberto | João Arthur',
            schedule: 'Indefinido',
        };
        const response1 = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData1);
        expect(response1.body.message).toBe('Discipline created successfully!');

        const disciplineData2 = {
            name: 'Laboratório de Estruturas de Dados e Algoritmos',
            acronym: 'LEDA',
            type: Type.OBRIGATORY,
            available: Available.YES,
            description: 'Disciplina prática para implementação de estruturas de dados e algoritmos.',
            pre_requisites: ['Programação II', 'Laboratório de Programação II'],
            post_requisites: [],
            teacher: 'Adalberto | João Arthur',
            schedule: 'Indefinido',
        };
        const response2 = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData2);
        expect(response2.body.message).toBe('Discipline created successfully!');

    });
});

// describe('Create all obrigatory disciplines P4', () => {
    
//     afterAll(async () => { closeServer(); await (new PrismaClient).$disconnect(); });

//     it("Create FMCC1 should return 'Discipline created successfully!'", async () => {
//         const disciplineData = {
//             name: '',
//             acronym: '',
//             type: Type.OBRIGATORY,
//             available: Available.YES,
//             description: '',
//             pre_requisites: [],
//             post_requisites: [],
//             teacher: '',
//             schedule: 'Segunda (8h-10h), Quarta (10h-12h)',
//         };
//         const response = await request(app)
//             .post('/protected/disciplines')
//             .send(disciplineData);
//     });
// });

// describe('Create all obrigatory disciplines P5', () => {
    
//     afterAll(async () => { closeServer(); await (new PrismaClient).$disconnect(); });

//     it("Create FMCC1 should return 'Discipline created successfully!'", async () => {
//         const disciplineData = {
//             name: '',
//             acronym: '',
//             type: Type.OBRIGATORY,
//             available: Available.YES,
//             description: '',
//             pre_requisites: [],
//             post_requisites: [],
//             teacher: '',
//             schedule: 'Segunda (8h-10h), Quarta (10h-12h)',
//         };
//         const response = await request(app)
//             .post('/protected/disciplines')
//             .send(disciplineData);
//     });
// });

// describe('Create all obrigatory disciplines P6', () => {
    
//     afterAll(async () => { closeServer(); await (new PrismaClient).$disconnect(); });

//     it("Create FMCC1 should return 'Discipline created successfully!'", async () => {
//         const disciplineData = {
//             name: '',
//             acronym: '',
//             type: Type.OBRIGATORY,
//             available: Available.YES,
//             description: '',
//             pre_requisites: [],
//             post_requisites: [],
//             teacher: '',
//             schedule: 'Segunda (8h-10h), Quarta (10h-12h)',
//         };
//         const response = await request(app)
//             .post('/protected/disciplines')
//             .send(disciplineData);
//     });
// });

// describe('Create all obrigatory disciplines P7', () => {
    
//     afterAll(async () => { closeServer(); await (new PrismaClient).$disconnect(); });

//     it("Create FMCC1 should return 'Discipline created successfully!'", async () => {
//         const disciplineData = {
//             name: '',
//             acronym: '',
//             type: Type.OBRIGATORY,
//             available: Available.YES,
//             description: '',
//             pre_requisites: [],
//             post_requisites: [],
//             teacher: '',
//             schedule: 'Segunda (8h-10h), Quarta (10h-12h)',
//         };
//         const response = await request(app)
//             .post('/protected/disciplines')
//             .send(disciplineData);
//     });
// });

// describe('Create all obrigatory disciplines P8', () => {
    
//     afterAll(async () => { closeServer(); await (new PrismaClient).$disconnect(); });

//     it("Create FMCC1 should return 'Discipline created successfully!'", async () => {
//         const disciplineData = {
//             name: '',
//             acronym: '',
//             type: Type.OBRIGATORY,
//             available: Available.YES,
//             description: '',
//             pre_requisites: [],
//             post_requisites: [],
//             teacher: '',
//             schedule: 'Segunda (8h-10h), Quarta (10h-12h)',
//         };
//         const response = await request(app)
//             .post('/protected/disciplines')
//             .send(disciplineData);
//     });
// });

// describe('Create all obrigatory disciplines P9', () => {
    
//     afterAll(async () => { closeServer(); await (new PrismaClient).$disconnect(); });

//     it("Create FMCC1 should return 'Discipline created successfully!'", async () => {
//         const disciplineData = {
//             name: '',
//             acronym: '',
//             type: Type.OBRIGATORY,
//             available: Available.YES,
//             description: '',
//             pre_requisites: [],
//             post_requisites: [],
//             teacher: '',
//             schedule: 'Segunda (8h-10h), Quarta (10h-12h)',
//         };
//         const response = await request(app)
//             .post('/protected/disciplines')
//             .send(disciplineData);
//     });
// });
import { Available, Frequency, PrismaClient } from '@prisma/client';
import { app, closeServer } from '../src/express/server';
import request from 'supertest';

describe('Create all optatives disciplines `start with A`', () => {
    
    afterAll(async () => { closeServer(); await (new PrismaClient).$disconnect(); });

    it("Create `ADM. DE SIST. GERENC. DE BANCO DE DADOS` should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Administração de Sistemas Gerenciais de Banco de Dados',
            acronym: 'ADM. DE SIST. GERENC. DE BANCO DE DADOS',
            frequency: Frequency.SOMETIMES,
            available: Available.NO,
            description: 'Disciplina sobre gerenciamento e administração de bancos de dados avançados.',
            pre_requisites: ['Banco de Dados I'],
            post_requisites: [],
            teacher: '',
            schedule: '',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toEqual('Discipline created successfully!');
    });

    it("Create `ADMINISTRAÇÃO DE SISTEMAS` should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Administração de Sistemas',
            acronym: 'ADS',
            frequency: Frequency.SOMETIMES,
            available: Available.NO,
            description: 'Disciplina sobre administração e configuração de sistemas computacionais.',
            pre_requisites: ['Redes de Computadores', 'Sistemas Operacionais'],
            post_requisites: [],
            teacher: '',
            schedule: '',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toEqual('Discipline created successfully!');
    });

    it("Create `ALGORITMOS AVANÇADOS I` should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Algoritmos Avançados I',
            acronym: 'AAI',
            frequency: Frequency.SOMETIMES,
            available: Available.NO,
            description: 'Disciplina introdutória aos algoritmos avançados, com foco em otimização e eficiência.',
            pre_requisites: ['Programação I', 'Laboratório de Programação I'],
            post_requisites: [],
            teacher: 'Rohit',
            schedule: '',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toEqual('Discipline created successfully!');
    });

    it("Create `ALGORITMOS AVANÇADOS II` should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Algoritmos Avançados II',
            acronym: 'AAII',
            frequency: Frequency.SOMETIMES,
            available: Available.NO,
            description: 'Continuação do estudo de algoritmos avançados, explorando algoritmos de busca e ordenação.',
            pre_requisites: ['Programação I', 'Laboratório de Programação I'],
            post_requisites: [],
            teacher: 'Rohit',
            schedule: '',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toEqual('Discipline created successfully!');
    });

    it("Create `ALGORITMOS AVANÇADOS III` should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Algoritmos Avançados III',
            acronym: 'AAIII',
            frequency: Frequency.SOMETIMES,
            available: Available.NO,
            description: 'Disciplina focada em algoritmos complexos e técnicas de análise de algoritmos.',
            pre_requisites: ['Programação I', 'Laboratório de Programação I'],
            post_requisites: [],
            teacher: 'Rohit',
            schedule: '',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toEqual('Discipline created successfully!');
    });

    it("Create `ALGORITMOS AVANÇADOS IV` should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Algoritmos Avançados IV',
            acronym: 'AAIV',
            frequency: Frequency.SOMETIMES,
            available: Available.NO,
            description: 'Exploração de algoritmos avançados de ordenação e estrutura de dados.',
            pre_requisites: ['Programação I', 'Laboratório de Programação I'],
            post_requisites: [],
            teacher: 'Rohit',
            schedule: '',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toEqual('Discipline created successfully!');
    });

    it("Create `ARQUITETURA DE SOFTWARE` should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Arquitetura de Software',
            acronym: 'ARQUITETURA DE SOFTWARE',
            frequency: Frequency.SOMETIMES,
            available: Available.NO,
            description: 'Disciplina sobre design e arquitetura de sistemas de software complexos.',
            pre_requisites: ['Projeto de Software'],
            post_requisites: [],
            teacher: 'João Arthur',
            schedule: '',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toEqual('Discipline created successfully!');
    });

    it("Create `AVALIAÇÃO DE DESEMPENHO DE SISTEMAS DISCRETOS` should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Avaliação de Desempenho de Sistemas Discretos',
            acronym: 'AVALIAÇÃO DE DESEMPENHO DE SISTEMAS DISCRETOS',
            frequency: Frequency.SOMETIMES,
            available: Available.NO,
            description: 'Disciplina sobre métodos de avaliação de desempenho em sistemas discretos.',
            pre_requisites: ['Introdução à Probabilidade'],
            post_requisites: [],
            teacher: '',
            schedule: '',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toEqual('Discipline created successfully!');
    });
});

describe('Create all optatives disciplines `start with B`', () => {
    it("Create `BANCO DE DADOS II` should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Banco de Dados II',
            acronym: 'BD2',
            frequency: Frequency.SOMETIMES,
            available: Available.NO,
            description: 'Disciplina avançada sobre conceitos e técnicas de bancos de dados.',
            pre_requisites: ['Banco de Dados I'],
            post_requisites: [],
            teacher: '',
            schedule: '',
        };
        const response = await request(app).post('/protected/disciplines').send(disciplineData);
        expect(response.body.message).toEqual('Discipline created successfully!');
    });
});

describe('Create all optatives disciplines `start with C`', () => {

    it("Create `CIÊNCIA DE DADOS DESCRITIVA` should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Ciência de Dados Descritiva',
            acronym: 'CDD',
            frequency: Frequency.SOMETIMES,
            available: Available.NO,
            description: 'Disciplina sobre análise de dados descritivos e suas aplicações.',
            pre_requisites: ['Estatística Aplicada'],
            post_requisites: [],
            teacher: 'Cláudio Campelo',
            schedule: '',
        };
        const response = await request(app).post('/protected/disciplines').send(disciplineData);
        expect(response.body.message).toEqual('Discipline created successfully!');
    });

    it("Create `CIÊNCIA DE DADOS PREDITIVA` should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Ciência de Dados Preditiva',
            acronym: 'CDP',
            frequency: Frequency.SOMETIMES,
            available: Available.NO,
            description: 'Estudo de técnicas de predição em ciência de dados.',
            pre_requisites: ['Estatística Aplicada'],
            post_requisites: [],
            teacher: 'Leandro Balby',
            schedule: '',
        };
        const response = await request(app).post('/protected/disciplines').send(disciplineData);
        expect(response.body.message).toEqual('Discipline created successfully!');
    });

    it("Create `COMPUTAÇÃO E MÚSICA` should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Computação e Música',
            acronym: 'COMPUTAÇÃO E MÚSICA',
            frequency: Frequency.SOMETIMES,
            available: Available.NO,
            description: 'Aplicação de conceitos de computação em música.',
            pre_requisites: ['Estruturas de Dados e Algoritmos'],
            post_requisites: [],
            teacher: 'Marcelo Barros',
            schedule: '',
        };
        const response = await request(app).post('/protected/disciplines').send(disciplineData);
        expect(response.body.message).toEqual('Discipline created successfully!');
    });

    it("Create `COMPUTAÇÃO GRÁFICA` should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Computação Gráfica',
            acronym: 'COMPUTAÇÃO GRÁFICA',
            frequency: Frequency.ALWAYS,
            available: Available.NO,
            description: 'Disciplina sobre técnicas de computação gráfica e sua aplicação.',
            pre_requisites: ['Cálculo Diferencial e Integral I', 'Álgebra Linear', 'Estruturas de Dados e Algoritmos'],
            post_requisites: [],
            teacher: '',
            schedule: '',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toEqual('Discipline created successfully!');
    });
});

describe('Create all optatives disciplines `start with D`', () => {

    afterAll(async () => { closeServer(); await (new PrismaClient).$disconnect(); });

    it("Create `DESENVOLVIMENTO DE SOFTWARE INTEGRADO À OPERAÇÃO DA INFRAESTRUTURA` should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Desenvolvimento de Software Integrado à Operação da Infraestrutura',
            acronym: 'DESENVOLVIMENTO DE SOFTWARE INTEGRADO À OPERAÇÃO DA INFRAESTRUTURA',
            frequency: Frequency.SOMETIMES,
            available: Available.NO,
            description: 'Disciplina sobre integração de software e operação de infraestrutura.',
            pre_requisites: ['Banco de Dados I', 'Projeto de Software'],
            post_requisites: [],
            teacher: '',
            schedule: '',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toEqual('Discipline created successfully!');
    });
});

describe('Create all optatives disciplines `start with E`', () => {

    afterAll(async () => { closeServer(); await (new PrismaClient).$disconnect(); });

    it("Create `ECONOMIA DE TECNOLOGIA DA INFORMAÇÃO` should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Economia de Tecnologia da Informação',
            acronym: 'ECONOMIA DE TECNOLOGIA DA INFORMAÇÃO',
            frequency: Frequency.SOMETIMES,
            available: Available.NO,
            description: 'Disciplina sobre a economia relacionada à tecnologia da informação.',
            pre_requisites: ['Introdução à Probabilidade'],
            post_requisites: [],
            teacher: '',
            schedule: '',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toEqual('Discipline created successfully!');
    });

    it("Create `EMPREENDEDORISMO E INOVAÇÃO` should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Empreendedorismo e Inovação',
            acronym: 'EMPREENDEDORISMO E INOVAÇÃO',
            frequency: Frequency.SOMETIMES,
            available: Available.NO,
            description: 'Disciplina sobre habilidades de empreendedorismo e inovação tecnológica.',
            pre_requisites: ['Engenharia de Software'],
            post_requisites: [],
            teacher: '',
            schedule: '',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toEqual('Discipline created successfully!');
    });
});

describe('Create all optatives disciplines `start with G`', () => {

    afterAll(async () => { closeServer(); await (new PrismaClient).$disconnect(); });

    it("Create `GERÊNCIA DE REDES` should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Gerência de Redes',
            acronym: 'GERÊNCIA DE REDES',
            frequency: Frequency.SOMETIMES,
            available: Available.NO,
            description: 'Disciplina sobre gerência e manutenção de redes de computadores.',
            pre_requisites: ['Redes de Computadores'],
            post_requisites: [],
            teacher: '',
            schedule: '',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toEqual('Discipline created successfully!');
    });

    it("Create `GESTÃO DE PROJETOS` should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Gestão de Projetos',
            acronym: 'GESTÃO DE PROJETOS',
            frequency: Frequency.SOMETIMES,
            available: Available.NO,
            description: 'Disciplina sobre técnicas e práticas de gestão de projetos.',
            pre_requisites: ['Engenharia de Software'],
            post_requisites: [],
            teacher: '',
            schedule: '',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toEqual('Discipline created successfully!');
    });

    it("Create `GOVERNANÇA DA INTERNET` should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Governaça da Internet',
            acronym: 'GOVERNANÇA DA INTERNET',
            frequency: Frequency.SOMETIMES,
            available: Available.NO,
            description: 'Disciplina que estuda os modelos e regulamentações de governança da internet.',
            pre_requisites: ['Redes de Computadores'],
            post_requisites: [],
            teacher: 'Francilene Procópio',
            schedule: '',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toEqual('Discipline created successfully!');
    });
});

describe('Create all optatives disciplines `start with H`', () => {

    afterAll(async () => { closeServer(); await (new PrismaClient).$disconnect(); });

    it("Create HABILIDADES SOCIOEMOCIONAIS I should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Habilidades Socioemocionais I',
            acronym: 'HS1',
            frequency: Frequency.SOMETIMES,
            available: Available.NO,
            description: 'Disciplina sobre desenvolvimento de habilidades socioemocionais.',
            pre_requisites: [],
            post_requisites: [],
            teacher: '',
            schedule: '',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toEqual('Discipline created successfully!');
    });

    it("Create HABILIDADES SOCIOEMOCIONAIS II should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Habilidades Socioemocionais II',
            acronym: 'HS2',
            frequency: Frequency.SOMETIMES,
            available: Available.NO,
            description: 'Continuação do desenvolvimento de habilidades socioemocionais.',
            pre_requisites: ['Habilidades Socioemocionais I'],
            post_requisites: [],
            teacher: '',
            schedule: '',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toEqual('Discipline created successfully!');
    });
});

describe('Create all optatives disciplines `start with I`', () => {

    afterAll(async () => { closeServer(); await (new PrismaClient).$disconnect(); });

    it("Create `INFORMÁTICA E SOCIEDADE` should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Informática e Sociedade',
            acronym: 'InfoSoc',
            frequency: Frequency.SOMETIMES,
            available: Available.NO,
            description: 'Disciplina sobre o impacto da informática na sociedade e suas implicações éticas.',
            pre_requisites: [],
            post_requisites: [],
            teacher: '',
            schedule: '',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toEqual('Discipline created successfully!');
    });

    it("Create `INGLÊS` should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Inglês',
            acronym: 'INGLÊS',
            frequency: Frequency.SOMETIMES,
            available: Available.NO,
            description: 'Disciplina que aborda a língua inglesa e suas aplicações.',
            pre_requisites: [],
            post_requisites: [],
            teacher: '',
            schedule: '',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toEqual('Discipline created successfully!');
    });

    it("Create `INTERCONEXÃO DE REDES DE COMPUTADORES` should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Interconexão de Redes de Computadores',
            acronym: 'INTERCONEXÃO DE REDES DE COMPUTADORES',
            frequency: Frequency.SOMETIMES,
            available: Available.NO,
            description: 'Disciplina sobre interconexão e comunicação entre redes de computadores.',
            pre_requisites: ['Redes de Computadores', 'Sistemas Operacionais'],
            post_requisites: ['Projeto de Redes de Computadores'],
            teacher: '',
            schedule: '',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toEqual('Discipline created successfully!');
    });

    it("Create `INTERFACE HUMANO-COMPUTADOR` should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Interface Humano-Computador',
            acronym: 'IHC',
            frequency: Frequency.SOMETIMES,
            available: Available.NO,
            description: 'Disciplina que estuda os conceitos e práticas de interação entre humanos e computadores.',
            pre_requisites: ['Estruturas de Dados e Algoritmos'],
            post_requisites: [],
            teacher: 'Tiago Massoni',
            schedule: '',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toEqual('Discipline created successfully!');
    });
});

describe('Create all optatives disciplines `start with J`', () => {

    afterAll(async () => { closeServer(); await (new PrismaClient).$disconnect(); });

    it("Create JOGOS DIGITAIS should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Jogos Digitais',
            acronym: 'JOGOS DIGITAIS',
            frequency: Frequency.SOMETIMES,
            available: Available.NO,
            description: 'Disciplina sobre o desenvolvimento e design de jogos digitais.',
            pre_requisites: [],
            post_requisites: [],
            teacher: 'Marcelo Barros',
            schedule: '',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toEqual('Discipline created successfully!');
    });
});

describe('Create all optatives disciplines `start with L`', () => {

    afterAll(async () => { closeServer(); await (new PrismaClient).$disconnect(); });

    it("Create `LIBRAS` should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Libras',
            acronym: 'LIBRAS',
            frequency: Frequency.SOMETIMES,
            available: Available.NO,
            description: 'Disciplina sobre a Língua Brasileira de Sinais e sua aplicação na comunicação.',
            pre_requisites: [],
            post_requisites: [],
            teacher: '',
            schedule: '',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toEqual('Discipline created successfully!');
    });
});

describe('Create all optatives disciplines `start with M`', () => {

    afterAll(async () => { closeServer(); await (new PrismaClient).$disconnect(); });

    it("Create `MÉTODOS E SOFTWARE NUMÉRICOS` should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Métodos e Software Numéricos',
            acronym: 'MÉTODOS E SOFTWARE NUMÉRICOS',
            frequency: Frequency.SOMETIMES,
            available: Available.NO,
            description: 'Disciplina sobre métodos numéricos e softwares para cálculos matemáticos.',
            pre_requisites: ['Álgebra Linear I', 'Cálculo Diferencial e Integral II'],
            post_requisites: [],
            teacher: '',
            schedule: '',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toEqual('Discipline created successfully!');
    });

    it("Create `MÉTODOS FORMAIS` should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Métodos Formais',
            acronym: 'MÉTODOS FORMAIS',
            frequency: Frequency.SOMETIMES,
            available: Available.NO,
            description: 'Disciplina sobre métodos formais para especificação e verificação de sistemas.',
            pre_requisites: [],
            post_requisites: [],
            teacher: '',
            schedule: '',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toEqual('Discipline created successfully!');
    });
});

describe('Create all optatives disciplines `start with O`', () => {

    afterAll(async () => { closeServer(); await (new PrismaClient).$disconnect(); });

    it("Create `OTIMIZAÇÃO` should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Otimização',
            acronym: 'OTIMIZAÇÃO',
            frequency: Frequency.SOMETIMES,
            available: Available.NO,
            description: 'Disciplina sobre técnicas e métodos de otimização aplicados em problemas computacionais.',
            pre_requisites: ['Álgebra Linear I', 'Cálculo Diferencial e Integral II'],
            post_requisites: [],
            teacher: '',
            schedule: '',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toEqual('Discipline created successfully!');
    });
});

describe('Create all optatives disciplines `start with P`', () => {

    afterAll(async () => { closeServer(); await (new PrismaClient).$disconnect(); });

    it("Create `PERCEPÇÃO COMPUTACIONAL` should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Percepção Computacional',
            acronym: 'PERCEPÇÃO COMPUTACIONAL',
            frequency: Frequency.SOMETIMES,
            available: Available.NO,
            description: 'Disciplina sobre técnicas de percepção computacional e visão por computador.',
            pre_requisites: ['Álgebra Linear I', 'Cálculo Diferencial e Integral II', 'Introdução à Probabilidade'],
            post_requisites: [],
            teacher: 'Herman',
            schedule: '',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toEqual('Discipline created successfully!');
    });

    it("Create `PRÁTICA DE ENSINO DE COMPUTAÇÃO I` should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Prática de Ensino de Computação I',
            acronym: 'Prática 1',
            frequency: Frequency.SOMETIMES,
            available: Available.NO,
            description: 'Disciplina sobre metodologias e práticas para o ensino de computação.',
            pre_requisites: [],
            post_requisites: [],
            teacher: 'Leandro Balby',
            schedule: '',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toEqual('Discipline created successfully!');
    });

    it("Create `PRÁTICA DE ENSINO DE COMPUTAÇÃO II` should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Prática de Ensino de Computação II',
            acronym: 'Prática 2',
            frequency: Frequency.SOMETIMES,
            available: Available.NO,
            description: 'Continuação da disciplina de prática de ensino de computação.',
            pre_requisites: ['Prática de Ensino de Computação I'],
            post_requisites: [],
            teacher: 'Leandro Balby',
            schedule: '',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toEqual('Discipline created successfully!');
    });

    it("Create `PROCESSAMENTO DE LINGUAGEM NATURAL` should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Processamento de Linguagem Natural',
            acronym: 'PLN',
            frequency: Frequency.SOMETIMES,
            available: Available.NO,
            description: 'Disciplina sobre técnicas e ferramentas de processamento de linguagem natural.',
            pre_requisites: ['Fundamentos de Matemática para Ciência da Computação II', 'Estruturas de Dados e Algoritmos', 'Lab. de Estruturas de Dados e Algoritmos'],
            post_requisites: [],
            teacher: 'Leandro Balby',
            schedule: '',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toEqual('Discipline created successfully!');
    });

    it("Create `PROGRAMAÇÃO EM BANCO DE DADOS` should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Programação em Banco de Dados',
            acronym: 'ProgBD',
            frequency: Frequency.SOMETIMES,
            available: Available.NO,
            description: 'Disciplina sobre programação e manipulação de bancos de dados.',
            pre_requisites: ['Banco de Dados I'],
            post_requisites: [],
            teacher: 'Carlos Pires',
            schedule: '',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toEqual('Discipline created successfully!');
    });

    it("Create `PROGRAMAÇÃO FUNCIONAL` should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Programação Funcional',
            acronym: 'PROGRAMAÇÃO FUNCIONAL',
            frequency: Frequency.SOMETIMES,
            available: Available.NO,
            description: 'Disciplina sobre os paradigmas e técnicas da programação funcional.',
            pre_requisites: ['Paradigmas de Linguagem de Programação'],
            post_requisites: [],
            teacher: 'Adalberto Cajueiro',
            schedule: '',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toEqual('Discipline created successfully!');
    });

    it("Create `PROGRAMAÇÃO PARA A WEB I` should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Programação para a Web I',
            acronym: 'Web 1',
            frequency: Frequency.SOMETIMES,
            available: Available.NO,
            description: 'Disciplina introdutória sobre programação para o ambiente web.',
            pre_requisites: ['Estruturas de Dados e Algoritmos', 'Lab. de Estruturas de Dados e Algoritmos'],
            post_requisites: [],
            teacher: '',
            schedule: '',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toEqual('Discipline created successfully!');
    });

    it("Create `PROGRAMAÇÃO PARA A WEB II` should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Programação para a Web II',
            acronym: 'Web 2',
            frequency: Frequency.SOMETIMES,
            available: Available.NO,
            description: 'Continuação do estudo de programação para o ambiente web.',
            pre_requisites: ['Programação para a Web I'],
            post_requisites: [],
            teacher: '',
            schedule: '',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toEqual('Discipline created successfully!');
    });

    it("Create `PROJETO DE REDES DE COMPUTADORES` should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Projeto de Redes de Computadores',
            acronym: 'Projeto de Redes',
            frequency: Frequency.SOMETIMES,
            available: Available.NO,
            description: 'Disciplina sobre planejamento e desenvolvimento de redes de computadores.',
            pre_requisites: ['Interconexão de Redes de Computadores'],
            post_requisites: [],
            teacher: '',
            schedule: '',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toEqual('Discipline created successfully!');
    });

    it("Create `PROJETO DE SISTEMAS DIGITAIS` should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Projeto de Sistemas Digitais',
            acronym: 'PROJETO DE SISTEMAS DIGITAIS',
            frequency: Frequency.SOMETIMES,
            available: Available.NO,
            description: 'Disciplina sobre o desenvolvimento de sistemas digitais e circuitos eletrônicos.',
            pre_requisites: ['Organização e Arquitetura de Computadores'],
            post_requisites: [],
            teacher: '',
            schedule: '',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toEqual('Discipline created successfully!');
    });

    it("Create `PROVISIONAMENTO E OPERAÇÕES DE INFRAESTRUTURAS` should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Provisionamento e Operações de Infraestrutura',
            acronym: 'POI',
            frequency: Frequency.ALWAYS,
            available: Available.NO,
            description: 'Disciplina que aborda os aspectos de provisionamento e manutenção de infraestrutura de TI.',
            pre_requisites: ['Redes de Computadores', 'Sistemas Operacionais'],
            post_requisites: [],
            teacher: '',
            schedule: '',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toEqual('Discipline created successfully!');
    });
});

describe('Create all optatives disciplines `start with R`', () => {

    afterAll(async () => { closeServer(); await (new PrismaClient).$disconnect(); });

    it("Create RECONHECIMENTO DE PADRÕES E REDES NEURAIS should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Reconhecimento de Padrões e Redes Neurais',
            acronym: 'RECONHECIMENTO DE PADRÕES E REDES NEURAIS',
            frequency: Frequency.SOMETIMES,
            available: Available.NO,
            description: 'Disciplina sobre técnicas de reconhecimento de padrões e aprendizado em redes neurais.',
            pre_requisites: ['Estatística Aplicada', 'Inteligência Artificial'],
            post_requisites: [],
            teacher: '',
            schedule: '',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toEqual('Discipline created successfully!');
    });

    it("Create RECUPERAÇÃO DE INFORMAÇÃO E BUSCA NA WEB should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Recuperação de Informação e Busca na Web',
            acronym: 'RI',
            frequency: Frequency.SOMETIMES,
            available: Available.NO,
            description: 'Disciplina sobre técnicas de recuperação de informações e mecanismos de busca na web.',
            pre_requisites: ['Banco de Dados I'],
            post_requisites: [],
            teacher: '',
            schedule: '',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toEqual('Discipline created successfully!');
    });
});

describe('Create all optatives disciplines `start with S`', () => {

    afterAll(async () => { closeServer(); await (new PrismaClient).$disconnect(); });

    it("Create SEGURANÇA DE SISTEMAS should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Segurança de Sistemas',
            acronym: 'SEGURANÇA DE SISTEMAS',
            frequency: Frequency.SOMETIMES,
            available: Available.NO,
            description: 'Disciplina sobre práticas e técnicas de segurança em sistemas de informação.',
            pre_requisites: ['Redes de Computadores', 'Sistemas Operacionais'],
            post_requisites: [],
            teacher: '',
            schedule: '',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toEqual('Discipline created successfully!');
    });

    it("Create SISTEMAS DE APOIO À DECISÃO should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Sistemas de Apoio à Decisão',
            acronym: 'SAD',
            frequency: Frequency.SOMETIMES,
            available: Available.NO,
            description: 'Disciplina sobre desenvolvimento de sistemas para suporte à tomada de decisão.',
            pre_requisites: ['Banco de Dados I'],
            post_requisites: [],
            teacher: 'Cláudio Baptista',
            schedule: '',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toEqual('Discipline created successfully!');
    });

    it("Create SISTEMAS DE INFORMAÇÕES GEOGRÁFICAS should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Sistemas de Informações Geográficas',
            acronym: 'SISTEMAS DE INFORMAÇÕES GEOGRÁFICAS',
            frequency: Frequency.SOMETIMES,
            available: Available.NO,
            description: 'Disciplina sobre técnicas e ferramentas para sistemas de informações geográficas.',
            pre_requisites: ['Banco de Dados I'],
            post_requisites: [],
            teacher: '',
            schedule: '',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toEqual('Discipline created successfully!');
    });

    it("Create SISTEMAS DISTRIBUÍDOS should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Sistemas Distribuídos',
            acronym: 'SD',
            frequency: Frequency.SOMETIMES,
            available: Available.NO,
            description: 'Disciplina sobre princípios e práticas de sistemas distribuídos.',
            pre_requisites: ['Redes de Computadores', 'Sistemas Operacionais'],
            post_requisites: [],
            teacher: 'Andrey Elĩsio',
            schedule: '',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toEqual('Discipline created successfully!');
    });
});

describe('Create all optatives disciplines `start with T`', () => {

    afterAll(async () => { closeServer(); await (new PrismaClient).$disconnect(); });

    it("Create TRANSFORMAÇÃO DIGITAL should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Transformação Digital',
            acronym: 'TD',
            frequency: Frequency.SOMETIMES,
            available: Available.NO,
            description: 'Disciplina sobre o impacto da transformação digital nos negócios e na sociedade.',
            pre_requisites: [],
            post_requisites: [],
            teacher: '',
            schedule: '',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toEqual('Discipline created successfully!');
    });
});

describe('Create all optatives disciplines `start with V`', () => {

    afterAll(async () => { closeServer(); await (new PrismaClient).$disconnect(); });

    it("Create VERIFICAÇÃO E VALIDAÇÃO DE SOFTWARE should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Verificação e Validação de Software',
            acronym: 'VeV',
            frequency: Frequency.SOMETIMES,
            available: Available.NO,
            description: 'Disciplina sobre técnicas de verificação e validação de software para assegurar a qualidade.',
            pre_requisites: ['Engenharia de Software'],
            post_requisites: [],
            teacher: 'Everton Galdino',
            schedule: '',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toEqual('Discipline created successfully!');
    });

    it("Create VISUALIZAÇÃO DE DADOS should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Visualização de Dados',
            acronym: 'VDD',
            frequency: Frequency.SOMETIMES,
            available: Available.NO,
            description: 'Disciplina sobre métodos e ferramentas de visualização de dados.',
            pre_requisites: ['Banco de Dados I', 'Estatística Aplicada'],
            post_requisites: [],
            teacher: 'Maxwell Guimarães',
            schedule: '',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toEqual('Discipline created successfully!');
    });
});
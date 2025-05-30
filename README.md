# API RESTful com NestJS

API RESTful desenvolvida com NestJS, TypeScript, TypeORM e PostgreSQL, implementando operações CRUD para cidades e pessoas.

## Tecnologias

- [NestJS](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [TypeORM](https://typeorm.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Docker](https://www.docker.com/)
- [Swagger](https://swagger.io/)

## Pré-requisitos

- Node.js (v14 ou superior)
- Docker e Docker Compose
- PostgreSQL (se não usar Docker)

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/vitucordeiro/crud-adasi
cd crud_adasi
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```
Edite o arquivo `.env` com suas configurações.

## Executando com Docker

1. Inicie os containers:
```bash
docker-compose up --build
```

2. A API estará disponível em `http://localhost:3000`

## Executando sem Docker

1. Inicie o PostgreSQL localmente

2. Execute a API:
```bash
npm run start:dev
```

## Documentação da API

A documentação Swagger está disponível em:
```
http://localhost:3000/api
```

## Endpoints

### Cidades

- `GET /city` - Lista todas as cidades
- `GET /city/search?name={nome}` - Busca cidades por nome
- `POST /city` - Cria uma nova cidade

### Pessoas

- `GET /person` - Lista todas as pessoas
- `GET /person/{id}` - Busca uma pessoa por ID
- `POST /person` - Cria uma nova pessoa
- `PUT /person/{id}` - Atualiza uma pessoa
- `DELETE /person/{id}` - Remove uma pessoa

## Estrutura do Projeto

```
src/
├── config/        # Configurações da aplicação
├── city/          # Módulo de cidades
│   ├── dto/       # Data Transfer Objects
│   ├── entities/  # Entidades
│   └── ...        # Controller e Service
├── person/        # Módulo de pessoas
│   ├── dto/       # Data Transfer Objects
│   ├── entities/  # Entidades
│   └── ...        # Controller e Service
└── main.ts        # Arquivo principal
```


## Exemplos de Uso

### Criar uma cidade
```bash
curl -X POST http://localhost:3000/city \
  -H "Content-Type: application/json" \
  -d '{"name": "São Paulo", "state": "SP"}'
```

### Criar uma pessoa
```bash
curl -X POST http://localhost:3000/person \
  -H "Content-Type: application/json" \
  -d '{
    "name": "João Silva",
    "street": "Rua das Flores",
    "neighborhood": "Jardim Primavera",
    "cityId": 1
  }'
```

## Validações

- Nome da cidade é obrigatório
- Estado da cidade deve ter 2 caracteres
- Nome da pessoa é obrigatório
- Cidade referenciada deve existir



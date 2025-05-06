#!/bin/bash

# Cria usuário
curl -X POST http://localhost:8080/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Vitória Maria",
    "email": "vitoria.nascimento@ccc.ufcg.edu.br",
    "password": "@ccc.ufcg.edu.br",
    "role": "ADMINISTRATOR"
  }'

# Loga usuário 
curl -X POST http://localhost:8080/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "vitoria.nascimento@ccc.ufcg.edu.br",
    "password": "@ccc.ufcg.edu.br"
  }'

# Captura do token
TOKEN=$(curl -s -X POST http://localhost:8080/login/getTokenByEmail \
  -H "Content-Type: application/json" \
  -d '{
    "email": "vitoria.nascimento@ccc.ufcg.edu.br",
    "password": "@ccc.ufcg.edu.br"
  }' | jq -r '.token')

echo "Token: $TOKEN"

# Verifica se o token foi realmente capturado
if [ -z "$TOKEN" ] || [ "$TOKEN" == "null" ]; then
  echo "Erro: token não obtido. Verifique login e senha."
  exit 1
fi

# Caminho para JSON e URL da API
JSON_FILE_OBRIGATORY="Obrigatory.json"
JSON_FILE_OPTATIVE="Optative.json"
URL="http://localhost:8080/protected/disciplines"

# Verifica se o jq está instalado
if ! command -v jq &> /dev/null; then
  echo "jq não está instalado. Instale com: sudo apt install jq"
  exit 1
fi

# Loop para enviar disciplinas
jq -c 'reverse | .[]' "$JSON_FILE_OBRIGATORY" | while read -r disciplina; do
  echo "Enviando: $disciplina"
  curl -X POST "$URL" \
    -H "Authorization: Bearer $TOKEN" \
    -H "Content-Type: application/json" \
    -d "$disciplina"
  echo -e "\n---"
done

# Loop para enviar disciplinas
jq -c 'reverse | .[]' "$JSON_FILE_OPTATIVE" | while read -r disciplina; do
  echo "Enviando: $disciplina"
  curl -X POST "$URL" \
    -H "Authorization: Bearer $TOKEN" \
    -H "Content-Type: application/json" \
    -d "$disciplina"
  echo -e "\n---"
done

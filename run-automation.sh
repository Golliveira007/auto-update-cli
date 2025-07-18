#!/bin/bash

echo "🔐 Iniciando agente SSH..."
eval "$(ssh-agent -s)"

echo "🔑 Adicionando chave SSH..."
ssh-add ~/.ssh/id_ed25519_bitbucket

echo "🚀 Rodando automação..."
node src/index.js   # ou o nome do seu arquivo JS principal



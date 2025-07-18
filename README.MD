# Projeto Auto-Update-Cli

<p>Atualmente, o processo de atualização de nossos aplicativos é muito repetitivo. Como é comum em fluxos manuais recorrentes, identificamos a oportunidade de automatizá-lo com o objetivo de aumentar a eficiência, reduzir erros operacionais e liberar tempo da equipe para outras demandas estratégicas. Pensando nisso, desenvolvemos a automação auto-update-cli, uma ferramenta projetada para facilitar a rotina de atualização dos repositórios de nossos apps, otimizando todo o fluxo com comandos simples e assistentes interativos. Este documento apresenta os pré-requisitos, o funcionamento da ferramenta e o passo a passo para sua utilização.</p>

## Funcionalidades

- Atualização automatica de apps;
- Comandos git pré programados;
- Permissão para gerenciamento de conflitos de merge;

### Tecnologias utilizadas e bibliotecas utilizadas

- Node.js;
- Simple-git;
- Inquirer;
- Chalk;
- Shell Script;

#### Pré requisitos 

- Node.js instalado;
- Git intalado;
- Chave SSH do bitbucket configurada em sua maquina;

##### Como utilizar

- Em seu terminal insira o comando auto-update;
- Insira somente os links dos repositórios sem o git clone, os comandos git já estão programados via codigo;
- Necessário inserir os links na seguinte sequencia:
{
Backend V1;
Backend V2;
Frontend;
App;
}
- A automação irá começar à rodar e retornar no terminal cada etapa em que ela está trabalhando.

##### Conclusão 

A automação guarda o mesmo fluxo da atualização que fariamos na mão, ela cria uma pasta repositório em downloads e clona todos os repositórios nela, após clonar a automação acessa cada repositório em sua respectiva sequência e aplicas os comandos git necessarios para a atualização. 



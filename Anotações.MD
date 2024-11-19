# Projeto Cadastro

## Requisitos

### Usuários

*Obrigatório*

* Usuário
* Email
* Senha
* Documento da pessoa 
    * Nome
    * Cpf
    * Data de nascimento
    * Função na empresa
    * Função no sistema (Adm, Colaborador, Visualizador)

### Familia

*Obrigatório

**Pessoas**

***Nome do responsável:***  
* Nome Completo*
* CPF*
* Data de nascimento*
* Gmail*
* Telefone*
* Foto_Documento*

*OBS: Frontend seria interativa, botão de adicionar integrante, e aparecer formulário.*  
*Gerar um ID da Familia*

***Integrantes:***  
* Nome completo*
* CPF* 
* Data de nascimento*
* Gmail
* Telefone

**Backend**  
*trazer número de integrantes da familia*  
*Verificar email e enviar confirmação (algum frame)*  
*Verificar número e enviar confirmação (algum frame) não obrigatório*  

**Endereço**

Local da casa e informação:  
* CEP*
* Rua*
* Número*
* Bairro*
* Cidade*
* UF*
* Capacidade da caixa(opcional, iremos verificar se rolar IOT)*

*backend*

*API de CEP, puxar informações de acordo que for informado o CEP*

#### Observações

Verificar se cpf já é cadastrado em uma família e informa (evitar recadastrado)

Mudar pessoa responsável na familia.
CRUD integrante posteriomente.

### Motorista

Motorista:
(nome*,cpf*,nascimento*,gmail*,telefone*,foto-CNH*, N_CNH*, foto*)

#### Observações

Alerta email e número de criação e vinculação
Poder vincular a veiculo 1 ou mais
Se vincular algum existente, já desvincular o outro.

### Veículo

Veículo:
Placa*,Ano*,Modelo*,Chassi*,Cor*,CRV*,Renavam*,Foto_Veículo*,Foto_CRV*
Tanque:
Placa*,Ano*,Modelo*,Capacidade*,Cor*

### Observações

*Light/Dark mode* - Tema claro e escuro pode ser escolhido pelo usuário.  
*Acessibilidade mobile* - O site deve prover uma boa experiência mobile.  
*Criptografia* - A senha do usuário deve ser criptografada antes de entrar no banco de dados
(bcrypt).  
*IOT* - Sensor para verificar o nível de aguá da caixa da familia o qual teria um id vinculado a fámilia.  

## Ferramentas

**Tentar dar preferência ao uso de typescript**

### FrontEnd

* Vue.js
* Char.js(graficos)
* Tailwind css

### Backend

* Node.js
* Express (olhar vue router primeiro)

### Banco de dados

* PostgreSQL
* ORM vs Query Builder (Sequelize vs ...)

### Testes

* Cypress
* Jest
* Jmeter

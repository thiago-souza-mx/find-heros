# find-heros
API de super-heróis

![alt text](https://github.com/thiago-souza-mx/find-heros/blob/main/public/img/hero.jpg)

Projeto de seleção para a empresa App Masters

https://appmasters.io/pt/

## Base Api

https://find-heros.herokuapp.com

## Rotas

```
/serch?q={param:query}
```
Retorna uma lista de Heróis que contém o termo {param:query}

```
/hero/{param:slug}
```
Retorna um objeto que correponda ao slug {param:slug}

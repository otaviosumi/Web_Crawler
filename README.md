# TCC Web Crawler


## Introdução

Crawler para buscar informações úteis na web de forma automatizada.


### Requisitos

Este projeto necessita de algumas bibliotecas e recursos instalados para que funcione corretamente:

| Nome             	| Versão                       	|
|------------------	|------------------------------	|
| PyCharm          	| 2019.3.3 (Community Edition) 	|
| Scrapy           	| 2.0.1                        	|
| numpy            	| 1.18.2                       	|
| selenium	        | 3.141.0                       |	    

### Utilizando o programa

Após a instalação dos requisitos basta rodar o comando abaixo para que o arquivo principal funcione adequadamente:

```
scrapy runspider scraper.py
```

Alguns arquivos obtidos estão dispostos na pasta "_dados", os arquivos ".py" nela encontrados rodam normalmente.
Há também arquivos de formatos diversos tanto manuamente quanto via código:

| Arquivo              | Descrição                  |
|----------------------|----------------------------|
| Materias.pdf         | Lista das matérias que podem ter correlação às TICs (não necessáriamente software exclusivamente).|
| mydocentes*.txt      | Arquivo de texto com os emails dos docentes que lecionam os cursos escolhidos nas universidades.|
| Email_Universidade.pdf| Arquivo formatado com os emails |
| Bibliografias.pdf    | Bibligrafia utilizada no momento da construção das listas para decisão se as matérias eram ou não compatíveis com quaisquer uso de tecnologias.|





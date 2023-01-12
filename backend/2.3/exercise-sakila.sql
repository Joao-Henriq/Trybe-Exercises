/*
1 Mostre todos os detalhes dos filmes que contêm a palavra ace no nome.
2 Mostre todos os detalhes dos filmes cujas descrições finalizam com china.
3 Mostre todos os detalhes dos dois filmes cujas descrições contêm a palavra girl 
e o título finaliza com a palavra lord.
4 Mostre os dois casos em que, a partir do 4° caractere no título do filme, tem-se a palavra gon.
5 Mostre o único caso em que, a partir do 4° caractere no título do filme, 
tem-se a palavra gon e a descrição contém a palavra Documentary.
6 Mostre os dois filmes cujos títulos ou finalizam com academy ou iniciam com mosquito.
7 Mostre os seis filmes que contêm as palavras monkey e sumo em suas descrições.
*/
SELECT * FROM sakila.film 
WHERE title LIKE '%ace%'; 

SELECT * FROM sakila.film 
WHERE description LIKE '%china';

SELECT * FROM sakila.film
WHERE description LIKE '%girl%' AND title LIKE '%lord';

SELECT * FROM sakila.film
WHERE title LIKE '___gon%';

SELECT * FROM sakila.film
WHERE title LIKE '___gon%' AND description LIKE '%Documentary%';

SELECT title FROM sakila.film 
WHERE title LIKE '%academy' OR title LIKE 'mosquito%';

SELECT title FROM sakila.film
WHERE description LIKE '%monkey%' AND description LIKE '%sumo%';

SELECT * FROM sakila.payment
WHERE payment_id IN (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);

SELECT * FROM sakila.payment
WHERE payment_id BETWEEN 1 AND 15;

SELECT * FROM sakila.language
WHERE name BETWEEN 'Italian ' AND 'Mandarin'
ORDER BY NAME;

SELECT rental_id, rental_date FROM sakila.rental
WHERE rental_date
BETWEEN '2005-05-27' AND '2005-07-17'
ORDER BY rental_date DESC;

SELECT * FROM sakila.payment;

/*

1 Mostre o nome, sobrenome e e-mail dos clientes com os seguintes sobrenomes: 
hicks, crawford, henry, boyd, mason, morales e kennedy, ordenados por nome em ordem alfabética.

2 Mostre o e-mail dos clientes com os address_id 172, 173, 174, 175 e 176, 
ordenados em ordem alfabética.

3 Descubra quantos pagamentos foram feitos entre 01/05/2005 e 01/08/2005. 
Lembre-se de que, no banco de dados, as datas estão armazenadas no formato ano/mês/dia, 
diferente do formato brasileiro, que é dia/mês/ano.

4 Mostre o título, ano de lançamento e duração do empréstimo de 
todos os filmes com a duração de empréstimo de 3 a 6. Os resultados devem ser classificados 
em filmes com maior duração de empréstimo primeiro. Em caso de empate, 
ordene em ordem alfabética pelo título.

5 Monte um relatório que exiba o título e classificação dos 500 primeiros filmes 
direcionados para as classificações indicativas G, PG e PG-13. Os resultados 
devem estar ordenados por título.
*/

SELECT first_name, last_name, email FROM sakila.customer
WHERE last_name IN ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy')
ORDER BY first_name ASC;

SELECT email FROM sakila.customer
WHERE address_id IN (172, 173, 174, 175, 176)
ORDER BY email ASC;

SELECT COUNT(payment_date) FROM sakila.payment
WHERE payment_date BETWEEN '2005-05-01' AND '2005-08-01';
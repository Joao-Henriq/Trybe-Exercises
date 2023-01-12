USE sakila;
SELECT * FROM sakila.customer
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

SELECT * FROM sakila.customer
WHERE active = 0
AND store_id = 2
AND first_name <> 'KENNETH'
ORDER BY first_name and last_name;

/*
O setor financeiro quer saber título, descrição, ano de lançamento, 
classificação etária (rating) e valor do custo de substituição (replacement_cost), 
dos 100 filmes com o maior custo de substituição, do valor mais alto ao mais baixo, 
entre os filmes feitos para menores de idade e que têm o custo mínimo de substituição de $18,00 dólares. 
Em caso de empate, ordene em ordem alfabética pelo título. 
As informações podem ser encontradas na tabela film
*/
SELECT title, description, release_year, rating, replacement_cost FROM sakila.film
WHERE rating <> 'R' AND rating <> 'NC-17' AND replacement_cost >= 18
ORDER BY replacement_cost DESC, title LIMIT 100;

SELECT COUNT(active) FROM sakila.customer
WHERE active = 1 AND store_id = 1;

SELECT * FROM sakila.customer
WHERE active = 0 AND store_id = 1;

SELECT title, rating, rental_rate FROM sakila.film
WHERE rating = 'NC-17'
ORDER BY rental_rate ASC, title LIMIT 50;
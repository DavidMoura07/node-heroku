INSERT INTO orgao
(nome)
VALUES('IFES'),('UFES'),('SEDU'),('PRODEST');

SELECT * FROM orgao;

INSERT INTO profissao
(nome)
VALUES('Programador'), ('POGramador'), ('Mestre das Gambs'), ('PHP Full');

SELECT * FROM profissao;

INSERT INTO concurso
(edital, codigo, orgaoId)
VALUES('1111', 111, 1), ('2222', 222, 2), ('3333', 333, 3), ('4444', 444, 4),
('5555', 555, 1), ('6666', 666, 2), ('7777', 777, 3), ('8888', 888, 4),
('9999', 999, 1), ('2111', 211, 2), ('3111', 311, 3), ('4111', 411, 4);

SELECT * FROM concurso;

INSERT INTO concurso_profissoes_profissao
(concursoId, profissaoId)
VALUES(1, 1),(1, 2),(1, 3),(1, 4),(2, 1),(2, 2),(3, 3),(3, 4),(4, 4),(4, 1),(5, 1),(6, 2),(7, 3),
(8, 4),(9, 2),(9, 4),(10, 1),(10, 3),(11, 1);

SELECT * FROM concurso_profissoes_profissao;

INSERT INTO candidato
(nome, cpf, dataNascimento)
VALUES('Grcia', '11111111111', '01-01-2001'),('Barbosa', '222222222222', '01-01-2002'),
('Lucas', '33333333333', '01-01-2003'),('Magno', '444444444444', '01-01-2004'),
('Icaro', '55555555555', '01-01-2005'),('Paulo', '66666666666', '01-01-2006'),
('David', '77777777777', '01-01-2007'),('Walber', '88888888888', '01-01-2008'),
('Alvaro', '99999999999', '01-01-2009'),('Moises', '10101010101', '01-01-2010');

SELECT * FROM candidato;

INSERT INTO candidato_profissoes_profissao
(candidatoId, profissaoId)
VALUES(1, 1),(1, 2),(1, 3),(1, 4),(2, 1),(2, 3),(3, 2),(3, 4),(4, 3),(4, 4),
(5, 3),(5, 4),(6, 1),(6, 2),(7, 2),(7, 3),(7, 4),(8, 1),(9, 2),(10, 3);

SELECT * FROM candidato_profissoes_profissao;


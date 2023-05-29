import db from ".";

db.transaction((tx) => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS alunos (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, nota1 REAL, nota2 REAL)',
      [],
      () => console.log('Tabela criada com sucesso.'),
      (error) => console.error('Erro ao criar a tabela:', error)
    );
  });
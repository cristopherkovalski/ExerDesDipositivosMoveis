import * as SQlite from 'expo-sqlite';


const db = SQlite.openDatabase({ name: 'notas.db', location: 'default' });

export default db;
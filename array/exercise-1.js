function DatabaseError(command,message) {
    this.statement = command
    this.message = message
}
const database = {
    tables:{},
    createTable(command) {
        const regexp = /^create table ([a-z]+) \((.+)\)/;
        const parseCommand = command.match(regexp);
        const [,tableName, columns] = parseCommand;
    
        let tables =  {"columns": {}, "data": []};
        for (let column of columns) {
            const splitColumn = column.split(" ");
            const [nameColumn, typeColumn] = splitColumn;
        
            tables.columns[nameColumn] = typeColumn
        }

        this.tables[tableName]= tables;

        return true;
    },
    insert(command){
        const regexp = /^insert into (\w+)\s*\(([\w\s,]+)\) values \(([\w\s,]+)\)/;
        const parseCommand = command.match(regexp);
        let [,tableName, columns, values] = parseCommand;
        columns = columns.split(',');
        values = values.split(',');

        const row = {};

        for (position in columns) {
            row[columns[position].trim()] = values[position].trim()
        }

        this.tables[tableName].data.push(row);

        return true;
    },
    execute(command) {
        if (command.startsWith("create table ")){
            return this.createTable(command);
        } else if(command.startsWith('insert into ')){
            return this.insert(command);
        }
        const message = `Syntax error: '${command}'`
        throw new DatabaseError(command, message)
    }
}
try {
    database.execute("create table author (id number, name string, age number, city string, state string, country string)");
    database.execute("insert into author (id, name, age) values (1, Douglas Crockford, 62)");
    database.execute("insert into author (id, name, age) values (2, Linus Torvalds, 47)");
    database.execute("insert into author (id, name, age) values (3, Martin Fowler, 54)");
    console.log( JSON.stringify(database, undefined,"   "));
} catch (error) {
    console.log(error.message);
}
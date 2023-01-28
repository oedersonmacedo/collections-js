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
    select(command){
        const regexp = /^select\s([\w\s,]+)\s+from\s+(\w+)(?: where (.+))?/;
        const parseCommand = command.match(regexp);
        let [, columns, table, whereCommand] = parseCommand;

        let rows = this.tables[table].data;
        if (whereCommand) {
            const whereValues = whereCommand.split(' and ');
            for (whereValue in whereValues) {
                const [columnSearch, valueSearch] = whereValues[whereValue].split('=');
                
                rows = rows.filter(function(row) { return row[columnSearch]===valueSearch })
            }

        }

        columns = columns.split(',')
        rows = rows.map(function (row) {
            const valuesTransfom = {}
            for(let column of columns){
                valuesTransfom[column.trim()] = row[column.trim()]
            }
            
            return valuesTransfom
        });
        return rows
    },
    delete(command){
        const regexp = /^delete\s+from\s+(\w+)(?: where (.+))?/;
        const parsedCommand = command.match(regexp);
        let [, table, whereCommand] = parsedCommand;

        let rows = this.tables[table].data;
        if (whereCommand) {
            const [columnSearch, valueSearch] = whereCommand.split('=');
            rows = rows.filter(function(row) { return row[columnSearch.trim()]!=valueSearch.trim() });

        } else {
            rows = []
        }
        this.tables[table].data = rows
        return true
    },
    execute(command) {
        if (command.startsWith("create table ")){
            return this.createTable(command);
        } else if(command.startsWith('insert into ')){
            return this.insert(command);
        } else if(command.startsWith('select ')){
            return this.select(command);
        } else if(command.startsWith('delete ')){
            return this. delete(command);
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
    database.execute("delete from author where id = 2");
    console.log(JSON.stringify(database.execute("select name, age from author"), undefined,"   "));
} catch (error) {
    console.log(error.message);
}
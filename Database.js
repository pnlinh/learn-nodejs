let instance = null;

class Database {
    constructor(name) {
        if (!instance) {
            instance = this;
            this.name = name;
        }

        return instance;
    }

    static getInstance() {
        return new Database('This is a test database');
    }
}

module.exports = Database;
var db = connect("mongodb://root:rootPassXXX@localhost:27017/admin");

db = db.getSiblingDB('database_nodeapi');

db.createUser(
    {
        user: "patrickbremm",
        pwd: "patrickbremm",
        roles: [ { role: "userAdminAnyDatabase", db: "admin"} ],
        passwordDigestor: "server",
    }
)
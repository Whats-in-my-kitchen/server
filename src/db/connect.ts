import mongoose from "mongoose";
import config from "config";
import log from "../logger";
import mysql from "mysql";

const connect = async() => {
    const dbUri = config.get("dbUri") as string;
    const dbUser = config.get("dbUser") as string;
    const dbPassword = config.get("dbPassword") as string;
    const dbDatabase = config.get("dbDatabase") as string;
    const dbPort = config.get("dbPort") as number;
    try {
        var connection =  mysql.createConnection({
            host: dbUri,
            user:dbUser,
            password: dbPassword,
            database: dbDatabase,
            port: dbPort
        });
        connection.connect(function(err) {
            if(err) throw err;
            log.info("SQL DB Connected... 👌");
        });
    } catch (error) {
        log.error("🤧 Connection Failed: ",error);
        process.exit(1);
    }
}

export default connect;

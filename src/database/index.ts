import { Connection, createConnection, getConnection } from "typeorm";

export default async (): Promise<Connection> => {
    const defaultOptions = await getConnection();
    
    return createConnection(
        Object.assign(defaultOptions,{
            database: 
                process.env.NODE_ENV === 'test' 
                    ? "./src/database/database.test.sqlite" 
                    : defaultOptions.database
        })
    );
};


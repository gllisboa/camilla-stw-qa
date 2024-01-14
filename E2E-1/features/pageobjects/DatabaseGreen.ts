import { createPool, Pool, PoolOptions, RowDataPacket } from 'mysql2/promise';

class DatabaseGreen {
  private pool: Pool;

  constructor() {
    const dbConfig: PoolOptions = {
        host: 'localhost',
        port: 3306,
        user: 'tonysoprano',
        password: '12345678',
        database: 'data_dev',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
        connectTimeout: 60000
    };
    console.log('Connecting to database...');
    this.pool = createPool(dbConfig);
  }

  async executeQuery(query: string, values?: any[]){
    const connection = await this.pool.getConnection();
    try {
        console.log('Executing query...');
        await connection.beginTransaction();
        const [rows] = await this.pool.query(query, values);
        await connection.commit();
        console.log('Query executed successfully.');
        return rows as RowDataPacket[];
    } catch (error) {
        // Handle errors
        console.error('Error executing transaction:', error);
    
        // Roll back the transaction in case of an error
        await connection.rollback();
    }  finally {
        connection.release();
    }

  }
}

export default DatabaseGreen;

import { Pool } from 'pg';

// Substitua pela sua string de conexão do Render.com
const connectionString = 'postgresql://bd_aula_u9la_user:yvL0OS84MzhBBPEn3MQAmnyhpltg4A6h@dpg-cr75tcij1k6c73f3kgdg-a.oregon-postgres.render.com/bd_aula_u9la';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  }
});

export default pool;

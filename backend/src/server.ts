import app from './app';
import prisma from './config/database';

const PORT = process.env.PORT || 3001;

const startServer = async () => {
  try {
    await prisma.$connect();
    console.log('✅ Base de datos conectada correctamente');

    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Error al conectar con la base de datos:', error);
    process.exit(1); 
  }
};

startServer();

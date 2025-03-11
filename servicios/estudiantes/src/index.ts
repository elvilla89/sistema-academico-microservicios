import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'Microservicio Estudiantes Activo 🎓' });
});

app.listen(4001, () => {
  console.log('Servicio Estudiantes en puerto 4001');
});

export default app;
import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'Microservicio Estudiantes Activo 🎓' });
});

app.listen(4002, () => {
  console.log('Servicio cursos en puerto 4002');
});

export default app;
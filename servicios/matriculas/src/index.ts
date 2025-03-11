import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'Microservicio matriculas Activo 🎓' });
});

app.listen(4003, () => {
  console.log('Servicio Estudiantes en puerto 4003');
});

export default app;
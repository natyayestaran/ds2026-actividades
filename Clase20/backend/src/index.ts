import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
import libroRoutes from "./routes/libro.routes";
import autorRoutes from "./routes/autor.routes";
import { globalErrorHandler } from "./middlewares/error.middleware";

const app = express();
const PORT = process.env.PORT || 3000;

//1. Configuración de CORS con origen en lista
const corsOptions = {
  origin: [process.env.FRONTEND_URL ?? "http://localhost:5173"],
};

app.use(cors(corsOptions));
app.use(express.json());

//2. Rutas de la API
app.use("/api/auth", authRoutes);
app.use("/api/libros", libroRoutes);
app.use("/api/autores", autorRoutes);

//3. Middleware 404 en JSON para rutas inexistentes 
app.use((_req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

//4. Manejador de errores global 
app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
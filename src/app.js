const express = require("express");
const schedules = require("./utils/schedules");
const app = express();

// Opções para agendar a tarefa
const schedulesOptions = {
  // Título da tarefa
  title: "Fazer café",
  // Agendando a tarefa para 1 minuto após ser chamado
  date: new Date(new Date().getTime() + 1 * 60 * 1000),
};

// Callback da tarefa
const schedulesCallBack = () => console.log("É hora de fazer o café!");

// Agendamento da nova tarefa
const Coffe = schedules.newJob(schedulesOptions, schedulesCallBack);

// Cancelar a tarefa
schedules.cancelJob(Coffe.id);

app.listen(3000, () => {
  console.log(`Server is running at http://127.0.0.1:3000`);
});

import app from "./TodoList/app";
import conexao from "./TodoList/conexao";
const PORT = 3000;

conexao.connect((error) => {
  if (error) {
    console.log(`Falha na conexão ${error}`);
  } else {
    console.log("Conexão realizada com sucesso");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  }
});

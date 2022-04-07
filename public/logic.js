document.getElementsByID("get").addEventListener("click", async (event) => {
  let todos = await getTodos();
  console.log(todos);
});

async function getTodos() {
  try {
    let response = await fetch("http://localhost:3000/api/todo");
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

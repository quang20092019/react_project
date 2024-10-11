import TodoList from "./components/TodoList";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { useState } from "react";
import {v4} from 'uuid';
function App() {
  const [todolist, setTodolist] = useState([]);
  const [textinput, setInput] = useState("");
  const ontextChange = (e) => {
    setInput (e.target.value);
  };
  const onAdd = (e) => {
    setTodolist([...todolist,{id: v4(), name: textinput,incomplete: false}]);
  };
  return (
    <div>
  <h3>Danh sách cần làm </h3>
  <TextField 
  name = "nhap" 
  placeholder = "Nhập tên"
  value = {textinput} 
  onChange={ontextChange}
  ></TextField>
  <Button variant="contained" color="primary" disabled = {!textinput} onClick={onAdd}>Thêm</Button>
  <TodoList todolist ={todolist}/>
  </div>
  )
}

export default App;

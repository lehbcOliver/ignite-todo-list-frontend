import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Task } from "../Task";
import { Empty } from "../Empty";
import styles from './Input.module.css';


export interface ITask {
  id: string;
  content: string;
  isComplete: boolean;

}

export function Input() {

  const [tasks, setTasks] = useState<ITask[]>([]);
  const [newTask, setNewTask] = useState('');
  const [taskCount, setTaskCount] = useState(0);
  const [checkCount, setCheckCount] = useState(0);

  function handleNewTask(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const task: ITask = {
      id: String(new Date().getTime()),
      content: newTask,
      isComplete: false
    }

    setTasks([...tasks, task]);
    setNewTask('');
    setTaskCount(tasks.length + 1)
  }
  function handleDeleteTask(id: string) {
    const taskWithoutDelete = tasks.filter(task => {
      return task.id !== id
    });
    setTasks(taskWithoutDelete)
    setTaskCount(tasks.length - 1)
  }

  function countChecked() {
    const count = tasks.filter(task => task.isComplete === true)
    setCheckCount(count.length)
  }

  return (
    <div className={styles.container}>
      <form className={styles.input} onSubmit={handleSubmit}>
        <input type="text" placeholder="Adicione uma nova mensagem" onChange={handleNewTask} value={newTask} required />
        <button type="submit">
          Criar
          <PlusCircle />
        </button>
      </form>
      <div className={styles.info}>
        <div>
          <p className={styles.create}>Tarefas criadas</p>
          <span>{taskCount}</span>
        </div>
        <div>
          <p className={styles.concluded}>Concluidas</p>
          <span>{checkCount} de {taskCount}</span>
        </div>
      </div>

      {tasks.length > 0 ? <Task props={tasks} onDelete={handleDeleteTask} isChecked={countChecked} /> : <Empty />}
    </div>
  );
}
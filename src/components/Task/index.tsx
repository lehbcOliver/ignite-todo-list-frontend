import { Trash } from "phosphor-react";
import styles from './Task.module.css';
import { ITask } from "../Input";
import { useState } from "react";

interface IProps {
  props: ITask[],
  onDelete: (id: string) => void
  isChecked: () => void
}



export function Task({ props, onDelete, isChecked }: IProps) {

  const [checked, setChecked] = useState(false);

  function onChecked(id: string) {
    const isChecked = props.find(task => task.id === id);
    if (isChecked) {
      isChecked.isComplete = !isChecked.isComplete;

    }
    setChecked(!checked)
    countChecked()
  }
  function countChecked() {
    isChecked()
  }


  return (
    <ul className={styles.container}>
      {props.map(task => {
        return (
          <li key={task.id} className={task.isComplete ? styles.isChecked : styles.isNotChecked}>
            <input type="checkbox" name="task" onChange={() => onChecked(task.id)} />
            <p>{task.content}</p>
            <button onClick={() => onDelete(task.id)}>
              <Trash />
            </button>

          </li>
        );
      })}


    </ul>
  );
}
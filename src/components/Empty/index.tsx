import styles from './Empty.module.css';
import Clipboard from '../../assets/Clipboard.png';

export function Empty() {

  return (
    <div className={styles.container} >
      <div className={styles.empty}>
        <img src={Clipboard} alt="" />
        <p>Você ainda não tem tarefas cadastradas</p>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </div>
  );
}
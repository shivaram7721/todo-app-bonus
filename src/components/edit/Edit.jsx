import styles from './Edit.module.css'
import { useSetRecoilState } from 'recoil';
import { showEdit } from '../../atom/Atom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function Edit({ todo, onUpdate, editInput, setEditInput }) {
  const setShow = useSetRecoilState(showEdit);

  function handleChange(e) {
    setEditInput(e.target.value);
  }

  function handleUpdate() {
    if(editInput) {
        onUpdate(editInput);
    setEditInput('');
    }
  }

  return (
    <div className={styles.editContainer}>
      <TextField value={editInput} sx={{flexGrow:"1",marginBottom:"10px", paddingBottom:"10px"}} onChange={handleChange} className={styles.textField}/>
      <Button onClick={handleUpdate} sx={{backgroundColor:"skyblue", marginLeft:"8px"}} className={styles.button}>Update</Button>
      <span onClick={()=>setShow(false)}>❌</span>
    </div>
  );
}

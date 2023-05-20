import { useEffect, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import styles from './Home.module.css';
import { getUsers } from '../../../utils/localStorage';
import { useNavigate } from 'react-router-dom';

export function Home() {
    const users = getUsers();
    const length = users.length;
    const [open, setOpen] = useState(false); 
    const navigate = useNavigate();
  
    function handleClear() {
      setOpen(true);
    }
  
    function handleConfirmClear() {
      localStorage.removeItem('ContactDetails');
      localStorage.setItem('isContact',JSON.stringify(false));
      navigate('contact')
      setOpen(false);
    }
  
    function handleCancelClear() {
      setOpen(false);
    }

    useEffect( () => {
        const contact = localStorage.getItem('isContact');
        console.log(contact)
        if(!contact) {
            navigate('contact');
        }
    },[])
  
    return (
      <div>
        <div className={styles.containerHome}>
        <h1 className={styles.welcomeMsg}>Welcome {users.firstName}</h1>
        <button className={styles.btn} onClick={handleClear}>Clear</button>
        </div>
        <Dialog open={open} sx={{}} onClose={handleCancelClear}>
          <DialogTitle sx={{fontFamily:"cursive",fontWeight:"700",textDecoration:"underline"}}>Confirmation</DialogTitle>
          <DialogContent>
            <p className={styles.promptMsg}>Are you sure you want to clear?</p>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleConfirmClear}>Yes</Button>
            <Button onClick={handleCancelClear}>No</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
  
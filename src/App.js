import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './App.css';
import { Container, Divider } from '@mui/material';

const style = {
  position: 'absolute',
  top: '20%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  boxShadow: 24,
};


function App() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="App">
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} variant="scrollable">
            <Box style={{height: '50px',background: '#dbd6c8'}}>

            </Box>
            <Typography id="modal-modal-title" className='modal-title' variant="h6" component="h2" >
              Your Deal DOMFLY0223 Will Change!
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }} className="modal-header" variant="p" component="p">
              Your previously selected Deal DOMFLY0223 is not available for bKash.
            </Typography>

            <Container maxWidth="lg">
              <Divider sx={{mt: 2, mb: 2}}/>
              <Typography id="modal-modal-description" sx={{ mt: 2 }} className="payment-title" variant="p" component="p">
              Available deals for bKash
            </Typography>
            <Box>
              
            </Box>
            </Container>
          </Box>
        </Modal>
    </div>
  );
}

export default App;

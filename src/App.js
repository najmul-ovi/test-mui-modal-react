import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PercentIcon from '@mui/icons-material/Percent';
import Radio from '@mui/material/Radio';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CloseIcon from '@mui/icons-material/Close';
import './App.css';
import { Container, Divider, FormGroup, TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '40%',
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
                <Button sx={{bgcolor: 'background.paper',ml:94, mt:-2}} onClick={() => setOpen(false)}><CloseIcon/></Button>
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
            <Box className="bkash-offer">
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  p: 1,
                  m: 1,
                  bgcolor: 'background.paper',
                  borderRadius: 1,
                }}
              >
                <Box>
                  <Box component="div" sx={{ display: 'inline',pt: '5px' }} ><PercentIcon/></Box>
                  <Box component="div" sx={{ display: 'inline' }}>FLYDOM0223</Box>
                </Box>
                <Box><Radio/></Box>
              </Box>
              <Typography id="modal-modal-description" sx={{ mt: 2,ml:3 }}  variant="p" component="p">
                  8% discount for bKash, Nagad, Rocket, tap & upay payment.
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2, ml:3 }}  variant="p" component="p">
                  Terms & Condition
              </Typography>

            </Box>

            <Divider sx={{mt: 2, mb: 2}}/>

            <FormGroup row sx={{mb: 4}}>
                <TextField fullWidth className='coupon-input-field' variant="outlined" placeholder="Have a coupon?" />
                <Button variant="contained" disableElevation sx={{width: '120px'}}>
                  Apply
                </Button>
              </FormGroup>
            </Container>

            <Box style={{height: '100px',background: '#dbd6c8'}}>
              <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    p: 1,
                    m: 1,
                    borderRadius: 1,
                  }}
                >
                  <Box>
                    <Typography id="modal-modal-description" sx={{ mt: 2, ml:3, pt:4 }}  variant="p" component="p">
                        <ArrowBackIosIcon/> Go back to payment page
                    </Typography>
                  </Box>
                  <Box>
                    <Box component="div" sx={{ display: 'block',pt: '5px' }} >You Pay BDT 4,901</Box>
                    <Box component="div" sx={{ display: 'block',mt: 2 }}>
                      <Button variant="contained" disableElevation sx={{width: '120px'}}>
                        Done
                      </Button>
                    </Box>
                  </Box>
                </Box>
            </Box>
          </Box>
        </Modal>
    </div>
  );
}

export default App;

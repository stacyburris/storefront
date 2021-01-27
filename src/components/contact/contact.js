
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';

function Contact() {
  //const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    //submit the form
  };

  return (
    <div className="Contact">
      <Typography variant="h4" gutterBottom>
        Contact Us!
      </Typography>
      <form noValidate autoComplete="off">
        <div>
          <TextField
            label="Full Name"
            margin="normal"
            variant="outlined"
            value={name}
            onChange={e => setName(e.target.value)}
            fullWidth
          />
          <TextField
            label="Email Address"
            margin="normal"
            variant="outlined"
            value={email}
            onChange={e => setEmail(e.target.value)}
            fullWidth
          />
        </div>
        <br />
        <TextField
          multiline
          rows="4"
          label="Message"
          margin="normal"
          variant="outlined"
          value={message}
          onChange={e => setMessage(e.target.value)}
          fullWidth
        />
        <br />
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Contact;
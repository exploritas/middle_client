import { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableHead, TableRow, Button, Container, Typography } from '@mui/material';
import './assets/css/material-dashboard.css';

function App() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const response = await axios.get('/api/trades');
        setEmails(response.data);
      } catch (error) {
        console.error('Error fetching emails:', error);
      }
    };
    fetchEmails();
  }, []);

  const handleForward = async (id) => {
    try {
      await axios.post(`/trades/forward/${id}`);
      setEmails(emails.filter(email => email.id !== id));
    } catch (error) {
      console.error('Error forwarding email:', error);
    }
  };

  return (
    <Container className="content-wrapper">
      <Typography variant="h4" gutterBottom className="text-primary">
        Today's Trade Emails
      </Typography>
      <div className="card">
        <Table className="table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Content</TableCell>
              <TableCell>Sent At</TableCell>
              <TableCell>Replied</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {emails.map(email => (
              <TableRow key={email.id}>
                <TableCell>{email.id}</TableCell>
                <TableCell dangerouslySetInnerHTML={{ __html: email.content }} />
                <TableCell>{new Date(email.sentAt).toISOString()}</TableCell>
                <TableCell>{email.replied.toString()}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    className="btn btn-primary"
                    onClick={() => handleForward(email.id)}
                    disabled={email.replied}
                  >
                    Forward
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Container>
  );
}

export default App;

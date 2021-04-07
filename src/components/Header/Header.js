import React from "react";
import "./header.css";
import {
  Typography,
  Link,
  DialogTitle,
  Dialog,
  Button,
  List,
  ListItem,
  ListItemText,
  Avatar,
  ListItemAvatar,
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

function Header() {
  const [open, setOpen] = React.useState(false);
  const contats = ["caiovi98@hotmail.com", "(71) 99347-7569"];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };
  return (
    <div className="header">
      <div className="header-container">
        <div className="profile"></div>
        <div className="info-container">
          <div>
            <Typography variant="h4">Caio Vinicius</Typography>
            <Typography variant="h6">A Computer Engineering student</Typography>
          </div>
          <div className="links-container">
            <div className="links">
              <Typography>
                <Link
                  href="https://www.linkedin.com/in/caiovi98/"
                  color="inherit"
                >
                  LinkedIn
                </Link>
              </Typography>
            </div>
            <div className="links">
              <Typography>
                <Link href="https://github.com/caiovini98" color="inherit">
                  GitHub
                </Link>
              </Typography>
            </div>
          </div>
          <div className="links-container">
            <div className="link-curriculo">
              <Button
                variant="outlined"
                size="large"
                color="inherit"
                onClick={handleClickOpen}
              >
                Contato
              </Button>
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle
                  disableTypography
                  id="alert-dialog-title"
                  style={{
                    padding: 10,
                    paddingLeft: 20,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography style={{ flex: 1 }}>Contatos</Typography>
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    onClick={handleClose}
                  >
                    <CloseIcon />
                  </IconButton>
                </DialogTitle>

                <List>
                  {contats.map((email) => (
                    <ListItem key={email}>
                      <ListItemAvatar>
                        <Avatar style={{ background: "#40E0D0" }}>
                          <PersonIcon
                            style={{
                              color: "#FFF",
                            }}
                          />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={email} />
                    </ListItem>
                  ))}
                </List>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

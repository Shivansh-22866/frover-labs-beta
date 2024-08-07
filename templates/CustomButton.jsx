import React from 'react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

const SubmitButton = ({
  isLoading,
  onClick,
  children,
  backgroundColor,
  rippleColor,
  textColor
}) => {
  return (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      onClick={onClick}
      disabled={isLoading}
      style={{
        backgroundColor: backgroundColor,
        color: textColor
      }}
      sx={{
        '&:hover': {
          backgroundColor: rippleColor
        }
      }}
      startIcon={isLoading ? <CircularProgress size={20} color="inherit" /> : null}
    >
      {children}
    </Button>
  );
};

export default SubmitButton;

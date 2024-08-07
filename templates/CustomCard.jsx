'use client'
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

const CustomCard = ({ title, content, imageSrc, time, unreadMessages = 0, isActive = false }) => {
  const [ripple, setRipple] = useState({ left: 0, top: 0 });

  const handleClick = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setRipple({ left: x, top: y });

    setTimeout(() => {
      setRipple(null);
    }, 600);
  };

  return (
    <div className='relative overflow-hidden cursor-pointer' onClick={handleClick}>
      <Card className="flex items-center pl-8">
        <div style={{ position: 'relative', marginRight: 8, zIndex: 1 }}>
          <CardMedia
            component="img"
            height="64"
            width="64"
            image={imageSrc}
            alt={title}
            style={{ borderRadius: '50%', width: 40 }}
          />
          {isActive && (
            <div
              style={{
                position: 'absolute',
                top: 28,
                right: -2,
                width: 16,
                height: 16,
                borderRadius: '50%',
                backgroundColor: 'green',
                border: '2px solid white',
              }}
            />
          )}
          {ripple && (
            <span
              className="absolute ripple"
              style={{
                left: ripple.left,
                top: ripple.top,
                width: 0,
                height: 0,
                opacity: 0.5,
                backgroundColor: 'rgba(67, 1, 223, 0.527)',
                animation: 'ripple-effect 0.5s linear',
                pointerEvents: 'none',
                transform: 'translate(-50%, -50%)',
                borderRadius: '50%',
              }}
            />
          )}
        </div>
        <CardContent style={{ flex: 1, zIndex: 1 }}>
          <Typography
            variant="subtitle1"
            gutterBottom
            className="flex items-center justify-between gap-2 font-bold"
          >
            {title}
            <div className="flex items-center justify-start gap-2">
              {unreadMessages > 0 && (
                <Typography
                  variant="caption"
                  className="bg-purple-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center"
                >
                  {unreadMessages}
                </Typography>
              )}
              <Typography
                variant="caption"
                color="textSecondary"
                className="text-xs mr-4"
              >
                {time}
              </Typography>
            </div>
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            className="text-sm"
          >
            {content}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default CustomCard;

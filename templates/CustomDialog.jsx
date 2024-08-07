import React, { useEffect, useRef, useState } from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogClose, DialogHeader, DialogFooter, DialogTitle } from './ui/dialog';
import { Drawer, DrawerTrigger, DrawerContent, DrawerClose, DrawerHeader, DrawerFooter, DrawerTitle } from './ui/drawer';
import { Button } from './ui/button';

const CustomDialog = ({ content }) => {
  const dialogRef = useRef(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    if (isDialogOpen) {
      dialogRef.current?.focus();
    }
  }, [isDialogOpen]);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      {/* Dialog for larger screens (md and above) */}
      <div className={`hidden md:block ${isDialogOpen ? 'block' : 'hidden'}`}>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger>
            <span onClick={closeDialog}>Open {content.title}</span>
          </DialogTrigger>
          <DialogContent ref={dialogRef}>
            <DialogHeader>
              <DialogTitle>{content.title}</DialogTitle>
            </DialogHeader>
            <div className="flex flex-row bg-slate-800 p-4 rounded-3xl items-center gap-4">
              <img src={content.userImage} alt="User Profile" className="rounded-full h-16 w-16" />
              <div>
                <p>{content.userName}</p>
                <p>{content.email}</p>
              </div>
            </div>
            <Button>Manage your Account</Button>
            <DialogFooter>
              {content.buttons.map((buttonLabel, index) => (
                <Button key={index} variant={'link'}>
                  {buttonLabel}
                </Button>
              ))}
            </DialogFooter>
            <DialogClose />
          </DialogContent>
        </Dialog>
      </div>

      {/* Drawer for smaller screens (sm and below) */}
      <div className={`block md:hidden`}>
        <Drawer>
          <DrawerTrigger>
            <span onClick={closeDialog}>Open {content.title}</span>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>{content.title}</DrawerTitle>
            </DrawerHeader>
            <div className="flex flex-row bg-slate-800 p-4 rounded-3xl items-center gap-4 m-8">
              <img src={content.userImage} alt="User Profile" className="rounded-full h-16 w-16" />
              <div>
                <p>{content.userName}</p>
                <p>{content.email}</p>
              </div>
            </div>
            <Button className='mx-8'>Manage Your Account</Button>
            <DrawerFooter>
              {content.buttons.map((buttonLabel, index) => (
                <Button key={index} variant={'link'}>
                  {buttonLabel}
                </Button>
              ))}
            </DrawerFooter>
            <DrawerClose />
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
};

export default CustomDialog;

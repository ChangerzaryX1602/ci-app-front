import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const DialogDeletePlaceHolder = ({
  place_holder,
  handleDelete,
}: {
  place_holder: string;
  handleDelete: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <span onClick={() => setIsOpen(true)}>Delete</span>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete chat?</DialogTitle>
          <DialogDescription>This will delete {place_holder}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button type="button" onClick={() => handleOpenChange(false)}>
            Cancel
          </Button>
          <Button type="button" onClick={() => handleDelete()}>
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogDeletePlaceHolder;

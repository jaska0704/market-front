import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,    
  DialogTrigger,
} from "@/components/ui/dialog";


export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
      
      </DialogContent>
    </Dialog>
  );
}

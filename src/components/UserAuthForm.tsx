import { cn } from "@/lib/utils";
import React, { FunctionComponent } from "react";
import { Button } from "./ui/Button";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm: FunctionComponent<UserAuthFormProps> = ({
  className,
  ...props
}) => {
  return (
    <div className={cn("flex justify-center", className)} {...props}>
      <Button size="sm" className="w-full">
        Google
      </Button>
    </div>
  );
};

export default UserAuthForm;

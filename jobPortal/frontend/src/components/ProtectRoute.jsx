import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const ProtectRoute = () => {
  const { user } = useSelector((state) => state.auth);
  const [showDialog, setShowDialog] = useState(false);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (!user) {
      setShowDialog(true);

      const timer = setTimeout(() => {
        setRedirect(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [user]);

  if (redirect) {
    return <Navigate to="/login" replace />;
  }

  if (!user) {
    return (
      <AlertDialog open={showDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Unauthorized Access</AlertDialogTitle>
            <AlertDialogDescription>
              You must be logged in to access this page.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter />
        </AlertDialogContent>
      </AlertDialog>
    );
  }

  return <Outlet />;
};

export default ProtectRoute;

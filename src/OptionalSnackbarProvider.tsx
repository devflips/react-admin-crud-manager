import React from "react";
import { SnackbarProvider, useSnackbar, SnackbarKey } from "notistack";
import { X } from "lucide-react";

interface InnerCheckProps {
  children: React.ReactNode;
}

function InnerCheck({ children }: InnerCheckProps) {
  useSnackbar(); // If this works, provider exists
  return children;
}

interface OptionalSnackbarProviderProps {
  children: React.ReactNode;
}

export default function OptionalSnackbarProvider({ 
  children 
}: OptionalSnackbarProviderProps) {
  try {
    return <InnerCheck>{children}</InnerCheck>;
  } catch (error) {
    return (
      <SnackbarProvider
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        action={(snackbarKey: SnackbarKey) => (
          <button
            onClick={() => {
              window.dispatchEvent(
                new CustomEvent("closeSnackbar", { detail: snackbarKey }),
              );
            }}
            className="p-1 hover:bg-white/20 rounded-full transition-colors duration-200 text-white flex items-center justify-center"
          >
            <X className="h-4 w-4" />
          </button>
        )}
        maxSnack={3}
        autoHideDuration={3000}
      >
        {children}
      </SnackbarProvider>
    );
  }
}

import { addToast, ToastProvider } from "@heroui/react";
import {
  IoCheckmarkCircleSharp,
  IoCloseCircleSharp,
  IoWarningSharp,
  IoInformationCircleSharp,
} from "react-icons/io5";

const Toaster = () => {
  return (
    <ToastProvider
      placement="bottom-right"
      maxVisibleToasts={5}
      toastProps={{
        radius: "lg",
        timeout: 5000,
        shouldShowTimeoutProgress: true,
        classNames: {
          base: "border border-default-100/50 bg-background/70 backdrop-blur-md shadow-lg p-4 flex gap-3",
          title: "font-semibold text-sm text-foreground",
          description: "text-xs text-default-500 mt-0.5",
          closeButton:
            "hover:bg-default-100 transition-colors p-1 text-default-400 hover:text-default-700",
          progressIndicator: "bg-primary",
        },
      }}
    />
  );
};

export const toast = {
  success: (title: string, description?: string) => {
    addToast({
      title,
      description,
      color: "success",
      icon: (
        <IoCheckmarkCircleSharp className="text-success shrink-0 text-xl" />
      ),
      classNames: {
        base: "border border-success-200/50 bg-success-50/80 dark:bg-success-950/20 dark:border-success-800/30 backdrop-blur-md shadow-lg p-4 flex gap-3",
        title: "font-semibold text-sm text-success-800 dark:text-success-200",
        description:
          "text-xs text-success-600/90 dark:text-success-400/90 mt-0.5",
        closeButton:
          "hover:bg-success-100/50 dark:hover:bg-success-900/30 transition-colors p-1 text-success-500 hover:text-success-800 dark:hover:text-success-200",
        progressIndicator: "bg-success-500",
      },
    });
  },
  error: (title: string, description?: string) => {
    addToast({
      title,
      description,
      color: "danger",
      icon: <IoCloseCircleSharp className="text-danger shrink-0 text-xl" />,
      classNames: {
        base: "border border-danger-200/50 bg-danger-50/80 dark:bg-danger-950/20 dark:border-danger-800/30 backdrop-blur-md shadow-lg p-4 flex gap-3 rounded-xl",
        title: "font-semibold text-sm text-danger-800 dark:text-danger-200",
        description:
          "text-xs text-danger-600/90 dark:text-danger-400/90 mt-0.5",
        closeButton:
          "hover:bg-danger-100/50 dark:hover:bg-danger-900/30 transition-colors p-1 text-danger-500 hover:text-danger-800 dark:hover:text-danger-200",
        progressIndicator: "bg-danger-500",
      },
    });
  },
  warning: (title: string, description?: string) => {
    addToast({
      title,
      description,
      color: "warning",
      icon: <IoWarningSharp className="text-warning shrink-0 text-xl" />,
      classNames: {
        base: "border border-warning-200/50 bg-warning-50/80 dark:bg-warning-950/20 dark:border-warning-800/30 backdrop-blur-md shadow-lg p-4 flex gap-3",
        title: "font-semibold text-sm text-warning-800 dark:text-warning-200",
        description:
          "text-xs text-warning-600/90 dark:text-warning-400/90 mt-0.5",
        closeButton:
          "hover:bg-warning-100/50 dark:hover:bg-warning-900/30 transition-colors p-1 text-warning-500 hover:text-warning-800 dark:hover:text-warning-200",
        progressIndicator: "bg-warning-500",
      },
    });
  },
  info: (title: string, description?: string) => {
    addToast({
      title,
      description,
      color: "primary",
      icon: (
        <IoInformationCircleSharp className="text-primary shrink-0 text-xl" />
      ),
      classNames: {
        base: "border border-primary-200/50 bg-primary-50/80 dark:bg-primary-950/20 dark:border-primary-800/30 backdrop-blur-md shadow-lg p-4 flex gap-3",
        title: "font-semibold text-sm text-primary-800 dark:text-primary-200",
        description:
          "text-xs text-primary-600/90 dark:text-primary-400/90 mt-0.5",
        closeButton:
          "hover:bg-primary-100/50 dark:hover:bg-primary-900/30 transition-colors p-1 text-primary-500 hover:text-primary-800 dark:hover:text-primary-200",
        progressIndicator: "bg-primary-500",
      },
    });
  },
  default: (title: string, description?: string) => {
    addToast({
      title,
      description,
      color: "default",
      classNames: {
        base: "border border-default-200/50 bg-default-50/80 dark:bg-default-950/20 dark:border-default-800/30 backdrop-blur-md shadow-lg p-4 flex gap-3",
        title: "font-semibold text-sm text-default-800 dark:text-default-200",
        description:
          "text-xs text-default-600/90 dark:text-default-400/90 mt-0.5",
        closeButton:
          "hover:bg-default-100/50 dark:hover:bg-default-900/30 transition-colors p-1 text-default-500 hover:text-default-800 dark:hover:text-default-200",
        progressIndicator: "bg-default-500",
      },
    });
  },
};

export default Toaster;

import type { Meta, StoryObj } from "@storybook/react";
import { ToastContainer } from "../../components/Toast";
import { useToast } from "../../components/Toast/useToast";

const meta: Meta = {
  title: "Components/Toast",
};
export default meta;

const ToastDemo = ({ type, duration, closable }: any) => {
  const { toasts, addToast, removeToast } = useToast();

  return (
    <>
      <button
        onClick={() =>
          addToast({
            message: `${type ?? "info"} toast`,
            type,
            duration,
            closable
          })
        }
      >
        Show Toast
      </button>

      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </>
  );
};

// Stories

export const Info: StoryObj = {
  render: () => <ToastDemo type="info" />,
};

export const Success: StoryObj = {
  render: () => <ToastDemo type="success" />,
};

export const Warning: StoryObj = {
  render: () => <ToastDemo type="warning" />,
};

export const Error: StoryObj = {
  render: () => <ToastDemo type="error" />,
};

export const LongDuration: StoryObj = {
  render: () => <ToastDemo type="info" duration={10000000000000} />,
};

export const ShortDuration: StoryObj = {
  render: () => <ToastDemo type="info" duration={1000} />,
};

export const NotClosable: StoryObj = {
  render: () => <ToastDemo type="info" closable={false} />,
};

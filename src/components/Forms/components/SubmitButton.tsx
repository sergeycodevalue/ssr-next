"use client";

import { useFormStatus } from "react-dom";
import Loader from "../../Loaders/Loader";

function ButtonLoader({ text }: { readonly text: string }) {
  return (
    <div className="flex items-center space-x-2">
      <Loader />
      <p>{text}</p>
    </div>
  );
}

interface SubmitButtonProps {
  text: string;
  loadingText: string;
  className?: string;
  loading?: boolean;
}

export function SubmitButton({
  text,
  loadingText,
  loading,
  className,
}: Readonly<SubmitButtonProps>) {
  const status = useFormStatus();

  const processing = status.pending || loading;
  
  return (
    <button
      type="submit"
      aria-disabled={processing}
      disabled={processing}
      className={className}
    >
      {processing ? <ButtonLoader text={loadingText} /> : text}
    </button>
  );
}

import { UpdatePasswordForm } from "@/components/update-password-form";

export default function UpdatePasswordPage() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <UpdatePasswordForm />
      </div>
    </div>
  );
}
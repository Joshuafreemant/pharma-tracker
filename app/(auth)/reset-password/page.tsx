import ResetPasswordForm from "@/components/pages/ResetPasswordForm";
import { Suspense } from "react";


// app/(auth)/reset-password/page.tsx


export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPasswordForm />
    </Suspense>
  );
}
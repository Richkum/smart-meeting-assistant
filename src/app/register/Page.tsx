import { AuthForm } from "@/components/auth/auth-form";

/**
 * The register page component.
 *
 * This component renders the register page, which includes
 * a form for the user to enter their email address to
 * create an account.
 *
 * The component uses the `AuthForm` component to render
 * the form, and the `view` prop is set to `"sign-up"` to
 * indicate that the form should be used for signing up.
 */
export default function RegisterPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Create an account
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your email below to create your account
          </p>
        </div>
        {/* The sign up form */}
        <AuthForm view="sign-up" />
      </div>
    </div>
  );
}

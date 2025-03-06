import { AuthForm } from "@/components/auth/auth-form";

/**
 * The login page component.
 *
 * This component renders the login page, which includes
 * a sign in form for the user to enter their email and
 * password.
 *
 * The component uses the `AuthForm` component to render
 * the form, and the `view` prop is set to `"sign-in"` to
 * indicate that the form should be used for signing in.
 */
export default function LoginPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back()
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your email to sign in to your account
          </p>
        </div>
        {/* The sign in form */}
        <AuthForm view="sign-in" />
      </div>
    </div>
  );
}

// export default function LoginPage() {
//   return (
//     <div className="container flex h-screen w-screen flex-col items-center justify-center">
//       <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
//         <div className="flex flex-col space-y-2 text-center">
//           <h1 className="text-2xl font-semibold tracking-tight">
//             Welcome back()
//           </h1>
//           <p className="text-sm text-muted-foreground">
//             Enter your email to sign in to your account
//           </p>
//         </div>
//         {/* The sign in form */}
//         <AuthForm view="sign-in" />
//       </div>
//     </div>
//   );
// }

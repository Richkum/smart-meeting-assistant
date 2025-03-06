import { AuthForm } from "@/components/auth/auth-form";
import { motion } from "framer-motion";
import { FaSignInAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";

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
    <div className="relative flex h-screen w-screen items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500">
      {/* Background overlay for glass effect */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-md" />

      {/* Animated Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 mx-auto flex w-full flex-col justify-center space-y-6 rounded-2xl bg-white/20 p-8 shadow-xl backdrop-blur-lg sm:w-[400px]"
      >
        {/* Header with Icon */}
        <div className="flex flex-col items-center space-y-2 text-center">
          <FaSignInAlt className="text-4xl text-white" />
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Welcome Back!
          </h1>
          <p className="text-sm text-white/80">
            Enter your email to sign in to your account.
          </p>
        </div>

        {/* Sign-in Form */}
        <AuthForm view="sign-in" />

        {/* Extra Action */}
        <div className="mt-4 text-center text-sm text-white/80">
          Don't have an account?{" "}
          <a
            href="/register"
            className="font-semibold text-white hover:underline"
          >
            Sign up
          </a>
        </div>

        {/* Button with Hover Effect */}
        <Button className="mt-4 w-full bg-white/20 text-white transition hover:bg-white/30">
          Sign In
        </Button>
      </motion.div>
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

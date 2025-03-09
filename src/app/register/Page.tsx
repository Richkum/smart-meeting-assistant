import { AuthForm } from "@/components/auth/auth-form";
import { motion } from "framer-motion";
import { FaUserPlus } from "react-icons/fa";
import { Button } from "@/components/ui/button";

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
  // return (
  //   <div className="relative flex h-screen w-screen items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
  //     {/* Background overlay for glass effect */}
  //     <div className="absolute inset-0 bg-black/30 backdrop-blur-md" />

  //     {/* Animated Card */}
  //     <motion.div
  //       initial={{ opacity: 0, scale: 0.9 }}
  //       animate={{ opacity: 1, scale: 1 }}
  //       transition={{ duration: 0.5, ease: "easeOut" }}
  //       className="relative z-10 mx-auto flex w-full flex-col justify-center space-y-6 rounded-2xl bg-white/20 p-8 shadow-xl backdrop-blur-lg sm:w-[400px]"
  //     >
  //       {/* Header with Icon */}
  //       <div className="flex flex-col items-center space-y-2 text-center">
  //         <FaUserPlus className="text-4xl text-white" />
  //         <h1 className="text-3xl font-bold text-white tracking-tight">
  //           Create an Account
  //         </h1>
  //         <p className="text-sm text-white/80">
  //           Enter your email below to get started.
  //         </p>
  //       </div>

  //       {/* Sign-up Form */}
  //       <AuthForm view="sign-up" />

  //       {/* Extra Action */}
  //       <div className="mt-4 text-center text-sm text-white/80">
  //         Already have an account?{" "}
  //         <a href="/login" className="font-semibold text-white hover:underline">
  //           Sign in
  //         </a>
  //       </div>

  //       {/* Button with Hover Effect */}
  //       <Button className="mt-4 w-full bg-white/20 text-white transition hover:bg-white/30">
  //         Get Started
  //       </Button>
  //     </motion.div>
  //   </div>
  // );

  return (
    <div className="relative flex h-screen w-screen items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-blue-400/30 blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/3 h-72 w-72 rounded-full bg-purple-400/20 blur-3xl animate-pulse"
        style={{ animationDuration: "8s" }}
      />
      <div
        className="absolute top-1/3 right-1/4 h-80 w-80 rounded-full bg-pink-400/20 blur-3xl animate-pulse"
        style={{ animationDuration: "12s" }}
      />

      {/* Background overlay for glass effect */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />

      {/* Animated Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 mx-auto flex w-full flex-col justify-center space-y-6 rounded-2xl bg-white/10 p-8 shadow-2xl backdrop-blur-xl border border-white/10 sm:w-[420px]"
      >
        {/* Light flare effect */}
        <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />

        {/* Header with Icon */}
        <div className="flex flex-col items-center space-y-3 text-center">
          <div className="rounded-full bg-white/20 p-3 backdrop-blur-sm">
            <FaUserPlus className="text-3xl text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Create an Account
          </h1>
          <p className="text-sm text-white/90 max-w-xs">
            Enter your email below to get started with your new account.
          </p>
        </div>

        {/* Sign-up Form */}
        <AuthForm view="sign-up" />

        {/* Divider */}
        <div className="relative flex items-center py-2">
          <div className="flex-grow border-t border-white/20"></div>
          <span className="mx-4 flex-shrink text-xs text-white/60">
            OR CONTINUE WITH
          </span>
          <div className="flex-grow border-t border-white/20"></div>
        </div>

        {/* Social Login Buttons */}
        <div className="grid grid-cols-3 gap-3">
          <Button
            variant="outline"
            className="flex justify-center items-center bg-white/10 border-white/20 hover:bg-white/20 text-white backdrop-blur-sm"
          >
            <FaGoogle className="text-lg" />
          </Button>
          <Button
            variant="outline"
            className="flex justify-center items-center bg-white/10 border-white/20 hover:bg-white/20 text-white backdrop-blur-sm"
          >
            <FaApple className="text-lg" />
          </Button>
          <Button
            variant="outline"
            className="flex justify-center items-center bg-white/10 border-white/20 hover:bg-white/20 text-white backdrop-blur-sm"
          >
            <FaGithub className="text-lg" />
          </Button>
        </div>

        {/* Extra Action */}
        <div className="text-center text-sm text-white/80">
          Already have an account?{" "}
          <a
            href="/login"
            className="font-semibold text-white hover:text-white/90 transition-colors"
          >
            Sign in
          </a>
        </div>

        {/* Button with Hover Effect */}
        <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium py-2 shadow-lg shadow-purple-700/20 transition-all hover:shadow-purple-700/40 hover:scale-[1.02] active:scale-[0.98]">
          Get Started
        </Button>

        {/* Terms and Privacy */}
        <p className="text-center text-xs text-white/60">
          By signing up, you agree to our{" "}
          <a
            href="/terms"
            className="text-white/80 hover:text-white underline-offset-2 hover:underline"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            href="/privacy"
            className="text-white/80 hover:text-white underline-offset-2 hover:underline"
          >
            Privacy Policy
          </a>
        </p>
      </motion.div>
    </div>
  );
}

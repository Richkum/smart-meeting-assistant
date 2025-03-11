import { AuthForm } from "@/components/auth/auth-form";
import { motion } from "framer-motion";
import { FaSignInAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { FaLock } from "react-icons/fa";

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
    <div className="relative flex h-screen w-screen items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 overflow-hidden">
      {/* Animated background elements */}
      <div
        className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-blue-400/30 blur-3xl animate-pulse"
        style={{ animationDuration: "10s" }}
      />
      <div
        className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-pink-400/30 blur-3xl animate-pulse"
        style={{ animationDuration: "15s" }}
      />

      {/* Background overlay for glass effect */}
      <div className="absolute inset-0 bg-black/35 backdrop-blur-md" />

      {/* Animated Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 mx-auto flex w-full flex-col justify-center space-y-6 rounded-2xl bg-white/15 p-8 shadow-2xl backdrop-blur-lg border border-white/10 sm:w-[420px]"
      >
        {/* Light flare effect */}
        <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-white/10 blur-2xl" />

        {/* Header with Icon */}
        <div className="flex flex-col items-center space-y-3 text-center">
          <div className="rounded-full bg-white/20 p-3 backdrop-blur-sm">
            <FaSignInAlt className="text-3xl text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Welcome Back!
          </h1>
          <p className="text-sm text-white/90 max-w-xs">
            Enter your email to sign in to your account.
          </p>
        </div>

        {/* Sign-in Form */}
        <AuthForm view="sign-in" />

        {/* Forgot Password Link */}
        <div className="text-right">
          <a
            href="/forgot-password"
            className="text-sm text-white/90 hover:text-white transition-colors"
          >
            Forgot password?
          </a>
        </div>

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
            className="flex justify-center items-center bg-white/10 border-white/20 hover:bg-white/20 text-white"
          >
            <FaGoogle className="text-lg" />
          </Button>
          <Button
            variant="outline"
            className="flex justify-center items-center bg-white/10 border-white/20 hover:bg-white/20 text-white"
          >
            <FaApple className="text-lg" />
          </Button>
          <Button
            variant="outline"
            className="flex justify-center items-center bg-white/10 border-white/20 hover:bg-white/20 text-white"
          >
            <FaGithub className="text-lg" />
          </Button>
        </div>

        {/* Extra Action */}
        <div className="text-center text-sm text-white/80">
          Don't have an account?{" "}
          <a
            href="/register"
            className="font-semibold text-white hover:text-white/90 transition-colors"
          >
            Sign up
          </a>
        </div>

        {/* Button with Hover Effect */}
        <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium py-2 shadow-lg shadow-purple-700/20 transition-all hover:shadow-purple-700/40 hover:scale-[1.02] active:scale-[0.98]">
          Sign In
        </Button>

        {/* Security Note */}
        <p className="text-center text-xs text-white/60 flex items-center justify-center gap-1">
          <FaLock className="text-xs" /> Secure, encrypted connection
        </p>
      </motion.div>
    </div>
  );
}

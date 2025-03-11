import { AuthForm } from "@/components/auth/auth-form";
import { motion } from "framer-motion";
import { FaSignInAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

/**
 * The reset password page component.
 *
 * This component renders the reset password page, which includes
 * a form for the user to enter their email address to reset
 * their password.
 */
export default function ResetPasswordPage() {
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
            Reset Password
          </h1>
          <p className="text-sm text-white/80">
            Enter your email address below and we'll send you an email with
            instructions to reset your password.
          </p>
        </div>

        {/* Reset Password Form */}
        <AuthForm view="reset-password">
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email address"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            required
          />

          <Button
            type="submit"
            className="mt-4 w-full bg-white/20 flex items-center justify-center border border-transparent text-sm font-semibold text-white hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <FaLock className="mr-2" />
            Reset Password
          </Button>
        </AuthForm>

        {/* Back to login link */}
        <Link to="/login">
          <Button
            variant="outline"
            className="w-full mt-4 flex items-center justify-center border border-transparent text-sm font-semibold text-white hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <FaSignInAlt className="mr-2" />
            Back to login
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}

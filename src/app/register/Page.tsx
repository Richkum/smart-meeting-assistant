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
  return (
    <div className="relative flex h-screen w-screen items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
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
          <FaUserPlus className="text-4xl text-white" />
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Create an Account
          </h1>
          <p className="text-sm text-white/80">
            Enter your email below to get started.
          </p>
        </div>

        {/* Sign-up Form */}
        <AuthForm view="sign-up" />

        {/* Extra Action */}
        <div className="mt-4 text-center text-sm text-white/80">
          Already have an account?{" "}
          <a href="/login" className="font-semibold text-white hover:underline">
            Sign in
          </a>
        </div>

        {/* Button with Hover Effect */}
        <Button className="mt-4 w-full bg-white/20 text-white transition hover:bg-white/30">
          Get Started
        </Button>
      </motion.div>
    </div>
  );
}

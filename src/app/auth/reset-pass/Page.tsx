import { AuthForm } from "@/components/auth/auth-form";
import { motion } from "framer-motion";
import { FaSignInAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { FaLock } from "react-icons/fa";

export default function ResetPassPage() {
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
        </div>
        <AuthForm view="reset-pass" />
      </motion.div>
    </div>
  );
}

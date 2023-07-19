"use client";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { ModeToggle } from "./ui/mode-toggle";
import { usePathname, useRouter } from "next/navigation";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const supabaseClient = useSupabaseClient();
  const pathname = usePathname();
  const router = useRouter();
  const handleLogOut = async () => {
    const { error } = await supabaseClient.auth.signOut();
    if (error) {
      toast.error(error.message);
    } else {
      router.push("/signin");
    }
  };
  const showLogOut = pathname === "/";
  return (
    <>
      {showLogOut ? (
        <div
          onClick={handleLogOut}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute left-4 top-4 md:left-8 md:top-8 cursor-pointer"
          )}
        >
          Log out
        </div>
      ) : (
        <div></div>
      )}
      <div className={"absolute right-4 top-4 md:right-8 md:top-8"}>
        <ModeToggle />
      </div>
    </>
  );
};

export default Navbar;

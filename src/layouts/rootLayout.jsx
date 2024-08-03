import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { Link, Outlet } from "react-router-dom";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

function RootLayout() {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <div className="flex flex-col px-16 py-4 h-[100vh] bg-background-dark text-white/90">
        <header className="flex items-center justify-between ">
          <Link to="/">AI</Link>
          <div>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </header>
        <main className="flex-1 overflow-hidden">
          <Outlet />
        </main>
      </div>
    </ClerkProvider>
  );
}

export default RootLayout;

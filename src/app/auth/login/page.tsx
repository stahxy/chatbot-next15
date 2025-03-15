"use client";

import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsConfig from "@/config/amplify-config";
import { useRouter } from "next/navigation";

Amplify.configure(awsConfig);

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center h-dvh">
      <Authenticator>
        {({ signOut, user }) => (
          <main>
            <h1>Welcome, {user?.username}!</h1>
            {signOut && (
              <button
                onClick={() => {
                  signOut();
                  router.push("auth/login");
                }}
              >
                Sign Out
              </button>
            )}
          </main>
        )}
      </Authenticator>
    </div>
  );
}

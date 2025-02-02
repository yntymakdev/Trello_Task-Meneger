"use client";
import { OrganizationProfile } from "@clerk/nextjs";
import { useEffect, useState } from "react";

export default function SettingsPage() {
  const [organizationId, setOrganizationId] = useState<string | null>(null);

  useEffect(() => {
    const cookieValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith("organizationId="))
      ?.split("=")[1];

    if (cookieValue) {
      setOrganizationId(cookieValue);
    }
  }, []);

  return (
    <div className="w-full">
      {organizationId && (
        <OrganizationProfile
          appearance={{
            elements: {
              rootBox: { boxShadow: "none", width: "100%" },
              card: {
                border: "1px solid #e5e5e5",
                boxShadow: "none",
                width: "100%",
              },
            },
          }}
        />
      )}
    </div>
  );
}

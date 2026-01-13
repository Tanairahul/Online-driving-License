import React, { useState } from "react";
import AuthPopup from "./AuthPopup";
import LearnerLicense from "./LearnerLicense";

export default function App() {
  const [loggedInEmail, setLoggedInEmail] = useState(null);

  return (
    <div>
      {!loggedInEmail && (
        <AuthPopup onAuthSuccess={(email) => setLoggedInEmail(email)} />
      )}

      {loggedInEmail && (
        <LearnerLicense userEmail={loggedInEmail} />
      )}
    </div>
  );
}

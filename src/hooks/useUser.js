import { useState, useEffect } from "react";
import { getAuthenticatedUser } from "../utils/common";
import { APP_ROUTES } from "../utils/constants";
import { useNavigate } from "react-router-dom";

export function useUser() {
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function getUserDetails() {
      const { authenticated, user } = await getAuthenticatedUser();
      setAuthenticated(authenticated);
      if (authenticated) {
        setUser(user);
      } else {
        const currentPath = window.location.pathname;
        if (requiresAuth(currentPath)) {
          navigate(APP_ROUTES.SIGN_IN);
        }
      }
    }

    getUserDetails();
  }, [navigate]);

  function requiresAuth(path) {
    return ![
      APP_ROUTES.LANDING_PAGE,
      APP_ROUTES.SIGN_UP,
      APP_ROUTES.SIGN_IN,
      APP_ROUTES.NOT_FOUND,
      APP_ROUTES.FORGOT_PASSWORD,
    ].includes(path);
  }

  return { user, authenticated };
}

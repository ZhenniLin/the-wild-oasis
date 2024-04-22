import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navitage = useNavigate();

  // 1. load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  // 2. if there is NO authenticated user, redirect to the /login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navitage("/login");
    },
    [isAuthenticated, isLoading, navitage]
  );

  // 3. while loading, show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // if (!isAuthenticated) navitage("/login");

  // 4. if there IS a user, render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;

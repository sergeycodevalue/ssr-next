import { logoutAction } from "@/data/actions/auth-actions";

const LogoutButton = () => {
  return (
    <form action={logoutAction}>
      <button className="hover:text-primary" type="submit">
        Logout
      </button>
    </form>
  );
};

export default LogoutButton;

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { SignInPage } from "@pages/auth/signIn/signin-page";
import { SignUpPage } from "@pages/auth/signUp/signup-page";
import { PublicLayout } from "@widgets/layout/public-layout";
import { Layout } from "@widgets/layout/layout";
import { Players } from "@pages/players/players";
import { Teams } from "@pages/teams/teams";
import { TeamDetails } from "@pages/teams/teamDetails/teamDetails";
import { Team } from "@pages/teams/team/team";
import { Player } from "@pages/players/player/player";
import { PlayerDetails } from "@pages/players/playerDetails/playerDetails";
import { ErrorPage } from "@pages/error/error-page";

export const ROUTES = {
  Teams: "/teams",
  Team: `/team/:id?`,
  TeamDetails: `/team-details/:id`,
  Players: "/players",
  Player: `/player/:id?`,
  PlayerDetails: `/player-details/:id`,
  SignIn: "/sign-in",
  SignUp: "/sign-up",
};

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {        
        Component: PublicLayout,
        children: [
          {
            path: ROUTES.SignIn,
            Component: SignInPage,
          },
          {
            path: ROUTES.SignUp,
            Component: SignUpPage,
          },
        ]
      },
      {
        path: '/',
        Component: Layout,
        children: [
          {
            path: ROUTES.Teams,
            Component: Teams
          },
          {
            path: ROUTES.Team,
            Component: Team
          },
          {
            path: ROUTES.TeamDetails,
            Component: TeamDetails
          },
          {
            path: ROUTES.Players,
            Component: Players
          },
          {
            path: ROUTES.Player,
            Component: Player
          },
          {
            path: ROUTES.PlayerDetails,
            Component: PlayerDetails
          },
        ]
      }
    ],
  },
  {
		path: '*',
		Component: ErrorPage,
	},
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};

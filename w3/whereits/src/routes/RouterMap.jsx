import Events from "../Events";
import Buy from "../Buy";
import Tickets from "../Tickets";

export const routes = [
  {
    path: "/",
    element: <Events />,
  },
  {
    path: "/Buy",
    element: <Buy />,
  },
  {
    path: "/Tickets",
    element: <Tickets />,
  },
];

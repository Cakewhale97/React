import MemeGenerator from "./MemeGenerator";
import MemeList from './MemeList';
import Contact from './Contact';

export const routes = [
  {
    path: '/',
    element: <MemeGenerator />,
  },
  {
    path: '/MemeList',
    element: <MemeList />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
];
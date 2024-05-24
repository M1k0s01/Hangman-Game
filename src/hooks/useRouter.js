import { useRoutes } from "react-router-dom";
import routes from '../routes';

export const useRouter = () => {
    const pagesRoutes = useRoutes([...routes]);
    return pagesRoutes;
};

import useSetState from "react-use/lib/useSetState";
import { createContainer } from "unstated-next";

interface AppState {
  drawer: boolean;
}

const useAppState = () => {
  const [appState, setAppState] = useSetState<AppState>();

  const toggleDrawer = (toggle: boolean) => setAppState({ drawer: toggle });

  return {
    appState,
    toggleDrawer,
  };
};

export const AppContainer = createContainer(useAppState);

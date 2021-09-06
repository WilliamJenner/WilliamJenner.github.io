import React from "react";
import { useSetState } from "react-use";

interface ITabProps {
  tabs: Array<{
    tabContent: React.ReactNode;
    title: string;
  }>;
}

const Tabs: React.FC<ITabProps> = (props) => {
  const [state, setState] = useSetState<{ activeTab: string }>({
    activeTab: props.tabs[0]?.title,
  });
  return (
    <>
      <menu role="tablist">
        {props.tabs.map((tab) => (
          <button
            onClick={() => setState({ activeTab: tab.title })}
            aria-controls={tab.title}
          >
            {tab.title}
          </button>
        ))}
      </menu>
      {props.tabs.find((tab) => tab.title === state.activeTab)?.tabContent}
    </>
  );
};

export default Tabs;

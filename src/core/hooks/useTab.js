import { useState } from "react";
import { ButtonTab } from "@common/styledTab";

export const useTab = (tabs) => {
  const initialActivTabs = tabs.map((_, index) => index === 0);
  const [activTabs, setActivTabs] = useState(initialActivTabs);

  const changeActivTab = (tabIndex) => {
    setActivTabs(
      activTabs.map((_, index) => (index === tabIndex ? true : false))
    );
  };

  const renderTab = () => {
    return tabs.map((tab, index) => (
      <ButtonTab
        key={index}
        type="button"
        $active={activTabs[index]}
        onClick={() => {
          tab.action();
          changeActivTab(index);
        }}
        disabled={tab.disabled}
      >
        {tab.text}
      </ButtonTab>
    ));
  };

  return { renderTab };
};

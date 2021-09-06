import React from "react";
import { ListItem } from "../../types/treeItem";

interface ITreeViewProps {
  treeItems: Array<ListItem>;
}

const TreeView: React.FC<ITreeViewProps> = (props) => {
  const mapTreeItem = (items: ListItem[]) =>
    items.map((item) => {
      if (Array.isArray(item.li)) {
        return <li>{mapTreeItem(item.li)}</li>;
      } else if (typeof item.li === "string") {
        return <li>{item.li as string}</li>;
      } else {
        return (
          <details>
            <summary>{item.li.summary}</summary>
            <ul>{mapTreeItem(item.li.child)}</ul>
          </details>
        );
      }
    });

  return (
    <>
      <ul className="tree-view">{mapTreeItem(props.treeItems)}</ul>
    </>
  );
};

export { TreeView };

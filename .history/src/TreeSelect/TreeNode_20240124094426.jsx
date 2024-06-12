import React from "react";
import Tree from "./Tree";

export default function TreeNode({ treeData }) {
  return (
    <li>
      <span className="item-wrapper">
        {treeData?.children && "down"}
        <label
          className="checkbox-custom"
          htmlFor={`checkbox${treeData.id}`}
        ></label>
        <input
          type="checkbox"
          id={`checkbox${treeData.id}`}
          checked={treeData.checked}
          onChange={() => {}}
        />
        <span>{treeData.title}</span>
      </span>
      <ul className="ml-20">
        {treeData?.children && <Tree treeData={treeData.children} />}
      </ul>
    </li>
  );
}

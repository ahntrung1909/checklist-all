import React from "react";
import Tree from "./Tree";

export default function TreeNode({ node, handleChangeData }) {
  const handleCheck = (e) => {
    console.log("checked");
  };
  return (
    <li>
      <span className="item-wrapper">
        {node?.children && "down"}
        <label
          className="checkbox-custom"
          htmlFor={`checkbox${node.id}`}
        ></label>
        <input
          type="checkbox"
          id={`checkbox${node.id}`}
          checked={node.checked}
          onChange={handleCheck}
        />
        <span>{node.title}</span>
      </span>
      <ul className="ml-20">
        {node?.children && (
          <Tree treeData={node.children} handleChangeData={handleChangeData} />
        )}
      </ul>
    </li>
  );
}

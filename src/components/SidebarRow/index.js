import React from "react";

// local files
import "./index.scss";

/**
 * present each row in the Sidebar component
 *
 * @param {Boolean} selected
 * @param {String} title
 * @param {Object} Icon => material-ui icon
 */
function SidebarRow({ selected, title, Icon }) {
  return (
    <div className={`sidebarRow ${selected && "selected"}`}>
      <Icon className="sidebarRow__icon" />
      <h2 className="sidebarRow__title">{title}</h2>
    </div>
  );
}

export default SidebarRow;

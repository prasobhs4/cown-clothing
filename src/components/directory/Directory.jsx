import React from "react";
import MenuItem from "../menuitem/MenuItem.jsx";
import "./directory.css";
import { connect } from "react-redux";
import { sectionSelectorItems } from "../Redux/Section/sectionSelector";
import { createStructuredSelector } from "reselect";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, imageUrl, title, size, linkUrl }) => (
        <MenuItem
          key={id}
          imageUrl={imageUrl}
          title={title}
          size={size}
          linkUrl={linkUrl}
        />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: sectionSelectorItems,
});

export default connect(mapStateToProps)(Directory);

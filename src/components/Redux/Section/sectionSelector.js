import { createSelector } from "reselect";

const sectionSelector = (state) => state.sections;

export const sectionSelectorItems = createSelector(
  [sectionSelector],
  (sections) => sections
);

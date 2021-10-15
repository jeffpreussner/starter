import React from "react";

import { StandardPromo } from "./StandardPromo";

export default {
  title: "Components/StandardPromo",
  component: StandardPromo,
};

const Template = (args) => <StandardPromo {...args} />;
export const Default = Template.bind({});
Default.args = {};

import React from "react";

import { Image } from "./Image";

export default {
  title: "Components/Image",
  component: Image,
};

const Template = (args) => <Image {...args} />;
export const Default = Template.bind({});
Default.args = {};

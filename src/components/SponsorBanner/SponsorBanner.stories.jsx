import React from "react";

import { SponsorBanner } from "./SponsorBanner";

export default {
  title: "Components/SponsorBanner",
  component: SponsorBanner,
};

const Template = (args) => <SponsorBanner {...args} />;
export const Default = Template.bind({});
Default.args = {};

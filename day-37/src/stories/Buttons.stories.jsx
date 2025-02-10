import React from "react";
import Button from "../components/Button";

export default {
  title: "Button",
  component: Button,
  argTypes: { handleClick: { action: "handleClick" } },
};

export const Primary = () => (
  <Button label="Primary Button" backgroundColor="skyblue" color="black" />
);
export const Secondary = () => <Button label="Secondary Button" />;

const Template = (args) => <Button {...args} />;
export const Red = Template.bind({});

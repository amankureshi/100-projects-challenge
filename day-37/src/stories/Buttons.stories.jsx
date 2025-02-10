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

Red.args = {
  backgroundColor: "red",
  label: "Click Me",
  size: "md",
  color: "white",
};

export const Green = Template.bind({});
Green.args = {
  backgroundColor: "rebeccapurple",
  label: "Click Me",
  size: "md",
  color: "white",
};

export const Small = Template.bind({});
Small.args = {
  backgroundColor: "yellow",
  label: "Click Me",
  size: "sm",
};

export const Large = Template.bind({});
Large.args = {
  backgroundColor: "green",
  label: "Click Me",
  size: "lg",
};

export const LongLabel = Template.bind({});
LongLabel.args = {
  backgroundColor: "pink",
  label: "Long lable last",
  size: "md",
  color: "black",
};

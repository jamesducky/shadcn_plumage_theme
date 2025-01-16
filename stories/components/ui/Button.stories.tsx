import { Button, ButtonProps } from "@/components/ui/button_old";
import type { Meta, StoryFn } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: { onClick: { action: "clicked" } },
};

export default meta;

const Template: StoryFn<typeof Button> = (args: ButtonProps) => (
  <Button {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Default Button",
};

// export const DestructiveSmall = Template.bind({});
// DestructiveSmall.args = {
//   children: "Destructive Small",
//   variant: "destructive",
//   size: "sm",
// };

// export const Destructive = Template.bind({});
// Destructive.args = {
//   children: "Destructive Button",
//   variant: "destructive",
// };

// export const DestructiveLarge = Template.bind({});
// DestructiveLarge.args = {
//   children: "Destructive Large",
//   variant: "destructive",
//   size: "lg",
// };

// export const Outline = Template.bind({});
// Outline.args = {
//   children: "Outline Button",
//   variant: "outline",
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   children: "Secondary Button",
//   variant: "secondary",
// };

// export const Ghost = Template.bind({});
// Ghost.args = {
//   children: "Ghost Button",
//   variant: "ghost",
// };

// export const Link = Template.bind({});
// Link.args = {
//   children: "Link Button",
//   variant: "link",
// };

// // Size variations
// export const Small = Template.bind({});
// Small.args = {
//   children: "Small Button",
//   size: "sm",
// };

// export const Large = Template.bind({});
// Large.args = {
//   children: "Large Button",
//   size: "lg",
// };

// export const IconOnly = Template.bind({});
// IconOnly.args = {
//   children: "🚀", // Example icon representation
//   size: "icon",
// };

// export const StandOutFilled = Template.bind({});
// StandOutFilled.args = {
//   children: "StandOutFilled Button",
//   variant: "standoutFilled",
// };

// export const Warning = Template.bind({});
// Warning.args = {
//   children: "Warning Button",
//   variant: "waring",
// };

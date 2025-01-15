import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@components/ui/alert-dialog";
import { Button } from "@components/ui/button";
import type { Meta, StoryFn } from "@storybook/react";

const meta: Meta<typeof AlertDialog> = {
  title: "Components/AlertDialog",
  component: AlertDialog,
  argTypes: {},
};

export default meta;

const Template: StoryFn<typeof AlertDialog> = (args) => (
  <AlertDialog {...args}>
    <AlertDialogTrigger asChild>
      <Button>Open Alert Dialog</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Confirm Action</AlertDialogTitle>
        <AlertDialogDescription>
          Are you sure you want to perform this action? This action cannot be
          undone.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Confirm</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export const Default = Template.bind({});
Default.args = {};

export const WithCustomTrigger = Template.bind({});
WithCustomTrigger.args = {
  children: (
    <AlertDialogTrigger asChild>
      <Button variant="outline">Custom Trigger</Button>
    </AlertDialogTrigger>
  ),
};

export const Destructive = Template.bind({});
Destructive.args = {
  children: (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Delete Item</AlertDialogTitle>
        <AlertDialogDescription>
          This action is irreversible. Are you sure you want to delete this
          item?
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction variant="destructive">Delete</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  ),
};

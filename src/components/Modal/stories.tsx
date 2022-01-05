import React from "react";
import Modal from "./index";

export default {
  component: Modal,
  title: "Modal",
};

export const defaultModal = () => <Modal />;
defaultModal.story = {
  name: "default",
};

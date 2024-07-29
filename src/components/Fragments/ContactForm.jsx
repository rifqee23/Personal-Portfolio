import React, { useState } from "react";
import Label from "../Elements/Label";
import Button from "../Elements/Button";
import Input from "../Elements/Input";
import TextArea from "../Elements/Input/TextArea";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:rifqifebrianto746@gmail.com?subject=Message from ${name}&body=${message} (From: ${email})`;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-4 bg-gray-100 rounded shadow-md"
    >
      <div className="mb-4">
        <Label htFor="name">Name</Label>
        <Input
          id="name"
          type="text"
          value={name}
          onChanges={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <Label htFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChanges={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <Label htFor="message">Message</Label>
        <TextArea
          id="message"
          value={message}
          onChanges={(e) => setMessage(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-between">
        <Button
          type="submit"
          colors="bg-blue-500 hover:bg-blue-700"
          textColor="text-white"
          widths="w-full"
        >
          Send
        </Button>
      </div>
    </form>
  );
};
export default ContactForm;

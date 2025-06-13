"use client";
import { Bell } from "lucide-react"

import { FormEvent, useState } from "react";
import emailjs from "emailjs-com";

export default function AiPlanner() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS service and template details
    const serviceID = "service_e0wgx3l";      // From EmailJS dashboard
    const templateID = "template_lmqeltp";    // From EmailJS dashboard

    const templateParams = {
      name,
      email,
      message,
    };

    // Send the email
    emailjs
      .send(serviceID, templateID, templateParams, "qhu0T2Ri6axiBPTvf") // your user ID from EmailJS
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("Error sending email:", error.text);
          alert("There was an error sending the message.");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
        setName("");
        setEmail("");
        setMessage("");
      });
  };
  return (
    <div className="w-full h-full flex flex-col bg-white">
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-4">
        <div className="relative h-10 w-32 mb-4">
          <div className="font-bold text-2xl">
            Earth<span className="font-normal">Go</span> 🌎
          </div>
          <div className="text-xs text-gray-500">Explore. Connect. Experience.</div>
        </div>
      </div>

      <div className="text-center mb-4">
        <h2 className="text-4xl md:text-5xl font-bold">AI Planner</h2>
        <p className="text-gray-600 mt-2">Coming Soon</p>
      </div>
    </div>

    <div className="bg-blue-500 flex-1 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-white text-xl">Get notification on Email</h3>
        </div>

        <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 rounded-md"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Message"
              className="w-full p-3 rounded-md"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-100 transition-colors"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>)  
}

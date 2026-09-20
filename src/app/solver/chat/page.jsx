"use client";

import { useState } from "react";
import Link from "next/link";
import {
ArrowLeft,
CheckCircle2,
MoreVertical,
Paperclip,
Send,
} from "lucide-react";

export default function SolverChat() {
const [message, setMessage] = useState("");

const [messages, setMessages] = useState([
{
id: 1,
sender: "seeker",
text: "Hello! I am having an authentication problem in my Next.js project.",
time: "10:32 PM",
},
{
id: 2,
sender: "solver",
text: "Sure! Please send me the error message and the relevant code.",
time: "10:33 PM",
},
{
id: 3,
sender: "seeker",
text: "I am getting a session error after login.",
time: "10:35 PM",
},
{
id: 4,
sender: "solver",
text: "Okay. It looks like the session configuration may be the issue. Please show me your auth configuration.",
time: "10:36 PM",
},
]);

const handleSend = () => {

```
if (!message.trim()) return;

const newMessage = {
  id: Date.now(),
  sender: "solver",
  text: message,
  time: "Now",
};

setMessages((previous) => [
  ...previous,
  newMessage,
]);

setMessage("");
```

};

return ( <main className="min-h-screen bg-slate-100">


  <div className="mx-auto max-w-5xl px-4 py-8">

   
    <Link
      href="/solver/dashboard"
      className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-purple-600"
    >
      <ArrowLeft size={17} />
      Back to Dashboard
    </Link>


    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">


      <div className="flex items-center justify-between border-b bg-white p-5">

        <div className="flex items-center gap-4">

          <div className="relative">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 font-bold text-white">
              SJ
            </div>

            <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500" />

          </div>


          <div>

            <h1 className="font-bold text-slate-900">
              Sadia Jannat
            </h1>

            <p className="mt-0.5 text-sm text-green-500">
              Online
            </p>

          </div>

        </div>


        <button className="rounded-xl p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700">
          <MoreVertical size={20} />
        </button>

      </div>


      <div className="border-b bg-purple-50 px-6 py-5">

        <div className="flex items-start gap-3">

          <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
            💡
          </div>

          <div>

            <p className="text-xs font-bold tracking-wider text-purple-500">
              CURRENT PROBLEM
            </p>

            <h2 className="mt-1 font-bold text-purple-900">
              Next.js authentication issue
            </h2>

            <p className="mt-1 text-sm text-purple-700/70">
              Authentication and session problem in a Next.js project.
            </p>

          </div>

          <span className="ml-auto hidden rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-600 sm:block">
            Active
          </span>

        </div>

      </div>


      <div className="min-h-[500px] space-y-6 bg-slate-50 p-6">

        {messages.map((msg) => {

          const isSolver = msg.sender === "solver";

          return (
            <div
              key={msg.id}
              className={`flex ${
                isSolver
                  ? "justify-end"
                  : "justify-start"
              }`}
            >

              <div className="max-w-[80%]">

                <div
                  className={`px-5 py-3 text-sm leading-6 shadow-sm ${
                    isSolver
                      ? "rounded-2xl rounded-br-md bg-purple-600 text-white"
                      : "rounded-2xl rounded-bl-md border border-slate-200 bg-white text-slate-700"
                  }`}
                >
                  {msg.text}
                </div>

                <p
                  className={`mt-1 text-[11px] text-slate-400 ${
                    isSolver
                      ? "text-right"
                      : "text-left"
                  }`}
                >
                  {msg.time}
                </p>

              </div>

            </div>
          );
        })}

      </div>

      <div className="border-t bg-white p-4">

        <div className="flex items-center gap-3">

          <button
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-500 transition hover:bg-slate-200"
          >
            <Paperclip size={19} />
          </button>


          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSend();
              }
            }}
            placeholder="Type your solution..."
            className="h-11 flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
          />


          <button
            onClick={handleSend}
            className="flex h-11 items-center gap-2 rounded-xl bg-purple-600 px-5 font-semibold text-white transition hover:bg-purple-700"
          >
            <Send size={17} />

            <span className="hidden sm:inline">
              Send
            </span>

          </button>

        </div>

      </div>

    </div>


    <div className="mt-5 flex justify-end">

      <button className="flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-green-700">
        <CheckCircle2 size={18} />
        Mark Problem as Solved
      </button>

    </div>

  </div>

</main>

);
}

import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="grid h-[100vh] place-items-center bg-emerald-300">
      <form
        class="form"
        method="POST"
        name="contact"
        action=""
        data-netlify="true"
        className="flex flex-col gap-6"
        onSubmit={e=>e.preventDefault()}
      >
        <input type="text" name="name" placeholder="name" required />
        <input type="email" name="email" placeholder="email" />
        <button className="bg-slate-400 border-red-400">Submit</button>
      </form>
    </div>
  );
}

export default App;

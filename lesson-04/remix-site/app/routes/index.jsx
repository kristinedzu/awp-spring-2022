import LinkButton from "~/components/link.jsx";

export default function Home() {
  return (
    <div class="p-8">
      <h1 class="font-extrabold text-5xl mb-8">Focused on cooking <span class="text-lime-400">fundamentals </span> and <span class="text-blue-400">modern</span> techniques, you are simply going to <span class="text-fuchsia-400">create better dishes</span></h1>
     <LinkButton to="/recipes">Get started</LinkButton>
     </div>
  )}

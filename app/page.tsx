import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-full lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <Image src="/Jesse-1.svg" alt="jesse" width={40} height={40} />
          <h1 className="text-center lg:m-auto p-2">Jesse Beke</h1>
        </div>
        {/* for icons in nav */}
        <div className="flex flex-row gap-4">
          <p>icon</p>
          <p>icon</p>
          <p>icon</p>
        </div>
      </div>
      <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
        <span>
          <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
        </span>
        <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-800" />
        <span className="z-10 py-0.5 text-sm text-neutral-100">
          ✨ Read more about my new SaaS
        </span>
      </button>
      <h1 className="text-5xl font-semibold">I&apos;m Jesse</h1>
      <p className="w-[80%] lg:w-[50%] text-center text-[#6A6A6A]">
        I&apos;m a frontend engineer. I work with the React Ecosystem and I also
        create content around Javascript, React, Next JS and Typescript.
      </p>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <h1 className="mb-3 text-5xl font-semibold">Under construction 🚧</h1>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
    </main>
  );
}

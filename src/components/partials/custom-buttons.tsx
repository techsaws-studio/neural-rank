import { PropsWithChildren } from "react";

export const CustomButton01 = (props: PropsWithChildren) => {
  return (
    <button className="py-2 px-3 rounded-lg font-normal text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff] relative text-white font-heading">
      <div className="absolute inset-0">
        <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="rounded-lg border border-white/40 absolute inset-0 [mask-image:linear-gradient(to_top,black,transparent)]" />
        <div className="absolute inset-0 shadow-[0_0_10px_rgba(140,69,255,.7)_inset] rounded-lg" />
      </div>
      <span>{props.children}</span>
    </button>
  );
};

export const CustomButton02 = (props: PropsWithChildren) => {
  return (
    <button className="h-[50px] px-8 rounded-full font-normal text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff] relative text-white font-heading group">
      <div className="absolute inset-0">
        <div className="rounded-full border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="rounded-full border border-white/40 absolute inset-0 [mask-image:linear-gradient(to_top,black,transparent)]" />
        <div className="absolute inset-0 shadow-[0_0_10px_rgba(140,69,255,.7)_inset] rounded-full" />
      </div>
      <span className="flex-center gap-1">{props.children}</span>
    </button>
  );
};

export const CustomButton03 = (props: PropsWithChildren) => {
  return (
    <button className="h-[50px] px-8 rounded-full font-normal text-sm bg-gradient-to-b from-white/80 to-white shadow-[0px_0px_12px_#8c45ff] relative text-black font-heading group">
      <div className="absolute inset-0">
        <div className="rounded-full border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="rounded-full border border-white/40 absolute inset-0 [mask-image:linear-gradient(to_top,black,transparent)]" />
        <div className="absolute inset-0 shadow-[0_0_10px_rgba(140,69,255,.7)_inset] rounded-full" />
      </div>
      <span className="flex-center gap-1">{props.children}</span>
    </button>
  );
};

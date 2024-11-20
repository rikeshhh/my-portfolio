import { Linkedin,Facebook,Github  } from 'lucide-react';

import { Button } from "@/components/ui/button";

export default function HeroSection(){
    return <section className="h-[calc(100vh_-120px)] p-4 container rounded-lg shadow-lg w-full flex text-center relative flex-col justify-center items-center font-unbounded gap-6 bg-neutral-900">
       <div className="md:size-96 size-32 bg-center bg-no-repeat bg-cover user-profile border rounded-full">
       </div>
        <h2>I AM RIKESH SHRESTHA</h2>
        <p>Frontend Developer crafting responsive and user-friendly web experiences.</p>
        <p>Currently building beautiful interfaces at home.</p>
        <div className="left-0 flex items-end gap-4">
            <Linkedin />
            <Facebook />
            <Github  />
        </div>
        <Button variant="secondary" size="lg">Download cv</Button>
         </section>
}

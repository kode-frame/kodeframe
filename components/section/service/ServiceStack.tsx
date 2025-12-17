import { AnimatePresence } from "framer-motion";
import { ServiceCard } from "./ServiceCard";
import { STACK_STATES } from "./stack";
import { ServiceProps } from "./types";

interface ServiceStackProps {
  services: ServiceProps[];
  activeIndex: number;
}

export function ServiceStack({ services, activeIndex }: ServiceStackProps) {
  return (
    <AnimatePresence>
      {services.map((service: any, i: number) => {
        const offset = (i - activeIndex + services.length) % services.length;
        const state = STACK_STATES[offset];

        if (!state) return null;

        return (
          <ServiceCard 
            key={service.id}
            service={service}
            motionProps={state}
            style={{ filter: `blur(${state.blur}px)` }}
          />
        );
      })}
    </AnimatePresence>
  );
}
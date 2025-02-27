import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

function PricingCard({ title, monthlyPrice, buttonText, popular, inverse, features }: { title: string, monthlyPrice: number, buttonText: string, popular: boolean, inverse: boolean, features: string[] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
      });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      className={twMerge(
        "card",
        inverse && "border-black bg-black text-white"
      )}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
    >
      <div className="flex justify-between">
        <h3
          className={twMerge(
            "text-lg font-bold text-black/50",
            inverse && "text-white/60"
          )}
        >
          {title}
        </h3>

        {popular && (
          <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
            <span className="bg-rainbow-gradient text-transparent bg-clip-text font-medium">
              Popular
            </span>
          </div>
        )}
      </div>

      <div className="flex items-baseline gap-1">
        <span className="text-4xl font-bold tracking-tighter leading-none">
          ${monthlyPrice}
        </span>
        <span
          className={twMerge(
            "tracking-tight font-bold text-black/50",
            inverse && "text-white/60"
          )}
        >
          /month
        </span>
      </div>

      <button
        className={twMerge(
          "btn btn-primary w-full mt-[30px]",
          inverse && "bg-white text-black"
        )}
      >
        {buttonText}
      </button>

      <ul className="flex flex-col gap-5 mt-8">
        {features.map((feature: string) => (
          <li key={feature} className="text-sm flex items-center gap-4">
            <CheckIcon className="h-6 w-6" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Pricing() {
  return (
    <section className="py-24 bg-gradient-to-t from-[#FFF] to-[#D2DCFF]">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">
            Pricing
          </h2>
          <p className="section-description mt-5">
            Free Forever. Upgrade for unlimited tasks, better security, and exclusive features.
          </p>
        </div>

        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.title} {...tier} />
          ))}
        </div>
      </div>
    </section>
  );
}

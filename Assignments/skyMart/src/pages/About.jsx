import React from "react";

import {
  Zap,
  Package,
  Users,
  Star,
  Truck,
  ShieldCheck,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router";

const stats = [
  { icon: Package, value: "20K+", label: "Products" },
  { icon: Users, value: "50K+", label: "Happy Customers" },
  { icon: Star, value: "4.9", label: "Avg. Rating" },
  { icon: Truck, value: "99%", label: "On-time Delivery" },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Trust",
    description:
      "Every product is verified for quality and authenticity before listing.",
  },
  {
    icon: Truck,
    title: "Speed",
    description:
      "We partner with trusted delivery services to get your orders on time.",
  },
  {
    icon: HeartHandshake,
    title: "Customer First",
    description:
      "Our customers are at the center of everything we do and every decision we make.",
  },
  {
    icon: Star,
    title: "Quality",
    description:
      "We carefully curate products that offer the best value and experience.",
  },
];

const team = [
  {
    initial: "A",
    name: "Aryan Saini",
    role: "Founder & CEO",
    color: "bg-lime-400 text-black",
  },
  {
    initial: "P",
    name: "Priya Mehta",
    role: "Head of Product",
    color: "bg-blue-500",
  },
  {
    initial: "R",
    name: "Rohan Verma",
    role: "Lead Engineer",
    color: "bg-purple-500",
  },
  {
    initial: "S",
    name: "Sneha Kapoor",
    role: "Design Director",
    color: "bg-pink-500",
  },
];

const About = () => {
  return (
    <section className="bg-[#0d0d0d] text-white">
      <div className="mx-auto max-w-6xl space-y-20 px-6 py-20">
        {/* Hero */}
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-18 w-18 animate-[float_2.5s_ease-in-out_infinite] items-center justify-center rounded-3xl bg-lime-400">
            <Zap className="h-9 w-9 fill-black text-black" />
          </div>

          <h1 className="text-5xl font-bold">
            About <span className="text-lime-400">SkyMart</span>
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-neutral-400">
            SkyMart is a next-generation e-commerce platform built to make
            online shopping fast, fair, and enjoyable — for everyone.
          </p>
        </div>

        {/* Stats */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-2xl border border-white bg-white/3 p-6 text-center transition hover:border-lime-400/40 hover:bg-white/4"
              >
                <Icon className="mx-auto mb-2 h-6 w-6 text-lime-400" />

                <h3 className="text-2xl font-bold">{item.value}</h3>

                <p className="text-sm text-neutral-400">{item.label}</p>
              </div>
            );
          })}
        </div>

        {/* Story */}
        <div className="rounded-3xl border border-white bg-white/3 p-10">
          <h2 className="mb-6 text-3xl font-semibold text-white">Our Story</h2>

          <div className="space-y-3 leading-8 text-neutral-400">
            <p className="text-base/6">
              SkyMart started in 2022 as a small side project — two engineers
              tired of bloated, slow e-commerce experiences. We asked ourselves:
              what if shopping online was actually enjoyable?
            </p>

            <p className="text-base/6">
              Three years later, SkyMart serves over 50,000 customers across the
              country. We stock electronics, fashion, jewelry, and everyday
              essentials — all at prices that don't require a second mortgage.
            </p>

            <p className="text-base/6">
              We're still the same team at heart: obsessed with speed,
              transparency, and making you feel good about every purchase you
              make here.
            </p>
          </div>
        </div>

        {/* Values */}
        <div>
          <h2 className="mb-8 text-center text-3xl font-bold">
            What We Stand For
          </h2>

          <div className="grid gap-5 md:grid-cols-2">
            {values.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex gap-5 rounded-2xl border border-white bg-white/3 p-6 transition hover:border-lime-400/40 hover:bg-white/4"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-lime-400/10">
                    <Icon className="h-7 w-7 text-lime-400" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>

                    <p className="mt-2 text-neutral-400">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div>
          <h2 className="mb-8 text-center text-3xl font-bold">Meet the Team</h2>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white bg-white/3 p-6 text-center transition hover:border-lime-400/40 hover:bg-white/4"
              >
                <div
                  className={`mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl text-xl font-bold ${member.color}`}
                >
                  {member.initial}
                </div>

                <h3 className="text-lg font-semibold">{member.name}</h3>

                <p className="text-sm text-neutral-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-3xl border border-lime-400/20 px-6 py-10 text-center">
          <h2 className="text-2xl font-semibold">Ready to shop?</h2>

          <p className="mx-auto mt-4 max-w-xl text-neutral-400">
            Explore thousands of products at unbeatable prices..
          </p>

          <Link
            to="/shop"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-lime-400 px-10 py-3 font-semibold text-black transition hover:scale-105 hover:bg-lime-300"
          >
            Browse Products
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;

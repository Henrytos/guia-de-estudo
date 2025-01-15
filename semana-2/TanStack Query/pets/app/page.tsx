"use client";

import { authenticate } from "@/api/authenticate";
import { fetchPets } from "@/api/fetch-pets";
import { useMutation, useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { FormEvent, useState } from "react";

export default function Home() {
  const { data, isPending, isError } = useQuery({
    queryKey: ["pets"],
    queryFn: () => fetchPets({}),
  });

  const { mutate } = useMutation({
    mutationFn: authenticate,
    onSuccess: () => {
      console.log("sucesso");
    },
    onError: () => {
      console.log("error");
    },
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(window.Storage);

  const submitForm = (ev: FormEvent) => {
    ev.preventDefault();
    mutate({ email, password });
  };
  return (
    <main className="bg-zinc-900 text-zinc-100 w-full min-h-svh px-10 py-20 ">
      <div className="max-w-6xl m-auto">
        <h1 className="text-2xl font-semibold before:h-6 before:w-1 before:bg-zinc-100 before:block before:absolute before:left-0 before:top-1 relative pl-3 pb-5">
          Pets
        </h1>

        <form onSubmit={submitForm} className=" space-x-2">
          <input
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="example@gmai.com"
            className="border-1 border-solid border-zinc-100 bg-zinc-900 text-zinc-300 font-light text-sm "
          />

          <input
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="password"
            className="border-1 border-solid border-zinc-100 bg-zinc-900 text-zinc-300 font-light text-sm "
          />

          <button>enviar </button>
        </form>

        <hr className="mb-10" />

        {isPending && <p> carregando </p>}

        {isError && <p> algo deu de errado</p>}

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {data?.pets &&
            data?.pets.map((pet) => (
              <div
                key={pet.id}
                className="bg-zinc-800 rounded-xl  p-3 col-span-1"
              >
                <Image
                  src={pet.image_url[0]}
                  alt={`foto de ${pet.name}`}
                  width={200}
                  height={200}
                  quality={100}
                  className="w-full h-52 object-cover mb-4 rounded-t"
                />

                <h2 className="font-medium text-xl text-white">{pet.name}</h2>

                <p className="text-zinc-400 font-light text-sm">{pet.about}</p>
              </div>
            ))}
        </section>
      </div>
    </main>
  );
}

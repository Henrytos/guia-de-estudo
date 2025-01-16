"use client";
import { fetchPets } from "@/api/fetch-pets";
import { FormSingIn } from "@/components/form-sing-ing";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

export default function Home() {
  const { data, isPending, isError } = useQuery({
    queryKey: ["pets"],
    queryFn: () => fetchPets({}),
  });

  return (
    <main className="bg-zinc-900 text-zinc-100 w-full min-h-svh px-10 py-20 ">
      <div className="max-w-6xl m-auto">
        <h1 className="text-2xl font-semibold before:h-6 before:w-1 before:bg-zinc-100 before:block before:absolute before:left-0 before:top-1 relative pl-3 pb-5">
          Pets
        </h1>
        <FormSingIn />
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

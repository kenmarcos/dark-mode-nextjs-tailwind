import { Button } from "@/components/Button";

export default function Home() {
  return (
    <section className="max-w-6xl mx-auto mt-16 text-center">
      <h1 className="text-7xl font-bold">
        Olá, eu sou o <span className="dark:text-purple-600">Marcos</span>!
      </h1>

      <h3 className="text-3xl mt-8">Eu sou um Desenvolvedor Front-End</h3>

      <p className="mb-8 max-w-lg mx-auto mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        quibusdam autem doloremque beatae iure, nihil fugit doloribus cum soluta
        modi!
      </p>

      <Button className="bg-blue-400 dark:bg-purple-600 text-white font-bold">
        Meu currículo
      </Button>
    </section>
  );
}

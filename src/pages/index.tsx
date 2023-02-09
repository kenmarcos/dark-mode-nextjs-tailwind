import { Button } from "@/components/Button";

export default function Home() {
  return (
    <section className="mt-16">
      <h1>
        Olá, eu sou o <span>Marcos</span>
      </h1>
      <h3>Eu sou um Desenvolvedor Front-End</h3>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        quibusdam autem doloremque beatae iure, nihil fugit doloribus cum soluta
        modi!
      </p>

      <Button>Meu currículo</Button>
    </section>
  );
}

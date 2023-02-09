export const Footer = () => {
  return (
    <footer className="py-6">
      <div className="max-w-6xl mx-auto flex justify-center">
        <span className="mr-2">Marcos Kenji Kuribayashi</span> &copy;{" "}
        {new Date().getFullYear()} - Todos os direitos reservados
      </div>
    </footer>
  );
};

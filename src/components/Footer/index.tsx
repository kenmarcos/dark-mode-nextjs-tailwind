export const Footer = () => {
  return (
    <footer className="py-6 border-t-2 border-gray-900 dark:border-gray-200 bg-gray-200 dark:bg-black">
      <div className="max-w-6xl mx-auto flex justify-center">
        <span className="mr-2 font-bold dark:text-purple-600">
          Marcos Kenji Kuribayashi
        </span>{" "}
        &copy; {new Date().getFullYear()} - Todos os direitos reservados
      </div>
    </footer>
  );
};

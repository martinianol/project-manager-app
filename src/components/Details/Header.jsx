const Header = ({ project, onDelete }) => {
  const { title, date, description } = project;

  return (
    <header className="pb-4 mb-4 border-b-2 border-stone-300">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-stone-600 mb-2">{title}</h1>
        <button
          onClick={() => onDelete(title)}
          className="text-stone-600 hover:text-stone-950"
        >
          Delete
        </button>
      </div>
      <p className="mb-4 text-stone-400">{date}</p>
      <p className="text-stone-600 whitespace-pre-wrap">{description}</p>
    </header>
  );
};

export default Header;

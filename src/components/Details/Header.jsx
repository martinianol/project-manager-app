const Header = ({ project, onDelete }) => {
  const { title, date, description, id } = project;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: "numeric",
    month: "short",
    day: "numeric"
  })
  return (
    <header className="pb-4 mb-4 border-b-2 border-stone-300">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-stone-600 mb-2">{title}</h1>
        <button
          onClick={() => onDelete(id)}
          className="text-stone-600 hover:text-red-500"
        >
          Delete
        </button>
      </div>
      <p className="mb-4 text-stone-400">{formattedDate}</p>
      <p className="text-stone-600 whitespace-pre-wrap">{description}</p>
    </header>
  );
};

export default Header;

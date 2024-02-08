const NoteCard = () => {
  return (
    <button className="rounded-md text-left bg-slate-800 p-5 space-y-3 overflow-hidden relative hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400 outline-none">
      <span className="text-sm font-medium text-slate-300">há 4 dias</span>
      <p className="text-sm leading-6 text-slate-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
        mollitia officia nobis. Vel, delectus. Ratione quia neque ipsum fuga
        tempore sequi asperiores, numquam natus, facilis saepe, delectus
        distinctio. Cupiditate, harum! Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Temporibus quis magni dolor dicta aliquam quidem nam
        obcaecati fuga consequuntur repellendus eligendi ratione in non
        voluptates, adipisci explicabo dolorem id quo?
      </p>
      <div className="absolute bottom-0 right-0 left-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
    </button>
  );
};

export default NoteCard;
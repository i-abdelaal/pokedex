import { Button } from "../../ui/components/Button";

export const PokemonDetailsPage = () => {
  return (
    <div className="bg-gradient-to-tl from-pink-100 to-violet-100 min-h-screen p-4">
      <Button variant="outlined" color="primary" size="small" className="bg-white text-black border-none rounded-md border-none mx-1 text-sm font-bold">
        <span className="text-sm flex justify-center items-center gap-2">
          <span className="icon-arrow-left" />
          <p>Back to list</p>
        </span>
      </Button>
    </div>
  );
};

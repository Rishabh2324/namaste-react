import { LoadingCard } from "./ResturantCard";

const LoadingScreen = () => {
  return (
    <>
      {[1, 2, 3, 4].map((el) => (
        <LoadingCard key={el} />
      ))}
    </>
  );
};

export default LoadingScreen;

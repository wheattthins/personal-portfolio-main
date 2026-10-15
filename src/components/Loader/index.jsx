// Pac-Man page-transition loader; markup matches what loaders.css expects
const Loader = () => (
  <div className="loader loader-active">
    <div className="loader-inner pacman">
      {Array.from({ length: 5 }, (_, i) => (
        <div key={i} />
      ))}
    </div>
  </div>
)

export default Loader

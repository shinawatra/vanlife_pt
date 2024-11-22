import { useOutletContext } from 'react-router-dom';

export default function Photo() {
  const van = useOutletContext();
  return (
    <div className="photo-box">
      <img src={van.imgUrl} />
    </div>
  );
}

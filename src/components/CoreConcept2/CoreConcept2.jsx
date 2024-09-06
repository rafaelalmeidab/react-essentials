import "../CoreConcept/CoreConcept.css";

export default function CoreConcept2({image, title, description}) {
  return (
    <li>
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
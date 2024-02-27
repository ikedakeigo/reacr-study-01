export default function FancyText({title, text}) {
  return title
  ? <h1 className="'fancy title">{text}</h1> // true
  : <h3 className="'fancy cursive">{text}</h3> // false
}

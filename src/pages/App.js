import { useState } from "react";

export default function Form() {
  const [person, setPerson] = useState({
    name: '太郎',
    artwork: {
      title: '花',
      city: '油絵',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }
  });


  function handleNameChange(e){
    setPerson({
      ...person,
      name: e.target.value
    });
  }

  function handleTitleChange(e){
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value
      }
    });
  }

  function handleImageChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value
      }
    });
  }

  return (
    <>
    <label htmlFor="">
      名前
      <input
      value={person.name}
      onChange={handleNameChange}
      />
    </label>
    <label htmlFor="">
      作品
      <input
      value={person.artwork.title}
      onChange={handleTitleChange}
      />
    </label>
    <label htmlFor="">
      画像
      <input
      value={person.artwork.image}
      onChange={handleImageChange}
      />
    </label>
    <p>
      <i>{person.artwork.title}</i>
      {'by '}
      {person.name}
      <br />
      (located in {person.artwork.city})
    </p>
    <img
      src={person.artwork.image}
      alt={person.artwork.title}
    />
    </>
  )

}

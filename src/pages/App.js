import { useState } from 'react';

export default function FeedbackForm() {
  const [isChecked, setIsChecked] = useState(false);

  function handleClick(e) {
    setIsChecked(!isChecked);
  }

  return (
    <section>
      <label>
        <input type="checkbox" checked={isChecked} onClick={handleClick} />
        Like
      </label>
      <p>{isChecked && 'チェックしました'}</p>
    </section>
  );
}

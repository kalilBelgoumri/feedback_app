import { useState } from "react";

export default function RatingSelect({select}) {
  const [selected, setSelected] = useState(5);

  const handleChange = (e) => {
    setSelected(+e.currentTarget.value);
    select(selected);
  };

  return (
    <ul className="rating">
      <li>
        <input
          value='1'
          onChange={handleChange}
          checked={selected === 1}
          type="radio"
          name="rating"
          id="num1"
        />
        <label htmlFor="num1"></label>
      </li>
      <li>
        <input
          value="2"
          onChange={handleChange}
          checked={selected === 2}
          type="radio"
          name="rating"
          id="num2"
        />
        <label htmlFor="num2"></label>
      </li>
      <li>
        <input
          value="3"
          onChange={handleChange}
          checked={selected === 3}
          type="radio"
          name="rating"
          id="num3"
        />
        <label htmlFor="num3"></label>
      </li>
      <li>
        <input
          value="4"
          onChange={handleChange}
          checked={selected === 4}
          type="radio"
          name="rating"
          id="num4"
        />
        <label htmlFor="num4"></label>
      </li>
      <li>
        <input
          value="5"
          onChange={handleChange}
          checked={selected === 5}
          type="radio"
          name="rating"
          id="num5"
        />
        <label htmlFor="num5"></label>
      </li>
      <li>
        <input
          value="6"
          onChange={handleChange}
          checked={selected === 6}
          type="radio"
          name="rating"
          id="num6"
        />
        <label htmlFor="num6"></label>
      </li>
      <li>
        <input
          value="7"
          onChange={handleChange}
          checked={selected === 7}
          type="radio"
          name="rating"
          id="num7"
        />
        <label htmlFor="num7"></label>
      </li>
      <li>
        <input
          value="8"
          onChange={handleChange}
          checked={selected === 8}
          type="radio"
          name="rating"
          id="num8"
        />
        <label htmlFor="num8"></label>
      </li>
      <li>
        <input
          value="9"
          onChange={handleChange}
          checked={selected === 9}
          type="radio"
          name="rating"
          id="num9"
        />
        <label htmlFor="num9"></label>
      </li>
      <li>
        <input
          value="10"
          onChange={handleChange}
          checked={selected === 10}
          type="radio"
          name="rating"
          id="num10"
        />
        <label htmlFor="num10"></label>
      </li>
    </ul>
  );
}

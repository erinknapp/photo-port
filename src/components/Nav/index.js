import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    currentCategory,
    setContactSelected
  } = props;

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera"> 📸</span> Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
<<<<<<< HEAD
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
=======
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
          <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>
          <li className={"mx-2"}>
          <span onClick={() => setContactSelected(true)}>Contact</span>
>>>>>>> 5f93d7e7ea934b15cdff0807dae05aca8cc19394
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${
<<<<<<< HEAD
                currentCategory.name === category.name && !contactSelected && 'navActive'
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
=======
              currentCategory.name === category.name && !contactSelected && `navActive`
            }`}
              key={category.name}
            >
              <span onClick={() => {
                setCurrentCategory(category);
                setContactSelected(false);
              }}
>>>>>>> 5f93d7e7ea934b15cdff0807dae05aca8cc19394
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;

import css from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <div>
      <p className={css.title}>{title}</p>
      {children}
    </div>
  );
};

export default Section;

import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <button
          type="button"
          onClick={() => onLeaveFeedback(option)}
          name={option}
          className={css.button}
          key={option}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;

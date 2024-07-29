import css from './ErrorMessage.module.css'


const ErrorMessage = ({ error }) => {
  if (!error) {
    return null;
  }

  return (
    <div className={css.message}>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
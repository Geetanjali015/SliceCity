import PropTypes from 'prop-types';
const Button = ({ title }) => {
    return (
      <button className=" text-black bg-yellow-400 font-semibold px-5 py-2 rounded-md hover:bg-yellow-300 transition duration-200 ease-linear">
        {title}
      </button>
    );
  };
  Button.propTypes = {
    title: PropTypes.string.isRequired, // Define the type and make it required
  };
  export default Button;
const Card = ({ children }) => {
  return (
    <div className='bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 min-h-screen flex items-center justify-center'>
      <div className='bg-white bg-opacity-20 rounded-2xl p-8 backdrop-filter backdrop-blur-lg shadow-lg max-w-md w-full'>
        {children}
      </div>
    </div>
  );
};

export default Card;

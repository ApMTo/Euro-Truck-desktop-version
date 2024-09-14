const checkInputValue = (...args) => {
    return args.every(input => input.trim() !== '');
};


export default checkInputValue;
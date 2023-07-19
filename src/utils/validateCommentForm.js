export const validateCommentForm = (values) =>{
    const errors = {};
    const {rating,author} = values;

    if(!rating){
        errors.rating='Required';
    }

    if(author.length < 2){
        errors.author = 'Must be atleast 2 charcters';
    }else if(author.length > 15){
        errors.author='Must be 15 characters or less.';
    }
    return errors;
}
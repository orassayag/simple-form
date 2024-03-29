// Merges 2 classes together if the given condition is true.
export const generateClassName = (condition, originalClassName, newClassName) => {
    let resultClass = originalClassName;
    if (condition) {
        resultClass += ` ${newClassName}`;
    }
    return resultClass;
};
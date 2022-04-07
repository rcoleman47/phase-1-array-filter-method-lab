const findMatching = (array, string) => array.filter(element=>element.toLowerCase().includes(string.toLowerCase()));

function fuzzyMatch(array,string){
    return array.filter(element=>element.substring(0,2).toLowerCase() == string.toLowerCase().substring(0,2));
};

const matchName = (array, string) => array.filter(element=>element.name.toLowerCase().includes(string.toLowerCase()));
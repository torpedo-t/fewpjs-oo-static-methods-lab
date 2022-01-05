class Formatter {
  //add static methods here
  static capitalize(string) {
    let capitalizedString = string.charAt(0).toUpperCase() + string.slice(1)
    return capitalizedString
  }

  static sanitize(string) {
    let sanitizedString = string.replace(/[^A-Za-z0-9-' ]+/g, '');
    return sanitizedString 
  }

  static titleize(string) {
    if (!string) {
      return '';
    }
    let arr = [];
    let excludeWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    arr = string.split(' ');
    return arr.map((word, index) =>
    {
       return excludeWords.includes(word) && index !=0 ? [word] : word.charAt(0).toUpperCase() + word.slice(1);
  
    }).join(' ');
  }
    // let titleizedString = string.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    // return titleizedString
  }


const cap = str => str.charAt(0).toUpperCase() + str.slice(1);
const movieTitleFormatter = (title = '') => {
  const exludeWords = ['of', 'the']
  return cap(
    title.replace(/\b\w+\b/g, m => exludeWords.includes(m) ? m : cap(m))
  );
}
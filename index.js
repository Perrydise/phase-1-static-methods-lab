class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string){
    return string.replace(/[^\w,`' -]|_/g, '');

  }
  static titleize(string){
    return string.toLowerCase().split(" ").map(function(word,index) {
      if(!['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'].includes(word) || index === 0){
      return (word.charAt(0).toUpperCase() + word.slice(1))
      }
      else {
        return word
      }      
    }).join(' ')
  }
}
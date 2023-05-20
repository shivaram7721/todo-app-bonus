export function getUsers() {
    const users = localStorage.getItem("ContactDetails");
    try {
      if (users) {
        return JSON.parse(users);
      }
    } catch (error) {
      return [];
    }
    return [];
  }

  export function setLocalData(data) {
    localStorage.setItem('ContactDetails', JSON.stringify(data));
  }

  // export function isContact(false) {
  //   localStorage.setItem('isContact',JSON.stringify(false))
  // }